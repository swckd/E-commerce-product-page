var popover;

document.addEventListener('DOMContentLoaded', function() {
    var options = {
        html: true,
        title: "Cart",
        content: function() {
            return document.querySelector('[data-name="popover-content"]').innerHTML;
        },
        popperConfig: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 20],  // Change these values to adjust the position
                    },
                },
            ],
        },
    }
    var cartButtonEl = document.getElementById('cartButton');
    popover = new bootstrap.Popover(cartButtonEl, options);
});