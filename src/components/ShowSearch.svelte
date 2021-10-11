<script>
	import { onMount } from 'svelte'
	import { findShows } from '../service/showSearch';
	import ShowSearchCard from './ShowSearchCard.svelte';

    let query = '';
	let isLoaded = false;
	let showsPromise = undefined;

	onMount(async () => {
        await find()
		isLoaded = true;
	})

    async function find() {
        console.log(query)
		showsPromise = findShows(query);
    }
</script>

<main>
    <input bind:value={query} on:change={find} type='text'>

	{#if isLoaded}
        {#await showsPromise}
            <p>Searching shows...</p>
        {:then shows} 
            {#each shows as show}
                <ShowSearchCard showInfo={show.show}/>
            {/each}
        {/await}
	{/if}
</main>