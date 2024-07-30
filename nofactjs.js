let inputEl=document.getElementById("inId");
let factEl=document.getElementById("pId");
let sppinerEL = document.getElementById("spinnerId");

function displayresult(factdata){
    sppinerEL.classList.toggle("spinner");
    factEl.textContent= factdata.fact;
}

function outputdata(event){
    if(event.key === "Enter"){
        factEl.textContent=" ";
        sppinerEL.classList.toggle("spinner");
        let inputValue=inputEl.value;
        if(inputValue === ""){
            alert("Please enter any number");
            return;
        }
        let url="https://apis.ccbp.in/numbers-fact?number=" + inputValue;

        let option={
            method:"GET"
        };

        fetch(url,option)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
             let factdata=jsondata;
            displayresult(factdata);
        });

    }
}

inputEl.addEventListener("keydown",outputdata);