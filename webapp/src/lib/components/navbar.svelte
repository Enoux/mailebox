<script>
    import dashboard from '$lib/assets/icons/dashboard_dark.svg';
    import list from '$lib/assets/icons/list_dark.svg';
	import logo from '$lib/assets/mlb_logo.png';
    import locker from '$lib/assets/icons/locker_dark.svg';
    import menu from '$lib/assets/icons/menu.svg';

    // import { page } from '$app/state';

    // let currentPage = $state(page.url.pathname);

    let menus = $state([
        {label: 'Dashboard', icon: dashboard, icon_alt: 'Admin Dashboard', url: 'dashboard'},
        {label: 'Logs', icon: list, icon_alt: 'Admin Logs', url: 'logs'},
        {label: 'Mailboxes', icon: locker, icon_alt: 'Locker', url: 'mailboxes'},
    ]);

    let { active = $bindable() } = $props();

    function toggleNavBar() {
        active = !active;
    }

</script>

<div class="bg-mlb-white flex flex-col w-1/5 h-screen duration-300 {active ? 'block' : 'hidden'}">
    <div class="w-full mt-12 mb-8">
        <img src={logo} alt="Mailebox Logo" class="flex max-w-40 m-auto" />
    </div>

    {#each menus as menu (menu.label)}
        <div class="w-full my-1">
            <button class="flex w-3/4 place-content-center m-auto items-center rounded-full px-8 py-2 hover:bg-mlb-orange/25">
                <div class="flex w-1/4 mr-2">
                    <img src={menu.icon} alt={menu.icon_alt} class="max-w-8" />
                </div>
                <a href="/admin/{menu.url}" class="w-3/4 text-mlb-black text-l text-left align-middle font-bold">{menu.label}</a>
            </button>
        </div>
    {/each}
</div>

<!-- Collapse Button -->
<button class="p-2 rounded-full z-100 absolute bottom-5 {active ? 'left-85' : 'left-5'} bg-mlb-orange/90 shadow-md hover:brightness-90" onclick={toggleNavBar}>
    <img src={menu} alt="Collapse or Open Navbar" class="max-w-7">
</button>
