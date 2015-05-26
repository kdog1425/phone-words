myApp.controller('MainCtrl', [
'$scope',
'phoneNumberQueries',
'phoneWords',
function($scope, phoneNumberQueries, phoneWords){
  $scope.phoneNumberQueries = phoneNumberQueries.phoneNumberQueries;
  $scope.phoneWordsResponse = phoneNumberQueries.phoneWordsResponse;
  
  $scope.addPhoneNumberQuery = function(){
    if(!$scope.phonenumber || $scope.phonenumber === '') { return; }
    phoneNumberQueries.create({
      phonenumber: $scope.phonenumber
    }, phoneWords);
    $scope.phonenumber = '';
  };
    
}]);