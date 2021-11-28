var myVar;
var elem;
var clonedElem;
$(function(){
    $('#multiselect').multiselect();
    myVar = setInterval(elemAnimation, 2000);
    clonedElem = $('.elem1').clone();
    clonedElem.css('background-color','red');
    clonedElem.css('position','absolute');
    clonedElem.css('left',getLeftPostion('.elem1'));
    clonedElem.css('top',getTopPostion('.elem1'));
    clonedElem.appendTo("body");
    

    $('.elem1').on('click', function(){
        clearInterval(myVar);
        clonedElem.remove();
    });

    var pos = $('#inp-1').offset();
    console.log(pos);

});


function elemAnimation() {
    
    clonedElem.animate({
        left: getLeftDistance('.elem1','#inp-1'), 
        top: getTopDistance('.elem1','#inp-1')
        })
    clonedElem.animate({
        left: getLeftPostion('.elem1'),
        top: getTopPostion('.elem1')
    })
        
}

function getLeftPostion(element){

    return $(element).offset().left;

}

function getTopPostion(element){

    return $(element).offset().top;

}


function getLeftDistance(element1,element2){

    return Math.abs($(element1).offset().left - $(element2).offset().left);

}

function getTopDistance(element1,element2){

    return Math.abs($(element1).offset().top - $(element2).offset().top);

}