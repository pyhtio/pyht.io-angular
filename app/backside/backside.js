"use strict";

angular
  .module("myApp.backside", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/backside", {
        templateUrl: "backside/backside.html",
        controller: "backsideCtrl",
      });
    },
  ])

  .controller("backsideCtrl", [function () {}]);
