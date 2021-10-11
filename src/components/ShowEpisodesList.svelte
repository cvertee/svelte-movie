<script>
    import { onMount } from 'svelte';
    import { getNumberOfSeasons, getShowEpisodesData } from '../service/showService';
    import ShowEpisodeCard from './ShowEpisodeCard.svelte';

    export let id;
    
    let episodesData = [{}];
    let displayedEpisodesData = [{}];

    let seasons = [];
    let selectedSeason = 1;

    onMount(async () => {
        episodesData = await getShowEpisodesData(id);
        displayedEpisodesData = episodesData;

        let numberOfSeasons = getNumberOfSeasons(episodesData);
        seasons = [...Array(numberOfSeasons + 1).keys()].slice(1);

        if (numberOfSeasons !== undefined || numberOfSeasons !== null) {
            filterBySeason(selectedSeason)
        }
    });
    
    function filterBySeason() {
        console.log('...!!!!!!!' + selectedSeason)
        displayedEpisodesData = episodesData.filter((ep) => ep.season == selectedSeason)
    }
</script>

<main>
    <div class='episodes-header'>
        <h2>Episodes</h2>
        <select class='select-season' bind:value={selectedSeason} on:change={filterBySeason}>
            {#each seasons as season}
                <option value={season}>
                    Season {season}
                </option>
            {/each}
        </select>
    </div>
    <div class='show-episodes'>
        {#each displayedEpisodesData as episodeData}
            <ShowEpisodeCard episodeData={episodeData} />
        {/each}
    </div>
</main>

<style>
    .episodes-header {
        display: flex;
    }
    .show-episodes {
        display: flex;
    }
</style>