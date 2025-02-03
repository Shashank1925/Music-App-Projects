const toggleButton = document.querySelector(".toggleButton");
const textEl = document.querySelector(".text");
const bodyEl = document.body;

function toggle() {
  toggleButton.classList.toggle("darkmode");
  if (toggleButton.classList.contains("darkmode")) {
    textEl.textContent = "Dark";
    bodyEl.classList.toggle("darkTheme");
  } else {
    textEl.textContent = "Light";
    bodyEl.classList.remove("darkTheme");
  }
}

const songs = [
  {
    id: 1,
    name: "Sochan",
    artist: "Amrinder Gill",
    img: "sochan.webp",
    genre: "Romantic",
    source: "Sochan.mp3",
  },
  {
    id: 2,
    name: "Hale Dil",
    artist: "Harshit Saxena",
    img: "Hale Dil.jpg",
    genre: "Rock",
    source: "Hale-Dil.m4a",
  },
  {
    id: 3,
    name: "Neend",
    artist: "Amrinder Gill",
    img: "Neend.jpeg",
    genre: "Romantic",
    source: "Neend.mp3",
  },
  {
    id: 4,
    name: "Uska hi bnana",
    artist: "Arijit Singh",
    img: "uska hi banana.jpeg",
    genre: "Classic",
    source: "Uska-hi-bnana.m4a",
  },
  {
    id: 5,
    name: "Zaroor",
    artist: "Savi Kahlon",
    img: "Zaroor.jpeg",
    genre: "Pop",
    source: "Zaroor.m4a",
  },
  {
    id: 6,
    name: "Jitni Dafaa",
    artist: "Yasser Desai",
    img: "Jitni Dafaa.jpg",
    genre: "Romantic",
    source: "Jitni-Dafaa.m4a",
  },
];

const containerEl = document.querySelector(".songContainer");
const selectEl = document.getElementById("dropdown");
const genres = ["All Songs", "Pop", "Rock", "Classic", "Romantic"];

genres.forEach((genre) => {
  const optionEl = document.createElement("option");
  optionEl.setAttribute("value", genre);
  optionEl.textContent = genre;
  selectEl.appendChild(optionEl);
});

// second section starts----------------
const songCardEl = document.querySelector(".songCard");
const cardEl = document.querySelector(".card");
const songsEl = document.querySelector(".songs");
const imageTag = document.createElement("img");
const headingTag = document.createElement("h2");
const paraTag = document.createElement("p");
const forwardBtn = document.createElement("button");
const backwardBtn = document.createElement("button");
const playEl = document.querySelector(".play");
const addPlaylistBtn = document.createElement("button");
const playlistEl = document.querySelector(".playlist");
const playlistInput = document.createElement("input");
const createPlaylistBtn = document.createElement("button");
const playlistSection = document.createElement("div");

playlistEl.appendChild(playlistInput);
playlistEl.appendChild(createPlaylistBtn);
playlistEl.appendChild(playlistSection);

playlistEl.style.width = "30rem";
playlistEl.style.height = "35rem";
playlistEl.style.backgroundColor = "mediumturquoise";
playlistEl.style.marginTop = ".5rem";
playlistEl.style.marginRight = ".5rem";
playlistEl.style.borderRadius = ".8rem";

playlistInput.style.width = "15rem";
playlistInput.style.height = "2rem";
playlistInput.style.borderRadius = ".8rem";
playlistInput.style.marginLeft = "2rem";
playlistInput.style.marginTop = "2rem";
playlistInput.setAttribute("type", "text");
playlistInput.setAttribute("placeholder", "   Enter Playlist Name");
playlistInput.style.paddingLeft = "1.6rem";
playlistInput.style.paddingRight = "1.2rem";
playlistInput.addEventListener("keydown", (eve) => {
  if (eve.key === "Enter") {
    Createdlist();
  }
});

playlistInput.style.border = "none";
playlistInput.style.outline = "none";
playlistInput.style.backgroundColor = "lightsalmon";
playlistInput.style.color = "black";

playlistSection.style.marginLeft = "2rem";
playlistSection.style.marginTop = "1rem";
playlistSection.style.borderRadius = "1rem";
playlistSection.style.width = "25rem";
playlistSection.style.height = "28rem";
playlistSection.style.backgroundColor = "bisque";
playlistSection.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.8)";

