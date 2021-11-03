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



// class Photographers {
// 	name;
// 	id;
// 	city;
// 	country;
// 	tags;
// 	tagline;
// 	price;
// 	portrait;
// 	constructor(name, id, city, country, tags, tagline, price, portrait, url) {
// 		this.name = name;
// 		this.id = id;
// 		this.city = city;
// 		this.country = country;
// 		this.tags = tags;
// 		this.tagline = tagline;
// 		this.price = price;
// 		this.portrait = portrait;
// 		this.url = url;
// 	}

// }

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

		// let url = urlOfHtmlPages + name.replace(" ", "-") + ".html";
		// url = url.toLowerCase();
		// let urlOfPortrait = urlOfHtmlPages + name.replace(" ", "-") + ".html";
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
) {
	function isLiked() {
        let isLiked = false;
        return isLiked
	}
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
		isLiked
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
		// let url = urlOfImagesPages +  + image;
		dataOfJsonFileMediaAfterclassAssociation[i] =  createAMedia(
			id,
			photographerId,
			title,
			image,
			video,
			tags,
			likes,
			date,
			price,
		); //url
	}
}
