/*
    Created on : Apr 21, 2019, 3:13:11 PM
    Author     : kevinng
*/

function filterList() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    //li = listOfObjects;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//This block of code fetching data and logging to console for experiementing
var listOfObjects = [];
const promise = fetch('https://uinames.com/api/?amount=10');
promise
  .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
  })
  .then(function(processedResponse) {
        const name = document.createElement("name");
        name.src = processedResponse.message;
        name.alt = "Person Name";
        name.forEach(function(entry) {
            var singleObj = {};
            singleObj['type'] = 'thing';
            singleObj['value'] = entry;
            listOfObjects.push(singleObj);
        });
  });
console.log(listOfObjects);

function getData_xhr() {
    // 1. Instantiate XHR - Start 
    var xhr; 
    if (window.XMLHttpRequest) 
        xhr = new XMLHttpRequest(); 
    else if (window.ActiveXObject) 
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    else 
        throw new Error("Ajax is not supported by your browser");
    // 1. Instantiate XHR - End
    
    // 2. Handle Response from Server - Start
    xhr.onreadystatechange = function () {
        if (xhr.readyState < 4)
            document.getElementById('text1').innerHTML = "Xhr Loading...";
        else if (xhr.readyState === 4) {
            if (xhr.status == 200 && xhr.status < 300)
            {
                document.getElementById('text2').innerHTML = "Xhr Responding...";
                var json = JSON.parse(xhr.responseText); //reponseText returns the entire JSON file and we assign it to a javascript variable "json".
                document.getElementById('text1').innerHTML = json.collection.movie[0].title;; //get first value with "title" element
            } 
        }
    }
    // 2. Handle Response from Server - End
    
    document.getElementById('text3').innerHTML = "xhr state: " + xhr.readyState;
    document.getElementById('text4').innerHTML = "xhr status: " + xhr.status; 

    // 3. Specify your action, location and Send to the server - Start   
    xhr.open('GET', 'https://www.ajax-tutor.com/demo/movies.json',true);
    xhr.send(null);
    // 3. Specify your action, location and Send to the server - End
    
    console.log(JSON.parse(xhr.responseText));
}

function getData_fetch_dog() {
    const promise = fetch('https://dog.ceo/api/breeds/image/random');
    const doggos = document.querySelector(".doggos");

    promise
      .then(function(response) {
        document.getElementById('text1').innerHTML = "Fetch Loading...";   
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function(processedResponse) {
        document.getElementById('text1').innerHTML = "Fetch Processing...";   
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        doggos.appendChild(img);
      });
}

function getData_fetch_user(){
    document.getElementById('text1').innerHTML = "Fetch user..."; 
    fetch('https://api.github.com/users')
    .then(res => res.json())//response type
    .then(data => console.log(data)); //log the data;
}

//This function is called by getData_cor_ie()
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

function getData_cors_ie(){
    var request = createCORSRequest("get", "https://www.ajax-tutor.com/demo/movies.json");
    if (request){
        request.onload = function() {
            // ...
            if (request.readyState < 4)
                document.getElementById('text1').innerHTML = "CORS_ie Loading...";
            else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300)
                {
                    document.getElementById('text2').innerHTML = "CORS_ie Responding...";
                    var json = JSON.parse(xhr.responseText); //reponseText returns the entire JSON file and we assign it to a javascript variable "json".
                    document.getElementById('text1').innerHTML = json.collection.movie[0].title;; //get first value with "title" element
                } 
            }
        };
        request.send();
        document.getElementById('text3').innerHTML = "state: " + request.readyState;
        document.getElementById('text4').innerHTML = "status: " + request.status; 
    }
}

function getData_cors_chrome() {
    Origin: https://www.ajax-tutor.com
    //Access-Control-Allow-Origin: https://www.ajax-tutor.com
    
    var xhr = new XMLHttpRequest();
    xhr.open("get", "https://www.ajax-tutor.com/demo/movies.json", true);
    document.getElementById('text1').innerHTML = "CORS Chrome Loading...";
    xhr.onload = function(){  //instead of onreadystatechange
        document.getElementById('text2').innerHTML = "CORS Chrome Responding...";
        var json = JSON.parse(xhr.responseText); //reponseText returns the entire JSON file and we assign it to a javascript variable "json".
        document.getElementById('text1').innerHTML = json.collection.movie[0].title;; //get first value with "title" element
    }
    xhr.send(null);
    document.getElementById('text3').innerHTML = "state: " + xhr.readyState;
    document.getElementById('text4').innerHTML = "status: " + xhr.status; 
}