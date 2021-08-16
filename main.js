window.addEventListener(
	"load",
	() => {
		init();
	},
	false,
);
function signout(){
    var msg = 'Confirm sign out?';
    if(confirm(msg)){
		const msalConfig = {
			auth: {
				clientId: Secrets.clientId,			
				redirectUri: "https://"+window.location.hostname,
				//redirectUri: "https://47.240.35.174",
				//redirectUri: "https://192.168.64.2",
				//redirectUri: "https://portal.mscollege.edu.hk",
			},
		};
		var msalApplication = new Msal.UserAgentApplication(msalConfig);
		$.ajax({
			type:"POST",
			data:'',
			url:"systems/UI/src/auth/system_sign_out.php",
			success: function(){
				msalApplication.logout();
			}
		})    
    }
}
let client;
const init = async () => {
	const scopes = ["user.read","Directory.Read.All","Mail.Read"];
	const msalConfig = {
		auth: {
			//redirectUri: "https://47.240.35.174",
			clientId: Secrets.clientId,
			redirectUri: "https://"+window.location.hostname,
			//redirectUri: "https://localhost/portal.php",
			//redirectUri: "https://192.168.64.2",
			//redirectUri: "https://portal.mscollege.edu.hk/portal.php",
			//redirectUri: "https://school-partner-php-win.azurewebsites.net/portal.php",
		},
		headers: {
			'Prefer' : 'outlook.timezone="Asia/Taipei"'
		}
	};

	var msalApplication = new Msal.UserAgentApplication(msalConfig);
	const msalOptions = new MicrosoftGraph.MSALAuthenticationProviderOptions(scopes);
	const msalProvider = new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalApplication, msalOptions);
	client = MicrosoftGraph.Client.initWithMiddleware({
		debugLogging: true,
		authProvider: msalProvider,
	});
	fetch_calendar();
	//bindEvents();
};
/*
const bindEvents = () => {
	let requestsDOM = document.getElementById("requests");
	requestsDOM.addEventListener("click", (elem, event) => {
		let id = elem.srcElement.getAttribute("cell");
		switch (id) {
			case "1":
				request
					.getDisplayName()
					.then((res) => {
						ui.updateOutput(res);
						$.ajax({
							type:"POST",
							data:{displayName:res.displayName,upn:res.userPrincipalName},
							url:"graph_handler/create_session.php",
							success: function(data){            
								
							}
						})
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "2":
				request
					.getMyApps()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "3":
				request
					.getUserDetails()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;

			case "4":
				request
					.getMyCalendar()
					.then((res) => {
						ui.updateOutput(res);
					})
					.catch((error) => {
						ui.updateOutput(error);
					});
				break;
		}
	});
};
*/