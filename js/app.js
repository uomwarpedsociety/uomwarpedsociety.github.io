var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'page/about.html'
    })
    .when('/about', {
      controller: 'MainController',
      templateUrl: 'page/about.html'
    })
    .when('/pictures', {
      controller: 'PhotoController',
      templateUrl: 'page/pictures.html'
    })
    .when('/join', {
      controller: 'JoinController',
      templateUrl: 'page/join.html'
    })
    .when('/events', {
      controller: 'EventController',
      templateUrl: 'page/events.html'
    })
    .when('/committee', {
      controller: 'CommitteeController',
      templateUrl: 'page/committee.html'
    })
});

app.controller('MainController', function($scope,$route,$routeParams,$location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})

app.controller('PhotoController', function($scope,$routeParams) {
  $scope.name = 'PhotoController';
  $scope.params = $routeParams;
})

app.controller('JoinController', function($scope,$routeParams) {
  $scope.name = 'JoinController';
  $scope.params = $routeParams;
})

app.controller('EventController', function($scope,$routeParams) {
  $scope.name = 'EventController';
  $scope.params = $routeParams;
})

app.controller('CommitteeController', function($scope,$routeParams) {
  $scope.name = 'CommitteeController';
  $scope.params = $routeParams;
})
