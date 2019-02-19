module.exports = function warmup(celsTemp) {
    var scale = 1.8
    var shift = 32
    var fahrTemp = celsTemp*scale+shift
    return fahrTemp
};