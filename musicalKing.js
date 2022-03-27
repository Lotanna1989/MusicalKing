var audios =[
   
    {
        id:1,
        imageSrc:"./thumbnails/REMY.jpg",
        audioSrc:"./audio/Rema-Ginger-Me-(JustNaija.com).mp3",
        title:"GINGER ME - REMA"
    },

    {
        id:2,
        imageSrc:"./thumbnails/angyemi.jpg",
        audioSrc:"./audio/Yemi_Alade_Ft_Angelique-Kidjo_Shekere_9jaflaver.com_.mp3",
        title:"DANCE - YEMI ALADE FT. ANGELIQUE KIDJO"
    },

    {
        id:3,
        imageSrc:"./thumbnails/burner.jpg",
        audioSrc:"./audio/Burna-Boy-African-Giant-(JustNaija.com).mp3",
        title:"AFRICAN GIANT - BURNABOY ODOGWU"
    },

    {
        id:4,
        imageSrc:"./thumbnails/duncanmighty.jpg",
        audioSrc:"./audio/Bracket-Ft.-Duncan-Mighty-–-Chinelo (1).mp3",
        title:"CHINELO - BRACKET FT DUNCANMIGHTY"
    },

    {
        id:5,
        imageSrc:"./thumbnails/PHILCOLLINS.jpg",
        audioSrc:"./audio/i_wish_it_would_rain_down_with_lyrics_phil_collins_mp3_7425.mp3",
        title:" I WISH IT WILL RAIN DOWN - PHIL COLLINS"
    },

    {
        id:6,
        imageSrc:"./thumbnails/ELTJ.jpg",
        audioSrc:"./audio/sacrifice.mp3",
        title:"SACRIFICE - ELTON JOHN",
    },

    {
        id:7,
        imageSrc:"./thumbnails/runt.jpg",
        audioSrc:"./audio/Nasty_C_Ft_Runtown_Said_9jaflaver.com_.mp3",
        title:"SAID - NASTY C FT RUNTOWN"
    },

    {
        id:8,
        imageSrc:"./thumbnails/west.jpg",
        audioSrc:"./audio/Westlife-Why_Do_I_Love_You.mp3",
        title:"WHY DO I LOVE YOU - WESTLIFE"
    },
] 


function audioPlay(songid) {
    
    var song = audios.find(function(song, index){
        return song.id===songid});
  

        document.getElementById('primeimg').src = song.imageSrc;
        document.getElementById('primeaudio').src = song.audioSrc;
        document.getElementById('primetitle').innerText = song.title;
        document.getElementById('primeaudio').play()
        

}

