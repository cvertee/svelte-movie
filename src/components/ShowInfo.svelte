<script>
    import { onMount } from 'svelte';

    export let id;
    let name = '';
    let summary = '';
    let posterUrl = '';
    let rating = 0;
    let yearStart = 0;
    let yearEnd = 0;

    onMount(async () => {
        let res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        let data = await res.json();

        name = data.name;
        summary = data.summary;
        posterUrl = data.image.original;
        rating = data.rating.average;

        yearStart = data.premiered?.split('-')[0]
        yearEnd = data.ended?.split('-')[0]

        if (yearEnd === null || yearEnd === undefined)
            yearEnd = '...'
	})
</script>

<main>
    <div class='show-info'>
        <div>
            <img class='show-poster' src={posterUrl} alt={name}>
        </div>
        <div>
            <div class='show-name'>{name}</div>

            <div class='show-air-period'>{yearStart} - {yearEnd}</div>

            {#if summary !== null}
                <div class='show-summary'>{summary}</div>
            {:else}
                <div class='show-summary'>No summary</div>
            {/if}

            {#if rating !== null}
                <div class='show-rating'>Rating: {rating} / 10</div>
            {:else}
                <div class='show-rating'>No rating</div>
            {/if}
        </div>
    </div>
</main>

<style>
    .show-info {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .show-name {
        font-size: 3em;
        margin: 0em 0em 0em 0em;
    }

    .show-air-period {
        font-size: 0.75em;
    }

    .show-rating {
        margin: 2em 0em 0em 0em;
    }

    .show-summary {
        font-size: 1em;
        margin: 1em 0em 0em 0em;
    }

    .show-poster {
        width: 250px;
    }
</style>