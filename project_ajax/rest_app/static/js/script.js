 $(document).ready(function(){

  var useradd = $(".user-add-ajax")


  useradd.submit(function(event){
    event.preventDefault();
    var thisForm = $(this)
    var urlEndpoint  = thisForm.attr("action");
    var httpMethod   = thisForm.attr("method");
    var formData     = thisForm.serialize();
    console.log(urlEndpoint,  httpMethod,formData);
    $.ajax({
      url:urlEndpoint,
      method:httpMethod,
      data:formData,
      sucess: function(data){
        console.log("sucess");
        console.log(formData);
        refresher()
      },
      error: function(errorData){
        console.log("error");
        console.log(errorData);
      },
    });
      });

    function refresher() {

      var tableRefresh = $('.form-refresh')
      var url  = '/vehical/user/';
      var httpMethod = "GET";
      var data ={};
      $.ajax({
        url:urls,
        method:httpMethod,
        data:data,
        sucess: function(data){
        console.log("sucess");
        },
        error: function(errordata){
          console.log("error");
        },
      })

    }
});






$(document).ready(function(){

 var vechicaladd = $(".vechical-add-ajax")


 vechicaladd.submit(function(event){
   event.preventDefault();
   var thisForm = $(this)
   var urlEndpoint  = thisForm.attr("action");
   var httpMethod   = thisForm.attr("method");
   var formData     = thisForm.serialize();
   console.log(urlEndpoint,  httpMethod,formData);
   $.ajax({
     url:urlEndpoint,
     method:httpMethod,
     data:formData,
     sucess: function(data){
       console.log("sucess");
       console.log(formData);
       refresher()
     },
     error: function(errorData){
       console.log("error");
       console.log(errorData);
     },
   });
     });

   function refresher() {

     var tableRefresh = $('.form-refresh')
     var url  = '/vehical/user/';
     var httpMethod = "GET";
     var data ={};
     $.ajax({
       url:urls,
       method:httpMethod,
       data:data,
       sucess: function(data){
       console.log("sucess");
       },
       error: function(errordata){
         console.log("error");
       },
     })

   }
 });





$(document).ready(function(){

 var p_add = $(".v_prob-add-ajax")


 p_add.submit(function(event){
   event.preventDefault();
   var thisForm = $(this)
   var urlEndpoint  = thisForm.attr("action");
   var httpMethod   = thisForm.attr("method");
   var formData     = thisForm.serialize();
   console.log(urlEndpoint,  httpMethod,formData);
   $.ajax({
     url:urlEndpoint,
     method:httpMethod,
     data:formData,
     sucess: function(data){
       console.log("sucess");
       console.log(formData);
       refresher()
     },
     error: function(errorData){
       console.log("error");
       console.log(errorData);
     },
   });
     });

   function refresher() {

     var tableRefresh = $('.form-refresh')
     var url  = '/vehical/user/';
     var httpMethod = "GET";
     var data ={};
     $.ajax({
       url:urls,
       method:httpMethod,
       data:data,
       sucess: function(data){
       console.log("sucess");
       },
       error: function(errordata){
         console.log("error");
       },
     });

   },
 });
