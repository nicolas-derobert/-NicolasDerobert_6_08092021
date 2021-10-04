


function mediaTemplate(mediaData) {
	if (mediaData.image) {
		return `<article class="">
		<div class="media-container">
			<a href="${urlOfImagesPagesOfElie + "/" + mediaData.image}">
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
			<a href="${urlOfImagesPagesOfElie + "/" + mediaData.image}"><video controls
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

const applyListener = function () {
	heartIcone = document.querySelectorAll("div.heart");
	heartIconeAsArray = Array.prototype.slice.call(heartIcone);
	heartIconeAsArray.forEach(function (val) {
		val.addEventListener("click", (event) => {
			recountLike(event, val);
		});
	});
};

const applySorting = function (sorting) {
	let dataOfJsonFileMediaAfterclassAssociationSorted;
	let medias = document.getElementById("all-media");
	while (medias.firstChild) {
		medias.firstChild.remove();
	}
	if (sorting == "popularity") {
		dataOfJsonFileMediaAfterclassAssociationSorted =
			dataOfJsonFileMediaAfterclassAssociation.slice().sort(function (a, b) {
				return b.likes - a.likes;
			});
	} else if (sorting == "date") {
		alert("traitement par date");
		dataOfJsonFileMediaAfterclassAssociationSorted =
			dataOfJsonFileMediaAfterclassAssociation
				.slice()
				.sort((a, b) => new Date(b.date) - new Date(a.date));
	} else if (sorting == "title") {
		dataOfJsonFileMediaAfterclassAssociationSorted =
			dataOfJsonFileMediaAfterclassAssociation.sort((a, b) => (a.title > b.title) ? 1 : -1)
	}
console.log(dataOfJsonFileMediaAfterclassAssociationSorted)
	document.getElementById(
		"all-media"
	).innerHTML = `${dataOfJsonFileMediaAfterclassAssociationSorted
		.filter((obj) => {
			return obj.photographerId == idOfPage;
		})
		.map(mediaTemplate)
		.join("")}`;
};

const recountLike = function (event, val) {
	let result = [];
	idOfMedia = val.id;
	let arrayLength = dataOfJsonFileMediaAfterclassAssociation.length;
	console.log(arrayLength);
	for (let i = 0; i < arrayLength; i++) {
		const item = dataOfJsonFileMediaAfterclassAssociation[i];
		if (dataOfJsonFileMediaAfterclassAssociation[i].id == idOfMedia) {
			dataOfJsonFileMediaAfterclassAssociation[i].likes++;
			console.log(dataOfJsonFileMediaAfterclassAssociation[i].likes);
		}
	}

	document.getElementById(
		"all-media"
	).innerHTML = `${dataOfJsonFileMediaAfterclassAssociation
		.filter((obj) => {
			return obj.photographerId == idOfPage;
		})
		.map(mediaTemplate)
		.join("")}`;
	applyListener();
	document.getElementById("media-like-counter").innerHTML =
		updateGlobalCounter();
};
const updateGlobalCounter = function () {
	let Total = dataOfJsonFileMediaAfterclassAssociation.reduce(function (
		prev,
		cur
	) {
		return prev + cur.likes;
	},
	0);
	return Total;
};

const mainFunction = async () => {
	idOfPage = document.querySelector("body").id;
	if (idOfPage == "index") {
		urlToApply = urlFromIndex;
	} else {
		urlToApply = urlFromOtherPages;
	}
	dataOfJsonFileData = await getData();
	dataOfJsonFileMedia = dataOfJsonFileData.media;
	dataOfJsonFilePhotographer = dataOfJsonFileData.photographers;
	placeDataOfMediaInObject(dataOfJsonFileMedia);
	let currentPhotographer = dataOfJsonFileMediaAfterclassAssociation.filter(
		(obj) => {
			return obj.photographerId == idOfPage;
		}
	);
	document.getElementById("name").innerHTML =
		dataOfJsonFilePhotographer[1].name;
	document.getElementById("location").innerHTML =
		dataOfJsonFilePhotographer[1].city +
		" " +
		dataOfJsonFilePhotographer[1].country;
	document.getElementById("tagline").innerHTML =
		dataOfJsonFilePhotographer[1].tagline;
	document.getElementById("media-like-counter").innerHTML =
		updateGlobalCounter();

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
			return obj.photographerId == idOfPage;
		})
		.map(mediaTemplate)
		.join("")}`;

	document.getElementById("sortTool").addEventListener("change", function () {
		applySorting(this.value);
	});
	applyListener();


const modale =document.querySelector(".modal")
const close =document.querySelector(".close")
const links = document.querySelectorAll(".media-container a")

	// 	links.forEach(function (val) {
	// 	val.addEventListener("click", (event) => {
	// 		event.preventDefault();
	// 		modale.classList.add("displayed")
	// 		modale.classList.remove("notdisplayed");
	// 		ImgDestination.src = this.href;
	// 	});
	// });
	for(let link of links){
		link.addEventListener("click", function(e){
			e.preventDefault();
			modale.classList.add("displayed")
			modale.classList.remove("notdisplayed");
			const ImgDestination = modale.querySelectorAll(".modal-content img")
			console.log( ImgDestination);		
			console.log( ImgDestination[0].src);

			console.log(links);
			console.log(this.href);
			ImgDestination[0].src = this.href;
		})
	}
	close.addEventListener("click", function(){
		modale.classList.add("notdisplayed")
		modale.classList.remove("displayed");
	})
};

document.addEventListener("DOMContentLoaded", (event) => {
	mainFunction();
});
