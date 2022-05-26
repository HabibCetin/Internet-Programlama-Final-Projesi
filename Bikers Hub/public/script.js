
var secImage;
var thirdImage;

var firstImageOpacity = 0.0;
var secImageOpacity = 0.0;

var hovering = true;

//For Tha Image A

    function fadeIn(photo) 
    {
        //photo.style.opacity = 0;
        
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
        //photo.style.opacity = 1;
        
        var tick = function () 
        {
            photo.style.opacity = +photo.style.opacity - 0.01;

            if (!hovering && +photo.style.opacity > 0) 
            {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };
    
        tick();
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
            fadeOut(photo);
            //photo.style.display = "none";            
    }
///////////////////////////////////////////////////////////////////

//For Tha Image B

    function showImageB() 
    {
        thirdImage = document.getElementById("another_image");
        thirdImage.style.display = "block";    
    }

    function hideImageB() 
    {
        thirdImage = document.getElementById("another_image");
        thirdImage.style.display = "none";    
    }
///////////////////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}