function artGen(artistName) {
    var queryUrl = "https://api.discogs.com/database/search?q=" + artistName +"&key=RgHfTojdnkeQgCqFmkTT&secret=twfdmVrizBUNTUHHonIfYakTJsQaQPbO";
    //album art retreival algorithm
    // Find related albums to artist (single item) and then push it into an array
    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function(response) {
        var artGallery = $('#art');
        artGallery.empty();;
        
        let len = 24;
        for(i = 0; i < len; i++){
            var album = response.results[i + 1].title;
            if(album == response.results[i + 2].title){ //if statement to advance by 1 if next album is a repeat
                i++;
                len++;
                //console.log(i);
            }
            var albumURL = response.results[i + 1].cover_image;
            var imgGen = $('<img>');
            imgGen.addClass('artwork');
            imgGen.attr("style", "max-width: 250px; border: 5px solid grey; flex-wrap: wrap;");
            imgGen.attr('id', 'album-art-'+ i)
            imgGen.attr('src', albumURL);
            artGallery.append(imgGen);
        }
    });
}

function vidGen(artistName) {
    // Remove previous contents to make room for new content
    $('#videos').empty();

    var ytKey = 'AIzaSyCKvd4i6ZTfSai5ZhbIz18hPLUeveX8ucw';
    var ytURL = 'https://www.googleapis.com/youtube/v3/search?q=' + artistName + "+concert&type=video&maxResults=12&part=snippet&key=" + ytKey;
    $.ajax({
        url: ytURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        var videosYT = response.items;
            console.log(videosYT);
        for(i = 0; i < videosYT.length; i++){
            var iframeGen = $('<iframe style="width: 560px;" width="560" height="315" allowfullscreen>');
            iframeGen.attr('src', 'https://www.youtube.com/embed/' + videosYT[i].id.videoId);            
            $('#videos').append(iframeGen);
        }
    });
}

function downloadGen(videoUrl) {
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

    var btnGen = $('<button class="btn"><i class="fa fa-download"></i>');
    btnGen.text('download');
    btnGen.attr('link', videoUrl);
    $('#row-' + i).append(btnGen);
    }
}

$(document).on("click", "#search-button", function(e) {
    e.preventDefault();
    artistName = $("#search-input").val();

    artGen(artistName);
    vidGen(artistName);  
});

artGen('rick roll');
vidGen('Rick-Roll');

//function for downloading YouTube videos 
function logVidLink(){
    var vidLink = document.getElementById("videolink").value;
    console.log(vidLink)
    
    
    
    
    var settings = {
        "async": true,
        "crossDomain": true,
      "url": "https://youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com/download.php?start=1&end=1&button=1&url="+ vidLink +"&format=" + "1080",
      "method": "GET",
      "dataType": "JSON",
        "headers": {
            "x-rapidapi-host": "youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com",
            "x-rapidapi-key": "08f626399fmsh6817ac6eb50e800p1acd6djsnf6dbbd0bd667",
      },
    }
    
    
    
    $.ajax(settings).done(function (response) {
      
      
      console.log(response);
      console.log(response.id); 
      
      var settings2 = {
        "async": true,
      "crossDomain": true,
      "url": "https://youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com/progress.php?id=" + response.id,
      "method": "GET",
      "dataType": "JSON",
        "headers": {
            "x-rapidapi-host": "youtube-video-downloader-4k-and-8k-mp3.p.rapidapi.com",
            "x-rapidapi-key": "08f626399fmsh6817ac6eb50e800p1acd6djsnf6dbbd0bd667",
      },
      
    }
    
    $.ajax(settings2).done(function (response) {
      
      console.log(response);
      console.log(response.download_url);
      
      window.open(response.download_url);
    
    
    });
    
    
    })
    
    }