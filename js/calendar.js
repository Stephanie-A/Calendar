var today = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"];
var currMonth = today.getMonth();
var currYear = today.getFullYear();

function renderCalendar() {
    renderHeader();
    renderDays(currMonth, currYear);
}

function renderHeader() {
    if (currMonth < 0) {
        currMonth = 11;
        currYear -= 1;
    } else if (currMonth > 11) {
        currMonth = 0;
        currYear += 1;
    }
    document.getElementById("header").innerHTML = months[currMonth] + " " + currYear;
}

function nextMonth() {
    currMonth++;
    renderCalendar();
}

function prevMonth() {
    currMonth--;
    renderCalendar();
}

function numberDaysInMonth(month, year) {
    return 32 - new Date(year, month, 32).getDate();
}

function renderDays(month, year) {
    var firstDay = new Date(year, month).getDay();
    var countDays = 1;
    var totalDays = numberDaysInMonth(month, year);
    
    var grid = document.getElementById("calendar-grid");
    grid.innerHTML = "";
    
    for (var week = 0; week < 6; week++) {
        var row = document.createElement("tr");
        
        for (var day = 0; day < 7; day++) {
            if (week == 0 && day < firstDay) {
                var elem = document.createElement("td");
                elem.appendChild(document.createTextNode(""));
                row.appendChild(elem);
            } else if (countDays > totalDays) {
                break;
            } else {
                elem = document.createElement("td");
                elem.appendChild(document.createTextNode(countDays));
                row.appendChild(elem);
                countDays++;
            }
        }
        grid.appendChild(row);
    }
}