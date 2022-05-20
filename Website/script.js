window.addEventListener('scroll', function(){
    let value = window.pageYOffset;

    let img = document.getElementById("background-img");
    let imgBlured = document.getElementById("background-img-blured");
    let border = document.getElementById("main-head");
    let content = document.getElementsByClassName("head-content");
    let logo = document.getElementById("logo");

    console.log(value);

    img.style = 'object-position: 0px '+(value-332.5)*1.05+'px;'
    imgBlured.style = 'opacity: '+(value/300)+'; object-position: 0px '+(value-332.5)*1.05+'px;'

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
