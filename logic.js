let albumArt;
let artistName = '2pac';
var qURL = 'http://api.deezer.com/search?q=' + artistName;

//album art retreival algorithm
function artistAlbum() {
// Find related albums to artist (single item) and then push it into an array
$.ajax({
    url: qURL,
    method: 'GET'
}).then(function(resp) {
    resp.data.forEach(element => {
        var artist = artist.nameval();
            console.log(name);
        var album = album.title.val();
        var albumURL = album.cover_big.val();

        albumArt.push(album, albumURL);
    });
    console.log(albumArt);
});
};