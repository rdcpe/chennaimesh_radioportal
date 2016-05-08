$(document).ready(function(){
	var displayed_p=$('div.juke-box p');
	var audio=$('div.juke-box audio');
	var link=$('td a');
	
	link.click(function(event){
		event.preventDefault();
		
		setTimeout(loadMusic.call(this),1000);
	});
	
	function loadMusic(){
		audio.children()[0].src=this.href;
		audio[0].load();
		audio[0].play();
	}
	
});
