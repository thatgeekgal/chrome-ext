## Bookmarklets

A quick easy way to add a button to affect the browser experience.

Javascript function

```
function hello() {
    alert("hello");
}

hello();
```

Javascript anonymous, self-executing function

```
(function () {
    alert("hello");
})();
```

Bookmarklets are Javascript anonymous, self-executing functions which are called directly on the browser address bar or from <a href="javascript:(function(){alert("hello");})()">bookmarklet</a> 

```
javascript:(function(){alert("hello");})()
```

Bookmarklet examples are located in `00_bookmarklets` folder. `bookmarklet.js` needs to be hosted on a web server and accessible by public.


## Chrome Extensions

Same idea as Bookmarklets, but we can do more with Chrome extensions to affect the browser experience as a whole.

Chrome extension examples are located in:
* `01_extension_basics_browser`
* `02_extension_kittens`
* `03_extension_sketch` 
* `04_extension_popup_maze` 
* `05_extension_popup_messaging` 
* `06_extension_tab_override` 

To test the examples, load unpacked extension code at `chrome://extensions` (_Developer mode_ should be on). _Reload_ whenver any change in the code.

### Architecture

* `manifest.json`: overall configuration of a chrome extension (e.g. what is allowed to do and when is allowed to do)
* multiple **content scripts** (e.g. `content.js`) based on urls: Javascript code live and executed inside a web page we're on when the page is loaded to manipulate and alter the page behaviour (e.g. `content.js`)
* 1 x **background script** (e.g. `background.js`): Javascript code runs on the background when chrome is launched and listens to various events associated to activities like page actions and browser actions (e.g exension button click) and does various things to affect how the browsers as a whole behavior
* _actions_: trigger events for background script to execute code (e.g._page action_ and _browser action_)
* _pup-up_: create an overlay that will augement browser experience

### Chrome API
 
* `chrome.browserAction`
* `chrome.tabs`
* `chrome.runtime`

**Communication flow example**: browser action --> background script (or popup) <--> content scripts
1. Background script is running on the background and listening for events (`chrome.browserAction.onClicked.addListener`)
2. Chrome extension button is clicked
3. Background script picks up the event and sends a message to a particular opened tab or all tabs (`chrome.tabs.sendMessage`)
4. Content script are listening for a message and receive the message (`chrome.runtime.onMessage.addListener`)
5. Content script replies to background script (`chrome.runtime.sendMessage`)
6. Background script listens for a message and receives the message (`chrome.runtime.onMessage.addListener`) 