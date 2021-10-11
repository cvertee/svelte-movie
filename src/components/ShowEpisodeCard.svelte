<script>
    import EpisodeNumberLabel from './EpisodeNumberLabel.svelte';

    export let episodeData = {};
</script>

<main>
    <div class='episode-card'>
        <div class='episode-card-container'>
            <EpisodeNumberLabel episodeData={episodeData}/>
            <img src={episodeData.image ? episodeData.image.medium : '/images/placeholder.jpg'} alt={episodeData.name}>
            <div class='episode-name'>{episodeData.name}</div>
        </div>
    </div>
</main>

<style>
    .episode-card {
        width: 25em;
        margin: 1.5em 0em;
    }

    .episode-card img {
        width: 100%;
    }

    .episode-card-container {
        position: relative;
    }

    .episode-name {
        position: absolute;
        bottom: 0px;
        background-color: gray;
        color: white;
        width: 100%;
    }

    .episode-label {
        position: absolute;
        top: 0px;
    }

</style>