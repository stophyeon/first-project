//시계
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
}

setInterval(clock, 1000); //1초

// 달력
let today1 = new Date();
let currentMonth = today1.getMonth();
let currentYear = today1.getFullYear();

function prevMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    showCalendar(currentMonth, currentYear);
}

function nextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let tbody = document.getElementById('calendar-body');
    tbody.innerHTML = '';

    // 날짜 채우기
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td');
            if (i === 0 && j < firstDay.getDay()) {
                cell.innerHTML = '';
            } else if (date > lastDay.getDate()) {
                cell.innerHTML = '';
            } else {
                cell.innerHTML = date;
                if (date === today1.getDate() && year === today1.getFullYear() && month === today1.getMonth()) {
                    cell.classList.add('current');
                }
                date++;
    
                cell.addEventListener('click', function() {
                    alert(year + '년 ' + (month + 1) + '월 ' + this.innerHTML + '일');
                });
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    document.getElementById('month-year').innerHTML = year + '년 ' + (month + 1) + '월';
}
showCalendar(currentMonth, currentYear);
