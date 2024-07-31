/*
Name: Lithasha Thanippuli Appuhamilage 
Student No: 100942619
Section: 6
File: Assignment #4 P4
Date: July 31th, 2024
Description: This is the assignment #4 part 4; which is the JavaScript file of the sequencing annimations.
 */
const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");