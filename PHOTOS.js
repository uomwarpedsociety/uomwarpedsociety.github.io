app.controller('PhotoController', function($scope, $routeParams) {
  $scope.name = 'PhotoController';
  $scope.params = $routeParams;
  $scope.photos = [
    {
      location: "",
      url: "/image/photos/",
      comment: "comment",
      date: "xx/xx/xx",
    },
  ]
})
