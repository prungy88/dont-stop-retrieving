(function(module) {
  //creating an empty aboutController object.
  var aboutController = {};
  //routes the view to the About section
  aboutController.index = function() {
    aboutView.initAboutPage();
    clearArray();
  };
  module.aboutController = aboutController;
})(window);
