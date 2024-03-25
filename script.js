var jac1=[];

$(".add").click(function() {
 var list=$(".picture-url").val();   
 jac1.push(list);
 $(".gallery").append("<img src='"+list+"'>");
 $(".picture-url").val("");
   
});

  
