
$('.search').on('click', function() {
    if ($(this).attr('aria-hidden') === 'true') {
        $(this).attr('aria-hidden', 'false');
    } else {
        //$(this).attr('aria-hidden', 'true');
    }
});

$(document).bind("mouseup touchend", function(e) {
    var target = $(event.target);
    if ($('.search').attr('aria-hidden') === 'false') {
        if (!$('.search').is(e.target) // if the target of the click isn't the search...
            && $('.search').has(e.target).length === 0) // ... nor a descendant of the search
        {
            $('.search').attr('aria-hidden', 'true');
        }
    }
});