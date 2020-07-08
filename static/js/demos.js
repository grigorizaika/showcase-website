function toggleDemo(opener) {
    let then = performance.now()

    let $opener = $(opener);

    let $demoItem = $opener.parent().parent();
    let $openerIcon = $opener.find('i');
    
    if ($openerIcon.hasClass("fa-window-maximize")) {
        
        $openerIcon.removeClass("fa-window-maximize");
        $openerIcon.addClass("fa-window-minimize");

    } else if ($openerIcon.hasClass("fa-window-minimize")) {
        $openerIcon.removeClass("fa-window-minimize");
        $openerIcon.addClass("fa-window-maximize");
    }

    if ($demoItem.hasClass("demo-item-open")) {
        $demoItem.removeClass("demo-item-open");
        
        let now = performance.now()
        console.log("execution time for class remove", now - then);
    } else {
        $demoItem.addClass("demo-item-open");
        
        let now = performance.now()
        console.log("execution time for class add", now - then);
    }

}

$(document).ready(function() {
    let $demoOpeners = $(".demo-item .opener");
    $demoOpeners.click(function() {
        toggleDemo(this);
    });
})