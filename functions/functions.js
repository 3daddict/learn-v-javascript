
function createElement(){
    const newBtn = document.createElement("BUTTON");
    const btnText = document.createTextNode("createElement Button");
    newBtn.appendChild(btnText);
    document.querySelector('.createElementDiv').appendChild(newBtn);
}
createElement();