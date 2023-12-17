const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/degg-logo.png") {
        myImage.setAttribute("src", "images/whisky-with-golf-ball-ice.png");
    } else {
        myImage.setAttribute("src", "images/degg-logo.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `DEGG App for ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `DEGG App for ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};