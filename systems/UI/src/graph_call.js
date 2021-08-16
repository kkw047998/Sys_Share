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
			redirectUri: "http://localhost",
		},
	};

	var msalApplication = new Msal.UserAgentApplication(msalConfig);
	const msalOptions = new MicrosoftGraph.MSALAuthenticationProviderOptions(scopes);
	const msalProvider = new MicrosoftGraph.ImplicitMSALAuthenticationProvider(msalApplication, msalOptions);
	client = MicrosoftGraph.Client.initWithMiddleware({
		debugLogging: true,
		authProvider: msalProvider,
	});
};
/*
let request = {
	getDisplayName: async () => {
		try {
			let response = await client
				.api("/me?$select=displayName,userPrincipalName,accountEnabled")
				.get();
			return response;
		} catch (error) {
			console.error(error);
			if(error.statusCode==-1){
				window.open('https://login.microsoftonline.com/mscollege/oauth2/logout?post_logout_redirect_uri=https://portal.mscollege.edu.hk/#/auth/login');
			}
		}
	},

	getProfilePicture: async () => {
		try {
			let response = await client.api("/me/photo/$value").get();
			return response;
		} catch (error) {
			console.error(error);
		}
	},

	updateProfilePicture: async () => {
		let file = document.getElementById("uploadProfile").files[0],
			reader = new FileReader();

		reader.addEventListener(
			"load",
			() => {
				client
					.api("/me/photo/$value")
					.responseType(MicrosoftGraph.ResponseType.BLOB)
					.put(file)
					.then((res) => {
						request
							.getProfilePicture()
							.then((blob) => {
								ui.setProfilePicture(blob);
							})
							.catch((error) => {
								console.error(error);
							});
					})
					.catch((error) => {
						console.error(error);
					});
			},
			false,
		);

		if (file) {
			reader.readAsDataURL(file);
		}
	},

	getUserDetails: async () => {
		try {
			let res = await client.api("/users?$select=displayName,mail,userPrincipalName,accountEnabled").get();
			return res;
		} catch (error) {
			throw error;
		}
	},
	getMyApps: async() =>{
		try {
			let res = await client.api("/applications?$select=id,displayName,web").get();
			return res;
		} catch (error) {
			throw error;
		}
	},
	getMyInfo: async() =>{
		try {
			let res = await client.api("/me").get();
			return res;
		} catch (error) {
			throw error;
		}
	},
	getMyCalendar: async() =>{
		try {
			let res = await client.api("/me/calendar/events").get();
			return res;
		} catch (error) {
			throw error;
		}
	},
	getMyDriveFiles: async () => {
		try {
			let res = await client.api("/me/drive/root/children").get();
			return res;
		} catch (error) {
			throw error;
		}
	},

	getMyMails: async () => {
		try {
			let res = await client.api("/me/messages").get();
			return res;
		} catch (error) {
			throw error;
		}
	},

	uploadLargeFile: async () => {
		let file = document.getElementById("largeFileUpload").files[0];
		try {
			let options = {
				path: "/Documents",
				fileName: file.name,
				rangeSize: 5 * 1024 * 1024,
			};
			const uploadTask = await MicrosoftGraph.OneDriveLargeFileUploadTask.create(client, file, options);
			const response = await uploadTask.upload();
			ui.updateOutput(response);
			return response;
		} catch (error) {
			throw error;
		}
	},
};
*/