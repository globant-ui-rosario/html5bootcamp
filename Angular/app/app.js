(function(angular) {
  'use strict';
angular.module('app', ['ngComponentRouter', 'movies','ngStorage'])
.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
    templateUrl:'movieTitles.html' ,
    $routeConfig: [
      {path: '/',    name: 'MovieList',   component: 'movieList', useAsDefault: true},
      {path: '/:id', name: 'MovieDetail', component: 'movieDetail'}
    ]
  })

.controller('Ctrl', function(
    $scope,
    $localStorage,
    $sessionStorage
){});
// The Storage is loaded but not yet used

})(window.angular);