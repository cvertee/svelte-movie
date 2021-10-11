<script>
    import { Link } from 'svelte-routing';
    import { SEARCH_SUMMARY_MAX_LENGTH } from "../configs/showSearchConfig";
    export let showInfo

    let id = showInfo.id
    let name = showInfo.name
    let summary = showInfo.summary
    let imageUrl = showInfo.image?.medium

    if (summary !== null && summary.length > SEARCH_SUMMARY_MAX_LENGTH )
        summary = summary.slice(0, SEARCH_SUMMARY_MAX_LENGTH) + '...'
</script>

<main>
    <div class='show-search-card'>
        <div>
            <img class='show-search-image' src={imageUrl} alt={name}>
        </div>
        <div class='show-search-info'>
            <Link to={`/show/${id}`}>{name}</Link>
            <p>{summary}</p>
        </div>
    </div>
</main>

<style>
    .show-search-card {
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin: 30px 0px;
    }

    .show-search-image {
        width: 120px;
    }
    
    .show-search-info {
        text-align: left;
    }
</style>