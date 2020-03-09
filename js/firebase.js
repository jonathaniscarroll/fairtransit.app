var firebaseConfig = {
	apiKey: "AIzaSyC7NxVx5YYed5gzxdfAL3wTOHa9PpXwdPk",
	authDomain: "fair-transit.firebaseapp.com",
	databaseURL: "https://fair-transit.firebaseio.com",
	projectId: "fair-transit",
	storageBucket: "fair-transit.appspot.com",
	messagingSenderId: "538543055783",
	appId: "1:538543055783:web:8bbee58dc0a1b760af4c82",
	measurementId: "G-ZGNKQ70HBQ"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();

  function createReport(route,location,time){
  	var report = {
  		route : route,
  		location : location,
  		time : time
  	};
  	console.log(report);
  	var update = database.ref().push();
  	update.set(report);
    database.ref().on('value', function(snapshot) {
      snapshot.forEach(function(childNodes){
        console.log(childNodes.val());
         $("#content").html(childNodes.val());
      })
     
    });
  }

 $(document).ready(function(){
  	var recentPostsRef = firebase.database().ref();
  	// $(recentPostsRef).each(function(i){
  	// 	$("#content").html(i.val());
  	// });


  	$("div").click(function(){
  		createReport("501","Some Place","12:00");
  	});
});
