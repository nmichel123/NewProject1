let art; //var art = ['src=url1', 'src=url2', 'src=url3', ... ];
let video; //var video = ['src=url1', 'src=url2', 'src=url3', ... ];

function renderArt(){
    let len = art.length;
    var artGallery = $('.table');

    artGallery.empty();
    var artHead = $('<div class="bins aside-head">');
    artGallery.append(artHead);

    var hTag = $('<h2>');
    hTag.text("Album Artwork");

    for(i = 0; i < len; i ++) {
        console.log(art);
        var imgGen = $('<img>');
        imgGen.addClass('');
        imgGen.attr("style", "width: 15%; border: 5px solid var(--hue-background); flex-wrap: wrap;");
        imgGen.attr('id', 'album-art-'+ i)
        artGallery.append(imgGen);
    }
           
    art.forEach(element => {
        var iframeGen = $('<iframe>');
            iframeGen.attr('id', 'video-' + i);
            var entry = video.url;
            iframeGen.attr('src', entry);
                console.log(entry);
            $('#album-art-' + i).append(iframeGen);
    });       

            
    }
};

$('#search').button.on("click", function(e){
    renderBins();
});

$('.bins').on('click', function(e) {

});

renderBins();