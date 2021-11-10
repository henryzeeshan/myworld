var SaveName = () => {
    uname = document.querySelector("#uname").value;
}
var showmsgm = [
    "when you apply scholorship on my site",
    "then i will give u 400$ on ur gpay",
    "first rejistration absloutly free bro",
    "plzz come on my site and grow up"
];

function createContainer() {
    var divTag = document.createElement("div");
    divTag.setAttribute("id", 'msgcontainer');

    document.querySelector(".block").append(divTag);
}

var showmsg = function () {
    var result = Math.floor(Math.random() * showmsgm.length);
    var showmsg = showmsgm[result]
    showmsg = 'mr.' + " " + uname + 'ur today task is ' + " " + showmsg;

    try {                                       //The try statement lets you test a block of code for errors.
        document.querySelector("#msgcontainer").innerHTML = showmsg;
    } catch (err) {                            //The catch statement lets you handle the error.
        alert("you missed a contaniner") 

    } finally {                 // The finally statement lets you execute code, after try and catch, regardless of the result.--its optional

        setTimeout(function () {
            document.querySelector(".msgblock").innerText = "thanks for using the web page"
        }, 3000)
    }
}



  //  setInterval(showmsg, 3000)    //flexuate every 3 sec

