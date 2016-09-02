
app.controller('EventController', function($scope,$routeParams) {
  $scope.name = 'EventController';
  $scope.params = $routeParams;
  $scope.events = [
    {
      date: "xx/xx/xx",
      title: "First Event",
      description: "This is a short description about this event",
      photo: "/image/eventphoto/",
    },
  ]
})
