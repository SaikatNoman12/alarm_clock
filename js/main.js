const select = document.querySelectorAll('select');
const watchTime = document.querySelector('.watch-time h1');

for (let i = 12; i >= 0; i--) {

    i = i < 10 ? '0' + i : i;

    const option = `<option value="${i}">${i}</option>`;

    select[0].firstElementChild.insertAdjacentHTML('afterend', option);

}


for (let i = 59; i >= 0; i--) {

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
    h = h === 0 ? h = 12 : h;


    h = h < 10 ? '0' + h : h;

    m = m < 10 ? '0' + m : m;

    s = s < 10 ? '0' + s : s;

    watchTime.innerText =  `${h}:${m}:${s}:${amPm}`;

}, 1000);