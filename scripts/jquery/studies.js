$(function() {
    $('td').on('click', function(event) {
        event.preventDefault();
        $('.highlighted').removeClass('highlighted');
        $(this).addClass('highlighted');
    });

    $('td').on('mouseover', function(event) {
        $('#my-td').html(`<span class="my-td-span">${$(this).text()}</span>`);
    });

    $('td').on('mouseleave', function(event) {
        $('#my-td').html(null);
    });

    // $('tr').on('mouseover', function(event) {
    //     $(this).addClass('trHighlighted');
    // });
    //
    // $('tr').on('mouseleave', function(event) {
    //     $('.trHighlighted').removeClass('trHighlighted');
    // })

});
