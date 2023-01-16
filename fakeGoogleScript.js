var characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.',':','!','1','2','3','4','5','6','7','8','9','10'];
var charactersColor = {}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
for (i=0; i<characters.length; i++){
  charactersColor[characters[i]] = getRandomColor()
}

var word;
var wordGenerate;
var mousePosition = {
x:null,
y:null

}

function googleFall (){
    
  var letters = $('.lnXdpd1')
//   console.log(letters)
for(let i=0; i<letters.length; i++){
setTimeout(() => {
    // console.log(i)
    $(letters[i]).addClass('fallingLetter')
}, 200*i);
    
}

}

function crazyCrate(){

    var mouth = $('.RNNXgb')
    $(mouth).html('')

    $(mouth).addClass(
        'crazyMouth'
    )
    for(i=0; i<6; i++){
        let teeth = $("<div>");
        teeth.addClass("teeth-up");
        teeth.css("left", 100*i+ 'px')
        $(mouth).append(teeth);

    }
    for(i=0; i<6; i++){
        let teeth = $("<div>");
        teeth.addClass("teeth-down");
        // teeth.css("left", 50*i+ 'px')
        $(mouth).append(teeth);

    }

    console.log( $('.FPdoLc.lJ9FBc'))

    $('.FPdoLc.lJ9FBc').css("display", 'none')

    
}



$('form').submit((e)=>{
e.stopPropagation();
e.preventDefault();
googleFall()

setTimeout(() => {
 crazyCrate()   
}, 700);
word = $('input').val()
wordGenerate = setInterval(() => {
 reverse(word);   
}, 1000);

}
 )
//windowheight and width
var screenTop = $('.L3eUgb').height()
var screenLeft = $('.L3eUgb').width()

window.addEventListener('resize', function () {

screenTop = $('.L3eUgb').height()
screenLeft = $('.L3eUgb').width()

})

 function reverse(input){
    var splitString = input.split('')
    var randomTop =Math.floor(Math.random()*(screenTop))
    var randomLeft=Math.floor(Math.random()*(screenLeft))
   
    var group = $('<div>')
    $(group).addClass('group')
     $(group).css('top', randomTop)
     $(group).css('left', randomLeft)
    var prevLeft = 0
    var count = 0
    for(i=0; i<splitString.length; i++){
        let randomSize = Math.random()*50+5
        let letter = $("<a>")
        $(letter).addClass('letter')
        $(letter).css("left", prevLeft)
        $(letter).css("height", randomSize)
        $(letter).css("width", randomSize)
        $(letter).css("font-size", randomSize)
        prevLeft += randomSize
        let pickedLetter = splitString[splitString.length-i]
        $(letter).text(pickedLetter)
        if(charactersColor[pickedLetter]){
           $(letter).css("color", charactersColor[pickedLetter]) 
        }
        $(group).append(letter)
        count ++
        if(count=splitString.length){
            $('.L3eUgb').prepend(group)

        }
    }
 }


 function regular(input){

    var splitString = input.split('')
    var randomTop =Math.floor(Math.random()*(screenTop))
    var randomLeft=Math.floor(Math.random()*(screenLeft))
   
    var group = $('<div>')
    $(group).addClass('group')
     $(group).css('top', randomTop)
     $(group).css('left', randomLeft)
    var prevLeft = 0
    var count = 0
    for(i=0; i<splitString.length; i++){
        let randomSize = Math.random()*50+5
        let letter = $("<a>")
        $(letter).addClass('letter')
        $(letter).css("left", prevLeft)
        $(letter).css("height", randomSize)
        $(letter).css("width", randomSize)
        $(letter).css("font-size", randomSize)
        prevLeft = randomSize
        let pickedLetter = splitString[i]
        $(letter).text(pickedLetter)
        if(charactersColor[pickedLetter]){
           $(letter).css("color", charactersColor[pickedLetter]) 
        }
        $(group).append(letter)
        count ++
        if(count=splitString.length){
            $('.L3eUgb').prepend(group)

        }
    }

 }
// crazyCrate()
// googleFall()

// lnXdpd




