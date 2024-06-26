
const userHours = document.getElementById('hours');
const userMinutes = document.getElementById('minutes');
const songMinutes = document.getElementById('song-minutes');
const songSeconds = document.getElementById('song-seconds');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('artist-name');

const button = document.getElementById("magic-button");
const resultPara = document.getElementById("output-text");

const getUserTotalMinutes = () => {
    let hours = +userHours.value;
    let minutes = +userMinutes.value;
    let totalMinutes = (hours * 60) + minutes;
    return totalMinutes;
}

const getSongTotalMinutes = () => {
    let minutes = +songMinutes.value;
    let seconds = +songSeconds.value;
    let totalMinutes = minutes + (seconds / 60);
    return totalMinutes;
}

const divMinutesBySong = () => {
    let totalMin = getUserTotalMinutes();
    let totalSong = getSongTotalMinutes();
    let trackPlays = totalMin / totalSong;
    return trackPlays.toFixed(2);
}

button.addEventListener("click", () => {
    let resultPlays = divMinutesBySong();
    resultPara.textContent = `${userHours.value} hours and ${userMinutes.value} minutes = ${resultPlays} plays of ${songTitle.value} by ${songArtist.value}`;
});