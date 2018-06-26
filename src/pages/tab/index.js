import tabUI from '../../js/tab';

import './index.scss';

console.log('哈哈哈哈哈');
tabUI.init();
tabUI.tab($(".tab-wrap2"), {
	autoPlay: 2000,
	animate: true
});