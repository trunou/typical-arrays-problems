
exports.min = function min (array) {
  if(typeof array != "undefined" && array != null && array.length != null && array.length > 0){
    var arr = [];
    for(var i = 0; i < array.length; i++){
      if(typeof array[i] === 'number'){
        arr.push(array[i]);
      }
    }
    var m = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < m){
          m = arr[i];
        }
      }
      return m;
  }else{
    return 0;   
  
}
}

exports.max = function max (array) {
  if(typeof array != "undefined" && array != null && array.length != null && array.length > 0){
    var arr = [];
    for(var i = 0; i < array.length; i++){
      if(typeof array[i] === 'number'){
        arr.push(array[i]);
      }
    }
    var m = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > m){
          m = arr[i];
        }
      }
      return m;
  }else{
    return 0;   
  
}
}

exports.avg = function min (array) {
  if(typeof array != "undefined" && array != null && array.length != null && array.length > 0){
    var arr = [];
    for(var i = 0; i < array.length; i++){
      if(typeof array[i] === 'number'){
        arr.push(array[i]);
      }
    }
    var sumnum = 0;
    for(var i = 0; i < arr.length; i++){
      sumnum += arr[i];
      }
      return sumnum / arr.length;
  }else{
    return 0;   
  
}
};