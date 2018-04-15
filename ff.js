/* CuteFF // ff.js
   Copyright (c) 2012 outa[dev].
*/

//"Si toi aussi tu vas à la minecon pousse vert !11" - Jean-Kévin de la Kikoulerie

//main function
(function(){
	//we first display a introduction sentence
	charByChar('WELL, WELL, WELL.', function() {
		//when it's displayed,
		//add a return
		document.getElementById('ff-container').innerHTML += '<br />';
		//display my #followfridays
		displayAll();
	}, 1000); //1000 milliseconds will be waited before calling the callback
	
	var index = 0,
		lines = ['Eramdam', 'QuantuumCleaner', 'PumpkinNoucki', 'LePatryote', 'Ramikaze', 'SayLaNouit', 'shellgratuit', 'richie3366', 'mollstam', 'jkbockstael', 'Mazavel', 'Herobrine']; //enter here the desired followers
	
	//this function loops through all the followers, and displays them char by char
	function displayAll() {
		if(index < lines.length) {
			charByChar('#FF @' + lines[index], displayAll, null, lines[index]);
			index++;
		} else {
			//when we're done
			document.getElementById('ff-container').innerHTML += '<br /><br />';
			//closing sentence
			charByChar("Ça fait tellement longtemps que j'ai pas fait de #CuteFF que je peux pas mettre tout le monde, mais un groooos câlin à toutes et à tous <33", null, 0);
		}
	}
})();

//this function displays a string char by char, with a pause between each chars
function charByChar(text, callback, endPause, twPseudo) {
	var index = 0;
	
	//if it's a twitter user, add a link to their account
	if(twPseudo != null) {
		document.getElementById('ff-container').innerHTML += '<a href="http://twitter.com/' + twPseudo + '" id="' + twPseudo + '"></a>';
	}
	
	var interval = setInterval(function() {
		if(index < text.length) {
			if(twPseudo != null) {
				//if it's a twitter user, position ourselves in the <a>
				document.getElementById(twPseudo).innerHTML += text.charAt(index);
			} else {
				//if it's a random sentence, just position ourselves in the ff-container
				document.getElementById('ff-container').innerHTML += text.charAt(index);
			}
			index++;
		} else {
			//when the string is displayed
			document.getElementById('ff-container').innerHTML += '<br />';
			clearInterval(interval);
			
			//if we want a pause
			if(endPause != null) {
				//wait until callback
				setTimeout(callback, endPause);
			} else {
				//else just call it now
				callback();
			}
		}
	}, 70); //frequency for displaying a char
}