function leading_zero(val){
	if(val < 10) {
        return '0'+val;
    } else {
        return val;
    }
}
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
				//window.open('https://login.microsoftonline.com/mscollege/oauth2/logout?post_logout_redirect_uri=https://portal.mscollege.edu.hk/#/auth/login');
			}
		}
	},
	getUnreadMail:async () =>{
		try {
			let response = await client
				.api("/me/mailFolders/Inbox/messages?$filter=isRead ne true&$count=true")
				.get();
			console.log(response);
			return response;
		} catch (error) {
			console.error(error);
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
			let res = await client.api("/users?$select=displayName,userPrincipalName,accountEnabled&$orderby=displayName").get();
			return res;
		} catch (error) {
			throw error;
		}
	},
	syncUserGroup: async () => {
		try {
			let res = await client.api("/me/memberof").get();
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
	syncUser: async () => {
		try {
			let res = await client.api("/users").get();
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
	upComingEvent: async() => {
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var hr = today.getHours();
		var mm = today.getMinutes();
		var ss = today.getSeconds();
		var time = leading_zero(hr) + ":" + leading_zero(mm) + ":" + leading_zero(ss);
		//var time = today.getHours() + ":" + today.getMinutes().padStart(2, 0) + ":00";
		try {
			let res = await client.api("/me/calendar/events?$filter=start/dateTime ge '"+date+"T"+time+"'&$select=subject,bodyPreview,location,start,end&$orderby=start/dateTime&$top=3").header('Prefer' , 'outlook.timezone="Asia/Taipei"').get();
			return res;
		} catch (error) {
			throw error;
		}
	}
};
