// document.addEventListener("onload",function (){
//     fillMonthDays(28);
// })
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function fillMonthDays(totalRows, dayWeekStartMonth){
    
    const lastDay = getDaysInMonth(2023,3);
    numDays = lastDay;
    var table = document.getElementsByTagName("tbody")[0];
    var counter =1;
    var firstRowFilled= false;
    var firstRowdiv = document.createElement("div");
    firstRowdiv.className = "weekdays";

    for(let numRows = 1; numRows <= totalRows; numRows++){
        
        var tr = document.createElement("tr");
        for(let dayNumber =1; dayNumber <= 7; dayNumber++){
            
            var td = document.createElement("td");
            if(dayNumber <= dayWeekStartMonth && !firstRowFilled ){
                for(let emptyCell = 1; emptyCell <= dayWeekStartMonth; emptyCell++){
                    var td = document.createElement("td");
                    td.textContent = "   ";   
                    tr.appendChild(td);
                }
                dayNumber =dayWeekStartMonth;
            }
            
            if(!firstRowFilled){
                firstRowFilled = true;
                tr.className = "weekdays";
            }
            
            td.textContent = counter;
            if(counter <= numDays){
                tr.appendChild(td);
                counter++;
            }
            
        }
        
        table.appendChild(tr);
        if(numDays == counter)
            return;
    }

}

fillMonthDays(5, 4);