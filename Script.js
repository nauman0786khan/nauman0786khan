
    // ajax call
    
    
    
    
    $.ajax ({
        url:'Apitest.json' ,
        Type:'GET',
        dataType:'json',
        success:function(data){
   console.log(data)
    
    for(i=0; i<=data.length; i++){
     
    let dataInHtml=`<div class="con"><h2 id="${data[i].id}">${data[i].Designer}</h2><p class="Spon">${data[i].Spon} </p><p id="${data[i].id}"> Pages  ${data[i].Pages}</p> <p class="project">${data[i].Project} </p><p class="QA">QA ${data[i].QA} </p><p class="Status">${data[i].Status} </p></div>`;
    
    
     
     
    $('#root').append(dataInHtml);
     
       $("#QA").click(function(){
        $("p:contains(Under QA)").parent().toggleClass("dd");
      $(".dd").toggle();
         $("p:contains(Query)").parent().toggleClass("dd");
         $("p:contains(Active)").parent().toggleClass("dd");
             $("p:contains(Under Designing)").parent().toggleClass("dd");
       });
       $("#Active").click(function(){
        $("p:contains(Under QA)").parent().toggleClass("cc");
      $(".cc").toggle();
         $("p:contains(Query)").parent().toggleClass("cc");
         $("p:contains(QA Complete)").parent().toggleClass("cc");
             $("p:contains(Under Designing)").parent().toggleClass("cc");
       });
        $("#Under").click(function(){
        $("p:contains(Under QA)").parent().toggleClass("dd");
      $(".dd").toggle();
         $("p:contains(Query)").parent().toggleClass("dd");
         $("p:contains(Active)").parent().toggleClass("dd");
             $("p:contains(QA Complete)").parent().toggleClass("dd");
       });
       
       
    }
       
        }
    });
 
    
    
    $(document).ready(function(){
        $("#scan").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#root .con").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
     