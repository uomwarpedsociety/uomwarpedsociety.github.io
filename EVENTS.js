var resolver = {
  promises: [],
  resolve: function() {
    for (var i = 0; i < promises.length; i++) {promises[i]()}
  },
  defer: function(_func) {
    resolver.promises.push(_func)
  }
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : "1860851397508648",
    xfbml      : true,
    version    : 'v2.9'
  });
  FB.AppEvents.logPageView();
  resolver.resolve()
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

app.factory('facebook', function($http) {

  var access_token = ""

  var fblogin = function(callback) {
    FB.login(function(response) {
      try {
        access_token = response.authResponse.accessToken
        response.ok = true
        callback(response)
      } catch (e) {
        console.log(e)
        response.ok = false
        callback(response)
      }
    })
  }

  return {
    auth: function(callback) {
      if (typeof)
      FB.getLoginStatus(function(response) {
        try {
          access_token = response.authResponse.accessToken
          response.ok = true
          callback(response)
        } catch (e) {
          console.log(e)
          fblogin(callback)
        }
      },function(response) {
        console.log(response)
        fblogin(callback)
      });
    },
    getEvents: function() {
      return $http.get("https://graph.facebook.com/v2.9//2304438276/events?access_token="+access_token+"&fields=id,attending_count,cover,description,start_time,interested_count,name,place").then(function(response) {
        return response.data.data
      })
    },
    gistEvents: function() {
      return $http.get("https://api.github.com/gists/d6096725a50ea26916a63d45c04140bf").then(function(response) {
        return JSON.parse(response.data.files["events.json"].content)
      })
    }
  }
})


app.controller('EventController', function($scope, $rootScope, facebook) {

  $scope.facebook_loaded = false;
  $scope.view_past = false;

  var getEvents = function() {
    if (typeof FB == 'undefined') {
      resolver.defer(getEvents)
      return;
    }
    facebook.auth(function(response) {
      if (response.ok)  { facebook.getEvents().then(parseEvents) }
      else              { facebook.gistEvents().then(parseEvents) }
    })
  }

  $rootScope.$watch('$routeChangeSuccess', getEvents)

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

  $scope.getLoc = function(location) {
    if (typeof location == 'undefined')         return "Map Link";
    if (typeof location.zip != 'undefined')     return location.zip;
    if (typeof location.street != 'undefined')  return location.street;
    return "Map Link"
  }

  $scope.events = []
  $scope.pastevents = []

})
