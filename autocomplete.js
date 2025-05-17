//Search System
let availablekeywords = [

    'TECHNOLOGY', 
    'HouseHold Items',
    'Kitchen',
    'Arts & Crafts',
    'Men Fashion',
    'Women Fashion',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function (){

    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=> {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);

    }
    display(result);

    if (!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result) {

    const content = result.map((list)=> { 
        return "<li>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content + "</ul>";
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}