"use strict";

angular
  .module("myApp.frontside", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/frontside", {
        templateUrl: "frontside/frontside.html",
        controller: "frontsideCtrl",
      });
    },
  ])

  .controller("frontsideCtrl", [function () {}]);
