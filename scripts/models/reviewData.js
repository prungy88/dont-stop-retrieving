(function(module){
<<<<<<< HEAD:scripts/models/reviewsData.js
  var reviewData = {};
=======

  function Review(opts) {
    for (key in opts) this[key] = opts[key];
  }

  Review.all = [];
>>>>>>> 46e81d81c2cd9c22f4af2891980de376c6ff2031:scripts/models/reviewData.js

  var config = {
  apiKey: "AIzaSyCX1RjIqsSO49bC-FYz_RhK5AykS0BfdgA",
  authDomain: "dog-park-reviews.firebaseapp.com",
  databaseURL: "https://dog-park-reviews.firebaseio.com",
  storageBucket: "dog-park-reviews.appspot.com",
  };

  var app = firebase.initializeApp(config);
  var database = app.database();
  var databaseRef = database.ref().child('reviews');

  Review.getReviews = function() {
    databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      Review.all.push(new Review(childData));
    });
 });
  };

  Review.submitReview = function(review) {
    databaseRef.push().set(review);
  };

  module.Review = Review;
})(window);