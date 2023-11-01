window.onload = function () {
    const images = [
        '01.JPG',
        '02.JPG',
        '03.JPG',
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.documentElement.style.setProperty('--random-bg-url', `url('../../assets/backgrounds/${randomImage}')`);


const audioFiles = [
    '01.m4a',
    '02.m4a',
    '03.m4a',
    '04.m4a',
    '05.m4a',
    '06.m4a',
];
const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];
document.getElementById('random-audio').setAttribute('src', `../../assets/audio/${randomAudio}`);
};

