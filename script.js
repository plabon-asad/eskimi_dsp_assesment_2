$("#deactive-cards, #active-cards").disableSelection();
$("#deactive-cards").droppable({
    accept: "#active-cards",
});
$("#active-cards").droppable({
    accept: "#deactive-cards > div",
});
var total_count = 0;

$("#deactive-cards, #active-cards").sortable({
    placeholder: "",
    connectWith: ".map",
    containment: "#maximum-drag",
    revert: true,
    scroll: false,
    receive: function (event, ui) {
        total_count = $("#active-cards img").length;
        let deactive_cards_count = $('#deactive-cards img').length;

        if (deactive_cards_count == 0) {
            $('#golden-bd').toggle('slow');
            $('#general-bd').toggle();
        }
    }
});



