myApp.factory('phoneNumberQueries', ['$http', 'phoneWords', function($http, phoneWords){
  var o = {
    phoneNumberQueries: [],
    phoneWordsResponse: []
  };

  o.getAll = function() {
    return $http.get('/phone_number_queries.json').success(function(data){
      angular.copy(data, o.phoneNumberQueries);
    });
  };

  o.create = function(phoneNumberQuery, phoneWords) {
    return $http.post('/phone_number_queries.json', phoneNumberQuery).success(function(data){
        phoneWords.phoneWordsStr = data;
        console.log(phoneWords.phoneWordsStr);
        phoneWords.split();
        angular.copy(phoneWords.phoneWordsArr, o.phoneWordsResponse);
      });
  };

  return o;
}]);
