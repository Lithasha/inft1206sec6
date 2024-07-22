/*
    Name: Lithasha Thanippuli Appuhamilage.
    Student No: 100942619.
    Section: 6.
    File: Assignment #4 P2.
    Date: July 22th, 2024.
    Description: This is the assignment #4 part 2; which is the javascrpt file of the image gallery.
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];

/* Declaring the alternative text for each image file */
const pictureNames = ["Closeup of a human eye","Painting","Purple and White Flowers","Egyption Wall Art","Butterfly on a leaf"];

/* Looping through images */
for(const image of pictures) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', pictureNames[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0,0,0,0)';
    }

});