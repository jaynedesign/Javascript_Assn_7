const swap3 = document.querySelector('img')

let saudia = "images/saudinurses.jpg" ;
let saudiclose= "images/sncloseup.jpg";

swap3.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', saudiclose);
};

swap3.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', saudia);
};


let clicker = document.querySelector('#clickr');
let portrait = document.querySelector('#lady');
portrait.style.display = 'none';
let story = document.querySelector('#story');
story.style.display = 'none';

// event handler
clicker.onclick = () => {
   portrait.style.display = 'block';
   clickr.style.display = 'none';
};


portrait.onclick = () => {
   portrait.style.display = 'none';
   story.style.display = 'block';
};

story.onclick = () => {
   portrait.style.display = 'block';
   story.style.display = 'none';
};


let details = document.querySelectorAll('p class');
details.style.display = 'none';

details.onmouseenter = () => {
	// change image
   details.style.display = 'block';
};

details.onmouseleave = (a) => {
// change image
   details.style.display = 'none';
};
