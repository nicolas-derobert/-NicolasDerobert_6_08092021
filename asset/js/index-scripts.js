const filterOnHashtag = function (event, val) {
	filterToApply = val.id; //Filter to apply
	console.log(val.id);
	let articleElement = document.querySelectorAll("article");
	let articleElementAsArray = Array.prototype.slice.call(articleElement);
	console.log(articleElementAsArray);
	articleElementAsArray.forEach(function (val) {
		let tagToLookAt = val.querySelectorAll("div a span");
		let tagToLookAtAsArray = Array.prototype.slice.call(tagToLookAt);
		console.log("tableau de tous les tags de l'article");
		console.log(tagToLookAtAsArray);
		let tagFound = false;
		tagToLookAtAsArray.forEach(function (val2) {
			console.log(val2.innerHTML);

			if (val2.innerHTML == filterToApply) {
				tagFound = true;
			}
		});
		console.log(tagFound);
		if (tagFound === true) {
			val.classList.remove("notdisplayed");
			val.classList.add("displayed");
		} else {
			val.classList.remove("displayed");
			val.classList.add("notdisplayed");
		}
	});
};

//So to get the result back you can wrap this in an IIFE like this:
const mainFunction = async () => {
	let idOfPage = document.getElementsByTagName("body").id;
	console.log(idOfPage);
	if (idOfPage == index) {
		urlToApply = urlFromIndex;
	} else {
		urlToApply = urlFromOtherPages;
	}
	dataOfJsonFileData = await getData();
	dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;
	placeDataInObject(dataOfJsonFilePhotographer);
	// console.log(dataOfJsonFilePhotographerAfterclassAssociation[0].name)
	document.getElementById(
		"all-photographers"
	).innerHTML = `${dataOfJsonFilePhotographerAfterclassAssociation
		.map(photographersTemplate)
		.join("")}`;

	// To add eventlitener on tag -> Inspiration from video https://www.youtube.com/watch?v=JixTYeCLf4Q
	tagListInHeader = document.querySelectorAll("nav > span");
	tagListInHeaderAsArray = Array.prototype.slice.call(tagListInHeader);
	tagListInHeaderAsArray.forEach(function (val) {
		val.addEventListener("click", (event) => {
			console.log(val);
			filterOnHashtag(event, val);
		});
	});
};

function photographersTemplate(photographerData) {
	return `
	<article class="displayed" id="">
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

document.addEventListener("DOMContentLoaded", (event) => {
	mainFunction();
});
