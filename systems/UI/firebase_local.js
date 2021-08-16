function unloader(){
    return "Data will be lost on reload.";
  }
  /*
  $(window).bind('focus', function() {
     location.reload();
  });*/
  //FCM
  var loc = window.location.href+'';
  /*
  if (loc.indexOf('http://')==0){
      window.location.href = loc.replace('http://','https://');
  }*/
  function store_token(data){
      $.ajax({
          type:"POST",
          data:{token:data},
          url:"src/FCM/store_token.php",
      })
      }
  // [END refresh_token]
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyC2nFzAQIHE2tiX0CZIgA-Y0b26sNkfqPY",
      authDomain: "callplatform-96942.firebaseapp.com",
      databaseURL: "https://callplatform-96942.firebaseio.com",
      projectId: "callplatform-96942",
      storageBucket: "",
      messagingSenderId: "153799897602",
      appId: "1:153799897602:web:d7645956bea1ce06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
      function sendTokenToServer(currentToken) {
          if (!isTokenSentToServer()) {
          //console.log('Sending token to server...');
          // TODO(developer): Send the current token to your server.
          setTokenSentToServer(true);
          } else {
          //console.log('Token already sent to server so won\'t send it again ' +'unless it changes');
          }
      }
      function isTokenSentToServer() {
          return window.localStorage.getItem('sentToServer') === '1';
      }
      function setTokenSentToServer(sent) {
          window.localStorage.setItem('sentToServer', sent ? '1' : '0');
      }
      // [START refresh_token]
  // Callback fired if Instance ID token is updated.
      messaging.onTokenRefresh(function() {
          messaging.getToken().then(function(refreshedToken) {
          console.log('Token refreshed.');
          // Indicate that the new Instance ID token has not yet been sent to the
          // app server.
          setTokenSentToServer(false);
          // Send Instance ID token to app server.
          sendTokenToServer(refreshedToken);
          // [START_EXCLUDE]
          // Display new Instance ID token and clear UI of all previous messages.
          resetUI();
          // [END_EXCLUDE]
          }).catch(function(err) {
          //console.log('Unable to retrieve refreshed token ', err);
          //showToken('Unable to retrieve refreshed token ', err);
          });
      });
  messaging.usePublicVapidKey("BGBdHZKTaTwzin_4U5b-U5Hw4A4g_9VWXSvD98t3gFHX6jUCsN_zv9zy4YSi9mSqeAZyOxQTnvUgkRVUWhu2cPo");
  Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
      //console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
  } else {
      //console.log('Unable to get permission to notify.');
  }
  });
  //token
  messaging.getToken().then((currentToken) => {
  if (currentToken) {
      sendTokenToServer(currentToken);
      store_token(currentToken);
      //console.log(currentToken);  //ajax post db -> log id,name,token
  } else {
      // Show permission request.
      //console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      updateUIForPushPermissionRequired();
      setTokenSentToServer(false);
      //console.log(currentToken);
  }
  }).catch((err) => {
  //console.log('An error occurred while retrieving token. ', err);
  //showToken('Error retrieving Instance ID token. ', err);
  setTokenSentToServer(false);
  });
  //msg
  messaging.onMessage(function(payload){
      //console.log('Message received. ', payload);
      // [START_EXCLUDE]
      // Update the UI to include the received message.
      var notificationTitle = payload.notification.title;
      var notificationOptions = {
          body: payload.notification.body,
          icon: payload.notification.icon
      };
      //console.log(notificationTitle, notificationOptions);
      var notification = new Notification(notificationTitle, notificationOptions);
      //registration.showNotification(notificationTitle, notificationOptions);
      // [END_EXCLUDE]
  });
  //FCM
