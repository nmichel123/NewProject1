$(document).on("click", "#search-button", function(e){
    var artGallery = $('#art');
    artGallery.empty();
    var artHead = $('<div class="bins aside-head">');
    artGallery.append(artHead);
    var hTag = $('<h2>');
    hTag.text("Album Artwork");
    
        let albumArt;
        let artistName = $("#search-input").val();
        var queryUrl = "https://api.discogs.com/database/search?q=" + artistName +"&key=RgHfTojdnkeQgCqFmkTT&secret=twfdmVrizBUNTUHHonIfYakTJsQaQPbO";
        //album art retreival algorithm
        // Find related albums to artist (single item) and then push it into an array
        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).then(function(response) {
            console.log(response.results[5].cover_image);
            for(i=0; i<12; i++){
                var album = response.results[i + 1].title;
                if(album == response.results[i+2].title){ //if statement to advance by 1 if next album is a repeat
                    i++;
                }
                var albumURL = response.results[i + 1].cover_image;
                console.log(albumURL)
                //albumArt.push(album);
    
                console.log(albumArt);
            var imgGen = $('<img>');
            imgGen.addClass('');
            imgGen.attr("style", "max-width: 250px; border: 5px solid var(--hue-background); flex-wrap: wrap;");
            imgGen.attr('id', 'album-art-'+ i)
            imgGen.attr('src', albumURL);
            artGallery.append(imgGen);
            }
        });
});
