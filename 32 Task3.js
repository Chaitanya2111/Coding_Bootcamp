// some()

const hearts =Array.from(document.querySelectorAll('.heart')) ;

console .log(hearts);

const isHeartBroken = hearts.some(heart => heart.hasChildNodes());

console.log(isHeartBroken);