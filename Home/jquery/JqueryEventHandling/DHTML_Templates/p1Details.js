
      var p1Details=[];      
function loadProductDetails(p1data){
     $('#p1DetailsHold').loadTemplate($("#pTemplate"), p1data, {append:true});
   


}

function loadData(){
    for(var i = 0; i < p1Details.length; i++){
        loadProductDetails(p1Details[i]);
    }

}

  function getproductDetails(){
      $(".LoadingBlock").show();
      var reqObj= $.ajax({
          url:'',
          method: 'GET',
          datatype: 'json'
      })
  }



