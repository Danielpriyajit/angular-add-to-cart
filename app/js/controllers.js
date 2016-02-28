/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

// Phone List Controller
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';

    // Add to cart
    $scope.addToCart = function (item) {
      $rootScope.$broadcast('addToCartEvent', item);
    };
  }]);

// Phone Detail Controller
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', '$rootScope',
  function($scope, $routeParams, $http, $rootScope) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
      $scope.selectedImage = data.images[0];
    });

    // Image selector
    $scope.selectImage = function(image){
      $scope.selectedImage = image;
    }

    // Add to cart
    $scope.addToCart = function (item) {
      $rootScope.$broadcast('addToCartEvent', item);
    };
  }]);

// Header Controller
phonecatControllers.controller('HeaderCtrl', ['$scope', '$http','$rootScope',
  function($scope, $rootScope, $http) {
    $scope.cartItems = [];

    $scope.$on('addToCartEvent', function (event, item) {
      $scope.cartItems.push(item);
    });
  }]);