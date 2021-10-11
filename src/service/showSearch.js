async function findShows(name) {
	let url = `https://api.tvmaze.com/search/shows?q=${name}`
    let res = await fetch(url)
    let json = await res.json()
    return json
}

module.exports = {
    findShows
}