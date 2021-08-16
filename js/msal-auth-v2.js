// Config object to be passed to MSAL on creation
function rsaUserId(uid, name){
    $.ajax(
        {
            url: "jwt_encode.php", 
            method:'POST',
            data: {uid:uid, name:name},
            success: function(res){
                window.location.href="jwt_auth.php?token="+res;
            }
        }
    );
}
const config = {
  auth: {
      clientId: '20df4bad-30c9-4861-a8d4-7e6d231089b3',
      redirectUri: "https://"+window.location.hostname+"/portal-v4-fcm.php", //defaults to application start page
      //clientSecret: "mYz9_8y1At6~MiZ4a-RYL19Th-C84DbkV."
      //postLogoutRedirectUri: "your_app_logout_redirect_uri"
  },
  cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false
  },
}

const loginRequest = {
  scopes: ["user.read","Directory.Read.All","Mail.Read"]
}

let accountId = "";

const myMsal = new msal.PublicClientApplication(config);

function handleResponse(response) {
  if (response !== null) {
      accountId = response.account.homeAccountId;
      rsaUserId(response.account.username, response.account.name);
      // Display signed-in user content, call API, etc.
  } else {
      // In case multiple accounts exist, you can select
      const currentAccounts = myMsal.getAllAccounts();
      console.log(currentAccounts);
      if (currentAccounts.length === 0) {
          // no accounts signed-in, attempt to sign a user in
          myMsal.loginRedirect(loginRequest);
      } else if (currentAccounts.length > 1) {
          // Add choose account code here
      } else if (currentAccounts.length === 1) {
          rsaUserId(currentAccounts[0].username, currentAccounts[0].name);
          //accountId = currentAccounts[0].homeAccountId;
      }
  }
}

myMsal.handleRedirectPromise().then(handleResponse);