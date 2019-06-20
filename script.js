var inputvalue = document.getElementById('inputvalue');
var para = document.getElementById('fail_or_pass');



// fetch author's data
function collectdata(){
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        
        var responseJSON = JSON.parse(xhrRequest.response);
        // Authors's name
        var Url = responseJSON.name;
        fail_or_pass.innerText = Url;
        // Dead ??
        var Url2 = responseJSON.death_date;
        // work dutton : visible
        btn2.style.visibility = "visible";
        if(Url2 <= 2019){
            dead.innerText = ' : Dead';
        }
    }
    xhrRequest.open('get', 'http://openlibrary.org/authors/OL1A.json');
    xhrRequest.send();
}

// fetch author's work
function button2call(){
    var xhrRequest2 = new XMLHttpRequest();
    xhrRequest2.onload = function(){
        console.log(xhrRequest2.response);
        var responseJSON = JSON.parse(xhrRequest2.response);
        
        // struggling with list display
        var Url3 = responseJSON.latest_revision;
       
        // var i;
        // for (i = 0; i < Url3; i++) { 
        //     
        // }

        l1.style.visibility="visible";

        // displaying data in list items
        var Url4 = responseJSON.entries.title;       
        l1.innerText = Url4;
    }
    xhrRequest2.open('get', 'http://openlibrary.org/authors/OL1A/works.json');
    xhrRequest2.send();
}


// only Alphanomeric
function check(inputvalue){
    var a = /^[0-9A-Za-z]+$/;
    if(inputvalue.value.match(a)){
       collectdata();
    }
    else{
        para.textContent= "Please Enter AlphaNumeric Code";
    }
}
