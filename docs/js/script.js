const omikuji_min = 1;
const omikuji_max = 50;
const omikuji_num = Math.floor( Math.random() * (omikuji_max + 1 - omikuji_min) ) + omikuji_min;
const omikuji_ret = ( '00' + omikuji_num ).slice( -2 );
const omikuji_elem = document.getElementById("omikuji");
omikuji_elem.src = `https://www.cotogoto.ai/omikuji/${omikuji_ret}.jpg`;