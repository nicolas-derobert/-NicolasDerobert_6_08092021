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
			}" tabindex="0" > <i class="fa fa-heart"></i></div>	
		</div>		
		</div>
	</article>`;
	}//<i class="fas fa-heart filled-heart"></i>
	if (mediaData.video) {
		return `		 
		<article class="">
		<div class="media-container">
			<a href="${urlOfImagesPagesOfElie + "/" + mediaData.video}"><video controls
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
			}" tabindex="0"> <i class="fa fa-heart"></i></div>	
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
		val.addEventListener("click", (e) => {
			recountLike(e, val);
		});
		val.addEventListener("keypress", (e) => {
			if(e.keyCode === 13) {
				recountLike(e, val);
			}
		});
	});
};

// const applySorting = function (sorting) {
// 	let dataOfJsonFileMediaAfterclassAssociationSorted;
// 	let medias = document.getElementById("all-media");

// 	while (medias.firstChild) {
// 		medias.firstChild.remove();
// 	}
// 	if (sorting == "popularity") {
// 		dataOfJsonFileMediaAfterclassAssociationSorted =
// 			dataOfJsonFileMediaAfterclassAssociation.slice().sort(function (a, b) {
// 				return b.likes - a.likes;
// 			});
// 	} else if (sorting == "date") {
// 		dataOfJsonFileMediaAfterclassAssociationSorted =
// 			dataOfJsonFileMediaAfterclassAssociation
// 				.slice()
// 				.sort((a, b) => new Date(b.date) - new Date(a.date));
// 	} else if (sorting == "title") {
// 		dataOfJsonFileMediaAfterclassAssociationSorted =
// 			dataOfJsonFileMediaAfterclassAssociation.sort((a, b) =>
// 				a.title > b.title ? 1 : -1
// 			);
// 	}
// 	document.getElementById(
// 		"all-media"
// 	).innerHTML = `${dataOfJsonFileMediaAfterclassAssociationSorted
// 		.filter((obj) => {
// 			return obj.photographerId == idOfPage;
// 		})
// 		.map(mediaTemplate)
// 		.join("")}`;
// };
const applySorting = function (sorting) {
	let dataOfJsonFileMediaAfterclassAssociationSorted;
	let medias = document.getElementById("all-media");

	while (medias.firstChild) {
		medias.firstChild.remove();
	}
	if (sorting == "Popularité") {
		dataOfJsonFileMediaAfterclassAssociationSorted =
			dataOfJsonFileMediaAfterclassAssociation.slice().sort(function (a, b) {
				return b.likes - a.likes;
			});
	} else if (sorting == "Date") {
		dataOfJsonFileMediaAfterclassAssociationSorted =
			dataOfJsonFileMediaAfterclassAssociation
				.slice()
				.sort((a, b) => new Date(b.date) - new Date(a.date));
	} else if (sorting == "Titre") {
		dataOfJsonFileMediaAfterclassAssociationSorted =
			dataOfJsonFileMediaAfterclassAssociation.sort((a, b) =>
				a.title > b.title ? 1 : -1
			);
	}
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
		if (
			dataOfJsonFileMediaAfterclassAssociation[i].id == idOfMedia &&
			dataOfJsonFileMediaAfterclassAssociation[i].Isliked == false
		) {
			// Check the id of media and this media has already been checked
			dataOfJsonFileMediaAfterclassAssociation[i].likes++;
			dataOfJsonFileMediaAfterclassAssociation[i].Isliked = true;
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
	let idOfPage = document.getElementsByTagName("body")[0].id;
	console.log(document.getElementsByTagName("body"));
	console.log(document.getElementsByTagName("body")[0].id);
	console.log(idOfPage);
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

	document.getElementById(
		"all-media"
	).innerHTML = `${dataOfJsonFileMediaAfterclassAssociation
		.filter((obj) => {
			return obj.photographerId == idOfPage;
		})
		.map(mediaTemplate)
		.join("")}`;
	

	// Pour aller plus loin : https://www.youtube.com/watch?v=jk2rFuWImcI&t=207s
	const modale = document.querySelector(".modal");
	const close = document.querySelector(".close");
	const next = document.querySelector(".next");
	const prev = document.querySelector(".prev");
	const links = document.querySelectorAll(".media-container a");
	let ImgDestination;

	// All function to manage lightbox

	function gotoprevious(e) {
		let currentImagePosition = ImgDestination[0].childNodes[0]; //identify where is the currentPosition
		let iteration = 0;
		for (let link of links.entries()) {
			console.log(link[1]);
			if (link[1].isEqualNode(currentImagePosition)) {
				ImgDestination[0].childNodes[0].remove();
				if (iteration < 1) {
					iteration = 1;
				}
				let clonedNode = links[iteration - 1].cloneNode(true);
				ImgDestination[0].appendChild(clonedNode);
			}
			iteration++;
		}
	}

	function gotonext(e) {
		let currentImagePosition = ImgDestination[0].childNodes[0];
		let iteration = 0;
		for (let link of links.entries()) {
			if (link[1].isEqualNode(currentImagePosition)) {
				ImgDestination[0].childNodes[0].remove();
				if (iteration > links.length - 2) {
					iteration = links.length - 2;
				}
				let clonedNode = links[iteration + 1].cloneNode(true);
				ImgDestination[0].appendChild(clonedNode);
			}
			iteration++;
		}
	}

	function choosedirection(e) {
		e = e || window.event;
		if (e.keyCode == "37") {
			gotoprevious();
		} else if (e.keyCode == "39") {
			gotonext();
		} else if (e.keyCode == "27") {
			exit();
		}
	}
	function exit(e) {
		if (modale.classList.contains("displayed")) {
			modale.classList.add("notdisplayed");
			modale.classList.remove("displayed");
			ImgDestination[0].childNodes[0].remove();
		}else if(modaleForm.classList.contains("displayed"))
		{
			modaleForm.classList.add("notdisplayed");
			modaleForm.classList.remove("displayed");		
		}
	}

	function placemedia(e) {
		// Add an eventLister on each image ;
		e.preventDefault();
		modale.classList.add("displayed"); //Display modal
		modale.classList.remove("notdisplayed");
		ImgDestination = modale.querySelectorAll(".modal-content"); //Identify where the image will be displayed
		let clonedNode = this.cloneNode(true); // The image clicked is cloned
		ImgDestination[0].appendChild(clonedNode); // The node is diplayed in modal
	}

	// All event listener to manage lightbox
	prev.addEventListener("click", gotoprevious);
	next.addEventListener("click", gotonext);
	document.addEventListener("keydown", choosedirection);
	links.forEach(function (link) {
		link.addEventListener("click", placemedia);
	});

	close.addEventListener("click", exit);

	//FORMULAIRE
	const modaleForm = document.querySelector(".modal-form");
	const form = document.querySelector("#form");
	const closeForm = document.querySelector(".close-form");
	const submitButtonn = document.querySelector(".btn-submit"); // Button to close modal
	const formButton = document.getElementById("contactez-moi");
	const formTitle = document.getElementById("h1-form");
	const formInputFirstName = document.getElementById("input-first-name");
	const formInputLastName = document.getElementById("input-last-name");
	const formInputEmail = document.getElementById("input-email");
	const formeTitleText = "Contactez-moi ";

function submitform(e){
	e.preventDefault();
	console.log(formInputFirstName.value);
	console.log(formInputLastName.value);
	console.log(formInputEmail.value);
	exit()
}

	form.addEventListener("submit", submitform);

	function callform(e){
				modaleForm.classList.add("displayed");
		modaleForm.classList.remove("notdisplayed");
		formTitle.innerHTML = formeTitleText + dataOfJsonFilePhotographer[1].name;
	}
	formButton.addEventListener("click", callform);

	closeForm.addEventListener("click", exit);
	applyListener();
};

document.addEventListener("DOMContentLoaded", (event) => {
	mainFunction();
});
