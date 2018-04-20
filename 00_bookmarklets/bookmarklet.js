(function(){
    console.log("bookmarklet starting");

    let paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        // option 1. Delete all text
        // paragraphs[i].innerHTML = '';

        // option 2. Change all text to kitten
        // paragraphs[i].innerHTML = 'kitten';

        // option 3. Change all text background color to purple
        paragraphs[i].style['background-color'] = '#C036F3';
    }
})();

// Append bookmarket.js to body
// This anonymous, self-executing function will go to a href in index.html
// (function(){
//     // Host bookmarket.js to make it accessible
//     let url = 'file:///Users/cindy.son/Documents/cindy-world/chrome-ext/00_bookmarklets/bookmarklet.js';

//     let script = document.createElement('script');

//     // Avoid browser cache issue
//     script.src = url + '?' + new Date().getTime();

//     document.body.appendChild(script);
// })();