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

app.controller('MainController', function($scope) {

})

app.controller('JoinController', function($scope) {
  $scope.name = 'JoinController';
})

app.controller('CommitteeController', function($scope) {
  $scope.name = 'CommitteeController';
})

app.controller('dndController', function($scope) {
  $scope.name = 'dndController'
})

app.controller('navCtrl', function($scope,$location) {
  $scope.getClass = function(page) { if (page == $location.$$url.split('/')[1]) { return "selected" } else return "";}
  $scope.changePage = function(page) { $location.path(page); }
})
