/**
 * Method to find sum of provided values
 */

var mathUtil= (function(){


var data = 99;
function doAddition(a, b){
    a = parseInt(a);
    b = parseInt(b);
    var result;
    result = a + b;
    return result;
}
function doMultiplication(a, b){
    a = parseInt(a);
    b = parseInt(b);
    var result;
    result = a * b;
    return result;
}
function doSubstraction(a, b){
    a = parseInt(a);
    b = parseInt(b);
    var result;
    result = a - b;
    return result;
}
function doDivision(a, b){
    a = parseInt(a);
    b = parseInt(b);
    var result;
    result = a / b;
    return result;
}

return {
     doAddition:function(a, b){
        a = parseInt(a);
        b = parseInt(b);
        var result;
        result = a + b;
        return result;
    }
}

})();
