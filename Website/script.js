window.addEventListener('scroll', function(){
    let img = document.getElementById("background-img");
    let border = document.getElementById("main-head");
    let content = document.getElementsByClassName("head-content");
    let logo = document.getElementById("logo");

    img.style = 'object-position: 0px '+(window.scrollY-95)*1.05+'px; filter: blur('+(window.scrollY*.03)+'px);'
    border.style = 'margin: '+(window.scrollY)+'px 0px;'

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

function test()
{
    alert("alert");
}