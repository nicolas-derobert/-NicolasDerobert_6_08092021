const filterOnHashtag = function (event, val) {
	filterToApply = val.id; //Filter to apply
	let articleElement = document.querySelectorAll("article");
	let articleElementAsArray = Array.prototype.slice.call(articleElement);
	console.log(typeof articleElementAsArray);
	articleElementAsArray.forEach(function (val) {	

		let tagToLookAt = val.querySelectorAll("div a span");
		let tagToLookAtAsArray = Array.prototype.slice.call(tagToLookAt);
		console.log(tagToLookAtAsArray);
		// console.log(typeof tagToLookAtAsArray);
		// console.log(val);
		// console.log(typeof val);
		let tagNumber = 1;
		tagToLookAtAsArray.forEach(function (val2) {
			// console.log(val2);
			// console.log(typeof val2);
			let tagFound = false;
			// console.log("Tag numero " + tagNumber);
			tagNumber++;
			if (val2.innerHTML == filterToApply) {
				tagFound = true;
			} else {
				tagFound = false;
			}
		});
		// console.log(tagFound);
		if (tagFound === true) {
			val.classList.remove("notdisplayed");
			// console.log(val);
			alert("Elément trouvé" + tagFound);
		} else {
			// console.log(val);
			val.classList.add("notdisplayed");
		}
	});
	alert("Fin filtrage" + tagFound);
};

//So to get the result back you can wrap this in an IIFE like this:
const mainFunction = async () => {
	dataOfJsonFileData = await getData();

	dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;
	dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;

	placeDataInObject(dataOfJsonFilePhotographer);
	// console.log(dataOfJsonFilePhotographerAfterclassAssociation[0].name)
	document.getElementById(
		"all-photographers"
	).innerHTML = `${dataOfJsonFilePhotographerAfterclassAssociation
		.map(photographersTemplate)
		.join("")}`;

	//To add eventlitener on tag -> Inspiration from video https://www.youtube.com/watch?v=JixTYeCLf4Q
	tagListInHeader = document.querySelectorAll("nav > a");
	tagListInHeaderAsArray = Array.prototype.slice.call(tagListInHeader);
	tagListInHeaderAsArray.forEach(function (val) {
		val.addEventListener("click", (event) => {
			filterOnHashtag(event, val);
		});
		// console.log(val);
		// window.location.reload();
		// console.log("je suis passé par la");
	});
};

// const found = array1.find(element => element > 10);
// filterToApply

function photographersTemplate(photographerData) {
	return `
	<article class="" id="">
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
