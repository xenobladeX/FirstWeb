
import './index.scss';

import '../../components/collapse/collapseDropdown';
// import '../../components/tooltip/tooltip';
import '../../components/tooltip/tooltip.scss';
import Tooltip from 'tooltip.js';

$(document).ready(function () {
    // $.getJSON("/v1/gen_suid?src=juejin.im", function (response) {
    //     var ret = response.m;
    //     if (ret !== 'ok') {
    //         throw new Error('suid generate error');
    //     } else {
    //         var suid = response.d;
    //         console.log(`suid: ${suid}`);
    //         $.getJSON(`/v1/get_recommended_entry?suid=${suid}&ab=welcome_3&src=web`, function (response2) {
    //             console.log(`response: ${JSON.stringify(response2)}`);
    //         });
    //     }

    // }).done();
    $('.meta-list .username [data-toggle="tooltip"]').each(function () {
        let target = $(this).attr('data-target');
        let tooltip = $(this).find( target ? target : '.tooltip-content');
        tooltip.detach();
        tooltip.css('display', 'block');
        const instance = new Tooltip($(this), {
            container: document.getElementsByClassName('meta-list')[0],
            title: tooltip.prop('outerHTML'),
            html: true
        });
        // instance.show();
    });
});
