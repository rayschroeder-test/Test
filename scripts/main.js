let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/potato.jpg') {
      myImage.setAttribute('src','images/french-fries.jpg');
    } else {
      myImage.setAttribute('src','images/potato.jpg');
    }
    alert("potato has been cooked");
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Potato and ' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}
