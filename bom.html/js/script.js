const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")
button.addEventListener("clic", function() {
    if (input.value.length === 0) {
    } else { 
    let myItem = input.value
    
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");
    
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';

    list.appendChild(listItem);

    input.value ="";

    listBtn.addEventListener('click', function () {
        list.removeChild(listItem);
    });
}
    input.focus();
}
)