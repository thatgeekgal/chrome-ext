console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

// global scope
window.word = "";

function receiver(request, sender, sendResponse) {
    window.word = request.text;
}