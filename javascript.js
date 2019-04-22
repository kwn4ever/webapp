/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*var listOfObjects = [];
var a = ["car", "bike", "scooter"];
a.forEach(function(entry) {
    var singleObj = {}
    singleObj['type'] = 'vehicle';
    singleObj['value'] = entry;
    listOfObjects.push(singleObj);
});

console.log(listOfObjects);*/

//const DOG_URL = "https://dog.ceo/api/breeds/image/random";
/*
const THINGS_URL = "https://uinames.com/api/?amount=10";
  
const promise = fetch(THINGS_URL);
//const doggos = document.querySelector(".doggos");

promise
  .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
  })
  .then(function(processedResponse) {
        const name = document.createElement("name");
        name.src = processedResponse.message;
        name.alt = "Cute doggo";
        //doggos.appendChild(img);
        name.forEach(function(entry) {
            var singleObj = {};
            singleObj['type'] = 'thing';
            singleObj['value'] = entry;
            listOfObjects.push(singleObj);
        });
  });
*/
function getData() {
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
            document.getElementById('demo').innerHTML = "Loading...";
        else if (xhr.readyState === 4) {
            if (xhr.status == 200 && xhr.status < 300)
            {
                document.getElementById('demo2').innerHTML = "Responding...";
                var json = JSON.parse(xhr.responseText); //reponseText returns the entire JSON file and we assign it to a javascript variable "json".
                document.getElementById('demo').innerHTML = json.collection.movie[0].title;; //get first value with "title" element
            } 
        }
    }
    // 2. Handle Response from Server - End
    
    document.getElementById('demo3').innerHTML = "state";
    document.getElementById('demo4').innerHTML = xhr.readyState;

    // 3. Specify your action, location and Send to the server - Start   
    xhr.open('GET', 'https://www.ajax-tutor.com/demo/movies.json');
    xhr.send(null);
    // 3. Specify your action, location and Send to the server - End
}

function getData2() {
    const T_URL = "https://www.ajax-tutor.com/demo/movies.json";
  
    const promise = fetch(T_URL);
    //const doggos = document.querySelector(".doggos");

    promise
      .then(function(response) {
        document.getElementById('demo').innerHTML = "Loading...";   
        const processingPromise = response.json();
        return processingPromise;
      })
      .then(function(processedResponse) {
        document.getElementById('demo').innerHTML = "Processing...";   
        const img = document.createElement("img");
        img.src = processedResponse.message;
        //img.alt = "Cute doggo";
        //doggos.appendChild(img);
      });
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    //li = ul.getElementsByTagName("li");
    li = listOfObjects;
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

function getData3(){
    fetch('https://api.github.com/users')
    .then(res => res.json())//response type
    .then(data => console.log(data)); //log the data;

}

async function getData4(){
    //async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://api.github.com/users');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
        //call getData function
        getData()
        .then(data => console.log(data));//log the data
}
