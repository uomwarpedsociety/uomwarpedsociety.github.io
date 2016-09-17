app.controller('EventController', function($scope,$routeParams) {
  $scope.name = 'EventController';
  $scope.params = $routeParams;
  $scope.events = [
    {
      date: "26/09/2016",
      title: "Quiz Night and Welcome Event",
      description: "Our first event of the year! This will be a pub quiz night followed by general meet and greet with everyone to get to know all of you lovely folks! /br",
      photo: "/image/eventphoto/quiz1.jpg",
    },
    {
      date: "28/09/2016",
      title: "Miss Peregrine's Home for Peculiar Children",
      description: "This is a short description about this event",
      photo: "/image/eventphoto/quiz1.jpg",
    },
  ]
})