createPlaylistBtn.style.width = "7rem";
createPlaylistBtn.style.height = "2rem";
createPlaylistBtn.style.borderRadius = ".8rem";
createPlaylistBtn.style.marginRight = "1rem";
createPlaylistBtn.style.marginLeft = "2rem";
createPlaylistBtn.style.marginTop = "0rem";
createPlaylistBtn.style.backgroundColor = "darkkhaki";
createPlaylistBtn.style.color = "darkslategray";
createPlaylistBtn.style.border = "none";
createPlaylistBtn.style.outline = "none";
createPlaylistBtn.textContent = "Create Playlist";

createPlaylistBtn.addEventListener("mouseover", () => {
  createPlaylistBtn.style.transform = "scale(1.2)";
  createPlaylistBtn.style.transition = "all 0.5s ease-in-out";
  createPlaylistBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  createPlaylistBtn.style.cursor = "pointer";
});

createPlaylistBtn.addEventListener("mouseout", () => {
  createPlaylistBtn.style.transform = "scale(.9)";
  createPlaylistBtn.style.transition = "all 0.5s ease-in-out";
  createPlaylistBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
});

addPlaylistBtn.textContent = "Add Playlist";
addPlaylistBtn.style.backgroundColor = "Blue";
addPlaylistBtn.style.borderRadius = "1rem";
addPlaylistBtn.style.width = "8rem";
addPlaylistBtn.style.height = "2rem";
addPlaylistBtn.style.marginLeft = "12rem";
addPlaylistBtn.style.marginTop = ".5rem";
addPlaylistBtn.style.color = "white";
addPlaylistBtn.style.border = "none";
addPlaylistBtn.style.outline = "none";
addPlaylistBtn.style.cursor = "pointer";
addPlaylistBtn.addEventListener("mouseover", () => {
  addPlaylistBtn.style.transform = "scale(1.2)";
  addPlaylistBtn.style.transition = "all 0.5s ease-in-out ";
  addPlaylistBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  addPlaylistBtn.style.cursor = "pointer";
  addPlaylistBtn.style.backgroundColor = "mediumblue";
});
addPlaylistBtn.addEventListener("mouseout", () => {
  addPlaylistBtn.style.transform = "scale(1)";
  addPlaylistBtn.style.transition = "all 0.5s ease-in-out";
  addPlaylistBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
});

forwardBtn.style.width = "6rem";
forwardBtn.style.height = "2rem";
forwardBtn.style.marginTop = "3.5rem";
forwardBtn.style.marginLeft = "3rem";
forwardBtn.style.borderRadius = "1rem";
forwardBtn.style.backgroundColor = "orange";
forwardBtn.style.border = "none";
forwardBtn.style.outline = "none";
forwardBtn.style.cursor = "pointer";
forwardBtn.addEventListener("mouseover", () => {
  forwardBtn.style.transform = "scale(1.2)";
  forwardBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  forwardBtn.style.transition = "all 0.5s ease-in-out";
  forwardBtn.style.fontSize = "1.5rem";
  forwardBtn.style.fontWeight = "bold";
});
forwardBtn.addEventListener("mouseout", () => {
  forwardBtn.style.transform = "scale(1)";
  forwardBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  forwardBtn.style.transition = "all 0.5s ease-in-out";
});

backwardBtn.style.width = "6rem";
backwardBtn.style.height = "2rem";
backwardBtn.style.marginLeft = "8rem";
backwardBtn.style.borderRadius = "1rem";
backwardBtn.style.backgroundColor = "orange";
backwardBtn.style.border = "none";
backwardBtn.style.outline = "none";
backwardBtn.style.cursor = "pointer";
backwardBtn.addEventListener("mouseover", () => {
  backwardBtn.style.transform = "scale(1.2)";
  backwardBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  backwardBtn.style.transition = "all 0.5s ease-in-out";
  backwardBtn.stylefontSize = "1.5rem";
  backwardBtn.style.fontWeight = "bold";
});
backwardBtn.addEventListener("mouseout", () => {
  backwardBtn.style.transform = "scale(1)";
  backwardBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
  backwardBtn.style.transition = "all 0.5s ease-in-out";
});

forwardBtn.textContent = "=>";
backwardBtn.textContent = "<=";
playEl.appendChild(backwardBtn);
playEl.appendChild(forwardBtn);

cardEl.appendChild(imageTag);
cardEl.appendChild(headingTag);
cardEl.appendChild(paraTag);

