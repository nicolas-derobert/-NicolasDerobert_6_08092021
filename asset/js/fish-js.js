// Replace ./data.json with your JSON feed
let url = "./asset/data/FishEyeData.json";
let urlOfHtmlPages = "./pages/";
let dataOfJsonFileData = [];
let dataOfJsonFilePhotographer = [];
let dataOfJsonFilePhotographerAfterclassAssociation = [];
let dataOfJsonFileMedia = [];
let filterToApply;
const typePhotographer = "photographers";
const typeMedia = "media";


class Photographers {
	name;
	id;
	city;
	country;
	tags;
	tagline;
	price;
	portrait;
	// url;
	constructor(name, id, city, country, tags, tagline, price, portrait) {
		this.name = name;
		this.id = id;
		this.city = city;
		this.country = country;
		this.tags = tags;
		this.tagline = tagline;
		this.price = price;
		this.portrait = portrait;
		// this.url = url;
	}
	// returncard() {}
	// Ajouter une méhode pour retourner l'url de la page du photographe qui est égale à la concaténation des éléments du nom :
}

//Asynch function to get data and add the await keyword : Inspiration from https://flaviocopes.com/how-to-return-result-asynchronous-function/
const doFetch = async function () {
	try {
		const response = await fetch(url);
		const myResult = await response.json();
		return myResult;
	} catch (error) {
		console.log(
			" Attention les données ne peuvent pas être obtenue en raison de l'erreur :",
			error
		);
	}
};
//In this case in mainFunction we need to add async to the function signature, and await before we call asynchronousFunction():
const getData = async () => {
	try {
		dataOfJsonFileData = await doFetch();
		return dataOfJsonFileData;
	} catch (e) {
		console.log("Error");
		console.log(e);
	}
};
// Now this returns a promise, because it’s an async function:
getData();

function filterOnHashtag() {
	console.log(this.value);
	alert(this.id);
	filterToApply = this.id;
	let articleElement = document.querySelectorAll("article");
	console.log(articleElement);
	let articleElementAsArray = Array.prototype.slice.call(articleElement);
	articleElementAsArray.forEach(function (val) {
		let tagToLookAt = val.querySelectorAll("div a span");
		let tagToLookAtAsArray = Array.prototype.slice.call(tagToLookAt);
		tagToLookAtAsArray.forEach(function (val2) {
			let tagFound = false;
			if (val2.innerHTML == filterToApply) {
				alert("trouvé");
				tagFound = true;
			} else {
				tagFound = false;
			}
			if (tagFound === true) {
				val.classList.remove("notdisplayed");
				console.log("notdisplayed removed");
			} else {
				val.classList.add("notdisplayed");
			}
		});
	});
}
//So to get the result back you can wrap this in an IIFE like this:
(async () => {
	dataOfJsonFileData = await getData();
	dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;
	placeDataInObject(dataOfJsonFilePhotographer);
	console.log(dataOfJsonFilePhotographerAfterclassAssociation[0].name)
	document.getElementById(
		"all-photographers"
	).innerHTML = `${dataOfJsonFilePhotographer
		.map(photographersTemplate)
		.join("")}`;
	//To add eventlitener on tag -> Inspiration from video https://www.youtube.com/watch?v=JixTYeCLf4Q
	let tagListInHeader = document.querySelectorAll("nav > a");
	let tagListInHeaderAsArray = Array.prototype.slice.call(tagListInHeader);
	tagListInHeaderAsArray.forEach(function (val) {
		val.addEventListener("click", filterOnHashtag);
		// console.log(val);
	});
})();

// const found = array1.find(element => element > 10);
// filterToApply

function tagsTemplate(tagsData) {
	return ` ${tagsData
		.map(
			(tagsData) =>
				`<a href=${tagsData}><span aria-label="Event" class="hashtag-links">${tagsData}</span></a>`
		)
		.join("")}	`;
}

function photographersTemplate(photographerData) {
	return `
	<article class="">
	<a href="${photographerData.url}">
<div class="image-container">		<img
			src="asset/img/Photographers ID Photos/${photographerData.portrait}"
			alt="${photographerData.name}"
			aria-labelledby="nom"
			class="photograph-vignet"
		/></div>
		<h2 id="nom">${photographerData.name}</h2></a
	>
	<p class="location">${photographerData.city + " "} ${
		photographerData.country
	}</p>
	<p class="tagline">${photographerData.tagline}</p>
	<p class="price">${photographerData.price}</p>
	<div class="tags">
${tagsTemplate(photographerData.tags)}
	</div>
</article>
	`;
}

//	${tagsTemplate(photographerData.price)}

function placeDataInObject(dataOfJsonFilePhotographer) {
	console.log(typeof dataOfJsonFilePhotographer)
	for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
		let name = dataOfJsonFilePhotographer[i].name;
		let id = dataOfJsonFilePhotographer[i].id;
		let city = dataOfJsonFilePhotographer[i].city;
		let country = dataOfJsonFilePhotographer[i].country;
		let tags = dataOfJsonFilePhotographer[i].tags;
		let tagline = dataOfJsonFilePhotographer[i].tagline;
		let price = dataOfJsonFilePhotographer[i].price;
		let portrait = dataOfJsonFilePhotographer[i].portrait;
		// console.log(portrait);
		// console.log(typeof portrait);
		// let url = urlOfHtmlPages + name.replace(" ", "-") + "html";
		dataOfJsonFilePhotographerAfterclassAssociation[i] = new Photographers(
			name,
			id,
			city,
			country,
			tags,
			tagline,
			price,
			portrait
			// url
		);
		console.log(dataOfJsonFilePhotographerAfterclassAssociation[i]);
	}
}
