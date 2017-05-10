var resolver = []

window.fbAsyncInit = function() {
  FB.init({
    appId      : "1860851397508648",
    xfbml      : true,
    version    : 'v2.9'
  });
  FB.AppEvents.logPageView();
  for (var i = 0; i < resolver.length; i++) {
    resolver[i]()
  }
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

app.factory('facebook', function($http) {

  var host          = "https://graph.facebook.com/v2.9/"
  var clienttoken   = "2068611b0a4471c0dd13c6fc2b6400ea"
  var group_id      = "2304438276"
  var client_id     = "1860851397508648"
  var access_token = ""

  return {
    auth: function(callback) {
      var ok = false;
      FB.getLoginStatus(function(response) {
        ok = true;
        try {
          access_token = response.authResponse.accessToken
          response.ok = true
          callback(response)
        } catch (e) {
          response.ok = false
          callback(response)
        }
      });
      if (!ok) callback({ok:false})
    },
    getEvents: function() {
      return $http.get(host+"/"+group_id+"/events?access_token="+access_token+"&fields=id,attending_count,cover,description,start_time,interested_count,name,place").then(function(response) {
        return response.data.data
      })
    },
    gistEvents: function(callback) {
      $http.get("https://api.github.com/gists/1667956963220146").then(function(response) {
        callback(JSON.parse(response.data.files["events.json"].content))
      }, function(response) {
        $http.get("https://api.github.com/gists/33b4ea04412ad411e54e23ec676d5258").then(function(response) {
          callback(JSON.parse(response.data.files["events.json"].content).data)
        })
      })
    }
  }
})


app.controller('EventController', function($scope, $rootScope, facebook) {

  var parseEvents = function(events) {
    $scope.events = []
    $scope.pastevents = []
    for (var i = 0; i < events.length; i++) {
      var evt = events[i]
      evt.start_time = new Date(evt.start_time)
      var now = new Date(Date.now())
      if (evt.start_time.getTime() - now.getTime() < -100000) {
        $scope.pastevents.push(evt)
      } else {
        $scope.events.push(evt)
      }
    }
    $scope.facebook_loaded = true;
    $scope.view_past = false;
  }

  $rootScope.$watch('$routeChangeSuccess',function(){
    try {
      $scope.getEvents()
    } catch (e) {
      resolver.push($scope.getEvents)
    }
  })

  $scope.facebook_loaded = false;
  $scope.view_past = false;

  $scope.togglepast = function() {
    var cache = $scope.events
    $scope.events = $scope.pastevents
    $scope.pastevents = cache
    $scope.view_past = !$scope.view_past
  }

  $scope.getEvents = function() {
    facebook.auth(function(response) {
      if (response.ok) { facebook.getEvents().then(parseEvents) } else { facebook.gistEvents(parseEvents) }
    })
  }

  $scope.name = 'EventController';

  $scope.events = [
    {
      date: "11/05/2017",
      title: "Alien Covenant",
      description: "The crew of a colony ship, bound for a remote planet, discover an uncharted paradise with a threat beyond their imagination, and must attempt a harrowing escape.",
      photo: "image/eventphoto/aliencov.png",
      url: "https://www.facebook.com/events/1898738480396049/",
      time: "8:00pm",
      location: "The Odeon (Printworks)",
    },
    {
      date: "15/05/2017",
      title: "Warped Committee Elections 2017-2018",
      description: "Democracy time!",
      photo: "image/eventphoto/votebatman.jpg",
      url: "https://www.facebook.com/events/804094523071243",
      time: "7:00pm",
      location: "Sandbar (M1 7HL)",
    },
    {
      date: "06/06/2017",
      title: "Mid-term Pub Crawl",
      description: "Northern Quarter Bar Crawl taking advantage of all the best happy hours available on the legendary NQ Tuesday night.",
      photo: "image/eventphoto/barcrawl.jpg",
      url: "https://www.facebook.com/events/1667956963220146/",
      time: "6:00pm",
      location: "The Whiskey Jar",
    },
  ];
  $scope.pastevents = [
    {
      date: "01/05/2017",
      title: "Warped D&D Night",
      description: "Warped is going to try and host a D&D night... yeah it'll be terrible/awesome. Join our discord group for the lowdown (link on facebook or bottom of website)",
      photo: "image/eventphoto/d&d.png",
      url: "#/dnd",
      time: "1:00pm",
      location: "(contact a committee member for details)",
    },
    {
      date: "27/03/2017",
      title: "Monthly Quiz Night #3",
      description: "Our monthly quiz night, take 3.",
      photo: "image/eventphoto/quiz3.jpg",
      url: "https://www.facebook.com/events/640804472780117",
      time: "7:00pm",
      location: "Sandbar (M1 7HL)",
    },
    {
      date: "08/03/2017",
      title: "Logan",
      description: "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
      photo: "image/eventphoto/logan.jpg",
      url: "https://www.facebook.com/events/185844878570673/",
      time: "19:00pm",
      location: "The AMC (M4 4EN)",
    },
    {
      date: "05/02/2017",
      title: "Lego Batman",
      description: "NANANANANANANANA NANANANANANANANA",
      photo: "image/eventphoto/legobatman.jpg",
      url: "https://www.facebook.com/events/1446351932076194/",
      time: "14:00pm",
      location: "The AMC (M4 4EN)",
    },
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
