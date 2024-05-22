let isOn = false;

function updateIcon(tab) {
	let text = '';
	if (isOn) text = 'on';
	chrome.action.setBadgeText({
		text: text,
		tabId: tab.id
	});
}

function runScript(tab) {
	let file = isOn ? 'turnOn.js' : 'turnOff.js';
	chrome.scripting.executeScript({
		target: {
			tabId: tab.id,
			allFrames: true
		},
		files: [file]
	});
}

chrome.action.onClicked.addListener(function(tab) {
	isOn = !isOn;
	updateIcon(tab);
	runScript(tab);
});