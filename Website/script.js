function enterHall()
{
    let button=document.getElementById("button-enter");
    let img=document.getElementById("img-banner-enter");
    button.style = "transform: scale(100%);"
    setTimeout(function() {button.style = "transform: scale(102%);"}, 100)
    img.classList.add("img-banner-enter-zoom");
    img.style = "opacity: 75%;"
    setTimeout(function() {open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}, 500 );
}

window.addEventListener('scroll', function(){
    let value = window.pageYOffset;

    let img = document.getElementById("background-img");
    let imgBlured = document.getElementById("background-img-blured");
    let border = document.getElementById("main-border");
    let content = document.getElementsByClassName("head-content");
    let logo = document.getElementById("logo");
    let imgRetro = document.getElementById("img-retro");
    let imgHighscore = document.getElementById("img-highscore");
    let imgUnity = document.getElementById("img-unity");

    if(value <= 400)
    {
        console.log(400-Math.sin(value*(Math.PI/2/400))*400);
    }

    // parallax stuff
    img.style = 'object-position: 0px '+(value-332.5)*1.05+'px;'
    imgBlured.style = 'opacity: '+(value/300)+'; object-position: 0px '+(value-332.5)*1.05+'px;'

    // table infos
    if(value-600 <= 400)
    {
        imgRetro.style = 'transform: translateX('+(400-Math.sin((value-600)*(Math.PI/2/400))*400)+'%);'
    }

    if(value-800 <= 400)
    {
        imgHighscore.style = 'transform: translateX('+-(400-Math.sin((value-800)*(Math.PI/2/400))*400)+'%); height: 213px;'
    }

    if(value-1000 <= 400)
    {
        imgUnity.style = 'transform: translateX('+(400-Math.sin((value-1000)*(Math.PI/2/400))*400)+'%);'
    }

    // upper banner opacity
    if(window.scrollY >= 200)
    {
        logo.setAttribute('src', 'assets/logo/logo.svg');
        for(let i = 0; i < content.length; i++)
        {
            content[i].style = 'color: black;'
        }
        border.classList.add("main-head-border");
    }
    else if(window.scrollY < 200)
    {
        logo.setAttribute('src', 'assets/logo/logoLight.svg');
        for(let i = 0; i < content.length; i++)
        {
            content[i].style = 'color: #E4E4E4;'
        }
        border.classList.remove("main-head-border");
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
