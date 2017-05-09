var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/about', {
      controller: 'MainController',
      templateUrl: 'page/about.html',
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
    .when('/pastevents', {
      controller: 'EventController',
      templateUrl: 'page/pastevents.html'
    })
    .when('/committee', {
      controller: 'CommitteeController',
      templateUrl: 'page/committee.html'
    })
    .when('/dnd', {
      controller: 'dndController',
      templateUrl: 'page/dnd.html'
    })
    .otherwise('/about')
});

app.controller('MainController', function($scope,$route,$routeParams,$location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})

app.controller('JoinController', function($scope,$routeParams) {
  $scope.name = 'JoinController';
  $scope.params = $routeParams;
})

app.controller('CommitteeController', function($scope,$routeParams) {
  $scope.name = 'CommitteeController';
  $scope.params = $routeParams;
})

app.controller('dndController', function($scope,$routeParams,$params) {
  $scope.name = 'dndController'
})

app.controller('navCtrl', function($scope,$location) {
  $scope.getClass = function(page) { if (page == $location.$$url.split('/')[1]) { return "selected" } else return "";}
  $scope.changePage = function(page) { $location.path(page); }
})
