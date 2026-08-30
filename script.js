'user strict';

var commentsopened = new Set();

(function() {
    var envelope = document.getElementById('envelope');
    var envelopetop = document.getElementById('envelopetop');
    var left = document.getElementById('left');
    var bottomright = document.getElementById('bottomright');
    var letter = document.getElementById('letter');
    var left = document.getElementById('left');
    var bottomright = document.getElementById('bottomright');
    var button = document.getElementById('openButton');
    var comments = document.getElementById('comment');
    var flag = 0;


/*
    envelopetop.classList.add('close');
    envelope.addEventListener('mouseover', openEnvelopeOnhover);
    envelope.addEventListener('mouseout', closeEnvelopeOnhover);

    function openEnvelopeOnhover() {
        flag = 1;
        envelopetop.classList.remove('close');
        envelopetop.classList.add('open');
        pulloutpartial();
    }

    function pulloutpartial() {
        letter.classList.remove('in');
        letter.classList.add('out-partial');
    }

    function closeEnvelopeOnhover() {
        if (flag === 1) {
            putin();
            envelopetop.classList.remove('open');
            envelopetop.classList.add('close');
        }
    }

    function putin() {
        letter.classList.remove('out-partial');
        letter.classList.add('in');
    }
        */




    

})();



function openEnvelope() {

    envelopetop.classList.add('open');
    left.classList.add('envelopeback');
    bottomright.classList.add('envelopeback');
    letter.classList.remove('in');
    letter.classList.add('out-partial');
    letter.classList.add('letterextender')
    envelope.classList.add('envelopeback');

}

// functions to handle flower leaf clicks
function comments(number) {
    document
        .getElementById(`comment${number}`)
        .classList.add('commentappear');

    commentsopened.add(number);
}

function closing() {

    for (let i = 1; i <= 12; i++) {
        document
            .getElementById(`comment${i}`)
            .classList.remove('commentappear');
    }

    if (commentsopened.size === 12) {
        window.location.href = "box.html";
    }
}

function things(){
    window.location.href = "things.html";
}



//flower bloowms
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

if (document.body.id === "things-page") {

    setTimeout(() => {
        alert("12 THINGS I LIKE ABOUT MY MAJESTY");
    }, 11000);

}