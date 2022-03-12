
window.onload = function() {
    var element_nav = document.getElementsByClassName('mobile-nav')[0];
    var element_menu = document.getElementsByClassName('inner-nav')[0];
    // element.onclick = function() {toggleMenu()};
    element_nav.onclick = function() {toggleMenu()};

    const element_li = document.querySelectorAll('.close-on-page-change');
    for (let i = 0; i < element_li.length; i++) {
        console.log(element_li[i])
        element_li[i].style.backgroundColor = "red";
    }

    console.log(element_li);
    
    for (var i = 0; i < element_li.length; i++) {
        console.log(element_li.item(i));
    }


    function toggleMenu() {
    
        const isExpanded = element_menu.classList.contains('js-opened');
        if(isExpanded === false){
            element_menu.classList.add("js-opened");
            element_menu.style.display = "block";
        }else{
            element_menu.classList.remove("js-opened");
            element_menu.style.display = "none";
        }
    
    }

}