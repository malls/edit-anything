document.body.contentEditable = false;
document.body.spellcheck = true;
var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
	links[i].setAttribute('disabled', false);
}
