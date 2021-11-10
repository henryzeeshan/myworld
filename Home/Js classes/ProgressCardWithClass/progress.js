
                            //define 'N' number of studentdetails in one class object
class ShowStudentDetails{
   constructor(obj){
       this.name = obj.name;
       this.gender = obj.gender;
       this.age = obj.age;
       this.marks=[];
       
   }

   getTotalAndAvg(){
       this.readmarks();
       this.total = 0;
       for(var i = 0 ; i < this.marks.length; i++){
           this.total += this.marks[i];
       }
       this.avg = this.total / this.marks.length;
   }
   
   getGrade(){                  //getgrade is an part of a object
    this.getTotalAndAvg();
    if (this.avg >= 40) {
        this.grade = "passed";
    } else {
        this.grade = "surprised";
    }
   
}
readmarks(){
    for (var i = 1; i <= 5; i++) {
        var element = '#m' + i;
        var value = document.querySelector(element).value;
        value = parseInt(value);
        this.marks.push(value);
    }
}
showprogress(){
    this.getGrade();
        document.querySelector("#s_name").innerText = this.name;
        document.querySelector("#s_age").innerText = this.age;
        document.querySelector("#s_gender").innerText = this.gender;
        document.querySelector("#s_total").innerText = this.total;
        document.querySelector("#s_avg").innerText = this.avg;
        document.querySelector(".showblock").style.display = 'block';
    
    }
  
};

var prem = [];

function systemInfo() {

    var obj = {
        name: document.querySelector("#sname").value,
        gender: document.querySelector("input[name=gender]:checked").value,
        age : document.querySelector("#sage").value,
        
    };
    var data = new ShowStudentDetails(obj);
    data.showprogress();
    prem.push(data);

    console.log(prem);
}

  

   

