function mediaTemplate(mediaData) {
	if (mediaData.image) {
		return `<article class="">
		<div class="media-container">
			<a href="media">
				<img src="${urlOfImagesPagesOfElie + "/" + mediaData.image}"
					alt="${mediaData.title}"
			/></a>
		</div>
		<div class="description-and-like">
			<h2>${mediaData.title}</h2>
		<div class="like-area">
			<div class="media-like-counter" >${mediaData.likes}</div>
			<div class="heart" id="${
				mediaData.id
			}"> <i class="fas fa-heart filled-heart"></i></div>	
		</div>		
		</div>
	</article>`;
	}
	if (mediaData.video) {
		return `		 
		<article class="">
		<div class="media-container">
			<a href="media"><video controls
  poster="${
		urlOfImagesPagesOfElie + "/" + mediaData.video.split(".")[0]
	}.png"  aria-label="${mediaData.title}">
  <source
    src="${urlOfImagesPagesOfElie + "/" + mediaData.video}"
    type="video/${mediaData.video.split(".")[1]}">
</video></a>
</div>
<div class="description-and-like">
			<h2>${mediaData.title}</h2>
		<div class="like-area">
			<div class="media-like-counter" >${mediaData.likes}</div>
			<div class="heart" id="${
				mediaData.id
			}"> <i class="fas fa-heart filled-heart"></i></div>	
		</div>		
		</div>
</article>
		 `;
	}
}

const recountLike = function (event, val) {
	// console.log(typeof val);
	// console.log(val.id);
	let result = [];
	// console.log(typeof dataOfJsonFileMediaAfterclassAssociation);

	// console.log(val.path[1].id);
	idOfMedia = val.id;
	// result = dataOfJsonFileMediaAfterclassAssociation.filter((obj) => {
	// obj.id == idOfMedia;
	// 	console.log(obj.id);
	// });

	for (let i = 0; (dataOfJsonFileMediaAfterclassAssociation.length -1); i++) {
		const item = dataOfJsonFileMediaAfterclassAssociation[i];
		// console.log(item);
		// console.log(idOfMedia);
		// console.log(i);
		console.log(dataOfJsonFileMediaAfterclassAssociation);
		if (dataOfJsonFileMediaAfterclassAssociation[i].id == idOfMedia) {
			result.push(item);
			console.log(result);
		}
	}


	// console.log(result);
	// console.log(idOfMedia);
	// result.likes++;
	alert();
	console.log(typeof result);
	console.log(result);
	mediaTemplate(result);
};

const mainFunction = async () => {
	dataOfJsonFileData = await getData();
	dataOfJsonFileMedia = dataOfJsonFileData.media;
	dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;
	// console.log(dataOfJsonFileMedia);
	placeDataOfMediaInObject(dataOfJsonFileMedia);
	document.getElementById("name").innerHTML =
		dataOfJsonFilePhotographer[1].name;
	document.getElementById("location").innerHTML =
		dataOfJsonFilePhotographer[1].city +
		" " +
		dataOfJsonFilePhotographer[1].country;
	document.getElementById("tagline").innerHTML =
		dataOfJsonFilePhotographer[1].tagline;
	document.getElementById("price").innerHTML =
		dataOfJsonFilePhotographer[1].price + "€ / jour";
	document.getElementById("tags").innerHTML = `${tagsTemplate(
		dataOfJsonFilePhotographer[1].tags
	)}`;
	//To add eventlitener on each heart -> Inspiration from video https://www.youtube.com/watch?v=JixTYeCLf4Q

	document.getElementById("photograph-vignet").src =
		urlOfImagesPagesOfPhotographers +
		"/" +
		dataOfJsonFilePhotographer[1].portrait;
	document.getElementById("photograph-vignet").alt =
		dataOfJsonFilePhotographer[1].name;

	// dataOfJsonFilePhotographer[1].name.replace(" ", "").replace("-", "") +
	// console.log(dataOfJsonFileMediaAfterclassAssociation);
	// console.log(typeof dataOfJsonFileMediaAfterclassAssociation);
	// console.log(dataOfJsonFileMediaAfterclassAssociation);

	document.getElementById(
		"all-media"
	).innerHTML = `${dataOfJsonFileMediaAfterclassAssociation
		.filter((obj) => {
			return obj.photographerId == 930;
		})
		.map(mediaTemplate)
		.join("")}`;
	heartIcone = document.querySelectorAll("div.heart");
	heartIconeAsArray = Array.prototype.slice.call(heartIcone);
	heartIconeAsArray.forEach(function (val) {
		val.addEventListener("click", (event) => {
			recountLike(event, val);
		});
	});
};

document.addEventListener("DOMContentLoaded", (event) => {
	mainFunction();
});
