app.controller('PhotoController', function($scope, $routeParams) {

  $scope.name = 'PhotoController';
  $scope.params = $routeParams;
  $scope.photos = []
  $scope.selected = 0

  var extensions = ['jpg','png','gif']

  var loadImage = function(index,extindex) {
    var img = new Image()
    img.onload = function(e) {
      var obj = {
        src: img.src,
        width: img.width,
        height: img.height
      }
      $scope.photos.push(obj)
      loadImage(++index,0)
    }
    img.onerror = function() {
      if (extindex < extensions.length - 1) {
        loadImage(index,++extindex)
      } else {
        console.log(--index+' Images Loaded.')
        $scope.$apply()
      }
    }
    img.src = "image/photoalbum/"+index+"."+extensions[extindex]
  }

  loadImage(1,0)

  $scope.openImage = function(index) {
    $scope.selected = index
    $scope.show_modal = true;
  }

  $scope.closeImage = function() {
    $scope.show_modal = false;
  }

  document.addEventListener('keydown', function(e) {
    if ($scope.show_modal) {
      $scope.show_modal = false;
      $scope.$apply()
    }
  })

})
