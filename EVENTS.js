app.controller('EventController', function($scope,$routeParams) {
  $scope.name = 'EventController';
  $scope.params = $routeParams;
  $scope.events = [
  ];
  $scope.pastevents = [
    {
      date: "16/12/2016",
      title: "Christmas Party",
      description: "CHRISTMAS PARTY & SECRET SANTA, get in touch with me if you want to be involved!",
      photo: "image/eventphoto/christmas.jpg",
      url: "https://www.facebook.com/events/990228347749694/",
      time: "7:30pm",
      location: " TBA ",
    },
    {
      date: "15/12/2016",
      title: "Rogue One (midnight)",
      description: "The latest in the star wars franchise! (midnight showing)",
      photo: "image/eventphoto/rogueone.jpg",
      url: "https://www.facebook.com/events/1645162055778181/",
      time: "00:01am",
      location: "The AMC (M4 4EN)",
    },
    {
      date: "28/11/2016",
      title: "Monthly Quiz Night #2",
      description: "Our monthly quiz night, take 2.",
      photo: "image/eventphoto/quiz2.jpg",
      url: "https://www.facebook.com/events/356525461369180/",
      time: "7:30pm",
      location: "Sandbar (M1 7HL)",
    },
    {
      date: "18/11/2016",
      title: "Fantastic Beasts and where to find them.",
      description: "A linguist is recruited by the military to assist in translating alien communications.",
      photo: "image/eventphoto/fantasticbeasts.jpg",
      url: "https://www.facebook.com/events/101914370287763/",
      time: "00:01am",
      location: "The AMC (M4 4EN)",
    },
    {
      date: "14/11/2016",
      title: "Games and Comics Night",
      description: "This monday we will be dusting off ye olde board games and comics and having a get together for some good old fashioned fun.",
      photo: "image/eventphoto/boardgames.jpg",
      url: "https://www.facebook.com/events/310498939308966/",
      time: "7:30pm",
      location: "Turing Tap (M13 9WG)",
    },
    {
      date: "11/11/2016",
      title: "Arrival",
      description: "A linguist is recruited by the military to assist in translating alien communications.",
      photo: "image/eventphoto/arrival2016.jpg",
      url: "https://www.facebook.com/events/1409456315762399/",
      time: "8:25pm",
      location: "The AMC (M4 4EN)",
    },
    {
      date: "25/10/2016",
      title: "Dr. Strange",
      description: "Warped does: Dr. Strange! Afterwards we'll of course be going black dog as per usual.",
      photo: "image/eventphoto/drstrange.jpg",
      url: "https://www.facebook.com/events/356919091365982/",
      time: "8:30pm",
      location: "The AMC (M4 4EN)",
    },
    {
      date: "24/10/2016",
      title: "Monthly Quiz Night #1",
      description: "Our monthly quiz night, take 1.",
      photo: "image/eventphoto/quiz1.jpg",
      url: "https://www.facebook.com/events/1210113412394744/",
      time: "7:30pm",
      location: "Pub/Zoo (M1 7HL)",
    },
    {
      date: "21/10/2016",
      title: "Mid-term Pub Crawl",
      description: "Pub Crawl, fancy dress encouraged but not compulsary",
      photo: "image/eventphoto/barcrawl.jpg",
      url: "https://www.facebook.com/events/613429592199076/",
      time: "7pm",
      location: "Big Hands -> Sandbar -> Old Monkey -> TV21 -> Fab Cafe -> Black Dog",
    },
    {
      date: "10/10/2016",
      title: "Curry Night",
      description: "As is typical warped tradition we will be taking our annual trip down the curry mile. Details will follow once we find a venue!",
      photo: "image/eventphoto/currynight.jpg",
      url: "https://www.facebook.com/events/195716250859724/",
      time: "7:30pm",
      location: "MyLahore",
    },
    {
      date: "02/10/2016",
      title: "Miss Peregrine's Home for Peculiar Children",
      description: "When Jacob discovers clues to a mystery that spans different worlds and times, he finds Miss Peregrine's Home for Peculiar Children. But the mystery and danger deepen as he gets to know the residents and learns about their special powers. Our first Cinema trip of the year.",
      photo: "image/eventphoto/peculiar.jpg",
      url: "https://www.facebook.com/events/225160511220111/",
      time: "2:30pm",
      location: "The AMC (M4 4EN)",
    },
    {
      date: "26/09/2016",
      title: "Quiz Night and Welcome Event",
      description: "Our first event of the year! This will be a pub quiz night followed by general meet and greet with everyone to get to know all of you lovely folks!",
      photo: "image/eventphoto/quizavengers.jpg",
      url: "https://www.facebook.com/events/178364632600307/",
      time: "7:30pm",
      location: "Sandbar (M1 7HL)",
    },
    {
      date: "21/09/2016",
      title: "Jeff Wayne's Musical War of the Worlds ft. RockSoc",
      description: "Very short notice I'm afraid!! We didn't get venue confirmation until earlier today. But for those that can make it we're doing war of the world's tonight!",
      photo: "image/eventphoto/jeffwar.png",
      url: "https://www.facebook.com/events/1689315374722047/",
      time: "7:30pm",
      location: "Sandbar (M1 7HL)",
    },
    {
      date: "16/07/2016",
      title: "Warped's 30th Anniversary Reunion Party",
      description: "The monumentous 30th Anniversary of Warped is here!",
      photo: "image/eventphoto/30th.jpg",
      url: "https://www.facebook.com/events/222770851410698/",
      time: "7:00pm",
      location: "Sandbar (M1 7HL)",
    },
    {
      date: "29/04/2016",
      title: "Warped: Civil War Midnight Premier",
      description: "Midnight screening of Civil War!",
      photo: "image/eventphoto/civilwar.jpg",
      url: "https://www.facebook.com/events/1124120114288430/",
      time: "00:01am",
      location: "The AMC (M4 4EN)",
    },
    {
      date: "10/02/2016",
      title: "Warped does Deadpool",
      description: "This Wednesday, join us at the AMC for a heartwarming tale of how one man who has lost everything, takes a chance on a miracle surgery to save himself and his relationship with his one true love.",
      photo: "image/eventphoto/deadpool.jpg",
      url: "https://www.facebook.com/events/977889388925188/",
      time: "7:30pm",
      location: "The AMC (M4 4EN)",
    },
  ];
})
