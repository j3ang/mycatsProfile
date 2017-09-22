//Hard coded json data
var pets = {
    "jocko": {
        "sex": "male",
        "species": "cat",
        "DOB": "1/1/2017",
        "color": "buff/tabby",
        "breed": "Domestic Medium Hair",
        "weight": "4.40",
        "spayed": "true",
        "chip": "982000410760935"
    },
    "rose": {
        "sex": "female",
        "species": "cat",
        "DOB": "5/4/2016",
        "color": "grey",
        "breed": "Domestic short hair",
        "weight": "5.25",
        "spayed": "false",
        "chip": "9820000410760935"
    }
}

//future use
var rabies_vaccine = {
    "jocko": {
        "producer": "merck",
        "vaccine_lot_number": "165179 (expires 9/19/2017)",
        "tag_number": "14985",
        "date_vaccinated": "3/1/2017",
        "expires": "3/1/2018",
        "veterinarian": "lauren adduci license #24007962A",
        "clinic_info": "4525 s burnett drive, south bend, in, 46614 (574-291-7729)"
    },
    "rose": {
        "name": "rose",
        "producer": "merck",
        "vaccine_lot_number": "165179 (expires 9/19/2017)",
        "tag_number": "14985",
        "date_vaccinated": "3/1/2017",
        "expires": "3/1/2018",
        "veterinarian": "lauren adduci license #24007962A",
        "clinic_info": "4525 s burnett drive, south bend, in, 46614 (574-291-7729)"
    }
};

//DOM shorcut variables 
main = document.getElementById("main_content");
flex = document.getElementById("flex_wrapper");
l = document.getElementById("content_left");
r = document.getElementById("content_right");

//page onload 
document.addEventListener("DOMContentLoaded", function(event) {

    //disable reset button onload
    // document.getElementById("reset").disabled = true;
    document.getElementById("reset").style.visibility = "hidden";

    //content on the left
    l_section = document.createElement("section");
    l_section.id = "content_left";
    l_img = document.createElement("img");
    l_img.id = "img_left";
    var src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    l_img.src = src;
    l_img.alt = "cats_API";
    l_section.appendChild(l_img);
    flex.appendChild(l_section);
    console.log("img_left loaded");

    //content on the right
    r_section = document.createElement("section");
    r_section.id = "content_right";
    r_img = document.createElement("img");
    r_img.id = "img_right";
    r_img.src = src;
    r_img.alt = "cats_API";
    r_section.appendChild(r_img);
    flex.appendChild(r_section);
    console.log("img_right loaded");

    //time
    time = document.createElement("time");
    time.id = "time";
    var d = document.createTextNode(Date());
    time.appendChild(d);
    flex_wrapper.appendChild(time);
    console.log("Time loaded");

});

//detail button - display json data to html with DOM manipulation
$("#detail").on("click", function() {

    // validate if content has displayed, if so disable detail button
    if (document.getElementById("reset").disabled = true) {
        document.getElementById("detail").disabled = true;
    }

    showInfo();
    showIns();
});

//reset button - removes content in left and right section
$("#reset").on("click", function() {

    //enable detail button
    document.getElementById("detail").disabled = false;
    document.getElementById("reset").style.visibility = "hidden";


    l_section.innerHTML = "";
    r_section.innerHTML = "";
});

//function to show infomation of pets from the json objects
function showInfo() {

    //enable reset button
    document.getElementById("reset").disabled = false;
    document.getElementById("reset").style.visibility = "visible";

    //clear out content first
    l_section.innerHTML = "";
    r_section.innerHTML = "";

    //create a wrapper with background
    wrapper_div = document.createElement("div");
    wrapper_div.id = "right_content_wrapper";
    wrapper_div.appendChild(time);

    //create unordered list
    ulist = document.createElement("ul");
    ulist.id = "pets_detail";


    //first line jocko in list 
    //create text to be appened in <li> tag
    list_jocko = document.createElement("li");
    jtxt = document.createTextNode("name" + ": " + Object.keys(pets)[0]);
    list_jocko.appendChild(jtxt);
    ulist.appendChild(list_jocko);
    //for loop to get keys and values in <li> tag. Tried "for each loop", but it won"t create new line with <li> or \n
    for (var i = 0; i < Object.keys(pets.jocko).length; i++) {
        list_jocko = document.createElement("li");
        list_jocko.id = "list" + i + 1;
        jtxt = document.createTextNode(Object.keys(pets.jocko)[i] + ": " + tfValid(Object.values(pets.jocko)[i]));
        list_jocko.appendChild(jtxt);
        ulist.appendChild(list_jocko);
    }

    //first line rose name in list
    //create text to be appened in <li> tag
    list_rose = document.createElement("li");
    jtxt = document.createTextNode("name" + ": " + Object.keys(pets)[1]);
    list_rose.appendChild(jtxt);
    ulist.appendChild(list_rose);
    //for loop
    for (var r = 0; r < Object.keys(pets.rose).length; r++) {
        list_rose = document.createElement("li");
        list_rose.id = "list" + r + 1;
        rtxt = document.createTextNode(Object.keys(pets.rose)[r] + ": " + tfValid(Object.values(pets.rose)[r]));
        list_rose.appendChild(rtxt);
        ulist.appendChild(list_rose);
    }


    //append list to the <ul> tag
    r_section.appendChild(wrapper_div);
    wrapper_div.appendChild(ulist);
}

//function to display instagram pics with iframe
function showIns() {
    var src = "https://www.instagram.com/p/BZFcEXwg1Sm/embed/",

    iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.setAttribute("scrolling", "no");
    l_section.appendChild(iframe) //append the div to result_2 div
}

//true/false validator
function tfValid(s) {

    var yes = "yes";
    var no = "no";
    if (s === "true") {
        return yes;
    }
    if (s === "false"){
        return no;
    } else
        return s;
}




// //Display list of details of pets
// r_section.innerHTML += "<li>" + "name: " + Object.keys(pets)[0] + "</li>";
// Object.keys(pets.jocko).forEach(function(key) {
//     r_section.innerHTML +=  "<li>" + key + ": " + pets.jocko[key] + "</li>";
// });
// // r_section.innerHTML += "<li>" + "" + "</li>";
// // r_section.innerHTML += "<li>" + "name: " + Object.keys(pets)[1] + "</li>";

// Object.keys(pets.rose).forEach(function(key) {
//     // r_section.innerHTML += "<li>";
//     list = document.createTextNode(key + ": " + pets.rose[key] );

//     // r_section.innerHTML += "</li>";
//     ulist.appendChild(list);
//     console.log(list);
//     r_section.appendChild(ulist);
// });