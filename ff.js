//"D'ici quelques heures ça sera sur Github" - Wolfgang Amadeus Mozart

(function(){
	charByChar('Initializing #FollowFriday protocol. Begin:', function() {
		document.getElementById('ff-container').innerHTML += '<br />';
		displayAll();
	}, 1000);
	
	var index = 0,
		lines = ['pseudo1', 'pseudo2', 'pseudo3', '...'];
	
	function displayAll() {
		if(index < lines.length) {
			charByChar('#FF @' + lines[index], displayAll, null, lines[index]);
			index++;
		} else {
			document.getElementById('ff-container').innerHTML += '<br /><br />';
			charByChar('Unbelievable! You, [Subject Name Here], must be the pride of [Subject Hometown Here].', null, 0);
		}
	}
})();

function charByChar(text, callback, endPause, twPseudo) {
	var index = 0;
	if(twPseudo != null) {	
		document.getElementById('ff-container').innerHTML += '<a href="http://twitter.com/' + twPseudo + '" id="' + twPseudo + '"></a>';
	}
	
	var interval = setInterval(function() {
		if(index < text.length) {
			if(twPseudo != null) {
				document.getElementById(twPseudo).innerHTML += text.charAt(index);
			} else {
				document.getElementById('ff-container').innerHTML += text.charAt(index);
			}
			index++;
		} else {
			document.getElementById('ff-container').innerHTML += '<br />';
			clearInterval(interval);
			if(endPause != null) {
				setTimeout(callback, endPause);
			} else {
				callback();
			}
		}
	}, 70);
}