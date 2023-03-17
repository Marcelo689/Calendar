// document.addEventListener("onload",function (){
//     fillMonthDays(28);
// })

function fillMonthDays(numDays, totalRows, dayWeekStartMonth){
    var table = document.getElementsByTagName("tbody")[0];
    var counter =1;
    var firstRowFilled= false;
    for(let numRows = 1; numRows <= totalRows; numRows++){
        
        var tr = document.createElement("tr");
        for(let dayNumber =1; dayNumber <= 7; dayNumber++){
            if(!firstRowFilled){
                tr.className = "weekdays";
                firstRowFilled = true;
                dayNumber = dayWeekStartMonth;
            }
            var td = document.createElement("td");
            td.textContent = counter;
            
            console.log(dayNumber);
            tr.appendChild(td);
            counter++;
        }
        table.appendChild(tr);
        if(numDays == counter)
            return;
    }

}

fillMonthDays(28, 5, 4);