var mouthFollow = setInterval(() => {

    if($('.crazyMouth').length>0){

    $(".crazyMouth").css('left',mousePosition.x - screenLeft/2)
    $(".crazyMouth").css('top',mousePosition.y - screenTop/2)
    }

    
}, 10);
function explode(object){
var color = $(object).css('color')
for(i=0; i<3; i++){
  let randDeg = Math.floor(Math.random()*100-50)
  let randDeg2 = Math.floor(Math.random()*-100+50)

  targetLeft = $(object).offset().left
  targetTop = $(object).offset().top
    if(targetTop!=0&&targetLeft!=0){
  var smallBloc = $("<div>")

    // smallBloc.addClass("fallingIce");
    smallBloc.addClass("smallPiece");
    
    smallBloc.css("top", parseInt(targetTop)-randDeg)
    smallBloc.css('left', parseInt(targetLeft)+randDeg2)
    // smallBloc.css('transform', 'rotate('+ randDeg+ 'deg) translate(50px)')
    
    
   
      smallBloc.css('background-color',color)
      $('.L3eUgb').append(smallBloc)
    }
}    
}


var eatLetters = setInterval(() => {

    if($('.crazyMouth').length>0){

    var mouthTop =Math.floor(parseFloat($('.crazyMouth').offset().top));
    var mouthBottom =Math.floor( mouthTop+ parseFloat($('.crazyMouth').height()))
    var mouthLeft=Math.floor(parseFloat($('.crazyMouth').offset().left));
    var mouthRight=Math.floor(mouthLeft+parseFloat($('.crazyMouth').width()))

    var letters = $(".letter")
    console.log(letters)
    if(letters.length>0){

    for(let i=0; i<letters.length; i++){
        
        if(parseFloat($(letters[i]).offset().top)>mouthTop
        &&parseFloat($(letters[i]).offset().top)<mouthBottom
        &&
        Math.floor(parseFloat($(letters[i]).offset().left)>mouthLeft)
        &&Math.floor(parseFloat($(letters[i]).offset().left)<mouthRight)
        ){
            console.log("hit");
            setTimeout(() => {
                     explode(letters[i])
            
            $(letters[i]).remove();
            }, 200);
       
        }

    }
}

    var pieces = $(".smallPiece")
    
    if(pieces.length>0){

    for(let i=0; i<pieces.length; i++){
        
        if(parseFloat($(pieces[i]).offset().top)>mouthTop
        &&parseFloat($(pieces[i]).offset().top)<mouthBottom
        &&
        Math.floor(parseFloat($(pieces[i]).offset().left)>mouthLeft)
        &&Math.floor(parseFloat($(pieces[i]).offset().left)<mouthRight)
        ){
            setTimeout(() => {
                 $(pieces[i]).remove();

            }, 200);
            
        }

    }
    }
}
    
}, 100);

var fallDown = setInterval(() => {


    var letters=$('.fallingLetter, .fallingDiv');
    if(letters.length>0){
        for(i=0; i<letters.length; i++){
            let letterTop;
            let letterGlobalTop = $(letters[i]).offset().top
            // console.log('letterGlocalTop '+ letterGlobalTop)

            if(letterGlobalTop<screenTop-50){
            
            if($(letters[i]).css('top')){
                letterTop = $(letters[i]).css('top');
                
                letterTop=parseFloat(letterTop)+10
                // console.log("top "+ letterTop)
            }
            else{letterTop=0};
            $(letters[i]).css('top', letterTop)
        }
        else{
            $(letters[i]).css('animation','rotateLetter 4s linear paused')
        }

        }
    }


}, 10);



$('.L3eUgb').on('click','.crazyMouth',(e)=>{
    console.log("click")
e.stopPropagation()
e.preventDefault()
clearInterval(eatLetters)
clearInterval(wordGenerate)



$('.crazyMouth').removeClass('crazyMouth')
var divs=$('a, form')
console.log(divs)    
for(i=0; i<divs.length; i++){

    $(divs[i]).addClass('fallingDiv');
}

setTimeout(() => {
var returnDiv = $('<a>')
$(returnDiv).addClass('returnDiv')
$(returnDiv).html('Reload')

$('.L3eUgb').append(returnDiv)


}, 1500);

})

    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePosition.x = event.pageX
        mousePosition.y = event.pageY
    }


    $(document).on('click', '.returnDiv',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        location.reload()

    })
        // Use event.pageX / event.pageY here
    
