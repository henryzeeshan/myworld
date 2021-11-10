
function systemInfo() {

    var prem = {};
    prem.name = document.querySelector("#sname").value;
    prem.gender = document.querySelector("input[name=gender]:checked").value;
    prem.age = document.querySelector("#sage").value;
    prem.marks = [];

    for (var i = 1; i <= 5; i++) {
        var element = '#m' + i;
        var value = document.querySelector(element).value;
        value = parseInt(value);
        prem.marks.push(value);
    }

    var data = getTotalAndAvg(prem.marks);
    prem.total = data.tot;
    prem.avg = data.avg;
    prem.grade = getGrade(data.avg)
    console.log(prem);
    showprogress(prem);

}

function getTotalAndAvg(marks) {
    var total = 0;
    for (var i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    
    avg = total / marks.length;
    var obj = {};
    obj.tot = total;
    obj.avg = avg;
    return obj;
}

function getGrade(avg) {
    var grade;
    if (avg >= 40) {
        grade = "passed";
    } else {
        grade = "surprised";
    }
    return grade;
}

var showprogress = function (data) {

    document.querySelector("#s_name").innerText = data.name;
    document.querySelector("#s_age").innerText = data.age;
    document.querySelector("#s_gender").innerText = data.gender;
    document.querySelector("#s_total").innerText = data.total;
    document.querySelector("#s_avg").innerText = data.avg;

    document.querySelector(".showblock").style.display = 'block';

}

