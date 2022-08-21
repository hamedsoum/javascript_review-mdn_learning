const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
   const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"] 
/* Declaring the alternative text for each image file */

let alternativeText = '';

/* Looping through images */

    images.forEach( el => {
        alternativeText = el.slice(0, 4);
        const newImage = document.createElement('img');
        const imageLocatrion = `images/${el}`
        newImage.setAttribute('src', imageLocatrion);
        newImage.setAttribute('alt', alternativeText);
       thumbBar.appendChild(newImage);
       const src = newImage.getAttribute('src');
       console.log(src);
       newImage.addEventListener("click", function(){
           displayedImage.setAttribute('src', src);
       });
    })

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function(){
    let btnClass = btn.getAttribute('class') === 'dark' ? 'light' : 'dark';
    btn.setAttribute('class', btnClass);
    btn.textContent = btnClass === 'dark' ? 'Darken' : 'Lighten';
    overlay.style.backgroundColor = btnClass === 'dark' ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)";
 })