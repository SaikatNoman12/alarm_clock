const select = document.querySelectorAll('select');
const watchTime = document.querySelector('.watch-time h1');
const setAlarm = document.querySelector('.alarm-btn');
const content = document.querySelector('.select-time');

let alarmTime;
let isAlarmSet = false;
let ringtone = new Audio('../css/assets/ringtone.mp3');
for (let i = 12; i > 0; i--) {

    i = i < 10 ? '0' + i : i;

    const option = `<option value="${i}">${i}</option>`;

    select[0].firstElementChild.insertAdjacentHTML('afterend', option);

}


for (let i = 59; i > 0; i--) {

    i = i < 10 ? '0' + i : i;

    const option = ` <option value="${i}">${i}</option>`;

    select[1].firstElementChild.insertAdjacentHTML('afterend', option);

}


for (let i = 2; i > 0; i--) {

    let amPm = i === 1 ? 'AM' : 'PM';

    const option = `<option value="${amPm}">${amPm}</option>`;

    select[2].firstElementChild.insertAdjacentHTML('afterend', option);

}

setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amPm = 'AM';

    if (h >= 12) {
        h = h - 12;
        amPm = 'PM';
    }
    h = h === 0 ? 12 : h;


    h = h < 10 ? '0' + h : h;

    m = m < 10 ? '0' + m : m;

    s = s < 10 ? '0' + s : s;

    watchTime.innerHTML = `${h}:${m}:${s} ${amPm}`;

    if (alarmTime == `${h}:${m} ${amPm}`) {
        ringtone.play();
        ringtone.loop = true;
    }


}, 1000);


setAlarm.addEventListener('click', () => {

    if (isAlarmSet) {
        alarmTime = '';
        ringtone.pause();
        content.classList.remove('disabled');
        setAlarm.innerHTML = 'Set Alarm';
        select[0].value = 'Hour';
        select[1].value = 'Minute';
        select[2].value = 'AM/PM';
        return isAlarmSet = false;
    }

    const time = `${select[0].value}:${select[1].value} ${select[2].value}`;

    if ((time.includes('Hour') && time.includes('Minute') && time.includes('AM/PM'))) {
        return alert('Please set your alarm!');
    }
    else if ((time.includes('Hour') && time.includes('Minute'))) {
        return alert('Please set your Hour & Minute!');
    }
    else if ((time.includes('Hour') && time.includes('AM/PM'))) {
        return alert('Please set your Hour & AM/PM');
    }
    else if ((time.includes('Minute') && time.includes('AM/PM'))) {
        return alert('Please set your Minute & AM/PM');
    }
    else if(time.includes('Hour')){
        return alert('Please set hour!');
    }
    else if(time.includes('Minute')){
        return alert('Please set minute!');
    }
    else if(time.includes('AM/PM')){
        return alert('Please set AM/PM');
    }

    isAlarmSet = true;
    alarmTime = time;
    content.classList.add('disabled');
    setAlarm.innerHTML = 'Clear Alarm';

});