songCardEl.style.width = "30rem";
songCardEl.style.height = "35rem";
songCardEl.style.backgroundColor = "dodgerblue";
songCardEl.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.8)";
songCardEl.style.marginTop = ".5rem";
songCardEl.style.marginRight = ".5rem";
songCardEl.style.borderRadius = ".8rem";
songCardEl.style.color = "red";
songCardEl.appendChild(addPlaylistBtn);

cardEl.style.width = "20em";
cardEl.style.height = "22.5em";
cardEl.style.borderRadius = "1em";
cardEl.style.marginTop = "2em";
cardEl.style.marginLeft = "5.5em";
cardEl.style.backgroundColor = "mediumturquoise";
cardEl.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.7)";

imageTag.style.width = "16rem";
imageTag.style.marginLeft = "2rem";
imageTag.style.marginTop = ".8rem";
imageTag.style.borderRadius = ".8rem";
imageTag.style.objectFit = "contain";
imageTag.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.9)";

headingTag.style.color = "midnightblue";
headingTag.style.marginTop = ".5rem";
headingTag.style.marginLeft = "2.4rem";

paraTag.style.color = "navy";
paraTag.style.marginTop = ".5rem";
paraTag.style.marginLeft = "2.4rem";

songsEl.style.width = "1rem";
songsEl.style.height = "1rem";
songsEl.style.marginTop = "1rem";
songsEl.style.marginLeft = "6.5rem";

let audioEl = document.createElement("audio");
audioEl.setAttribute("controls", "");
audioEl.setAttribute("muted", "");
audioEl.setAttribute("autoplay", "");
let source = document.createElement("source");
source.setAttribute("src", "");
source.setAttribute("type", "audio/mp3");
songsEl.appendChild(audioEl);

function playSong(song) {
  imageTag.src = song.img;
  headingTag.textContent = song.name;
  paraTag.textContent = song.artist;
  audioEl.appendChild(source);
  source.src = song.source;
  audioEl.load();
}

function nextSong(song) {
  return song.id;
}

// Event listener on clicking gener buttons and forward and backward buttons

selectEl.addEventListener("click", (event) => {
  const selectedGenre = event.target.value;
  containerEl.innerHTML = "";
  let filteredSongs;
  if (selectedGenre == "All Songs") {
    filteredSongs = songs;
  } else {
    filteredSongs = songs.filter((song) => song.genre == selectedGenre);
  }

  filteredSongs.forEach((song) => {
    const listEl = document.createElement("button");
    listEl.style.backgroundColor = "green";
    listEl.style.border = "none";
    listEl.style.outline = "none";
    listEl.style.cursor = "pointer";
    listEl.style.color = "white";
    listEl.style.fontSize = "1em";
    listEl.style.fontWeight = "bold";
    listEl.addEventListener("mouseover", () => {
      listEl.style.transform = "scale(1.1)";
      listEl.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      listEl.style.transition = "all 0.5s ease-in-out";
    });
    listEl.addEventListener("mouseout", () => {
      listEl.style.transform = "scale(1)";
      listEl.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      listEl.style.transition = "all 0.5s ease-in-out";
    });
    listEl.style.width = "14em";
    listEl.style.paddingTop = ".5em";
    listEl.style.paddingBottom = ".5em";
    listEl.style.borderRadius = ".625em";
    listEl.style.margin = ".8em 0em .1em 2rem";
    listEl.textContent = `${song.name} - ${song.artist}`;
    containerEl.appendChild(listEl);
    listEl.addEventListener("click", () => {
      playSong(song);
      let num = nextSong(song);

      forwardBtn.addEventListener("click", () => {
        if (num === songs.length) {
          num = 0;
        }
        let forward = songs[num];
        imageTag.src = forward.img;
        headingTag.textContent = forward.name;
        paraTag.textContent = forward.artist;
        source.src = forward.source;

        if (!audioEl.contains(source)) {
          audioEl.appendChild(source);
        }
        audioEl.load();
        num++;
      });

      backwardBtn.addEventListener("click", () => {
        if (num <= 0) {
          num = songs.length - 1;
        } else {
          num--;
        }
        let backward = songs[num];
        imageTag.src = backward.img;
        headingTag.textContent = backward.name;
        paraTag.textContent = backward.artist;
        source.src = backward.source;
        audioEl.load();
      });
    });
  });
});

// third section of making playlist starts here ----

