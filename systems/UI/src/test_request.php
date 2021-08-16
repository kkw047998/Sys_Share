<?php
$subject = 'Meeting (SOS)';
$body['contentType'] = 'HTML';
$body['content'] = 'Meeting';
$start['dateTime'] = '2020-03-23T09:30:00';
$start['timeZone'] = 'China Standard Time';
$end['dateTime'] = '2020-03-23T12:30:00';
$end['timeZone'] = 'China Standard Time';
$location['displayName']= 'MUNSANG COLLEGE';

?>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
<script src="https://secure.aadcdn.microsoftonline-p.com/lib/1.0.0/js/msal.js"></script>
<script type="text/javascript" src="../../../secrets.js"></script>
<script type="text/javascript" src="graph_call.js"></script>
<script>
    async function test_f(){
        const event = {
            subject: '<?=$subject?>',
            body: {
                contentType: "<?=$body['contentType']?>",
                content: '<?=$body['content']?>'
            },
            start :{
                dateTime: "<?=$start['dateTime']?>",
                timeZone: "<?=$start['timeZone']?>"
            },
            end : {
                dateTime : "<?=$end['dateTime']?>",
                timeZone: "<?=$end['timeZone']?>"
            },
            location:{
                displayName:"<?=$location['displayName']?>"
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
    
</script>
<body onload="test_f()">
</body>