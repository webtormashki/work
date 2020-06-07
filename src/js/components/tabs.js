import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i])
                .addClass('list_item-active')
                .siblings()
                .removeClass('list_item-active')
                .closest('.list')
                .find('.list_content')
                .removeClass('list_content-active')
                .eq($(this[i]).index())
                .addClass('list_content-active');
        });
    }
};

$('[data-listpanel] .list_item').tab();