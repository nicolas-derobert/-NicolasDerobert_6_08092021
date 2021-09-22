// Replace ./data.json with your JSON feed
let url = "./asset/data/FishEyeData.json";
let urlOfHtmlPages = "./pages/";
let dataOfJsonFileData;
let dataOfJsonFilePhotographer;
let dataOfJsonFilePhotographerAfterclassAssociation;
let dataOfJsonFileMedia;
const typePhotographer ='photographers'
const typeMedia ='media'

class Photographers {
	name;
	id;
	city;
	country;
	tags;
	tagline;
	price;
	portrait;
	url;
	constructor(name, id, city, country, tags, tagline, price, portrait, url) {
		this.name = name;
		this.id = id;
		this.city = city;
		this.country = country;
		this.tags = tags;
		this.tagline = tagline;
		this.price = price;
		this.portrait = portrait;
		this.url = url;
	}
	returncard() {}
	// Ajouter une méhode pour retourner l'url de la page du photographe qui est égale à la concaténation des éléments du nom :

}

async function associateObjects(inputData) {
	for (var i = 0; i < inputData.length; i++) {
		let name = inputData[i].name;
		let id = inputData[i].id;
		let city = inputData[i].city;
		let country = inputData[i].country;
		let tags = inputData[i].tags;
		let tagline = inputData[i].tagline;
		let price = inputData[i].price;
		let portrait = inputData[i].portrait;
		let dataOfJsonFilePhotographerAfterclassAssociation;
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
	}
	return dataOfJsonFilePhotographerAfterclassAssociation;
}

const getData = async function (url, type ) {
	try{
		const response = await fetch(url);
		// console.log(typeof response);
		// console.log( response);
		const myResult = await response.json();
		// console.log(typeof myResult);
		// console.log( myResult);
		// console.log( myResult.photographers);

		// console.log(myResult);
		// console.log(myResult.typeMedia);
		return myResult.photographers;
	}
	catch (error){
		console.log( ' Attention les données ne peuvent pas être obtenue en raison de l\'erreur :', error )
	}
}





function tagsTemplate(tagsData){
	return ` ${tagsData.map(tagsData => `<a href=${tagsData}><span aria-label="Event" class="hashtag-links">${tagsData}</span></a>`).join("")}	`;
}

function articleTemplate(photographerData) {
	return `
	<article>
	<a href="${photographerData.url}">
<div class="image-container">		<img
			src="asset/img/Photographers ID Photos/${photographerData.portrait}"
			alt="${photographerData.name}"
			aria-labelledby="nom"
			class="photograph-vignet"
		/></div>
		<h2 id="nom">${photographerData.name}</h2></a
	>
	<p class="location"><span>${photographerData.city}</span><span>${photographerData.country}</span></p>
	<p class="tagline">${photographerData.tagline}</p>
	<p class="price">${photographerData.price}</p>
	<div class="tags">

	</div>
</article>
	`;
  }
//	${tagsTemplate(photographerData.price)}
  function placeDataInObject(dataOfJsonFilePhotographer){
	for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
		let name = dataOfJsonFilePhotographer[i].name;
		let id = dataOfJsonFilePhotographer[i].id;
		let city = dataOfJsonFilePhotographer[i].city;
		let country = dataOfJsonFilePhotographer[i].country;
		let tags = dataOfJsonFilePhotographer[i].tags;
		let tagline = dataOfJsonFilePhotographer[i].tagline;
		let price = dataOfJsonFilePhotographer[i].price;
		let portrait = dataOfJsonFilePhotographer[i].portrait;
		let url = urlOfHtmlPages + name.replace(' ', '-') + 'html'
		dataOfJsonFilePhotographerAfterclassAssociation[i] = new Photographers(
			name,
			id,
			city,
			country,
			tags,
			tagline,
			price,
			portrait,
			url
		);
        console.log(dataOfJsonFilePhotographerAfterclassAssociation[i]);
	}
  }

function main() {
	dataOfJsonFilePhotographer =  getData(url,typePhotographer);
	// dataOfJsonFileMedia = getData(url,typeMedia);
	console.log(dataOfJsonFilePhotographer);
	// console.log(dataOfJsonFileMedia);

	// dataOfJsonFilePhotographerAfterclassAssociation = placeDataInObject(dataOfJsonFilePhotographer);
	// 	console.log(element);
	// document.getElementById("all-photographers").innerHTML = `${dataOfJsonFilePhotographerAfterclassAssociation.map(articleTemplate).join("")}`;
	// console.log(dataOfJsonFileData);
	// console.log(dataOfJsonFileMedia);
	// console.log(dataOfJsonFilePhotographerAfterclassAssociation[i]);
    
}

main();

//     console.log(dataOfJsonFilePhotographerAfterclassAssociation[0]);
// document.getElementById(
// 	"myvalues"
// ).innerHTML = `Hello ${value.photographers[1]} `;
// window.alert("Bonjour !");
// document.getElementById("myvalues").innerHTML = "Hello";
// document.getElementById("demo").innerHTML = "Paragraph changed!";

// document.getElementById("myvalues").innerHTML =`Hello ${response.photographers.name} `;
