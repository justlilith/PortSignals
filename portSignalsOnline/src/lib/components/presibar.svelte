<script lang="ts">
    import { goto } from "$app/navigation";
    import { menuPaths } from "$lib/constants/menu";

    let pathSearch: string = "";

    const navigate = (path: string) => {
        const newPath = menuPaths.get(path);
        if (newPath) {
            goto(newPath);
        }
    };
</script>

<form
    id="presibar"
    on:submit={() => {
        navigate(pathSearch);
    }}
>
    <input bind:value={pathSearch} />
    <button
        type="submit"
        on:click={() => {
            navigate(pathSearch);
        }}>Go</button
    >
</form>

<style lang="scss">
    #presibar {
        background-color: black;
        display: flex;
        flex-direction: row;
        padding: 1em;
    }

    button {
        padding-left: 2em;
        padding-right: 2em;
    }
    button,
    input {
        margin: 0.5em;
        padding: 0.5em;
        font-size: 1.25em;
    }
    input {
        flex-grow: 100;
    }
</style>
