// Get the new year 
const getNewYear = () => {
    const currentYear = new Date().getFullYear();
    return new Date(`June 27 ${currentYear} 21:00:00`);
};

// update the year element
const year = document.querySelector('.year');
year.innerHTML = '2022';//getNewYear().getFullYear();

// select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('h1');



const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${time.days}</h2>
                <small>Gün</small>
            </div>
            <div class="timer">
                <h2 class="hours">${time.hours}</h2>
                <small>Saat</small>
            </div>
            <div class="timer">
                <h2 class="minutes">${time.minutes}</h2>
                <small>Dakika</small>
            </div>
            <div class="timer">
                <h2 class="seconds">${time.seconds}</h2>
                <small>Saniye</small>
            </div>
        </div>
        `;
};


const showMessage = () => {
    message.innerHTML = ``;
    app.innerHTML = '';
    year.innerHTML = 'Evlendik <br>\ 27.06.2022';
    heading.style.display = 'none';
};

const hideMessage = () => {
    message.innerHTML = '';
    heading.style.display = 'block';
};

const complete = () => {
    showMessage();
};

const countdownTimer = new CountDown(
    getNewYear(),
    render,
    complete
);