//Ressources used for coding : https://www.linkedin.com/learning/javascript-essential-training/pass-arguments-through-event-listeners
//Global strucure of code :
//-generic-scripts.js generic page
//-index-scripts.js
//-select-menu-scripts

// All const and variables that are used for website wit a global scope
//URL
const urlFromIndex = "./asset/data/FishEyeData.json";
const urlFromOtherPages = "../asset/data/FishEyeData.json";
const urlOfHtmlPages = "./pages/";
const urlOfImagesPages = "./asset/img/Photographers ID Photos";
const urlOfImagesPagesOfPhotographers = "../asset/img/Photographers ID Photos";
const urlOfImages = "../asset/img/";
const urlOfImagesPagesOfElie = "../asset/img/Ellie Rose";
let urlOfImagesPagesToapply;
let currentPhotographer;

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


function tagsTemplate(tagsData) {
	return ` ${tagsData
		.map(
			(tagsData) =>
				`<span href=${tagsData} class="hashtag-links">${tagsData}</span>`
		)
		.join("")}	`;
}


//This function get data from JsonFile
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

function createAPhotographe(
	name,
	id,
	city,
	country,
	tags,
	tagline,
	price,
	portrait
) {
	function url() {
		let url = urlOfHtmlPages + name.replace(" ", "-") + ".html";
		url = url.toLowerCase();
		return url;
	}
	return {
		name,
		id,
		city,
		country,
		tags,
		tagline,
		price,
		portrait,
		url,
	};
}
// Function to place data in object
function placeDataInObject(dataOfJsonFilePhotographer) {
	for (var i = 0; i < dataOfJsonFilePhotographer.length; i++) {
		let name = dataOfJsonFilePhotographer[i].name;
		let id = dataOfJsonFilePhotographer[i].id;
		let city = dataOfJsonFilePhotographer[i].city;
		let country = dataOfJsonFilePhotographer[i].country;
		let tags = dataOfJsonFilePhotographer[i].tags;
		let tagline = dataOfJsonFilePhotographer[i].tagline;
		let price = dataOfJsonFilePhotographer[i].price;
		let portrait = dataOfJsonFilePhotographer[i].portrait;
		dataOfJsonFilePhotographerAfterclassAssociation[i] = createAPhotographe(
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
}

function createAMedia(
	id,
	photographerId,
	title,
	image,
	video,
	tags,
	likes,
	date,
	price,
	isLiked
) {
	return {
		id,
		photographerId,
		title,
		image,
		video,
		tags,
		likes,
		date,
		price,
		isLiked,
	};
}

// Function to place data in object
function placeDataOfMediaInObject(dataOfJsonFileMedia) {
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
		let isLiked = false;
		dataOfJsonFileMediaAfterclassAssociation[i] = createAMedia(
			id,
			photographerId,
			title,
			image,
			video,
			tags,
			likes,
			date,
			price,
			isLiked
		); //url
	}
}
