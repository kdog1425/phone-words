var myApp = angular.module('phoneWordsApp', ['ui.router', 'templates']);

myApp.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      // resolve: {
      //       phoneNumberQueryPromise: ['phoneNumberQueries', function(phoneNumberQueries){
      //       return phoneNumberQueries.getAll();
      //     }]
      // },
      controller: 'MainCtrl'
    });
    // .state('phoneNumberQueries', {
    //   url: '/phone_number_queries/{id}',
    //   templateUrl: 'phone_number_queries/_phoneNumberQueries.html',
    //   controller: 'PhoneNumberQueriesCtrl'
    // });

  $urlRouterProvider.otherwise('home');
}]);














