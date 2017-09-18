//Hard coded json file
var myobject = {

    "pet": [{
        "name": "jocko",
        "sex": "male",
        "species": "cat",
        "age": "7.5 months",
        "color": "buff/tabby",
        "breed": "Domestic Medium Hair",
        "weight": "4.40",
        "spayed": "true",
    }, {
        "name": "rose",
        "sex": "female",
        "species": "cat",
        "DOB": "5/4/2016",
        "color": "grey",
        "breed": "Domestic short hair",
        "weight": "5.25",
        "spayed": "false",
        "chip": "982000410760935"
    }], //get number of pets of owner
    get num_pets() {
        return this.owner.pets.length
    }
};

//Display random cat API
function rCAT() {
    div = document.createElement('div');
    div.id = "randomAPI";
    document.getElementById('user-form').appendChild(div);

    var src = "http://thecatapi.com/api/images/get?format=src&type=gif"
    img = document.createElement('img');
    img.src = src;
    document.getElementById('randomAPI').appendChild(img);

}


//true/false validator
function tfValid(s) {

    var yes = "yes";
    var no = "no";
    if (s === 'true') {
        return yes;
    } else
        return no;
}


//grab results div in html
x = document.getElementById('result_1');
y = document.getElementById('result_2');

window.onload = rCAT;

// Unsolved problem 
// To display the detail only once. 
// create seperation in between two cat's details

y.innerHTML = "Today's date: " + (Date());
//display json data to html with DOM manipulation
$('#submit').on("click", function() {
    document.getElementById('randomAPI').innerHTML = "";
    document.getElementById('flex_wrapper').style.marginTop = "65px";
    y.innerHTML += "<p>" + "<br>" + "pet's detail: " + "<br>";
    y.innerHTML += "name: " + myobject.pet[0].name + "<br>";
    y.innerHTML += "gender: " + myobject.pet[0].sex + "<br>";
    y.innerHTML += "species: " + myobject.pet[0].species + "<br>";
    y.innerHTML += "age: " + myobject.pet[0].age + "<br>";
    y.innerHTML += "color: " + myobject.pet[0].color + "<br>";
    y.innerHTML += "breed: " + myobject.pet[0].breed + "<br>";
    y.innerHTML += "weight: " + myobject.pet[0].weight + "lb" + "<br>";
    y.innerHTML += "spayed: " + tfValid(myobject.pet[0].spayed) + "<br>";
    y.innerHTML += "<br>";
    y.innerHTML += "<br>";
    y.innerHTML += "name: " + myobject.pet[1].name + "<br>";
    y.innerHTML += "gender: " + myobject.pet[1].sex + "<br>";
    y.innerHTML += "species: " + myobject.pet[1].species + "<br>";
    y.innerHTML += "DOB: " + myobject.pet[1].DOB + "<br>";
    y.innerHTML += "color: " + myobject.pet[1].color + "<br>";
    y.innerHTML += "breed: " + myobject.pet[1].breed + "<br>";
    y.innerHTML += "weight: " + myobject.pet[1].weight + "lb" + "<br>";
    y.innerHTML += "spayed: " + tfValid(myobject.pet[1].spayed) + "<br>";
    y.innerHTML += "chip#: " + myobject.pet[1].chip + "<br>";
    y.innerHTML += "</p>";
    something();
});




//to display my cats
$('#submit').on("click", function() {

    var src = "https://www.instagram.com/p/BZFcEXwg1Sm/embed/",
        div = document.createElement('div'); //creating a div tag
    div.id = "left"; //assignning id left to the div
    document.getElementById('result_1').appendChild(div) //append the div to result_2 div

    //    img = document.createElement('img');
    // img.src = src;
    // document.getElementById('result_2').appendChild(img);

    iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.setAttribute('scrolling','no');
    iframe.width = "400";
    iframe.height = "650";
    document.getElementById('result_1').appendChild(iframe);

});


var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
        }
    };
})();




//reload the page to get new random cat gif
$('#reset').on("click", function() {
    window.location.reload();
});