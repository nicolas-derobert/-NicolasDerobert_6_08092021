
// All function to manage lightbox
function gotoprevious(e) {
    let currentImagePosition = ImgDestination[0].childNodes[0]; //identify where is the currentPosition
    let iteration = 0;
    for (let link of links.entries()) {
        // console.log(link[1]);
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




// //getting all required elements
// const gallery  = document.querySelectorAll(".image"),
// previewBox = document.querySelector(".preview-box"),
// previewImg = previewBox.querySelector("img"),
// closeIcon = previewBox.querySelector(".icon"),
// currentImg = previewBox.querySelector(".current-img"),
// totalImg = previewBox.querySelector(".total-img"),
// shadow = document.querySelector(".shadow");

// window.onload = ()=>{
//     for (let i = 0; i < gallery.length; i++) {
//         totalImg.textContent = gallery.length; //passing total img length to totalImg variable
//         let newIndex = i; //passing i value to newIndex variable
//         let clickedImgIndex; //creating new variable
        
//         gallery[i].onclick = () =>{
//             clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
//             function preview(){
//                 currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
//                 let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
//                 previewImg.src = imageURL; //passing user clicked img url in previewImg src
//             }
//             preview(); //calling above function
    
//             const prevBtn = document.querySelector(".prev");
//             const nextBtn = document.querySelector(".next");
//             if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
//                 prevBtn.style.display = "none"; 
//             }
//             if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
//                 nextBtn.style.display = "none"; 
//             }
//             prevBtn.onclick = ()=>{ 
//                 newIndex--; //decrement index
//                 if(newIndex == 0){
//                     preview(); 
//                     prevBtn.style.display = "none"; 
//                 }else{
//                     preview();
//                     nextBtn.style.display = "block";
//                 } 
//             }
//             nextBtn.onclick = ()=>{ 
//                 newIndex++; //increment index
//                 if(newIndex >= gallery.length - 1){
//                     preview(); 
//                     nextBtn.style.display = "none";
//                 }else{
//                     preview(); 
//                     prevBtn.style.display = "block";
//                 }
//             }
//             document.querySelector("body").style.overflow = "hidden";
//             previewBox.classList.add("show"); 
//             shadow.style.display = "block"; 
//             closeIcon.onclick = ()=>{
//                 newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
//                 prevBtn.style.display = "block"; 
//                 nextBtn.style.display = "block";
//                 previewBox.classList.remove("show");
//                 shadow.style.display = "none";
//                 document.querySelector("body").style.overflow = "scroll";
//             }
//         }
        
//     } 
// }