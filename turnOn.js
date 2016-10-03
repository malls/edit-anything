document.body.spellcheck = false;
document.body.contentEditable = true;

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
	links[i].setAttribute('disabled', 'disabled');
}

document.addEventListener('click', handler, true);

function handler(e) {
	if (document.body.spellcheck) return;
	e.stopPropagation();
	e.preventDefault();
}
