
// Replace ./data.json with your JSON feed

class Photographers {
	name;
	id;
	city;
	country;
	tags;
	tagline;
	price;
	portrait;
	constructor(name, id, city, country, tags, tagline, price, portrait) {
		this.name = name;
		this.id = id;
		this.city = city;
		this.country = country;
		this.tags = tags;
		this.tagline = tagline;
		this.price = price;
		this.portrait = portrait;
	}
	returncard() {}
}
let dataOfJsonFileData = [];
let dataOfJsonFilePhotographer;
let dataOfJsonFilePhotographerAfterclassAssociation = new Array();
let dataOfJsonFileMedia;
let url = "./asset/data/FishEyeData.json"

async function  doFetch(){
    const response = await fetch(url);
    const myResult = await response.json();
    dataOfJsonFileData = myResult;
}
doFetch()
console.log(dataOfJsonFileData);
dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;
dataOfJsonFileMedia = dataOfJsonFileData.media;

for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
	let name = dataOfJsonFilePhotographer[i].name;
	let id = dataOfJsonFilePhotographer[i].id;
	let city = dataOfJsonFilePhotographer[i].city;
	let country = dataOfJsonFilePhotographer[i].country;
	let tags = dataOfJsonFilePhotographer[i].tags;
	let tagline = dataOfJsonFilePhotographer[i].tagline;
	let price = dataOfJsonFilePhotographer[i].price;
	let portrait = dataOfJsonFilePhotographer[i].portrait;
	dataOfJsonFilePhotographerAfterclassAssociation[i] = new Photographers(
		name,
		id,
		city,
		country,
		tags,
		tagline,
		price,
		portrait
	);
// }

//ESSAI 1
// fetch("./asset/data/FishEyeData.json")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((value) => {
// 		dataOfJsonFilePhotographer = value.photographers;
// 		dataOfJsonFileMedia = value.media;
// 		for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
// 			let name = dataOfJsonFilePhotographer[i].name;
// 			let id = dataOfJsonFilePhotographer[i].id;
// 			let city = dataOfJsonFilePhotographer[i].city;
// 			let country = dataOfJsonFilePhotographer[i].country;
// 			let tags = dataOfJsonFilePhotographer[i].tags;
// 			let tagline = dataOfJsonFilePhotographer[i].tagline;
// 			let price = dataOfJsonFilePhotographer[i].price;
// 			let portrait = dataOfJsonFilePhotographer[i].portrait;
// 			dataOfJsonFilePhotographerAfterclassAssociation[i] = new Photographers(
// 				name,
// 				id,
// 				city,
// 				country,
// 				tags,
// 				tagline,
// 				price,
// 				portrait
// 			);
// 		}
// 	})
// 	.catch((err) => {
// 		// Do something for an error here
// 	});

// ESSAI 2 
// fetch("./asset/data/FishEyeData.json")
// 	.then((value) => {
// 		return value.json();
// 	})
// 	.then((value) => {
//         console.log(value);
// 		dataOfJsonFileData = value;

// 	});
//     console.log(dataOfJsonFileData);

// console.log(dataOfJsonFileData);
// dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;
// dataOfJsonFileMedia = dataOfJsonFileData.media;

// for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
// 	let name = dataOfJsonFilePhotographer[i].name;
// 	let id = dataOfJsonFilePhotographer[i].id;
// 	let city = dataOfJsonFilePhotographer[i].city;
// 	let country = dataOfJsonFilePhotographer[i].country;
// 	let tags = dataOfJsonFilePhotographer[i].tags;
// 	let tagline = dataOfJsonFilePhotographer[i].tagline;
// 	let price = dataOfJsonFilePhotographer[i].price;
// 	let portrait = dataOfJsonFilePhotographer[i].portrait;
// 	dataOfJsonFilePhotographerAfterclassAssociation[i] = new Photographers(
// 		name,
// 		id,
// 		city,
// 		country,
// 		tags,
// 		tagline,
// 		price,
// 		portrait
// 	);
// }
console.log(dataOfJsonFilePhotographerAfterclassAssociation[0]);
document.getElementById(
	"myvalues"
).innerHTML = `Hello ${value.photographers[1]} `;
// window.alert("Bonjour !");
// document.getElementById("myvalues").innerHTML = "Hello";
// document.getElementById("demo").innerHTML = "Paragraph changed!";

// document.getElementById("myvalues").innerHTML =`Hello ${response.photographers.name} `;
function placeDataInObject(dataOfJsonFilePhotographer) {
	// console.log(typeof dataOfJsonFilePhotographer)
	for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
		console.log(typeof dataOfJsonFilePhotographer[i].name);
		let name = dataOfJsonFilePhotographer[i].name;
		console.log(name);
		console.log(typeof name);
		// let url = urlOfHtmlPages + name.replace(" ", "-") + "html";
		dataOfJsonFilePhotographerAfterclassAssociation[i] = new Photographers(
			name
		);
		console.log(dataOfJsonFilePhotographerAfterclassAssociation[i]);
	}
}
class Photographers {
	name;

	// url;
	constructor(name) {
		this.name = name;
	}
	// returncard() {}
	// Ajouter une méhode pour retourner l'url de la page du photographe qui est égale à la concaténation des éléments du nom :
}

function filterOnHashtag() {
	console.log(this.value);
	// alert(this.id);
	filterToApply = this.id; //Filter to apply
	let articleElement = document.querySelectorAll("article");
	let articleElementAsArray = Array.prototype.slice.call(articleElement);
	// console.log(typeof articleElementAsArray);
	articleElementAsArray.forEach(function (val) {
		let tagToLookAt = val.querySelectorAll("div a span");
		let tagToLookAtAsArray = Array.prototype.slice.call(tagToLookAt);
		// console.log(tagToLookAtAsArray);
		// console.log(typeof tagToLookAtAsArray);
		// console.log(val);
		// console.log(typeof val);
		let tagNumber = 1 ;
		tagToLookAtAsArray.forEach(function (val2) {
			// console.log(val2);
			// console.log(typeof val2);
			let tagFound = false;
			console.log("Tag numero " + tagNumber );
			tagNumber++;
			if (val2.innerHTML == filterToApply) {
				tagFound = true;
			} else {
				tagFound = false;
			}
			if (tagFound === true) {
				val.classList.remove("notdisplayed");
				console.log(val);
			} else {
				// console.log(val);
				val.classList.add("notdisplayed");
			}
		});
	});
}