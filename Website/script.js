window.addEventListener('scroll', function(){
    let img = document.getElementById("background-img");
    let head = document.getElementById("head");
    let border = document.getElementById("main-head");

    img.style = 'object-position: 0px '+(window.scrollY-70)*1.05+'px;'
    img.style = 'filter: blur('+(window.scrollY*.1)+'px);'
    head.style = 'margin: '+(window.scrollY+20)+'px 20px;'

    if(window.scrollY >= 200)
    {
        border.classList.add("main-head-border");
    }
    else if(window.scrollY < 200)
    {
        border.classList.remove("main-head-border");
    }
});

function test()
{
    alert("alert");
}