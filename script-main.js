const userHours = document.querySelector("#hours");
const userMinutes = document.querySelector("#minutes");
const songMinutes = document.querySelector("#song-minutes");
const songSeconds = document.querySelector("#song-seconds");
const songTitle = document.querySelector("#song-title");
const songArtist = document.querySelector("#artist-name");
const button = document.querySelector("#magic-button");
const resultPara = document.querySelector("output-text")

const getUserTotalMinutes = () => {
    let hours = userHours;
    let minutes = userMinutes;
    let totalMinutes = hours * 60 - minutes;
    return totalMinutes;
}

const getSongTotalMinutes = () => {
    let minutes = songMinutes;
    let seconds = songSeconds;
    let totalMinutes = minutes + (seconds / 60);
    return totalMinutes;
}

const divMinutesBySong = () => {
    let totalMin = getUserTotalMinutes();
    let totalSong = getSongTotalMinutes();
    let trackPlays = totalMin / totalSong;
    return trackPlays;
}
