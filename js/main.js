;(function() {
	"use strict";

	var playList = [{
	            author: "led zeppelin",
	            song: "stairway to heaven",
	            duration: "2:03"
	        },
	        {
	            author: "queen",
	            song: "bohemian rhapsody",
	            duration: "2:30"
	        },
	        {
	            author: "lynyrd skynyrd",
	            song: "free bird",
	            duration: "1:56"
	        },
	        {
	            author: "deep purple",
	            song: "smoke on the water",
	            duration: "3:03"
	        },
	        {
	            author: "jimi hendrix",
	            song: "all along the watchtower",
	            duration: "2:53"
	        },
	        {
	            author: "AC/DC",
	            song: "back in black",
	            duration: "2:43"
	        },
	        {
	            author: "queen",
	            song: "we will rock you",
	            duration: "2:13"
	        },
	        {
	            author: "metallica",
	            song: "enter sandman",
	            duration: "3:03"
	        }
	    ];

	    // var songList = document.querySelector ('.ba-playlist__list');

	    // for (var i = 0; i < playList.length; i++) {
	    // 		var songItem = '<li class= "ba-tune">' +
	    // 		'<div class="ba-tune__duration">' + playList[i].duration + '</div>' +
	    // 		'<div class="ba-tune__author">' + playList[i].author + '</div>' +
	    // 		'<div class="ba-tune__name">' + playList[i].song + '</div>' + '</li>';

	    // 		songList.innerHTML += songItem;
	    // 	}

		var songList = document.querySelector('.ba-playlist__list');



		playList.forEach(function(item){

	   	var songElement = document.createElement('li');
	   	       songElement.classList.add('ba-tune');

	   	var tuneDuration = document.createElement('span');
	   	        tuneDuration.classList.add('ba-tune__duration');
	   	        tuneDuration.innerHTML = item.duration;

	   	var tuneAuthor = document.createElement('span');
	   	        tuneAuthor.classList.add('ba-tune__author');
	   	        tuneAuthor.innerHTML = item.author;

	   	var tuneSong = document.createElement('div');
	   	        tuneSong.classList.add('ba-tune__song');
	   	        tuneSong.innerHTML = item.song;


	   	songList.appendChild(songElement);
	   	songElement.appendChild(tuneDuration);
	   	songElement.appendChild(tuneAuthor);
	   	songElement.appendChild(tuneSong);

	   	});

})();
