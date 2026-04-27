import mqtt from 'mqtt';

const EMQX_WS_URL = import.meta.env.PUBLIC_EMQX_WS_URL;
const EMQX_USERNAME = import.meta.env.PUBLIC_EMQX_USERNAME;
const EMQX_PASSWORD = import.meta.env.PUBLIC_EMQX_PASSWORD;

let client: mqtt.MqttClient | null = null;

export function connectMQTT(onMessage?: (topic: string, message: string) => void) {
	if (client && client.connected) return client;

	if (!EMQX_WS_URL || !EMQX_USERNAME || !EMQX_PASSWORD) {
		throw new Error('MQTT environment variables are not configured');
	}

	client = mqtt.connect(EMQX_WS_URL, {
		clientId: `webapp_${Math.random().toString(16).slice(2, 10)}`,
		username: EMQX_USERNAME,
		password: EMQX_PASSWORD,
		clean: true
	});

	client.on('connect', () => {
		console.log('MQTT connected');
	});

	client.on('message', (topic, payload) => {
		if (onMessage) {
			onMessage(topic, payload.toString());
		}
	});

	client.on('error', (err) => {
		console.error('MQTT error:', err);
	});

	return client;
}

export function publishCommand(mailboxId: string, command: 'open' | 'close') {
	if (!client || !client.connected) {
		connectMQTT();
	}

	const topic = `mailbox/${mailboxId}/command`;
	client?.publish(topic, command, { qos: 1 }, (err) => {
		if (err) {
			console.error('MQTT publish error:', err);
		} else {
			console.log(`Published ${command} to ${topic}`);
		}
	});
}

export function disconnectMQTT() {
	if (client) {
		client.end();
		client = null;
	}
}
