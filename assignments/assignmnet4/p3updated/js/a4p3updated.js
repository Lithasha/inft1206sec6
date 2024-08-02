/*
Name: Lithasha Thanippuli Appuhamilage 
Student No: 100942619
Section: 6
File: Assignment #4 P3 updated 
Date: August 02nd, 2024
Description: This is the assignment #4 part 3 updated; which is the JavaScript file of the bouncing - balls.
 */
// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
class Ball {
    constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
    }

    collisionDetect() {
    for (const ball of balls) {
        if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
            ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
  