<script lang="ts">
    import Menu from "$lib/components/menu.svelte";
    import "../../src/appStyle.scss";
</script>

<div id="content">
    <div id="main">
        <slot />
    </div>
    <Menu></Menu>
</div>

<style lang="scss">
    #content {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    #main {
        display: flex;
        flex-direction: column;
        flex-grow: 100;
    }
</style>
