<script lang="ts">
    import { goto } from "$app/navigation";
    import { menuPaths, type MenuPath } from "$lib/constants/menu";

    let pathStringShadow: string = "";
    let pathString: string = "";

    let suggestions: Array<MenuPath> = [];

    const navigate = (path: string) => {
        // let newPath = menuPaths.find(block => block.name.includes(path))
        // if (newPath) {
        //     goto(newPath.location)
        // };
        // clearSuggestions();
        // clearInput();
        console.log(path);
        goto(path);
    };

    const clearInput = () => {
        pathString = "";
    };
    const clearSuggestions = () => {
        suggestions = [];
    };

    const populateSuggestions = (path: string) => {
        let suggestionsCache: MenuPath[] = [];
        menuPaths.map((menuPathBlock) => {
            if (menuPathBlock.name.includes(pathString)) {
                suggestionsCache = suggestionsCache.concat(menuPathBlock);
            }
        });
        suggestions = suggestionsCache;
        pathStringShadow = suggestionsCache[0].location;
        console.log(pathStringShadow);
    };
</script>

{#if suggestions.length > 0}
    <div id="rollup">
        {#each suggestions as suggestion}
            <div class="suggestion">
                <button
                    on:click={() => {
                        navigate(suggestion.location);
                    }}
                >
                    {suggestion.name}
                </button>
            </div>
        {/each}
    </div>
{/if}

<form id="presibar">
    <input
        bind:value={pathString}
        on:input={(event) => {
            if (pathString) {
                populateSuggestions(pathString);
            }
            // else {
            //     clearSuggestions();
            // }
        }}
    />
    <button
        type="submit"
        on:click={() => {
            console.log(pathStringShadow);
            navigate(pathStringShadow);
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

    #rollup {
        display: flex;
        flex-direction: column;
        width: 100%;

        button {
            width: 100%;
            text-align: left;
            border: none;
            background-color: white;
        }
    }

    .suggestion {
        border: thin solid grey;
        width: 100%;
        background-color: white;
    }
</style>
