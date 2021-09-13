let dataContainer = document.querySelector("#data");
let dataList = document.createElement("ul");
dataContainer.append(dataList);

function createListItem(prop, arr){
    arr.teamdata.forEach(arrItem => {
        let dataListItem = document.createElement("li");
        dataList.append(dataListItem);
        dataListItem.append(`${prop}: ${arrItem[prop]}`);
    });
}

// fetch promise base
fetch("../team.json")
	.then((response) => response.json())
	.then((data) => {
        createListItem("fornavn", data);
        createListItem("efternavn", data);
        createListItem("alder", data);
        createListItem("hårfarve", data);
    });
