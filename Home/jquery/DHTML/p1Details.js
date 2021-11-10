
            
function loadProductDetails(p1data){
        var ulTag = $("<ul></ul>");
        var li1 = $("<li></li>").addClass("p1Details");    //<li></li>
     

        var div1 = $("<div></div>").text = ("product Name : " + p1data.name);
        li1.append(div1);

        var div2 = $("<div></div>").text = ("price :  $ "  + p1data.price);
        li1.append(div2);

        var div3 = $("<div></div>").text = ("manufactured : " +  p1data.menu); 
        li1.append(div3);

        var img = $("<img>/").attr("src",  p1data.imageUrl);
        li1.append(img);

        var div4 = $("<div></div>").html = ("Rating : " + p1data.Rating);
        li1.append(div4);

        ulTag.append(li1); 
        $("#container").append(ulTag);

//   document.querySelector("#container").append.ulTag;
   


}

function loadData(){
    for(var i = 0; i < p1Details.length; i++){
        loadProductDetails(p1Details[i]);
    }

}
   $(document).ready(function(){
    loadData();
})



