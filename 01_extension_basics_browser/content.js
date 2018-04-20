// This is the content script for the extension

// Things are happening
console.log("Chrome extension is running!");

// Content scripts can manipulate the DOM
// Here I'm changing the background for all the paragraphs
let paragraphs = document.getElementsByTagName('p');
// for (var i = 0; i < paragraphs.length; i++) {
//     elts[i].style['background-color'] = '#FF69B4'; // hot pink
// }

// E6 loop
for (let elt of paragraphs) {
    elt.style['background-color'] = '#FF69B4'; // hot pink
}

// Listen for message
chrome.runtime.onMessage.addListener(receiver);

// Handle the message
function receiver(request, sender, sendResponse) {
    // Now if the message matches "browser action"
    if (request.message === "browser action") {
        // Change the background color again
        var paragraphs = document.getElementsByTagName('p');
        // for (var i = 0; i < elts.length; i++) {
        //     elts[i].style['background-color'] = "#FF4500"; // hot organge
        // }

        // E6 loop
        for (let elt of paragraphs) {
            elt.style['background-color'] = "#FF4500"; // hot organge
        }

        // Send a message back!
        chrome.runtime.sendMessage({"message": "thank you"});
    }
}