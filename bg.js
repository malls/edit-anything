var isOn = false;

function updateIcon() {
	var text = '';
	if (isOn) text = 'on';
	chrome.browserAction.setBadgeText({
		text: text
	});
}

function runScript(turnOn) {
	chrome.browserAction.getBadgeText(function(text) {
		var file = text === 'on' ? 'turnOn.js' : 'turnOff.js';
		chrome.tabs.executeScript(tab.id, {
			file: file
		}, updateIcon);
	})
}

chrome.browserAction.onClicked.addListener(function(tab) {
	isOn = !isOn;
	runScript(tab);
});

chrome.tabs.onCreated.addListener(runScript)