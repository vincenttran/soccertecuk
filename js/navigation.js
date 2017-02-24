// -------------------------------------
// Kings Template: JS > Navigation
// -------------------------------------

$(document).each(function() {
    $(".extendednavigation .open").children().click(function() {
        $(this)
        .add('.folder-open', this.parentNode)
        .toggleClass('folder-open');
    });
});

// Toggles class open to display/hide the whole navigation
$(document).on("click", ".navigation-toggle", function() {
    $( ".bk-extendednavigation" ).toggleClass( "open" );
});