// array utils?
// nah.
// array service sounds more """businessy"""
// based codebase

function generateArrayFromOneToInc(to) {
    return [...Array(to + 1).keys()].slice(1);
}

module.exports = {
    generateArrayFromOneToInc
}