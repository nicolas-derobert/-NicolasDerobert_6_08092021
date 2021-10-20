//Ressources used for coding : https://www.linkedin.com/learning/javascript-essential-training/pass-arguments-through-event-listeners

// All const and variables that are used for website wit a global scope
//URL
const urlFromIndex = "./asset/data/FishEyeData.json";
const urlFromOtherPages = "../asset/data/FishEyeData.json";
const urlOfHtmlPages = "./pages/";
const urlOfImagesPages = "./asset/img/Photographers ID Photos";
const urlOfImagesPagesOfPhotographers = "../asset/img/Photographers ID Photos";
const urlOfImagesPagesOfElie = "../asset/img/Ellie Rose";
// array of data

let dataOfJsonFileMedia = [];
let dataOfJsonFileMediaAfterclassAssociation = [];
let dataOfJsonFileData = [];
let dataOfJsonFilePhotographer = [];
let dataOfJsonFilePhotographerAfterclassAssociation = [];
let tagListInHeaderAsArray = [];
let heartIconeAsArray = [];
let counterOfLikesAsArray = [];

let heartIcone;
let counterOfLikes;
let idOfPage;
let filterToApply;
let tagListInHeader;
let idOfMedia;
let dropboxStatus;

// const typePhotographer = "photographers";
// const typeMedia = "media";

class Photographers {
	name;
	id;
	city;
	country;
	tags;
	tagline;
	price;
	portrait;
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
	Isliked;
	constructor(
		id,
		photographerId,
		title,
		image,
		video,
		tags,
		likes,
		date,
		price,
		Isliked
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
		this.Isliked = Isliked;
	}
}

// function tagsTemplate(tagsData) {
// 	return ` ${tagsData
// 		.map(
// 			(tagsData) =>
// 				`<a href=${tagsData}><span aria-label="${tagsData}" class="hashtag-links" role="link">${tagsData}</span></a>`
// 		)
// 		.join("")}	`;
// }
function tagsTemplate(tagsData) {
	return ` ${tagsData
		.map(
			(tagsData) => `<a href=${tagsData} class="hashtag-links">${tagsData}</a>`
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
		// let urlOfPortrait = urlOfHtmlPages + name.replace(" ", "-") + ".html";
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
		let Isliked = false;

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
			price,
			Isliked
		); //url
	}
}
const getData = async () => {
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

