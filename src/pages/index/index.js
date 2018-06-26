import '../../js/bootstrap/index';

import './index.scss';

$(document).ready(function () {

    $(document).on("click.test", "#left-well button", function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("event1: ", e);
        $(this).on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log("event2: ", e);
        });
    });
});