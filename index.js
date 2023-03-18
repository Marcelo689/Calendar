function startOfMonth(month, year = 2023)
{
   return new Date(year, month, 1);
}
//console.log(startOfMonth(dt).toString());

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function GetWeekDayIndex(month, year = 2023){
    var outputTextDate = startOfMonth(month, year).toString();

    var dayOfWeek = outputTextDate.substring(0,3);

    return ReturnIndexOfDayweek(dayOfWeek);
}

function ReturnIndexOfDayweek(name){
    switch(name){
        case "Sun":
            return 1;
        case "Mon":
            return 2;
        case "Tue":
            return 3;
        case "Wed":
            return 4;
        case "Thu":
            return 5;
        case "Fri":
            return 6;
        case "Sat":
            return 7;
    }
}


  function fillMonthDays(month, totalRows, dayWeekStartMonth){
    var container = document.getElementsByClassName("container")[0];

    container.innerHTML += 
    `<hr>
    <table>
        <thead>
            <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
     </table>`;
    const lastDay = getDaysInMonth(2023, month);
    dayWeekStartMonth =  GetWeekDayIndex(month);
    numDays = lastDay;
    var table = document.getElementsByTagName("tbody")[month-1];
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

fillMonthDays(1, 5, 4);
fillMonthDays(2, 5, 4);
fillMonthDays(3, 5, 4);
fillMonthDays(4, 5, 4);
fillMonthDays(5, 5, 4);
fillMonthDays(6, 5, 4);
fillMonthDays(7, 5, 4);
fillMonthDays(8, 5, 4);
fillMonthDays(9, 5, 4);