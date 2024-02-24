<script>
    import Presibar from "$lib/components/presibar.svelte";
    import "../../src/appStyle.scss"
</script>

<div id="content">
    <div id="main">
        <slot />
    </div>
    <div id="presibar">
        <Presibar></Presibar>
    </div>
</div>

<style lang="scss">
    #content {
        display: flex;
        flex-direction: column;
        height: 100vh;
        // grid-template-areas:
        //     "main"
        //     "bottom";
    }

    #main {
        display: flex;
        flex-direction: column;
        flex-grow: 100;
    }
</style>
