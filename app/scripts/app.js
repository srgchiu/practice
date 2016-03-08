'use strict';

/**
 * @ngdoc overview
 * @name sydneyappApp
 * @description
 * # sydneyappApp
 *
 * Main module of the application.
 */
angular
  .module('sydneyappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: '',
        controllerAs: 'test'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
