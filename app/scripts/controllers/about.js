'use strict';

/**
 * @ngdoc function
 * @name uwasmeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uwasmeApp
 */
angular.module('uwasmeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
