var schooleDetails = {                                                  //using json object
    Schoolname : 'ABC School',
    Schoollocation: 'hyderabad',
    rating : '4/5'
};

var stdRagistr = () => {
  var studentdata = Object.create(schooleDetails);             //inherit the schooldetails values
  studentdata.name = document.querySelector("#sname").value;
  studentdata.age= document.querySelector("#sage").value;
  studentdata.address = document.querySelector("#saddress").value;
  studentdata.ShowStudentDetails= function(){
      var ul = document.createElement("ul");
      for(var temp in this){
          if(typeof(this[temp]) != 'function'){
              var li = document.createElement('li');
              li.innerHTML = temp + ":" + this[temp];                 
              ul.append(li);
          }
      }
      document.querySelector(".generalBlock").append(ul);
  }
  studentdata.ShowStudentDetails();
}
