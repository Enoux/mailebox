<script>
    import x from '$lib/assets/icons/x.svg';

    let { modal_content, active = $bindable() } = $props();
</script>

<div id="otp_modal" class="bg-black/50 z-100 w-screen h-screen absolute top-0 left-0 flex">
    <div class="flex flex-col w-1/2 bg-mlb-white rounded-xl m-auto p-4">
        <!-- Close Button -->
        <button class="ml-auto" onclick={() => active = false}>
            <img src={x} alt="Close Modal" >
        </button>

        <div class="w-full m-2">
            {@render modal_content()}
        </div>
    </div>
</div>