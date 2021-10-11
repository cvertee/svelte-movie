async function getShowData(id) {
    let res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    let data = await res.json();

    return data
}

module.exports = {
    getShowData
}