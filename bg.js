var isOn = false;

function updateIcon(tab) {
	var text = '';
	if (isOn) text = 'on';
	chrome.browserAction.setBadgeText({
		text: text,
		tabId: tab.id
	});
}

function runScript(tab) {
	var file = isOn ? 'turnOn.js' : 'turnOff.js';
	chrome.tabs.executeScript(tab.id, {
		file: file
	});
}

chrome.browserAction.onClicked.addListener(function(tab) {
	isOn = !isOn;
	updateIcon(tab);
	runScript(tab);
});