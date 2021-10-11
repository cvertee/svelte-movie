<script>
    export let episodeData = {};
</script>

<main>
    <img src={episodeData.image?.medium} alt={episodeData.name}>
    <div>{episodeData.name}</div>
</main>
