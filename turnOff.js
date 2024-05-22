(function() {
	document.body.contentEditable = false;
	document.body.spellcheck = true;

	let disabledLinksAndButtons = [...document.getElementsByTagName('a'), ...document.getElementsByTagName('button')];

	for (let i = 0; i < disabledLinksAndButtons.length; i++) {
		disabledLinksAndButtons[i].removeAttribute('disabled');
	}

})()