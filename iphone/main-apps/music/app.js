const songList = [
  {
    title: "Beautiful Now (feat. Jon Bellion)",
    artist: "Zedd",
    album: "True Colors",
    cover: "https://upload.wikimedia.org/wikipedia/en/b/b9/Zedd_-_Beautiful_Now.jpg",
    color: "#b8235a",
    class: "zedd-bn",
    background: "linear-gradient(to left, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)"
  },
  {
    title: "Sing",
    artist: "Ed Sheeran",
    album: "X",
    cover: "http://www.idolator.com/wp-content/uploads/sites/10/2014/04/10/ed-sheeran-x.jpg",
    color: "#19ae4b",
    class: "sheeran-s",
    background: "linear-gradient(to bottom, #1ACD57 0%, #16A86B 100%)"
  },
  {
    title: "Love Yourself",
    artist: "Justin Bieber",
    album: "Purpose",
    cover: "http://www.sugamagazineonline.com/wp-content/uploads/2015/11/1444585436549.jpg",
    color: "#555356",
    class: "bieber-ly",
    background: "linear-gradient(to top, #434343 0%, #171717 100%)"
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide",
    cover: "http://cdn.images.express.co.uk/img/dynamic/35/590x/secondary/ED-SHEERAN-775335.jpg",
    color: "#1ba8d6",
    class: "sheeran-soy",
    background: "linear-gradient(to left, #16B3D6 0%, #1BA8D6 100%)"
  }
];

let currentSong = 0;

function switchAttrs() {
  let song = songList[currentSong];

  //HTML CHANGES
  $.when(
    $('.album-cover-img').attr('src', song.cover)
  ).then(() => {
    $('.music-name').html(song.title);
    $('.artist-name').html(song.artist);
    $('.album-name').html(song.album);

    //CSS CHANGES
    $('progress').removeClass();
    $('body').css('background-image', song.background);
    $('.music-time').css('color', song.color);
    $('.album-name').css('color', song.color);
    $('.menu-bottom i').css('color', song.color);
    $('progress').addClass(song.class);
  });
}

$('.rewind').click(() => {
  if (currentSong == 0) {
    currentSong = songList.length - 1;
  } else {
    currentSong--;
  }

  switchAttrs();
});

$('.forward').click(() => {
  if (currentSong == songList.length - 1) {
    currentSong = 0;
  } else {
    currentSong++;
  }

  switchAttrs();
});
