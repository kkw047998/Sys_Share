async function insert_to_calendar(){
    const event = {
        subject: document.getElementById('calendar_subject').value,
        body: {
            contentType: "HTML",
            content: document.getElementById('calendar_content').value,
        },
        start :{
            dateTime: document.getElementById('calendar_start_dt').value,
            timeZone: "China Standard Time"
        },
        end : {
            dateTime : document.getElementById('calendar_end_dt').value,
            timeZone: "China Standard Time"
        },
        location:{
            displayName:document.getElementById('calendar_location').value
        },
    };
    try {
    let response = await client
        .api("/me/calendar/events")
        .post(event).then(
            (res)=>{
                console.log(res);
            }
        )
        return response;
    } catch (error) {
        console.error(error);
        if(error.statusCode==-1){
            window.open('https://login.microsoftonline.com/mscollege/oauth2/logout?post_logout_redirect_uri=https://portal.mscollege.edu.hk/#/auth/login');
        }
    }
}