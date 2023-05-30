"use strict";

describe("myApp.frontside module", function () {
  beforeEach(module("myApp.frontside"));

  describe("frontside controller", function () {
    it("should ....", inject(function ($controller) {
      //spec body
      var frontsideCtrl = $controller("frontsideCtrl");
      expect(frontsideCtrl).toBeDefined();
    }));
  });
});
