function toggleDemo(opener) {
    let $opener = $(opener);

    let $demoItem = $opener.parent().parent();
    let $openerIcon = $opener.find('i');
    let $demoContent = $demoItem.find('.demo-item-content');
    let $demoHeader = $demoItem.find('.demo-item-header');
    
    if ($openerIcon.hasClass("fa-window-maximize")) {
        $openerIcon.removeClass("fa-window-maximize");
        $openerIcon.addClass("fa-window-minimize");
            
    } else if ($openerIcon.hasClass("fa-window-minimize")) {
        $openerIcon.removeClass("fa-window-minimize");
        $openerIcon.addClass("fa-window-maximize");
    }

    if ($demoItem.hasClass("demo-item-open")) {
        $demoItem.removeClass("demo-item-open");
        $demoItem.css('min-height', 'calc(5vw + 4px)');

    } else {
        $demoItem.addClass("demo-item-open");
        $demoItem.css('min-height', $demoContent.outerHeight() + $demoHeader.outerHeight() + 'px');
    
    }

}


$(document).ready(function() {
    let $demoOpeners = $(".demo-item .opener");
    $demoOpeners.click(function() {
        toggleDemo(this);
    });
})