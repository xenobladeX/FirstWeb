// sass
import './index.scss';
import '../../components/tooltip/tooltip.scss';

// template
import user_tooltip_template from './templates/user-tooltip-template.html';
import entry_list_template from './templates/entry-list-template.html';

// js
import '../../components/collapse/collapseDropdown';
// import '../../components/tooltip/tooltip';
import Tooltip from 'tooltip.js';
import 'jsviews';

$(document).ready(function () {

    // 数据请求
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
	function bindUserTooltip() {
		const instance = new Tooltip($(`#${this.objectId} .username [data-toggle="tooltip"]`), {
			title: userTooltipTemplate.render(this.user),
			html: true,
			boundariesElement: document.getElementsByClassName('entry-list')[0]
		});
	};


    // 模板渲染
    let entryListTemplate = $.templates(entry_list_template);
    let userTooltipTemplate = $.templates(user_tooltip_template);
    entryListTemplate.link('#entry-list', recommendedData);

    // 添加user-tooltip
    $(recommendedData.d).each(bindUserTooltip);

    setTimeout(() => {
        $.observable(recommendedData.d).insert({
            "collectionCount": 16,
            "recommenderInfo": {
                "filtered": true,
                "source": "total",
                "score": 9994
            },
            "commentsCount": 0,
            "gfw": false,
            "entryView": "",
            "checkStatus": true,
            "category": {
                "ngxCached": true,
                "title": "android",
                "id": "5562b410e4b00c57d9b94a92",
                "name": "Android",
                "ngxCachedTime": 1533098573
            },
            "objectId": "5b5fd2135188251aaa2d426d",
            "subscribersCount": 0,
            "ngxCachedTime": 1533098622,
            "verifyStatus": true,
            "tags": [{
                "title": "Android",
                "ngxCached": true,
                "ngxCachedTime": 1533098521,
                "id": "5597838ee4b08a686ce2319d"
            }, {
                "title": "Canvas",
                "ngxCached": true,
                "ngxCachedTime": 1533098518,
                "id": "55cd777160b2ce30a1a43f15"
            }, {
                "title": "动效",
                "ngxCached": true,
                "ngxCachedTime": 1533098595,
                "id": "55efbb9460b27db439c64cbf"
            }],
            "verifyCreatedAt": "2018-08-01T02:00:43.809Z",
            "rankIndex": 43.846454883016,
            "hot": false,
            "type": "post",
            "originalUrl": "https://juejin.im/post/5b5ec836e51d4519155724bc",
            "buildTime": 1533098566.249,
            "lastCommentTime": "1970-01-01T00:00:00.Z",
            "user": {
                "community": {
                    "github": {
                        "company": "HY_Technology",
                        "uid": "16967755",
                        "blogAddress": "",
                        "username": "ChestnutPlus",
                        "avatarLarge": "https://avatars0.githubusercontent.com/u/16967755?v=4"
                    }
                },
                "collectedEntriesCount": 3,
                "company": "HY",
                "ngxCached": true,
                "followeesCount": 0,
                "role": "guest",
                "jobTitle": "Android",
                "isAuthor": false,
                "postedEntriesCount": 0,
                "subscribedTagsCount": 11,
                "objectId": "59bb7782f265da066e171f96",
                "postedPostsCount": 5,
                "viewedEntriesCount": 833,
                "username": "栗子酱油饼",
                "totalCommentsCount": 9,
                "ngxCachedTime": 1533098608,
                "totalCollectionsCount": 100,
                "avatarLarge": "https://avatars0.githubusercontent.com/u/16967755?v=4",
                "followersCount": 3
            },
            "author": "",
            "screenshot": "",
            "content": "1. 概述 今天继续分（Zhuang）享（Bi）一个自定义的动画历程。今天的目标如下： 这动画的UI源文件已经丢失，也就是动画的细节已经不知道（咳咳），好吧硬着头皮上吧。 2. 简单分析 简单看出，整个动画分成三个部分：车轮，车厢，车顶。 车轮：车轮的动效比较简单，基于X轴的横…",
            "original": true,
            "hotIndex": 565.1997,
            "title": "自定义View-扭曲动效",
            "createdAt": "2018-07-31T03:05:55.238Z",
            "updatedAt": "2018-08-01T04:42:46.247Z",
            "english": false,
            "isEvent": false,
            "viewsCount": 403
        });
    }, 3000);

    $.observe(recommendedData.d, function(event, eventArg) {
		if(eventArg.change === 'insert') {
			$(eventArg.items).each(bindUserTooltip);
		}
    });
});