createPlaylistBtn.addEventListener("click", () => Createdlist());
function Createdlist() {
  let playlistSongsArray = [];
  const playlistSongs = document.createElement("div");
  const playlistSongsHeading = document.createElement("h1");
  playlistSongs.appendChild(playlistSongsHeading);
  playlistSongsHeading.textContent = `${playlistInput.value} Playlist`;
  playlistSongs.style.display = "flex";
  playlistSongs.style.flexDirection = "column";

  // onclicking add playlist button songs will ll be added to playlist
  addPlaylistBtn.addEventListener("click", () => {
    songs.forEach((song) => {
      if (
        song.source == source.src.substring(source.src.lastIndexOf("/") + 1)
      ) {
        if (playlistSongsArray.includes(song)) {
          alert("Song already added to playlist");
        } else {
          playlistSongsArray.push(song);
          let str = document.createElement("h3");
          str.style.width = "10rem";
          str.style.height = "1.5rem";

          const delBtn = document.createElement("button");
          delBtn.textContent = "Delete";
          delBtn.style.backgroundColor = "red";
          delBtn.style.border = "none";
          delBtn.style.outline = "none";
          delBtn.style.cursor = "pointer";
          delBtn.style.color = "white";
          delBtn.style.borderRadius = "1rem";
          delBtn.style.width = "3rem";
          delBtn.style.height = "1.5rem";
          delBtn.style.fontWeight = "bold";
          delBtn.addEventListener("click", () => {
            playlistSongs.removeChild(str);
            playlistSongsArray.splice(song, 1);
            playlistSongs.removeChild(delBtn);
          });
          playlistSongs.appendChild(str);
          playlistSongs.appendChild(delBtn);
          str.textContent = song.name;
        }
      }
    });
  });
  playlistSongs.style.overflow = "scroll";
  playlistSongs.style.overflowX = "hidden";
  playlistSongs.style.width = "19rem";
  playlistSongs.style.height = "5rem";
  playlistSongs.style.borderRadius = "1rem";
  playlistSongs.style.marginLeft = "1rem";
  playlistSongs.style.marginTop = "1rem";
  playlistSongs.style.paddingLeft = "3.6rem";
  playlistSongs.style.paddingTop = "2rem";
  playlistSongs.style.color = "darkblue";
  playlistSection.appendChild(playlistSongs);

  const playlistButton = document.createElement("button");
  const createParaEl = document.createElement("h2");
  playlistButton.style.border = "none";
  playlistSection.appendChild(playlistButton);
  const deleteBtn = document.createElement("button");
  playlistButton.appendChild(createParaEl);
  playlistButton.style.display = "flex";
  playlistButton.style.justifyContent = "space-between";
  playlistButton.style.color = "darkblue";
  deleteBtn.style.width = "5rem";
  deleteBtn.style.height = "1.8rem";
  deleteBtn.style.backgroundColor = "green";
  deleteBtn.textContent = "Delete";
  deleteBtn.style.borderRadius = "0 .5rem .5rem 0";
  deleteBtn.style.color = "black";
  deleteBtn.style.border = "none";

  deleteBtn.addEventListener("mouseover", function () {
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.transform = "scale(1.1)";
    deleteBtn.style.transition = "all 0.5s ease-in-out";
    deleteBtn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    deleteBtn.style.cursor = "pointer";
  });
  deleteBtn.addEventListener("mouseout", function () {
    deleteBtn.style.backgroundColor = "green";
    deleteBtn.style.color = "black";
    deleteBtn.style.transform = "scale(1)";
    deleteBtn.style.transition = "all 0.3s ease-in-out";
  });
  deleteBtn.addEventListener("click", () => {
    playlistButton.remove();
    playlistSongs.remove();
  });

  playlistButton.appendChild(deleteBtn);
  playlistButton.style.marginTop = "1rem";
  playlistButton.style.width = "20rem";
  playlistButton.style.height = "2rem";
  playlistButton.style.borderRadius = ".5rem";
  playlistButton.style.marginLeft = "2rem";
  playlistButton.style.backgroundColor = "white";
  if (playlistInput.value === "") {
    alert("Please enter a playlist name");
    playlistButton.remove();
    playlistSongs.remove();
  } else {
    createParaEl.textContent = playlistInput.value;
    createParaEl.style.paddingLeft = "3rem";
    createParaEl.style.backgroundColor = "red";
    createParaEl.style.borderRadius = ".5rem 0 0 .5rem";
    createParaEl.style.height = "1.3rem";
    createParaEl.style.width = "12rem";
    createParaEl.style.paddingTop = ".5rem";
  }
  playlistInput.value = "";
}
