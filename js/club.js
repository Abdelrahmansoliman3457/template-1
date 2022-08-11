$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  rtl: true,
  lazyLoad: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// function initMap() {
//   var location = { lat: -25.363, lng: 131.044 };

//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: location,
//   });
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map,
//   });
// }
// initMap();
//.................................................................

let taps = document.querySelectorAll(".taps ul li");
let tapsArray = Array.from(taps);

let myDivs = document.querySelectorAll(".profile-taps > div");
let divsArray = Array.from(myDivs);

tapsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tapsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

var loadFiles = function (event) {
  var images = document.getElementById("sphoto");
  images.src = URL.createObjectURL(event.target.files[0]);
};

let myEye = document.querySelectorAll(".eye");

for (let i = 0; i < myEye.length; i++) {
  myEye[i].onclick = function () {
    if (
      this.parentElement.querySelector(".show-pass").getAttribute("type") ===
      "password"
    ) {
      this.parentElement
        .querySelector(".show-pass")
        .setAttribute("type", "text");
    } else {
      this.parentElement
        .querySelector(".show-pass")
        .setAttribute("type", "password");
    }
  };
}

// $(".my-rating").starRating({
//   initialRating: 4,
//   strokeColor: '#894A00',
//   strokeWidth: 10,
//   starSize: 25
// });

//......................................................................................................

// apend photo

// let myImgInput = document.getElementById("imgf");
// let imgPreview = document.querySelector(".img-preview");

// myImgInput.onchange = function (event) {
//   for (let n = 0; n < event.target.files.length; n++) {
//     let imgTemp = `<div class="out-img">
//       <div class="remove"><i class="fas fa-times"></i></div>
//       <div class="img-chat-cont"><img src="${URL.createObjectURL(
//         event.target.files[n]
//       )}" class="img-temp"></div>
      
//     </div>`;

//     imgPreview.insertAdjacentHTML("beforeend", imgTemp);
//     // myImgInput.value = remove[i].nextElementSibling.children[0].src
//     // imgPreview.innerHTML += imgTemp;

//     let remove = document.querySelectorAll(".remove");

//     for (let i = 0; i < remove.length; i++) {
//       remove[i].addEventListener("click", function () {
//         this.parentElement.remove();
//         // console.log(this.nextElementSibling.children[0].src);

//         myImgInput.value = "";
//       });
//     }
//   }

//   sbmitBtn.addEventListener("click", function () {
//     if (imgPreview.children.length > 0) {
//       // for (let n = 0; n < event.target.files.length; n++) {
//       //   let imgTemp = `<div class="out-img">
//       //     <div class="img-chat-cont"><img src="${URL.createObjectURL(
//       //       event.target.files[n]
//       //     )}" class="img-temp"></div>
//       //     <img src="imgs/user.jpg" class="avatar">
//       //     </div>`;

//       //   chatArea.insertAdjacentHTML("beforeend", imgTemp);
//       //     imgPreview.innerHTML = "";
//       //     myImgInput.value = "";
//       //     chatArea.scrollBy(0, 9000);
//       //   // imgPreview.innerHTML += imgTemp;

//       // }
//       // let childreen = document.querySelectorAll(".img-preview.childNodes");
//       // console.log(childreen);
//       // chatArea.scrollBy(0, 9000);
//       let clonedPereview = imgPreview.cloneNode(true);
//       console.log(clonedPereview);
//       // chatArea.insertAdjacentHTML("beforeend", clonedPereview);
//       let avaaa = `<img src="imgs/user.jpg" class="avatar">`;
//       // chatArea.appendChild(avaaa);
//       chatArea.appendChild(clonedPereview);
//       // chatArea.innerHTML += clonedPereview;
//       clonedPereview.insertAdjacentHTML("beforebegin", avaaa);
//       let removeFalse = document.querySelectorAll(".remove");
//       for (r = 0; r < removeFalse.length; r++) {
//         removeFalse[r].remove();
//       }
//       imgPreview.innerHTML = "";
//       myImgInput.value = "";
//       chatArea.scrollBy(0, 9000);
//     }
//     let fancyImgs = document.querySelectorAll(".img-chat-cont");
//     console.log(fancyImgs);
//     for (let m = 0; m < fancyImgs.length; m++) {
//       fancyImgs[m].addEventListener("click", function () {
//         let fancyDiv = `<div class="fancy-div"><img src="${this.children[0].src}">
//         <div class="remove-img"><i class="fas fa-times"></i></div>
//          </div>`;
//         console.log(fancyDiv);
//         document.body.insertAdjacentHTML("beforeend", fancyDiv);
//         let removeImgs = document.querySelectorAll(".remove-img");
//         for (let t = 0; t < removeImgs.length; t++) {
//           removeImgs[t].addEventListener("click", function () {
//             this.parentElement.remove();
//           });
//         }
//       });
//     }

//     // removeImgs.addEventListener('click' , function(){
//     //   console.log('kjkhkj')
//     // })
//   });
// };

// let form = document.querySelector("form");
// let sbmitBtn = document.querySelector(".submit");
// let chatArea = document.querySelector(".chat-area");
// let inputElm = document.querySelector("#mytext");

// // sbmitBtn.onclick = function () {
// //   chatArea.insertAdjacentElement("beforeend", imgPreview);
// // };

// form.onsubmit = function (e) {
//   e.preventDefault();
//   let trimMsg = inputElm.value;

//   if (inputElm.value.split(" ").join("").length === 0) {
//     // console.log("jlkfjl");
//     inputElm.value = "";
//     inputElm.focus();
//   } else {
//     let temp = `<div class="out-msg">
//         <span class="my-msg">${trimMsg}</span>
//         <img src="imgs/user.jpg" class="avatar">
//                 </div>`;

//     chatArea.insertAdjacentHTML("beforeend", temp);
//     chatArea.scrollBy(0, 9000);
//     inputElm.value = "";
//     inputElm.focus();
//     console.log(trimMsg);
//   }
// };

// ....................................................................................................

let bars = document.querySelector(".bars");
// console.log(bars);
let ulh = document.querySelector(".hide-ul");

bars.addEventListener("click", function () {
  ulh.classList.toggle("tog-ul");
});

// let drop = document.querySelector(".dropdown-menu");
// console.log(drop);

// drop.addEventListener("click", function () {
//   this.classList.add("show");
// });

// $(document).on("click", ".dropdown-toggle", function () {
//   $(this).parent().addClass("show");
//   $(this).parent().find(".dropdown-menu").addClass("show");
// });

let dropFather = document.querySelector('.drop-opac')

document.querySelector('.drop-father').addEventListener('click' , function(){
    dropFather.classList.toggle('show-drop-me')
})
