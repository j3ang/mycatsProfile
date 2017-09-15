//Hard coded json file
var myobject = {
	"owner": {
		"name": "junfeng wang",
		"age": "22",
		"email": "jwang206@hawk.iit.edu",
		"pets": [
		"jocko",
		"rose"
		],
		"phones": {
			"home": "800-123-4567",
			"cell": "977-1233-4567"
		}
	},
	"pet": [
	{
		"name": "jocko",
		"sex": "male",
		"species": "cat",
		"age": "7.5 months",
		"color": "buff/tabby",
		"breed": "Domestic Medium Hair",
		"weight": "4.40",
		"spayed": "true",
	},
	{
		"name": "rose",
		"sex": "female",
		"species": "cat",
		"DOB": "5/4/2016",
		"color": "grey",
		"breed": "Domestic short hair",
		"weight": "5.25",
		"spayed": "true",
		"chip": "982000410760935"
	}
	],		//get number of pets of owner
			get num_pets() {
			return this.owner.pets.length
			}
};

//function to get gif
var getGif = function(){
	var gif = [];
	$('img').each(function(){
		var data = $(this).data('alt');
		gif.push(data);
	});
	return gif;
}


//grab results div in html
x = document.getElementById('result_1');
y = document.getElementById('result_2');
x.innerHTML = "Today's date: " + (Date());

//display json data to html with DOM manipulation
$('#submit').on("click", function(){
	x.innerHTML += "<P>" + "<br>" + "owners detail: " + "<br>";
	x.innerHTML += "name: " + myobject.owner.name.toUpperCase() + "<br>";
	x.innerHTML += "age: " + myobject.owner.age + "<br>";
	x.innerHTML += "email: " + myobject.owner.email + "<br>";
	x.innerHTML += "pets: " + myobject.num_pets + "<br>";
	x.innerHTML += "home: " + myobject.owner.phones.home + "<br>";
	x.innerHTML += "cell: " + myobject.owner.phones.cell + "<br>" + "</p>";

	y.innerHTML += "<p>" + "<br>" + "pet's detail: " + "<br>";
	y.innerHTML += "name: " + myobject.pet[0].name + "<br>";
	y.innerHTML += "gender: " + myobject.pet[0].sex + "<br>";
	y.innerHTML += "species: " + myobject.pet[0].species + "<br>";
	y.innerHTML += "age: " + myobject.pet[0].age + "<br>";
	y.innerHTML += "color: " + myobject.pet[0].color + "<br>";
	y.innerHTML += "breed: " + myobject.pet[0].breed + "<br>";
	y.innerHTML += "weight: " + myobject.pet[0].weight + "lb" + "<br>";
	y.innerHTML += "spayed: " + myobject.pet[0].spayed + "<br>";
	y.innerHTML += "<br>";
	y.innerHTML += "name: " + myobject.pet[1].name + "<br>";
	y.innerHTML += "gender: " + myobject.pet[1].sex + "<br>";
	y.innerHTML += "species: " + myobject.pet[1].species + "<br>";
	y.innerHTML += "DOB: " + myobject.pet[1].DOB + "<br>";
	y.innerHTML += "color: " + myobject.pet[1].color + "<br>";
	y.innerHTML += "breed: " + myobject.pet[1].breed + "<br>";
	y.innerHTML += "weight: " + myobject.pet[1].weight + "lb" + "<br>";
	y.innerHTML += "chip#: " + myobject.pet[1].chip + "<br>";



	y.innerHTML += "</p>";

});

$('#submit').on("click", function(){
	var gif = [];
	$('img').each(function(){
		var data = $(this).data('alt');
		gif.push(data);
	});
	return gif;
});

//clear the content of results div
$('#reset').on("click", function(){
	x.innerHTML = "";
	x.innerHTML = "Today's date: " + (Date());
	y.innerHTML = "";
});