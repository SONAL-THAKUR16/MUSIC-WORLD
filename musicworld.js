async function searchSong(){

const song =
document.getElementById(
"song"
).value;

const response =
await fetch(
`https://itunes.apple.com/search?term=${encodeURIComponent(song)}&limit=10`
);

const data =
await response.json();

const result =
document.getElementById(
"result"
);

result.innerHTML="";

if(data.results.length===0){

result.innerHTML=
"<h2>No Song Found</h2>";

return;

}

let s = data.results.find(
x => x.previewUrl
);

if(!s){

result.innerHTML=
"<h2>Preview Not Available</h2>";

return;

}

result.innerHTML =

`

<div class="card">

<h2>

${s.trackName}

</h2>

<h3>

${s.artistName}

</h3>

<img
src="${s.artworkUrl100.replace(
'100x100',
'300x300'
)}">

<br>

<audio controls autoplay>

<source
src="${s.previewUrl}"
type="audio/mpeg">

Your browser doesn't support audio.

</audio>

</div>

`;

}