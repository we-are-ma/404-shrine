$(function () {
    var windowHeight = window.opener.outerHeight;
    $("body").height(windowHeight);
});

function omikuji() {
    const omikuji_min = 1;
    const omikuji_max = 50;
    const omikuji_num = Math.floor( Math.random() * (omikuji_max + 1 - omikuji_min) ) + omikuji_min;
    const omikuji_ret = ( '00' + omikuji_num ).slice( -2 );
    $("#omikuji").attr('src', `https://www.cotogoto.ai/omikuji/${omikuji_ret}.jpg`);
    $("#omikuji").show();
}

async function takiage() {

    $('#contents').width($('body').width());

    const response = await fetch('https://protopedia.net/api/prototypes.json?status=4&token=e8beabf47776780ea8fb42abbd0ce325')
    const list = await response.json(); 
    const uniqueList =[];
    let prev = '';
    for (data of list) {
        if (prev !== data.id) {
            uniqueList.push(data);
        }
        prev = data.id;
    }

    shuffle(uniqueList);
    console.log(uniqueList[0]);

    $("#prototypeLink").attr('href', 'https://protopedia.net/prototype/' + uniqueList[0].id);
    $("#prototypeNm").text(uniqueList[0].prototypeNm);
    if (uniqueList[0].image1.length > 0) {
        $("#prototypeImg").attr('src', uniqueList[0].image1);
        $("#prototypeImg").show();
    }
    const messages =[
        '新たな出会い、よき縁に・・・'
    ]
    shuffle(messages);
    $("#message").text(messages[0]);

    $("#takiage").show();
}

function link() {
    window.parent.postMessage(JSON.stringify({link: true}), "*");
}

function shuffle(arr) {
    var n = arr.length;
    var temp = 0, i = 0;

    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
