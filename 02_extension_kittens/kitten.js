console.log("Kittens of the world, unite as one!");

let filenames = [
    "alexandru-zdrobau-176844.jpg",
    "caleb-woods-333396.jpg",
    "emre-camcioglu-474549.jpg",
    "krystian-tambur-101318.jpg",
    "paul-280209.jpg"
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'kittens/' + filenames[r];
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
}