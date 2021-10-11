<script>
    import { onMount } from 'svelte';
    import { getShowEpisodesData } from '../service/showService';
    import ShowEpisodeCard from './ShowEpisodeCard.svelte';

    export let id;
    let episodesData = [{}];

    onMount(async () => {
        episodesData = await getShowEpisodesData(id);
    });
</script>

<main>
    <div class='show-episodes'>
        {#each episodesData as episodeData}
            <ShowEpisodeCard episodeData={episodeData} />
        {/each}
    </div>
</main>