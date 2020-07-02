$(document).on("click", "#search-button", function(e){
    e.preventDefault();
   
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
        let len = 24;
        for(i = 0; i < len; i++){
            var album = response.results[i + 1].title;
            if(album == response.results[i + 2].title){ //if statement to advance by 1 if next album is a repeat
                i++;
                len++;
                //console.log(i);
            }
            var albumURL = response.results[i + 1].cover_image;
            //console.log(albumURL)
            //albumArt.push(album);

            //console.log(albumArt);
        var imgGen = $('<img>');
        imgGen.addClass('artwork');
        imgGen.attr("style", "max-width: 250px; border: 5px solid grey; flex-wrap: wrap;");
        imgGen.attr('id', 'album-art-'+ i)
        imgGen.attr('src', albumURL);
        artGallery.append(imgGen);
    
    }
    });

    var ytKey = 'AIzaSyDU8dDA7emi_uv9R_LXIIu2jprRZJ6-wR8';
    var ytURL = 'https://www.googleapis.com/youtube/v3/search?q=' + artistName + "&type=video&maxResults=12&part=snippet&key=" + ytKey;
    $.ajax({
        url: ytURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        var videosYT = response.items;

        for(i = 0; i < videosYT.length; i++){
            
        }
    });
        

        
// Download button generators
    $('#Qual').empty();
    let quality = ['mp3 (audio)', '720p', '1080p', '4k'];
    console.log(quality);
    
    for(i = 0; i < 4; i++){
    let quality = ['mp3 (audio)', '720p', '1080p', '4k'];
        console.log('quality-gen ' + i);
    var rowGen = $('<div class="row" style="width: 100%;">');
    rowGen.attr('id', 'row-' +  i);

    //rowGen.attr("data-type", quality[j]);
    $('#Qual').append(rowGen);

    var hTag = $('<h3>');
    hTag.text(quality[i]);
        console.log(quality[i]);
    $('#row-' + i).append(hTag);

    var btnGen = $('<button>');
    btnGen.text('download');
    btnGen.attr('link', albumURL)
    $('#row-' + i).append(btnGen);
    }
    
});