exports.min = min = (array) => (!array ||array.length === 0) ? 0 : Math.min(...array)
exports.max = max = (array) => (!array ||array.length === 0) ? 0 : Math.max(...array)
exports.avg = avg = (array) => (!array ||array.length === 0) ? 0 : array.reduce((a,b)=>a+b,0)/array.length