const recommendedData = {
	"d": [{
		"collectionCount": 16,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9994
		},
		"commentsCount": 0,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "android",
			"id": "5562b410e4b00c57d9b94a92",
			"name": "Android",
			"ngxCachedTime": 1533098573
		},
		"objectId": "5b5fd2135188251aaa2d426c",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "Android",
			"ngxCached": true,
			"ngxCachedTime": 1533098521,
			"id": "5597838ee4b08a686ce2319d"
		}, {
			"title": "Canvas",
			"ngxCached": true,
			"ngxCachedTime": 1533098518,
			"id": "55cd777160b2ce30a1a43f15"
		}, {
			"title": "动效",
			"ngxCached": true,
			"ngxCachedTime": 1533098595,
			"id": "55efbb9460b27db439c64cbf"
		}],
		"verifyCreatedAt": "2018-08-01T02:00:43.809Z",
		"rankIndex": 43.846454883016,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b5ec836e51d4519155724bc",
		"buildTime": 1533098566.249,
		"lastCommentTime": "1970-01-01T00:00:00.Z",
		"user": {
			"community": {
				"github": {
					"company": "HY_Technology",
					"uid": "16967755",
					"blogAddress": "",
					"username": "ChestnutPlus",
					"avatarLarge": "https://avatars0.githubusercontent.com/u/16967755?v=4"
				}
			},
			"collectedEntriesCount": 3,
			"company": "HY",
			"ngxCached": true,
			"followeesCount": 0,
			"role": "guest",
			"jobTitle": "Android",
			"isAuthor": false,
			"postedEntriesCount": 0,
			"subscribedTagsCount": 11,
			"objectId": "59bb7782f265da066e171f96",
			"postedPostsCount": 5,
			"viewedEntriesCount": 833,
			"username": "栗子酱油饼",
			"totalCommentsCount": 9,
			"ngxCachedTime": 1533098608,
			"totalCollectionsCount": 100,
			"avatarLarge": "https://avatars0.githubusercontent.com/u/16967755?v=4",
			"followersCount": 3
		},
		"author": "",
		"screenshot": "",
		"content": "1. 概述 今天继续分（Zhuang）享（Bi）一个自定义的动画历程。今天的目标如下： 这动画的UI源文件已经丢失，也就是动画的细节已经不知道（咳咳），好吧硬着头皮上吧。 2. 简单分析 简单看出，整个动画分成三个部分：车轮，车厢，车顶。 车轮：车轮的动效比较简单，基于X轴的横…",
		"original": true,
		"hotIndex": 565.1997,
		"title": "自定义View-扭曲动效",
		"createdAt": "2018-07-31T03:05:55.238Z",
		"updatedAt": "2018-08-01T04:42:46.247Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 403
	}, {
		"collectionCount": 164,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9995
		},
		"commentsCount": 9,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "frontend",
			"id": "5562b415e4b00c57d9b94ac8",
			"name": "前端",
			"ngxCachedTime": 1533098539
		},
		"objectId": "5b60027ae51d45350956341a",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "Vue.js",
			"ngxCached": true,
			"ngxCachedTime": 1533098590,
			"id": "555e9a98e4b00c57d9955f68"
		}, {
			"title": "面试",
			"ngxCached": true,
			"ngxCachedTime": 1533098560,
			"id": "55979fe6e4b08a686ce562fe"
		}, {
			"title": "前端",
			"ngxCached": true,
			"ngxCachedTime": 1533098545,
			"id": "5597a05ae4b08a686ce56f6f"
		}, {
			"title": "vue-router",
			"ngxCached": true,
			"ngxCachedTime": 1533098533,
			"id": "595609c4f265da5e206f8fca"
		}],
		"verifyCreatedAt": "2018-07-31T06:32:26.308Z",
		"rankIndex": 17.11876716367,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b5eb69a5188251af86bfe00",
		"buildTime": 1533098468.6853,
		"lastCommentTime": "2018-08-01T10:02:41.389Z",
		"user": {
			"community": {
				"wechat": {
					"username": "yck",
					"avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLvkiaLxKqzOo0GG5QOuYcLMFPF29d3Nw91FVVsOMic2LXibjC1ROCfp4CvmESoNliaHt00kjia8zILwmQ/132",
					"uid": "oDv1Ew6Wa8UbMIS-sRH_fkTQtIvs"
				}
			},
			"collectedEntriesCount": 46,
			"company": "",
			"ngxCached": true,
			"followeesCount": 18,
			"role": "editor",
			"jobTitle": "",
			"isAuthor": true,
			"postedEntriesCount": 13,
			"subscribedTagsCount": 5,
			"objectId": "574f8d8d2e958a005fd4edac",
			"postedPostsCount": 23,
			"viewedEntriesCount": 1985,
			"username": "夕阳",
			"totalCommentsCount": 374,
			"ngxCachedTime": 1533098610,
			"totalCollectionsCount": 16602,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2016/11/29/9cefc7be79b3a837631a91e7da2fed46",
			"followersCount": 9147
		},
		"author": "",
		"screenshot": "",
		"content": "无论是对象还是数组，需要实现双向绑定的话最终都会执行这个函数，该函数可以监听到 set 和 get 的事件。 在 Object.defineProperty 中自定义 get 和 set 函数，并在 get 中进行依赖收集，在 set 中派发更新。接下来我们先看如何进行依赖收集…",
		"original": true,
		"hotIndex": 5065.6385,
		"title": "深度解析 Vue 响应式原理",
		"createdAt": "2018-07-31T06:32:26.308Z",
		"updatedAt": "2018-08-01T04:41:08.684Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 3368
	}, {
		"collectionCount": 23,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9997
		},
		"commentsCount": 2,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "frontend",
			"id": "5562b415e4b00c57d9b94ac8",
			"name": "前端",
			"ngxCachedTime": 1533098539
		},
		"objectId": "5b6106f26fb9a04fd8358590",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "React.js",
			"ngxCached": true,
			"ngxCachedTime": 1533098609,
			"id": "555e99ffe4b00c57d99556aa"
		}, {
			"title": "Git",
			"ngxCached": true,
			"ngxCachedTime": 1533098608,
			"id": "555e9abae4b00c57d9956122"
		}, {
			"title": "Node.js",
			"ngxCached": true,
			"ngxCachedTime": 1533098602,
			"id": "555e9a77e4b00c57d9955d64"
		}, {
			"title": "前端",
			"ngxCached": true,
			"ngxCachedTime": 1533098545,
			"id": "5597a05ae4b08a686ce56f6f"
		}],
		"verifyCreatedAt": "2018-08-01T01:03:46.070Z",
		"rankIndex": 44.824305557971,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b6106b8e51d4534881398b9",
		"buildTime": 1533098536.3023,
		"lastCommentTime": "2018-08-01T11:29:41.595Z",
		"user": {
			"community": null,
			"collectedEntriesCount": 3,
			"company": "Daqo",
			"ngxCached": true,
			"followeesCount": 8,
			"role": "editor",
			"jobTitle": "程序员鼓励师",
			"isAuthor": true,
			"postedEntriesCount": 10,
			"subscribedTagsCount": 17,
			"objectId": "5832b0f067f35600635b1cc9",
			"postedPostsCount": 4,
			"viewedEntriesCount": 968,
			"username": "entronad",
			"totalCommentsCount": 12,
			"ngxCachedTime": 1533098528,
			"totalCollectionsCount": 528,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2017/4/17/154709040890f01cab4292f394bc02a3",
			"followersCount": 12
		},
		"author": "",
		"screenshot": "https://user-gold-cdn.xitu.io/2018/8/1/164f302937c5677a?w=1280&h=848&f=jpeg&s=240988",
		"content": "将一个项目不同平台的版本放在 git 仓库的不同分支，是一种常见的做法。比如我最近在考虑开发 Gitview （项目链接 ）的小程序版，计划将原先 React Native 版的代码放到名为 react-native 的分支，小程序版在一个新的名为 weixin 的分支中开发，…",
		"original": true,
		"hotIndex": 835.2543,
		"title": "Git Worktree：解决分支依赖冲突的问题",
		"createdAt": "2018-08-01T01:03:46.070Z",
		"updatedAt": "2018-08-01T04:42:16.301Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 593
	}, {
		"collectionCount": 12,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9993
		},
		"commentsCount": 0,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "android",
			"id": "5562b410e4b00c57d9b94a92",
			"name": "Android",
			"ngxCachedTime": 1533098573
		},
		"objectId": "5b610790e51d4519575a532a",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "GitHub",
			"ngxCached": true,
			"ngxCachedTime": 1533098513,
			"id": "555e9abee4b00c57d9956152"
		}, {
			"title": "Android",
			"ngxCached": true,
			"ngxCachedTime": 1533098521,
			"id": "5597838ee4b08a686ce2319d"
		}, {
			"title": "APK",
			"ngxCached": true,
			"ngxCachedTime": 1533098547,
			"id": "559c8103e4b0d4d1b1e94b5d"
		}, {
			"title": "gradle",
			"ngxCached": true,
			"ngxCachedTime": 1533098508,
			"id": "55da9e7900b01d2966ac2b22"
		}],
		"verifyCreatedAt": "2018-08-01T01:58:03.734Z",
		"rankIndex": 23.37513059464,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b61076851882519f6478156",
		"buildTime": 1533098441.4895,
		"lastCommentTime": "1970-01-01T00:00:00.Z",
		"user": {
			"community": {
				"weibo": {
					"selfDescription": "",
					"uid": "5964051179",
					"blogAddress": "http://weibo.com/u/5964051179",
					"username": "容华_谢后",
					"avatarLarge": "http://tvax4.sinaimg.cn/default/images/default_avatar_male_180.gif"
				},
				"wechat": {
					"username": "容华谢后",
					"avatarLarge": "http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJV5V8FWhKRKN118KDHfMalTP0ib2cXFCKiaNfV2VYK8aia43iamUE98wsEqISCdBchpTqP7VzK2uCNfA/0",
					"uid": "oDv1Ew3Ee67YjDVg5pbasGxq9PU0"
				},
				"github": {
					"company": null,
					"uid": "12543183",
					"blogAddress": "www.yangle.tech",
					"username": "alidili",
					"avatarLarge": "https://avatars0.githubusercontent.com/u/12543183?v=4"
				}
			},
			"collectedEntriesCount": 13,
			"company": "",
			"ngxCached": true,
			"followeesCount": 5,
			"role": "guest",
			"jobTitle": "Android工程师",
			"isAuthor": false,
			"postedEntriesCount": 0,
			"subscribedTagsCount": 4,
			"objectId": "5a31d8b8f265da43200340bf",
			"postedPostsCount": 12,
			"viewedEntriesCount": 94,
			"username": "容华谢后",
			"totalCommentsCount": 0,
			"ngxCachedTime": 1533098614,
			"totalCollectionsCount": 128,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2017/12/14/16052b858135b3f7?w=500&h=270&f=jpeg&s=16503",
			"followersCount": 59
		},
		"author": "",
		"screenshot": "",
		"content": "VirtualAPK是滴滴在2017年6月开源的一款插件化框架，支持Android四大组件，以及几乎所有的Android特性，通过Gradle来构建插件，集成与构建十分便捷，目前已经应用在 滴滴出行 App上，兼容市面上几乎所有的Android设备。 在开发的过程中，一个工程通…",
		"original": true,
		"hotIndex": 307.4444,
		"title": "滴滴插件化方案 VirtualApk 完全解析（一） 初识基本用法",
		"createdAt": "2018-08-01T01:06:24.844Z",
		"updatedAt": "2018-08-01T04:40:41.488Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 185
	}, {
		"collectionCount": 3,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9992
		},
		"commentsCount": 0,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "android",
			"id": "5562b410e4b00c57d9b94a92",
			"name": "Android",
			"ngxCachedTime": 1533098573
		},
		"objectId": "5b6103a0f265da0f6f1ab6db",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "Android",
			"ngxCached": true,
			"ngxCachedTime": 1533098521,
			"id": "5597838ee4b08a686ce2319d"
		}, {
			"title": "算法",
			"ngxCached": true,
			"ngxCachedTime": 1533098518,
			"id": "55cd843d60b203b0519307a9"
		}, {
			"title": "面试",
			"ngxCached": true,
			"ngxCachedTime": 1533098560,
			"id": "55979fe6e4b08a686ce562fe"
		}, {
			"title": "开源",
			"ngxCached": true,
			"ngxCachedTime": 1533098587,
			"id": "5597a3cae4b08a686ce5d0fb"
		}],
		"verifyCreatedAt": "2018-08-01T02:35:22.738Z",
		"rankIndex": 13.004578283772,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b610324e51d451945585b42",
		"buildTime": 1533098541.2318,
		"lastCommentTime": "1970-01-01T00:00:00.Z",
		"user": {
			"community": {
				"wechat": {
					"username": "南尘",
					"avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/HibpZ4DV7xT7nQzyopibXhv6KxdBLM9yX5a4X6ic2Ezkz4tlNcuShdsAoPFN9zyz4jtlrrP6m5UB0SIBDqHkibYTag/132",
					"uid": "oDv1EwyjHXs7kZogVKSJ37Oj_5ao"
				},
				"github": {
					"company": "zxedu, Inc.",
					"uid": "15808532",
					"blogAddress": "https://nanchen2251.github.io/",
					"username": "nanchen2251",
					"avatarLarge": "https://avatars1.githubusercontent.com/u/15808532?v=4"
				}
			},
			"collectedEntriesCount": 97,
			"company": "zxedu, Inc.",
			"ngxCached": true,
			"followeesCount": 10,
			"role": "guest",
			"jobTitle": "公众号：nanchen",
			"isAuthor": true,
			"postedEntriesCount": 36,
			"subscribedTagsCount": 15,
			"objectId": "593f78bada2f60006738d641",
			"postedPostsCount": 31,
			"viewedEntriesCount": 416,
			"username": "nanchen2251",
			"totalCommentsCount": 108,
			"ngxCachedTime": 1533098541,
			"totalCollectionsCount": 3630,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2018/2/6/1616ad44782a7a1e?w=512&h=512&f=png&s=131236",
			"followersCount": 2494
		},
		"author": "",
		"screenshot": "",
		"content": "在上一篇推文中，我们留下的习题是来自《剑指 Offer》 的面试题 26：复杂链表的复制。 输入多个结点，部分 sibling 指向 null，期望打印符合题干的值。 测试用例思考完毕，自然是开始思考我们的测试逻辑了，在思考的过程中，我们不妨尝试和面试官进行沟通，这样可以避免我…",
		"original": true,
		"hotIndex": 128.188,
		"title": "单链表复制你已经会了，如果我们再加个指针...",
		"createdAt": "2018-08-01T00:49:36.630Z",
		"updatedAt": "2018-08-01T04:42:21.230Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 96
	}, {
		"collectionCount": 4,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9989
		},
		"commentsCount": 0,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "ai",
			"id": "57be7c18128fe1005fa902de",
			"name": "人工智能",
			"ngxCachedTime": 1533098551
		},
		"objectId": "5b61260ff265da0f9c67b8ec",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "人工智能",
			"ngxCached": true,
			"ngxCachedTime": 1533098551,
			"id": "57be7c18128fe1005fa902de"
		}, {
			"title": "腾讯",
			"ngxCached": true,
			"ngxCachedTime": 1533098554,
			"id": "55e836ff60b2fb7557a464cf"
		}, {
			"title": "Google",
			"ngxCached": true,
			"ngxCachedTime": 1533098507,
			"id": "555e9adae4b00c57d99562a4"
		}, {
			"title": "MySQL",
			"ngxCached": true,
			"ngxCachedTime": 1533098508,
			"id": "555e9a8de4b00c57d9955eb9"
		}],
		"verifyCreatedAt": "2018-08-01T03:36:50.883Z",
		"rankIndex": 18.510572558497,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b61249ae51d45192473393f",
		"buildTime": 1533098621.5151,
		"lastCommentTime": "1970-01-01T00:00:00.Z",
		"user": {
			"community": null,
			"collectedEntriesCount": 168,
			"company": "",
			"ngxCached": true,
			"followeesCount": 9,
			"role": "guest",
			"jobTitle": "",
			"isAuthor": true,
			"postedEntriesCount": 356,
			"subscribedTagsCount": 75,
			"objectId": "58afa29aac502e0069c5d756",
			"postedPostsCount": 416,
			"viewedEntriesCount": 2169,
			"username": "腾讯云加社区",
			"totalCommentsCount": 314,
			"ngxCachedTime": 1533098613,
			"totalCollectionsCount": 14931,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2017/12/15/1605950722bb7b3e?w=659&h=640&f=jpeg&s=43951",
			"followersCount": 25901
		},
		"author": "",
		"screenshot": "",
		"content": "\"猜画小歌\"用到的quickdraw模型本质上是一个分类模型，输入是笔画的点的坐标信息和每笔起始的标识信息，应用几个级联的一维卷积，再使用 BiLSTM 层并对结果进行求和，最后使用Softmax层进行分类。 开源数据和代码详见后面参考文档。整个网络比较简单，而且用其默认的参数…",
		"original": true,
		"hotIndex": 99.4678,
		"title": "“猜画小歌”的一些细节和思考",
		"createdAt": "2018-08-01T03:16:31.885Z",
		"updatedAt": "2018-08-01T04:43:41.513Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 57
	}, {
		"collectionCount": 4,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9990
		},
		"commentsCount": 0,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "ios",
			"id": "5562b405e4b00c57d9b94a41",
			"name": "iOS",
			"ngxCachedTime": 1533098559
		},
		"objectId": "5b607177e51d45190a434a76",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "Objective-C",
			"ngxCached": true,
			"ngxCachedTime": 1533098505,
			"id": "5597a0b7e4b08a686ce57e18"
		}, {
			"title": "编译器",
			"ngxCached": true,
			"ngxCachedTime": 1533098554,
			"id": "561d10fd60b28354a05435b2"
		}, {
			"title": "iOS",
			"ngxCached": true,
			"ngxCachedTime": 1533098601,
			"id": "5597838ae4b08a686ce23139"
		}, {
			"title": "算法",
			"ngxCached": true,
			"ngxCachedTime": 1533098518,
			"id": "55cd843d60b203b0519307a9"
		}],
		"verifyCreatedAt": "2018-08-01T02:57:07.443Z",
		"rankIndex": 26.167970331954,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b60709fe51d45179b0ad208",
		"buildTime": 1533098520.1694,
		"lastCommentTime": "1970-01-01T00:00:00.Z",
		"user": {
			"community": {
				"weibo": {
					"selfDescription": "毕业于清华大学烟台分学",
					"uid": "3205305713",
					"blogAddress": "http://weibo.com/qxuewei",
					"username": "极客学伟",
					"avatarLarge": "http://tvax2.sinaimg.cn/crop.0.15.750.750.180/bf0d1571ly8fese1p4cmqj20ku0lpdgs.jpg"
				},
				"wechat": {
					"username": "极客学伟",
					"avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJl83VyPMIR2VBwaG0PFkJZs1LLiaxKLXTa2pVgeflhXic98YEpUTZ1ZyBAsumf8c3jYabibicMEJvUVQ/132",
					"uid": "oDv1Ew8Zhwegrq5BkzKK0E4-C5tU"
				},
				"github": {
					"company": "www.beijing.com",
					"uid": "15356693",
					"blogAddress": "https://blog.csdn.net/qxuewei",
					"username": "qxuewei",
					"avatarLarge": "https://avatars0.githubusercontent.com/u/15356693?v=4"
				}
			},
			"collectedEntriesCount": 35,
			"company": "核弹研究发展有限公司",
			"ngxCached": true,
			"followeesCount": 16,
			"role": "guest",
			"jobTitle": "iOS",
			"isAuthor": false,
			"postedEntriesCount": 0,
			"subscribedTagsCount": 12,
			"objectId": "5851031e1b69e60056bd2c05",
			"postedPostsCount": 12,
			"viewedEntriesCount": 563,
			"username": "极客学伟",
			"totalCommentsCount": 9,
			"ngxCachedTime": 1533098530,
			"totalCollectionsCount": 257,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2018/7/4/164639488acaabf5?w=960&h=1280&f=jpeg&s=209833",
			"followersCount": 281
		},
		"author": "",
		"screenshot": "",
		"content": "Objective-C 为C语言添加了面向对象的特性，是其超级。Objective-C 说那个动态绑定的消息结构，也就是说，在运行时才检查对象类型。接收一条消息之后，究竟应执行何种代码，由运行期环境而非编译器来决定。 理解C语言的核心概念有助于写好Objective-C程序。尤…",
		"original": false,
		"hotIndex": 211.1262,
		"title": "《Effective Objective-C 2.0》读书/实战笔记 一",
		"createdAt": "2018-07-31T14:25:59.372Z",
		"updatedAt": "2018-08-01T04:42:00.168Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 169
	}, {
		"collectionCount": 26,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9991
		},
		"commentsCount": 0,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "backend",
			"id": "5562b419e4b00c57d9b94ae2",
			"name": "后端",
			"ngxCachedTime": 1533098620
		},
		"objectId": "5b60fb826fb9a04fca3c8fab",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "Java",
			"ngxCached": true,
			"ngxCachedTime": 1533098551,
			"id": "559a7207e4b08a686d25703e"
		}],
		"verifyCreatedAt": "2018-08-01T00:14:58.810Z",
		"rankIndex": 80.130689798462,
		"hot": false,
		"type": "article",
		"originalUrl": "http://www.iocoder.cn/RocketMQ/message-pull-and-consume-second?juejin&2018-08-01",
		"buildTime": 1533098518.8808,
		"lastCommentTime": "1970-01-01T00:00:00.Z",
		"user": {
			"community": {
				"wechat": {
					"username": "王文斌（芋艿）",
					"avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTInIuedI6ibt6HGwXgicY5cRKeX6qDZNawTaFraEl0cHftIcxJACibfJmtkGPS6vG71yCeVDOtmoF85Q/132",
					"uid": "oDv1EwwYYe_fUkaqvZiclHnQH5Ss"
				},
				"github": {
					"company": "芋道源码，纯源码解析公众号",
					"uid": "2015545",
					"blogAddress": "http://www.iocoder.cn?github",
					"username": "YunaiV",
					"avatarLarge": "https://avatars0.githubusercontent.com/u/2015545?v=4"
				}
			},
			"collectedEntriesCount": 68,
			"company": "纯源码解析，目前源码解析200+篇",
			"ngxCached": true,
			"followeesCount": 12,
			"role": "editor",
			"jobTitle": "公众号：芋道源码",
			"isAuthor": true,
			"postedEntriesCount": 286,
			"subscribedTagsCount": 18,
			"objectId": "5904c637b123db3ee479d923",
			"postedPostsCount": 51,
			"viewedEntriesCount": 82477,
			"username": "Java公众号_芋道源码_每日更新",
			"totalCommentsCount": 121,
			"ngxCachedTime": 1533098595,
			"totalCollectionsCount": 13134,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2017/8/25/35b20d951e004383ce024e0dd6c68118",
			"followersCount": 11537
		},
		"author": "",
		"screenshot": null,
		"content": "- [1、概述]\n- [2、Consumer]\n- [3、PushConsumer 一览]\n- [4、PushConsumer 订阅]\n     DefaultMQPushConsumerImpl- [subscribe(...)]",
		"original": true,
		"hotIndex": 1956.8363,
		"title": "分布式消息队列 RocketMQ 源码分析 —— Message 拉取与消费（下）",
		"createdAt": "2018-08-01T00:14:58.810Z",
		"updatedAt": "2018-08-01T04:41:58.879Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 1694
	}, {
		"collectionCount": 722,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 9996
		},
		"commentsCount": 20,
		"gfw": false,
		"entryView": "",
		"checkStatus": true,
		"category": {
			"ngxCached": true,
			"title": "frontend",
			"id": "5562b415e4b00c57d9b94ac8",
			"name": "前端",
			"ngxCachedTime": 1533098539
		},
		"objectId": "5b5db6c16fb9a04fc564b573",
		"subscribersCount": 0,
		"ngxCachedTime": 1533098622,
		"verifyStatus": true,
		"tags": [{
			"title": "JavaScript",
			"ngxCached": true,
			"ngxCachedTime": 1533098594,
			"id": "55964d83e4b08a686cc6b353"
		}, {
			"title": "前端",
			"ngxCached": true,
			"ngxCachedTime": 1533098545,
			"id": "5597a05ae4b08a686ce56f6f"
		}, {
			"title": "正则表达式",
			"ngxCached": true,
			"ngxCachedTime": 1533098520,
			"id": "55d0cb7360b2e3559fd9ed64"
		}],
		"verifyCreatedAt": "2018-07-31T02:34:59.584Z",
		"rankIndex": 33.235479406959,
		"hot": false,
		"type": "post",
		"originalUrl": "https://juejin.im/post/5b5db5b8e51d4519155720d2",
		"buildTime": 1533098613.3994,
		"lastCommentTime": "2018-08-01T12:34:53.958Z",
		"user": {
			"community": {
				"wechat": {
					"username": "Vincent Ko",
					"avatarLarge": "http://thirdwx.qlogo.cn/mmopen/vi_32/eWtejun7vSmBrkWLxAK12icmSeDeS8qqN0gheRIjlbM6BniaC5GBkpGa0Xoict19lMLoIsYsibOC1S3C9mTgOYiaricw/132",
					"uid": "oDv1Ew1Jc5jIzE9sMyBRmQK1Ey8U"
				}
			},
			"collectedEntriesCount": 22,
			"company": "VIP",
			"ngxCached": true,
			"followeesCount": 19,
			"role": "guest",
			"jobTitle": "实习生",
			"isAuthor": false,
			"postedEntriesCount": 3,
			"subscribedTagsCount": 17,
			"objectId": "5a66dff2f265da3e4f0a4f1b",
			"postedPostsCount": 7,
			"viewedEntriesCount": 308,
			"username": "Vincent Ko",
			"totalCommentsCount": 26,
			"ngxCachedTime": 1533098537,
			"totalCollectionsCount": 960,
			"avatarLarge": "http://wx.qlogo.cn/mmopen/vi_32/1dLYhVUcx4KgTbPWoq0d9L9yK930jvtCe1g6icjvXLcL6C1nvnoibcmPMy7mTBK2vc2DBgIWahoApZqNzxwugTQA/132",
			"followersCount": 12
		},
		"author": "",
		"screenshot": "",
		"content": "笔记是由油管的@The Coding Train老师发布系列教程。 因为正则我自己看了很多次，但是很快又忘记。所以为了彻底搞懂，一边学习一边记笔记，以给别人讲课的方式记笔记，我自己的印象会更深，所以就有了以下内容。 1.1. 基本语法 1.1.1. single char 1.…",
		"original": true,
		"hotIndex": 13005.3537,
		"title": "可能是最好的正则表达式的教程笔记了吧...",
		"createdAt": "2018-07-29T12:44:49.260Z",
		"updatedAt": "2018-08-01T04:43:33.398Z",
		"english": false,
		"isEvent": false,
		"viewsCount": 5683
	}],
	"m": "ok",
	"s": 1
};
