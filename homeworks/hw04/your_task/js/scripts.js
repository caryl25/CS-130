const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    document.querySelector("#tracks").innerHTML = "";

    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);

    fetch("https://www.apitutor.org/spotify/simple/v1/search?type=track&limit=5&q="+term)
        .then(response => response.json())
        .then(tracks => {
            console.log(tracks);
            if(tracks.length === 0) {
                document.querySelector("#tracks").innerHTML += `
                <p>No tracks found for "${term}"</p>`;
            }
            for(const track of tracks) {

                document.querySelector("#tracks").innerHTML +=
                `<button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event)";>
                    <img src="${track.album.image_url}">
                    <i class="fas play-track fa-play" aria-hidden="true"></i>
                    <div class="label">
                        <h2>${track.name}</h2>
                        <p>
                            ${track.artist.name}
                        </p>
                    </div>
                </button>`
                

            }
        });
};

const getAlbums = (term) => {
    document.querySelector("#albums").innerHTML = "";
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
        
        fetch("https://www.apitutor.org/spotify/simple/v1/search?type=album&q="+term)
        .then(response => response.json())
        .then(albumses => {
            console.log(albumses);
            if(albumses.length === 0) {
                document.querySelector("#albums").innerHTML += `
                <p>No albums found for "${term}"</p>`;
            }
            for(const album of albumses) {

                document.querySelector("#albums").innerHTML +=
                `<section class="album-card" id="${album.id}">
                    <div>
                        <img src="${album.image_url}">
                        <h2>${album.name}</h2>
                        <div class="footer">
                            <a href="${album.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`
            }
        });
};


const getArtist = (term) => {
    document.querySelector("#artist").innerHTML = "";
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
        fetch("https://www.apitutor.org/spotify/simple/v1/search?type=artist&limit=1&q="+term)
        .then(response => response.json())
        .then(artists => {
            console.log(artists);
            if(artists.length === 0) {
                document.querySelector("#artist").innerHTML += `
                <p>No artist found for "${term}"</p>`;
            }
            for(const artist of artists) {

                document.querySelector("#artist").innerHTML +=
                `<section class="artist-card" id="${artist.id}">
                    <div>
                        <img src="${artist.image_url}">
                        <h2>${artist.name}</h2>
                        <div class="footer">
                            <a href="${artist.spotify_url}" target="_blank">
                                view on spotify
                            </a>
                        </div>
                    </div>
                </section>`
            }
        });
};

const handleTrackClick = (ev) => {
    const currentTrack = ev.currentTarget;
    console.log(currentTrack);
    document.querySelector("#current-track").innerHTML = `
        <img src="${currentTrack.querySelector("img").getAttribute("src")}">
        <i class="fas play-track fa-pause" aria-hidden="true"></i>
        <div class="label">
            <h2>${currentTrack.querySelector("div h2").innerHTML}</h2>
            <p>
                ${currentTrack.querySelector("div p").innerHTML}
            </p>
        </div>
    `;
    const previewUrl = currentTrack.getAttribute("data-preview-track");
    console.log(previewUrl);
    audioPlayer.setAudioFile(previewUrl);
    audioPlayer.play();

};

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};