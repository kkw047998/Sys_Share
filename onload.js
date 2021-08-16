window.addEventListener(
	"load",
	() => {
		init();
	},
	false,
);
let client;
const init = async () => {
	const scopes = ["user.read","Directory.Read.All"];
	const msalConfig = {
		auth: {
			clientId: Secrets.clientId,
			redirectUri: "https://"+window.location.hostname,
		},
		cache:{
			cacheLocation: "sessionStorage",
			storeAuthStateInCookie:false
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
		loginType:'redirect',
	});

	bindEvents();
};
const bindEvents = () => {
	let requestsDOM = document.getElementById("login_btn");
	let rid_target = requestsDOM.dataset.rid;
	requestsDOM.addEventListener("click", () => {
		request
			.getDisplayName()
			.then(async(res) => {
				$.ajax({
					type:"POST",
					data:{displayName:res.displayName,upn:res.userPrincipalName},
					url:"graph_handler/create_session.php",
					success: function(data){            
						var status = data;
						if((status==1)||(status==2)){
							if(rid_target==''){
								window.location.href = 'portal.php'
							} else {
								window.location.href = 'systems/UI/index.php?etype='+rid_target;
							}							
						}
					}
				})
			})
			.catch((error) => {
				console.log(error);
			});
	});
};