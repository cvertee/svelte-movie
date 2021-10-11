<script>
    export let episodeData;
</script>

<main>
    {#if episodeData.season !== null}
        <div class='episode-label'>
            S{episodeData.season}{episodeData.number ? `E${episodeData.number}` : ``}
        </div>
    {/if}
</main>

<style>
    .episode-label {
        position: absolute;
        top: 0px;
        background-color: rgba(94, 94, 94, 0.75);
        color: white;
        padding: 10px 10px;
    }
</style>