app.controller('EventController', function($scope,$routeParams) {
  $scope.name = 'EventController';
  $scope.params = $routeParams;
  $scope.events = [
    {
      date: "26/09/2016",
      title: "Quiz Night and Welcome Event",
      description: "Our first event of the year! This will be a pub quiz night followed by general meet and greet with everyone to get to know all of you lovely folks! Where: Sandbar,",
      photo: "/image/eventphoto/quiz1.jpg",
      facebooklink: "",
    },
    {
      date: "28/09/2016",
      title: "Miss Peregrine's Home for Peculiar Children",
      description: "When Jacob discovers clues to a mystery that spans different worlds and times, he finds Miss Peregrine's Home for Peculiar Children. But the mystery and danger deepen as he gets to know the residents and learns about their special powers. Our first Cinema trip of the year. Where: The AMC Manchester",
      photo: "/image/eventphoto/quiz1.jpg",
      facebooklink: "",
    },
  ]
})
