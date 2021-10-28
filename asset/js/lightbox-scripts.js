
// // All function to manage lightbox
// // Global méchanism: The orginale node of the image of photographer page is cloned and the node of image that was displayed is removed

// //-> Go to previous image
// function gotoprevious(e) {
//     let currentImagePosition = ImgDestination[0].childNodes[0]; //identify where is the currentPosition
//     let iteration = 0;
//     for (let link of links.entries()) {
//         // console.log(link[1]);
//         if (link[1].isEqualNode(currentImagePosition)) {
//             ImgDestination[0].childNodes[0].remove();
//             if (iteration < 1) {
//                 iteration = 1;
//             }
//             let clonedNode = links[iteration - 1].cloneNode(true);
//             ImgDestination[0].appendChild(clonedNode);
//         }
//         iteration++;
//     }
// }
// //-> Go to next image
// function gotonext(e) {
//     let currentImagePosition = ImgDestination[0].childNodes[0];
//     let iteration = 0;
//     for (let link of links.entries()) {
//         if (link[1].isEqualNode(currentImagePosition)) {
//             ImgDestination[0].childNodes[0].remove();
//             if (iteration > links.length - 2) {
//                 iteration = links.length - 2;
//             }
//             let clonedNode = links[iteration + 1].cloneNode(true);
//             ImgDestination[0].appendChild(clonedNode);
//         }
//         iteration++;
//     }
// }

// function choosedirection(e) {
//     e = e || window.event; //Next, e = e || event; is a standard way of saying "if the parameter was not passed, default it to whatever's after the ||". In this case, if the event parameter is not passed, then it looks for the global variable.
//     if (e.keyCode == "37") { //left arrow
//         gotoprevious();
//     } else if (e.keyCode == "39") { // Right arrow
//         gotonext();
//     } else if (e.keyCode == "27") { //escape
//         exit();
//     }
// }

// //Manage display and node when exit the modal
// function exit(e) {
//     if (modale.classList.contains("displayed")) {
//         modale.classList.add("notdisplayed");
//         modale.classList.remove("displayed");
//         ImgDestination[0].childNodes[0].remove();
//     }else if(modaleForm.classList.contains("displayed"))
//     {
//         modaleForm.classList.add("notdisplayed");
//         modaleForm.classList.remove("displayed");		
//     }
// }
// // When an image is clicked the original node is cloned

// function placemedia(e) {
//     // Add an eventLister on each image ;
//     e.preventDefault();
//     modale.classList.add("displayed"); //Display modal
//     modale.classList.remove("notdisplayed");
//     ImgDestination = modale.querySelectorAll(".modal-content"); //Identify where the image will be displayed
//     let clonedNode = this.cloneNode(true); // The image clicked is cloned
//     ImgDestination[0].appendChild(clonedNode); // The node is diplayed in modal
// }
