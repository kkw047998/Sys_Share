setInterval(refresh_data, 10000);
function isset(val){
    if((val==undefined)||(val=='')){
        return '/';
    } else {
        return val;
    }
}
function refresh_data(){
    try {
        fetch_calendar();
    } catch (error) {
        console.log(error);
    }
}
$(window).focus(function(){
    $.ajax({
        type:"POST",
        data:'',
        url:"check_session.php",
        success: function(data){       
            if(data==0){
                alert('Session expired, redirect to login page');
                window.location.href='https://login.microsoftonline.com/bsceduhk/oauth2/logout?post_logout_redirect_uri=https://portal.bsc.edu.hk';
            }
        }
    }) 
});
var isloading = false;
var res;
async function fetch_calendar(){
    try {
        var data ;
        var length ;
        var updateText = 'Fetching calendar events';
        if(isloading==false){
            isloading = true;
            await request.upComingEvent().then(
                (res)=>{
                    console.log(res);
                    data = res.value;
                    length = res.value.length;
                    isloading = false;
                }   
            );      
        } 
    } catch (error) {
        console.log(error.message);
        if(error.message=="Token renewal operation failed due to timeout."){
            alert("Session expired, please login again");
            window.location.href="index.php";
        }
    }    
    if(data!=undefined){
        console.log("isset");
        var i = 0;
        var innerHtml = '';
        var original = $('#cache').text();
        updateText = 'No calendar events found,<br/> keep tracking for any updates';
        var street = '';
        for(i=0;i<length;i++) {
            if(data[i].location.address!=undefined){
                if(data[i].location.address.street!=undefined){
                    street = ' ('+data[i].location.address.street+')';
                } else {
                    street = '';
                }
            } else {
                street = '';
            }
            console.log(data[i].location);
            if(data[i].location==undefined){
                data[i].location.displayName = '';
            }
            innerHtml += 
            "<div class='calendar_item'>"+
                "<div id='"+(i+1)+"' class='expand_wrapper' onclick='expand_child_content(this.id)'>"+
                    "<i id='i"+(i+1)+"' class='fa fa-expand corner'></i></div>"+
                        "<div class='dp_title'>"+
                            "<div class='bullpt'>&bull;</div>"+
                            "<div class='right_text'>"+data[i].subject+"</div>"+
                        "</div>"+
                        "<div id='c"+(i+1)+"' class='dp_content'>"+
                            "<div class='fa_icon_wrapper'><i class='fa fa-bars small_symbol'></i></div>"+
                            "<div class='right_text'>"+isset(data[i].bodyPreview)+"</div>"+
                        "</div>"+
                        "<div class='dp_time'>"+
                            "<div class='fa_icon_wrapper'><i class='fa fa-clock-o small_symbol'></i></div>"+
                            "<div class='right_text'>"+
                                data[i].start.dateTime.slice(0,-8).replace("T",' ')+" - "+data[i].end.dateTime.slice(0,-8).replace("T",' ')+
                            "</div>"+                                   
                        "</div>"+
                        "<div class='dp_location'>"+
                            "<div class='fa_icon_wrapper'><i class='fa fa-map-marker small_symbol'></i></div>"+
                            "<div class='right_text'>"+isset(data[i].location.displayName)+street+
                        "</div>"+
                    "</div>"+
                "</div>";
        }
        if(length==0){
            $('#calendar_loading').css("opacity","1");
            $('.calendar_item').css("opacity","0");
            $('.content_loaded').css("z-index","9");
            $('#calendar_loading_text').html(updateText);
        } else {
            if(innerHtml!=original){      
                $('#js_calendar').html(innerHtml);
                $('#cache').text(innerHtml);
            }
            $('#calendar_loading').css("opacity","0");
            $('.calendar_item').css("opacity","1");
            $('.content_loaded').css("z-index","13");
        } 
    } else {
        console.log("unset");
    }   
}
function expand_child_content(id){
    var target = 'c'+id;
    var icon = 'i'+id;
    if($('#'+icon).hasClass("fa-expand")){
        $('#'+target).addClass('show_content');  
        $('#'+icon).removeClass('fa-expand');
        $('#'+icon).addClass('fa-compress');
    } else {
        $('#'+target).removeClass('show_content');  
        $('#'+icon).addClass('fa-expand');
        $('#'+icon).removeClass('fa-compress');
    }    
}
$( document ).ready(function() {
    //fetch_calendar();
    //fetch_custom_events();
});
function redir_user(){
    window.open('https://account.activedirectory.windowsazure.com/ChangePassword.aspx');
}
function redir_setting(){
    window.location.href='settings.php'
}
function syncUsers(data){
    $.ajax({
        type:"POST",
        data:{data:data},
        url:"sync_users.php",
        success: function(data){       

        }
    }) 
}
async function sync(){
    await request.getUserDetails().then(
        async(res)=>{
            var i = 0;
            var nextLink;
            var new_link = '';
            var data;
            data = res.value;
            syncUsers(data);
            nextLink = res["@odata.nextLink"];                    
            while(nextLink!=undefined){
                i++;
                new_link = nextLink.replace("https://graph.microsoft.com/v1.0", "");
                console.log(nextLink);
                await client.api(new_link).get().then(
                    (res)=>{
                        data = res.value;
                        nextLink = res["@odata.nextLink"]; 
                        console.log(nextLink);
                        syncUsers(data);
                    }
                );
            }                                 
        }   
    ); 
    alert('Completed synchronizing users to local database');
}
function update_sys(target) {
    var field = target.dataset.field;
    var id = target.dataset.sysid;
    var value = target.value;
    $.ajax({
        type:"POST",
        data:{field:field,id:id,value:value},
        url:"update_portal_system.php",
        success: function(data){       
            console.log(data);
        }
    }) 
}
function checkUserGroup(){
	request.syncUserGroup().then(
		(res) => {
            console.log(res);
			let val = [];
			for(var i=0; i<res.value.length; i++){
				val.push(res.value[i].displayName);
			}
			$.ajax({
				type:"POST",
				data:{data:val},
				url:"usergroup.php",
				success: function(data){            
					
				}
			})
		}
	)
}