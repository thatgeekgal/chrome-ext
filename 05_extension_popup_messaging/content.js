console.log("chrome extension running!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
   console.log(message.txt);
   let paragraphs = document.getElementsByTagName('p');
   for (let elt of paragraphs) {
       elt.innerHTML = message.txt;
   }
}