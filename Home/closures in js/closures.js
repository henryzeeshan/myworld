

console.log("data is " + data);
 

var count = 10;                    //when user clicked how many times clk

var Dooperation = (type)=>{
    //var result;    
                                //global variable
    var Fval = document.querySelector("#Fval").value;
    var Sval = document.querySelector("#Sval").value;
    switch(type){
        case 'add':
             result = mathUtil.doAddition(Fval, Sval)
             count += 2;
            break;
        case 'mul':
            result = doMultiplication(Fval, Sval)
            count += 2;
            break;
        case 'sub':
            result = doSubstraction(Fval, Sval)
            count += 2;
            break;
        case 'div':
            result = doDivision(Fval, Sval)
            count += 2;
            break;
    }
    ShowResult(type, result);
}





function ShowResult(type, result ){ 
    document.querySelector("#rBlock").innerHTML = 'The' + type + 'is:' + result + + +'--the no. of clked user' + count;

}

