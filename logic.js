let albumArt;
let artistName = '2pac';
var qURL = 'http://api.deezer.com/search?q=' + artistName;

$.ajax({
    url: qURL,
    method: 'GET'
}).then(function(resp) {
    resp.data.forEach(element => {
        var artist = artist.nameval();
            console.log(name);
        var album = album.title.val();
        var albumURL = album.cover_bigval();

        albumArt.push(album, albumURL);
    });
    console.log(albumArt);
});

//album art retreival algorithm
function artistAlbum() {
// Find related albums to artist (single item) and then push it into an array

};