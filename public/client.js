
let listArray = [];

function addItem() {
    const inputElement = document.getElementById("inputText");
    const itemListElement = document.getElementById("itemList");

    const userInput = inputElement.value.trim();
    if (userInput !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = userInput;
        listArray.push(userInput);
        itemListElement.appendChild(listItem);
        inputElement.value = "";
    }
}

document.getElementById("sent").addEventListener("click", function () {
    fetch("/sent", {
        method: "POST",
        body: JSON.stringify({ net: listArray }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('h1').innerHTML = data.content;

            // Clear the listArray and the list on the page
            listArray = [];
            document.getElementById("itemList").innerHTML = '';
        })
        .catch(error => console.error("Error:", error));
});