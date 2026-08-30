'user strict';

var commentsopened = 0;

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

}

// functions to handle flower leaf clicks
function comments1(){

  document.getElementById("comment1").classList.add('commentappear');
    
}
function closing(){
    document.getElementById("comment1").classList.remove('commentappear');
    document.getElementById("comment2").classList.remove('commentappear');
    document.getElementById("comment3").classList.remove('commentappear');
    document.getElementById("comment4").classList.remove('commentappear');
    document.getElementById("comment5").classList.remove('commentappear');
    document.getElementById("comment6").classList.remove('commentappear');
    document.getElementById("comment7").classList.remove('commentappear');
    document.getElementById("comment8").classList.remove('commentappear');
    document.getElementById("comment9").classList.remove('commentappear');
    document.getElementById("comment10").classList.remove('commentappear');
    document.getElementById("comment11").classList.remove('commentappear');
    document.getElementById("comment12").classList.remove('commentappear');
    commentsopened++;
}

function comments2(){

  document.getElementById("comment2").classList.add('commentappear');
    
}

function comments3(){

  document.getElementById("comment3").classList.add('commentappear');
    
}

function comments4(){

  document.getElementById("comment4").classList.add('commentappear');
    
}

function comments5(){

  document.getElementById("comment5").classList.add('commentappear');
    
}

function comments6(){

  document.getElementById("comment6").classList.add('commentappear');
    
}

function comments7(){

  document.getElementById("comment7").classList.add('commentappear');
    
}

function comments8(){

  document.getElementById("comment8").classList.add('commentappear');
    
}

function comments9(){

  document.getElementById("comment9").classList.add('commentappear');
    
}

function comments10(){

  document.getElementById("comment10").classList.add('commentappear');
    
}

function comments11(){

  document.getElementById("comment11").classList.add('commentappear');
    
}

function comments12(){

  document.getElementById("comment12").classList.add('commentappear');
    
}

//flower bloowms
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


