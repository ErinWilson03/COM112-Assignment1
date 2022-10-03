document.addEventListener('DOMContentLoaded', function(){

    //Initialise the dropdowns
    var dropdowns = document.querySelectorAll('.dropdown-trigger');
    var dropdownInit = M.Dropdown.init(dropdowns,{"coverTrigger": false})

    //Initialise the parallax
    var parallax = document.querySelectorAll('.parallax');
    var parallaxInit = M.Parallax.init(parallax);

    //Initialise the carousel
    var carousel = document.querySelectorAll('.carousel');
    var carouselInit = M.Carousel.init(carousel,{numVisible: 7, "width":"100%" });

    /*
    //Initialise the feature discovery buttons
    var tapTarget = document.querySelectorAll('.tap-target');
    var tapTargetinit = M.TapTarget.init(tapTarget, options);
    */

    //Initialise the form selections
    var formSelect = document.querySelectorAll('select');
    var formSelectinit = M.FormSelect.init(formSelect);

    var tabs = document.querySelector('.tabs');
    var tabsInit = M.Tabs.init(tabs, {});
})

