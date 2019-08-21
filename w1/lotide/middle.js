var middle = function(array) {
  var m = array.length / 2
  var n = (array.length + 1) / 2
  if (array.length % 2 === 0) {
    return array.slice(m, m + 2 )
  } else if (array.length % 2 !== 0) {
    return array.slice(n-1, n )
  }
}

