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
            for(i = 0; i < 12; i++){
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

        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //   "url": "https://youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com/download.php?start=1&end=1&button=1&url="+ "https://www.youtube.com/watch?v=w9uWPBDHEKE&list=RDw9uWPBDHEKE&start_radio=1" +"&format=" + "mp3", //format var goes here
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com",
        //         "x-rapidapi-key": "08f626399fmsh6817ac6eb50e800p1acd6djsnf6dbbd0bd667"
        //     }
        // }
        // $.ajax(settings).done(function (response) {
        //     console.log(JSON.parse(response));
        // });

        // $('#Qual').empty();
        // let quality = ['mp3 (audio)', '720p', '1080p', '4k'];
        // for(i = 0; i < 4; i++){
        //         console.log('quality-gen')
        //     var rowGen = $('<div  class="row"');
        //     rowGen.attr('id', 'row-' +  i);
        //     //rowGen.attr("data-type", quality[j]);
        //     $('#Qual').append(rowGen);
        //     var hTag = $('<h2>');
        //     hTag.text(quality[i]);
        //         console.log(quality[i]);
        //     $('#row-' + i).append(hTag);
        //     var btnGen = $('<button>');
        //     btnGen.text('download');
        //     btnGen.attr('link', albumURL)
        //     $('#row-' + i).append(btnGen);
        // }

});
