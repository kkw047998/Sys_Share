const messaging = firebase.messaging();
 messaging
   .requestPermission()
   .then(function () {
     console.log("Notification permission granted.");

     // get the token in the form of promise
     return messaging.getToken()
   })
   .then(function(token) {
     // print the token on the HTML page
     console.log("Device token is : " + token);
   })
   .catch(function (err) {
    console.log("Unable to get permission to notify.", err);
 });