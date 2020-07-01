// analytics

// setup listeners
$(document).ready(function(){

    // time on page more than 60 sec
    setTimeout(function() {
        gtag('event', 'engagement', {
            'event_category': 'time_on_page',
            'event_label': 'more_than_60_sec',
        });
        ym(65240089,'reachGoal','more_than_60sec_on_page');
      }, 60000);

    // moving to sections by ckicking links from navbar
    $('.navbar ul li a').click(function(){
        navbarLinkClicked($(this));
    });

    // scrolling to #section2 (also by clicking link in navbar) 
    // send data only once
    $(window).scroll(function(){
        windowScrolled();
    });

});

function navbarLinkClicked(link) {
    let linkTarget = link.attr('href');

    gtag('event', 'click', {
        'event_category': 'navbar_link',
        'event_label': linkTarget,
    });

    ym(65240089,'reachGoal','moving_to_sections_using_navbar_links')
}

function windowScrolled() {
    if (typeof windowScrolled.sectionTwoAlreadySend == 'undefined') {
        if (isScrolledToElement($('#section2'))) {
            gtag('event', 'scrolling', {
                'event_category': 'section2',
            });
            ym(65240089,'reachGoal','scrollng_to_section2');

            // prevent new sendings 
            windowScrolled.sectionTwoAlreadySend = true;
        }
       
    }
}
// return true if top edge of the element lies within window view
function isScrolledToElement(element) {
    let elemTop = element.offset().top;
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();
    let offset = 100; // px  
    
    return elemTop >= docViewTop && elemTop + offset <= docViewBottom;
}