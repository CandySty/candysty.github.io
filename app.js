// import { Fireworks } from 'fireworks-js'
const countdown = () => {
    const endDate = new Date("july 23, 2024 00:00:00").getTime();
    const now = new Date().getTime();

    const difference = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;

    if (difference < 0) { 
        let ucapan = document.getElementById("judul"),
        countdown = document.getElementById("countdown");
        ucapan.innerText = "Selamat Ulang Tahun Sayang Aku Ale"
    }
   

}
setInterval(countdown, 1000);