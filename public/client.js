
function addItem() {
    const inputElement = document.getElementById("inputText");
    const itemListElement = document.getElementById("itemList");
    const userInput = inputElement.value.trim();

    if (userInput !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = userInput;
        itemListElement.appendChild(listItem);
        inputElement.value = "";
        console.log("Recipe contents: ", Array.from(document.getElementById("itemList").getElementsByTagName("li")).map(item => item.innerHTML));
    }
}


/**
 * Renders nutrition information inside the given div.
 *
 * @param {HTMLDivElement} nutritionDiv – div to render nutrition info in
 * @param {Object} data – nutrition data
 */function renderNutritionInfo(nutritionDiv, data) {

    let title = document.createElement("h2");
    title.textContent = "Nutrition info";
    nutritionDiv.appendChild(title);

    let table = document.createElement("table");
    table.className = 'nutrition-table'; // Add a class for potential CSS styling
    nutritionDiv.appendChild(table);

    // Create the table header
    let thead = document.createElement("thead");
    table.appendChild(thead);
    let headerRow = document.createElement("tr");
    thead.appendChild(headerRow);

    let headers = ['Nutrient', 'Quantity', 'Unit'];
    headers.forEach(headerText => {
        let header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });

    // Fill up the table body with the data received from the server
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            let nutrient = data[key];

            let row = document.createElement("tr");
            tableBody.appendChild(row);

            let nutrientNameCell = document.createElement("td");
            nutrientNameCell.textContent = nutrient.label || key;
            row.appendChild(nutrientNameCell);

            let nutrientQuantityCell = document.createElement("td");
            nutrientQuantityCell.textContent = nutrient.quantity.toFixed(2); // Format to 2 decimal places
            row.appendChild(nutrientQuantityCell);

            let nutrientUnitCell = document.createElement("td");
            nutrientUnitCell.textContent = nutrient.unit;
            row.appendChild(nutrientUnitCell);
        }
    }
}


async function submitRecipe() {
    console.log("Submitting recipe...");
    const items = Array.from(document.getElementById("itemList").getElementsByTagName("li")).map(item => item.innerHTML);

    const response = await fetch("/submitRecipe",
        {
            method: "POST",
            body: JSON.stringify({
                data: {
                    recipe: items
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    if (response.ok) {
        console.log("Data sent to the server successfully!");
        const data = await response.json();
        console.log(data);

        let nutritionDiv = document.getElementById("nutritionInfo");
        nutritionDiv.innerHTML = "";
        renderNutritionInfo(nutritionDiv, data);
    } else {
        console.error("Error sending data to the server.");
    }
}