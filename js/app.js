const klasseKammerater = {
    "kammerater": [
        {
            "fornavn": "Dejene",
            "mellemnavn": "Daba",
            "efternavn": "Jebassa",
            "alder": 35,
            "hårfarve": "sort"
        },
        {
            "fornavn": "Nils",
            "mellemnavn": "Sonne",
            "efternavn": "Andersen",
            "alder": 26,
            "hårfarve": "brunt"
        },
        {
            "fornavn": "Sebastian",
            "mellemnavn": "Christopher",
            "efternavn": "Andersen",
            "alder": 18,
            "hårfarve": "mørkebrunt"
        },
        {
            "fornavn": "Troels",
            "mellemnavn": "Heldt Agergaard",
            "efternavn": "Rasmussen",
            "alder": 35,
            "hårfarve": "kasket"
        }
    ]
};

let dataContainer = document.querySelector("#data");
let dataList = document.createElement("ul");
dataContainer.append(dataList);

function createListItem(param){
    for(let i = 0; i<klasseKammerater.kammerater.length; i++){
        /* console.log(klasseKammerater.kammerater[i].navn.fornavn);
        console.log(klasseKammerater.kammerater[i].navn.efternavn); */
        let dataListItem = document.createElement("li");
        dataList.append(dataListItem);
        dataListItem.append(`${param}: ${klasseKammerater.kammerater[i][param]}`);
    }
}

createListItem("fornavn");
createListItem("efternavn");
createListItem("alder");
createListItem("hårfarve");


