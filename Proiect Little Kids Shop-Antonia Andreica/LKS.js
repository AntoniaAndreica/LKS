function lighttheme() {
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
}

function darktheme() {
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
}

function mesaj ()
	{alert ("Ai gasit ceea ce cautai?"); }

const images = document.querySelectorAll('.gallery-image');
images.forEach((image) => {
  image.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('gallery-overlay');
    const galleryImage = document.createElement('img');
    galleryImage.src = image.src;
    galleryImage.alt = image.alt;
    galleryImage.classList.add('gallery-expanded');
    overlay.appendChild(galleryImage);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 2000);
}
