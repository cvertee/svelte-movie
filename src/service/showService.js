async function getShowData(id) {
    let res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    let data = await res.json();

    return data
}

async function getShowEpisodesData(id) {
    let res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    let data = await res.json();

    console.log(data)

    return data
}

module.exports = {
    getShowData,
    getShowEpisodesData
}