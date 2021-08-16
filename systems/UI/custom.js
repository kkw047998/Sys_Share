function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    
    return is_ie; 
  }
  /* Create an alert to show if the browser is IE or not */
  if (isIE()){
      alert('Please visit this site with Chrome / Edge, IE is not supported!');
  };
        function trigger_view_reimb(id){
            document.getElementById('tmp_id').value = id;
            document.getElementById('v_reimb_f').click();
        }
        function trigger_view_reimb_proc(id){
            document.getElementById('tmp_id').value = id;
            document.getElementById('v_reimb_f_proc').click();
        }
              function change_display(id){
                  var targetclass = id+"-c";
                  var targetid = id+"-i";
                  var st = document.getElementById(targetid).style.display;
                   if (st=='none'){
                       $("."+targetclass).show();
                   } else $("."+targetclass).hide();;
        }
        function editrecord(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('edit_budget').click();
        }
        function editreimb(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('edit_reimb_record').click();
        }
        function cancelreimb(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('cancel_reimb_record').click();
        }
        function rejectreimb(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('reject_reimb_record').click();
        }
        function trigger_view_comp(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('view_proc_comp2').click();
          /*
            var url = 'src/Procurement/procurement/backend/comparision_table.php?p_id='+id;
            window.open(url,'Comparision Table');
          */
        }
        function trigger_go_reimb(id){
            document.getElementById('tmp_id').value = id;
            document.getElementById('goreimb').click();
        }
        function open_upload_accepted(id){
          var url = 'src/Procurement/procurement/backend/upload_selected_quot.php?p_id='+id;
            window.open(url,'Comparision Table','height=150px,width=400px');
        }
        function upload_signed_irg(id){
          var url = 'src/Procurement/report/backend/upload_pdf_irg.php?p_id='+id;
            window.open(url,'Comparision Table','height=150px,width=400px');
        }
        function open_upload_comp_cat3(id){
          var url = 'src/Procurement/procurement/backend/upload_cat3_comp.php?p_id='+id;
            window.open(url,'Comparision Table','height=150px,width=400px','left=400','top=300');
        }
        function trigger_view_comp_cat3(id){
          var url = 'src/Procurement/procurement/backend/cat_3_comparision_table.php?p_id='+id;
            window.open(url,'Comparision Table','height=850px,width=1180px');
        }
        function trigger_go_summary(id){
          var url = 'src/Procurement/procurement/backend/IMC_tender.php?proc_id='+id;
          window.open(url,'Comparision Table','height=850px,width=1180px');
        }
        function editproc(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('edit_proc').click();
        }
        function viewproc(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('view_proc').click();
        }
        function editproc_ret(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('fill_return').click();
        }
        function editproc_ret_info(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('return_info').click();
        }
        function rejectproc(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('reject_proc_record').click();       
        }
        function cancelproc(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('cancel_proc_record').click();    
        }
        function trigger_view_reimb_recur(id,dept){
          document.getElementById('tmp_id').value = id;
          document.getElementById('tmp_id_2').value = dept;
          document.getElementById('entry').value = 'proc';       
          document.getElementById('trigger_view_reimb_recur').click(); 
        }
        //
        function trigger_go_result(id){
          var url = 'src/Procurement/procurement/backend/public_tender.php?proc_id='+id;
          window.open(url,'Tender for Public','height=1000px,width=860px');
        }
        function trigger_go_confirm(id){
          var url = 'src/Procurement/procurement/backend/confirmation.php?p_id='+id;
          window.open(url,'Confirmation Letter','height=1000px,width=860px');
        }
        function trigger_go_unscuc(id){
          var url = 'src/Procurement/procurement/backend/unsuc.php?p_id='+id;
          window.open(url,'Unsuccessful letter','height=1000px,width=860px');
        }
        //
        function trigger_view_proc(id,dept){
          document.getElementById('tmp_id').value = id;
          document.getElementById('tmp_id_2').value = dept;
          document.getElementById('entry').value = 'proc_entry';       
          document.getElementById('trigger_view_proc').click(); 
        }
        function recur_reimb(id,action){
          if(action==0){
            document.getElementById('tmp_id').value = id;
            document.getElementById('entry').value = 'recur';
            document.getElementById('recur_reimb_setup').click(); 
          } else {
            document.getElementById('tmp_id').value = id;
            document.getElementById('entry').value = 'recur';
            document.getElementById('recur_reimb').click(); 
          }
        
        }
        function trigger_open_inv(id){
          var url = 'src/Procurement/procurement/backend/cat_3_inv_letter.php?p_id='+id;
          window.open(url,'Comparision Table','height=1000px,width=860px');
        }
        function trigger_open_summ(id){
          var url = 'src/Procurement/procurement/backend/ret_stat.php?p_id='+id;
          window.open(url,'Comparision Table','height=870px,width=1185px');  
        }
        function trigger_open_tender(id){
          var url = 'src/Procurement/procurement/backend/open_tender.php?p_id='+id;
          window.open(url,'Comparision Table','height=870px,width=1185px');  
        }
        function trigger_expand(id){
          var new_id = id.substring(9);
          var current = document.getElementById(new_id).style.display;
          var target = 'expand_'+new_id;
          if(current == 'none'){
              document.getElementById(new_id).style.display='';
              document.getElementById('icon_'+new_id).style.transform = "rotate(-180deg)";
          } else {
              document.getElementById(new_id).style.display='none';
              document.getElementById('icon_'+new_id).style.transform = "rotate(0deg)";
          }
        }
        function expand(id){
          var new_id = id.substring(7);
          var current = document.getElementById(new_id).style.display;
          if(current == 'none'){
              document.getElementById(new_id).style.display='';
              document.getElementById('icon_'+new_id).style.transform = "rotate(-180deg)";
          } else {
              document.getElementById(new_id).style.display='none';
              document.getElementById('icon_'+new_id).style.transform = "rotate(0deg)";
          }
        }
        function tender_meeting_setup(id){
          document.getElementById('tmp_id').value=id;
          document.getElementById('tender_meeting_setup').click();
        }
        function tender_meeting_mat(id){
          document.getElementById('tmp_id').value=id;
          document.getElementById('tender_meeting_mat').click();
        }
        function sign_code(id){
          document.getElementById('tmp_id').value=id;
          document.getElementById('sign_code').click();
        }
        function uploadspec(id){
          var url = 'src/Procurement/procurement/backend/uploadspec.php?p_id='+id;
          window.open(url,'Comparision Table','height=150px,width=400px');       
        }
        function delrecord(id){	
              var confirmmsg = 'Confirm deleting record ID : '+id+'?';	
              var st = document.getElementById('st_filter').value+'-08';
              var ed = document.getElementById('ed_filter').value+'-07';
              if (confirm(confirmmsg)){
                  $.ajax({
                      url:"src/Procurement/budget/backend/delete_record.php",
                      method:"POST",
                      data:{id:id,st:st,ed:ed},
                      success:function(data){
                          location.reload();
                      }
                  });
              }
        }
        function toggle(source) {
                checkboxes = document.getElementsByName('check[]');
                for(var i=0, n=checkboxes.length;i<n;i++) {
                  checkboxes[i].checked = source.checked;
                }
              }
                  $( document ).ready(function() {
                  $('#upload').click(function(){ 
                  $('#csvfile').trigger('click'); });
                  
                      $('#csvfile').change(function() {
                           $('#upload_csv').submit();
                           return false;
                      });
                  
        });
        $(document).ready(function(){               
               $(document).on("click","#approve_btn",function(){
                
                if(confirm("Confirm updating approve selected record(s)?"))
                {
                 var id = [];
                 
                 $(':checkbox:checked').each(function(i){
                  id[i] = $(this).val();
                 });
                 
                 if(id.length === 0) //tell you if the array is empty
                 {
                  alert("Please Select atleast one checkbox");
                 }
                 else
                 {
              var st = document.getElementById('st_filter').value+'-08';
              var ed = document.getElementById('ed_filter').value+'-07';
              $.ajax({
              url:'src/Procurement/budget/backend/approve_checked.php',
              method:'POST',
              data:{selected_id:id,st:st,ed:ed},
              success:function()
              {
                location.reload();
              }
              
              });
                 }
                 
                }
                else
                {
                 return false;
                }
               });
               
        });
  
        
        $(document).on('change','#dept_select',function(){
          document.getElementById('previous_selected').value = $('#dept_select').find(":selected").text();
        });
        function guide(val){
          if(val==4){
            alert('Please Click Phase 5 to enter meeting');
          }
        }
        function trigger_cat_4_summary(id){
          var url = 'src/Procurement/procurement/backend/ret_stat_cat4.php?p_id='+id;
          window.open(url);
        }
        function trigger_cat_4_declar(id){
          var url = 'src/Procurement/procurement/backend/declaration_form.php?proc_id='+id;
          window.open(url);
        }
        function trigger_cat_4_combine(id){
          var url = 'src/Procurement/procurement/backend/combined_score_sheet.php?proc_id='+id;
          window.open(url);
        }
        function trigger_cat_4_ind(id){
          var url = 'src/Procurement/procurement/backend/score_sheet_ind.php?proc_id='+id;
          window.open(url);
        }
        function retender(id){
          document.getElementById('tmp_id').value=id;
          document.getElementById('retender').click();
        }
        function change_child_dp(id){
            var newid = '.child_'+id;
            var icon = 'icon_'+id;
            if($(newid).css('display')=='none'){                    
              $(newid).show(); 
              document.getElementById(icon).style.transform = "rotate(0deg)";
            } else {           
              $(newid).hide(); 
              document.getElementById(icon).style.transform = "rotate(-180deg)";  
            }
        }
        function tender_cat4(id){
          window.open('src/Procurement/procurement/backend/ret_stat_cat4.php?p_id='+id)
        }
        function delete_irg(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('del_irg').click();
        }
        
async function fetch_user_profile(){
    var res = await request.getUnreadMail();
    var count = res.value.length;
    document.getElementById('n_mail').innerText = count;    
    $('#user_dropdown_child').toggle();
    console.log(count);
}