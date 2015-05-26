myApp.factory('phoneWords', [function(){
  var o = {
    phoneWordsStr: "",
    phoneWordsArr: []
  };

  o.split = function(){
    if (!o.phoneWordsStr || o.phoneWordsStr === ""){
      return "";
    }
    else{
      var jsonObj = eval('[' + o.phoneWordsStr.items + ']');
      o.phoneWordsArr = jsonObj;
      for (a in o.phoneWordsArr){
        o.phoneWordsArr[a] = o.phoneWordsArr[a].slice(1);
      }
    }
  }

  return o;
}]);
