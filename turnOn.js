(function() {
	document.body.spellcheck = false;
	document.body.contentEditable = true;
	
	let links = document.getElementsByTagName('a');
	let buttons = document.getElementsByTagName('button');
	let linksAndButtons = [...links, ...buttons];
	
	for (let i = 0; i < linksAndButtons.length; i++) {
		linksAndButtons[i].setAttribute('disabled', 'disabled');
	}
	
	document.addEventListener('click', handler, true);
	
	function handler(e) {
		if (document.body.spellcheck) return;
		e.stopPropagation();
		e.preventDefault();
	}

})()
