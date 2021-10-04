//Ressources used for coding : https://www.linkedin.com/learning/javascript-essential-training/pass-arguments-through-event-listeners
const urlFromIndex = "./asset/data/FishEyeData.json";
const urlFromOtherPages = "../asset/data/FishEyeData.json";
let urlOfHtmlPages = "./pages/";
let urlOfImagesPages = "./asset/img/Photographers ID Photos";
let urlOfImagesPagesOfPhotographers = "../asset/img/Photographers ID Photos";
let urlOfImagesPagesOfElie = "../asset/img/Ellie Rose";
let idOfPage;

let dataOfJsonFileMedia = [];
let dataOfJsonFileMediaAfterclassAssociation = [];
let dataOfJsonFileData = [];
let dataOfJsonFilePhotographer = [];
let dataOfJsonFilePhotographerAfterclassAssociation = [];
let filterToApply;
let tagListInHeader;
let tagListInHeaderAsArray = [];
let heartIcone;
let heartIconeAsArray = [];
let counterOfLikes;
let counterOfLikesAsArray = [];

let idOfMedia;
const typePhotographer = "photographers";
const typeMedia = "media";

class Photographers {
	id;
	photographerId;
	title;
	image;
	tags;
	likes;
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
	// returncard() {}
	// Ajouter une méhode pour retourner l'url de la page du photographe qui est égale à la concaténation des éléments du nom :
}

class Media {
	id;
	photographerId;
	title;
	image;
	video;
	tags;
	likes;
	date;
	price;
	constructor(
		id,
		photographerId,
		title,
		image,
		video,
		tags,
		likes,
		date,
		price
	) {
		this.id = id;
		this.photographerId = photographerId;
		this.title = title;
		this.image = image;
		this.video = video;
		this.tags = tags;
		this.likes = likes;
		this.date = date;
		this.price = price;
	}
}

function tagsTemplate(tagsData) {
	return ` ${tagsData
		.map(
			(tagsData) =>
				`<a href=${tagsData}><span aria-label="Event" class="hashtag-links">${tagsData}</span></a>`
		)
		.join("")}	`;
}
function placeDataInObject(dataOfJsonFilePhotographer) {
	// console.log(typeof dataOfJsonFilePhotographer)
	for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
		let name = dataOfJsonFilePhotographer[i].name;
		let id = dataOfJsonFilePhotographer[i].id;
		let city = dataOfJsonFilePhotographer[i].city;
		let country = dataOfJsonFilePhotographer[i].country;
		let tags = dataOfJsonFilePhotographer[i].tags;
		let tagline = dataOfJsonFilePhotographer[i].tagline;
		let price = dataOfJsonFilePhotographer[i].price;
		let portrait = dataOfJsonFilePhotographer[i].portrait;
		let url = urlOfHtmlPages + name.replace(" ", "-") + ".html";
		let urlOfPortrait = urlOfHtmlPages + name.replace(" ", "-") + ".html";
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
	}
}
function placeDataOfMediaInObject(dataOfJsonFileMedia) {
	// console.log(typeof dataOfJsonFilePhotographer)
	for (var i = 0; i < dataOfJsonFileMedia.length; i++) {
		let id = dataOfJsonFileMedia[i].id;
		let photographerId = dataOfJsonFileMedia[i].photographerId;
		let title = dataOfJsonFileMedia[i].title;
		let image = dataOfJsonFileMedia[i].image;
		let video = dataOfJsonFileMedia[i].video;
		let tags = dataOfJsonFileMedia[i].tags;
		let likes = dataOfJsonFileMedia[i].likes;
		let date = dataOfJsonFileMedia[i].date;
		let price = dataOfJsonFileMedia[i].price;

		// let url = urlOfImagesPages +  + image;
		dataOfJsonFileMediaAfterclassAssociation[i] = new Media(
			id,
			photographerId,
			title,
			image,
			video,
			tags,
			likes,
			date,
			price
		); //url
	}
}
const getData = async () => {
	try {
		dataOfJsonFileData = await doFetch();
		return dataOfJsonFileData;
	} catch (e) {
		console.log("Error");
		console.log(e);
	}
};

const doFetch = async function () {
	try {
		const response = await fetch(urlToApply);
		const myResult = await response.json();
		return myResult;
	} catch (error) {
		console.log(
			" Attention les données ne peuvent pas être obtenue en raison de l'erreur :",
			error
		);
	}
};
