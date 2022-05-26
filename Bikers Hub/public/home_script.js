
var secImage;
var thirdImage;

var firstImageOpacity = 0.0;
var secImageOpacity = 0.0;

var hovering = false;

function fadeIn(photo) 
{
    
    var tick = function () 
    {
        photo.style.opacity = +photo.style.opacity + 0.01;

        if (hovering && +photo.style.opacity < 1) 
        {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };

    tick();
}

function fadeOut(photo) 
{
    photo.style.opacity = 1;

    var tick = function () 
    {
        photo.style.opacity = +photo.style.opacity - 0.01;

        if (!hovering && +photo.style.opacity > 0) 
        {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
        else if(!hovering)
            photo.style.zIndex = "-2";
    };

    tick();
}

function fadeOutDelay(photo)
{
    function anotherTick() {
        fadeOut(photo);
    }
    setTimeout(anotherTick, 2500); 
}

function showImage(srcID) 
{
    hovering = true;
    var photo = document.getElementById(srcID);
        fadeIn(photo);            
}    

function hideImage(srcID) 
{
    hovering = false;
    var photo = document.getElementById(srcID);
        //fadeOut(photo);
        fadeOutDelay(photo);
    }
