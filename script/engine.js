/**
 * 搜索引擎以及相关解析配置
 *
 * {originalKeyWords} - 未编码的搜索字符串
 * {keyWords} - 已编码的字符串
 * {pageNumber} - 当前页码
 */
var engines = [{
    //OK
    name: 'a8bts.org',
    url: 'http://www.a8bts.org/a8/{keyWords}/{pageNumber}-0-0.html',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.list-area > .item'
    },
    title: {
        selector: 'dt a',
        method: '.text()'
    },
    time: {
        selector: 'dd.attr span b:eq(0)',
        method: '.text()'
    },
    size: {
        selector: 'dd.attr span b:eq(1)',
        method: '.text()'
    },
    magnet: {
        selector: 'dt a',
        method: '.attr("href").replace(".html","").replace("/bt/","magnet:?xt=urn:btih:")'
    }
}, {
    //OK
    name: 'btsou.fun',
    url: 'http://www.btsou.fun/list/{keyWords}/{pageNumber}/time_d',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.mlist > li'
    },
    title: {
        selector: 'div.T1 > a',
        method: '.text()'
    },
    time: {
        selector: 'dl.BotInfo dt span:eq(2)',
        method: '.text()'
    },
    size: {
        selector: 'dl.BotInfo dt span:eq(0)',
        method: '.text()'
    },
    magnet: {
        selector: 'div.dInfo a:eq(0)',
        method: '.attr("href")'
    }
}, {
    //OK
    name: 'sobt.site',
    url: 'https://www.sobt.site/q/{keyWords}.html?sort=rel&page={pageNumber}',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.search-list.col-md-8 > .search-item'
    },
    title: {
        selector: '.item-title > h3 > a',
        method: '.text()'
    },
    time: {
        selector: '.item-bar > span:eq(1) > b',
        method: '.text()'
    },
    size: {
        selector: '.item-bar > span:eq(2) > b',
        method: '.text()'
    },
    magnet: {
        selector: '.item-title > h3 > a',
        method: '.attr("href").replace(".html","").replace("/torrent/","magnet:?xt=urn:btih:")'
    }
}, {
    //OK
    name: 'btajt.com',
    url: 'http://www.btajt.com/search/{keyWords}-first-asc-{pageNumber}',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '#wall .search-item'
    },
    title: {
        selector: '.item-title a',
        method: '.text()'
    },
    time: {
        selector: '.item-bar span:eq(0) b',
        method: '.text()'
    },
    size: {
        selector: '.item-bar span:eq(3) b',
        method: '.text()'
    },
    magnet: {
        selector: '.item-bar > a:eq(0)',
        method: '.attr("href")'
    }
}, {
    //OK
    name: 'chazhongzi.com',
    url: 'https://chazhongzi.com/go/{keyWords}/default/{pageNumber}',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.container > .row > .card'
    },
    title: {
        selector: '.card-content > a.card-title',
        method: '.text()'
    },
    time: {
        selector: '.card-action > .chip:eq(1) > b',
        method: '.text()'
    },
    size: {
        selector: '.card-action > .chip:eq(2) > b',
        method: '.text()'
    },
    magnet: {
        selector: '.card-content > a.card-title',
        method: '.attr("href").replace(/\\?keyword=.*/,"").replace("/bt/","magnet:?xt=urn:btih:")'
    }
}, {
    //OK
    name: 'bobobt.com',
    url: 'http://bobobt.com/search/{keyWords}/{pageNumber}/0/0.html',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.tbox div.ss'
    },
    title: {
        selector: '.title a',
        method: '.text()'
    },
    time: {
        selector: '.sbar span:eq(2) b',
        method: '.text()'
    },
    size: {
        selector: '.sbar span:eq(3) b',
        method: '.text()'
    },
    magnet: {
        selector: '.sbar span:eq(1) a',
        method: '.attr("href")'
    }
}, {
    //OK
    name: 'feikebt.site',
    url: 'http://feikebt.site/s/{keyWords}/{pageNumber}/0/0.html',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.ppwrapper .tbox:eq(3) .ffbox'
    },
    title: {
        selector: '.title a',
        method: '.text()'
    },
    time: {
        selector: '.categorybar span:eq(3) b',
        method: '.text()'
    },
    size: {
        selector: '.categorybar span:eq(1) b',
        method: '.text()'
    },
    magnet: {
        selector: '.categorybar span:eq(0) a',
        method: '.attr("href")'
    }
}, {
    //OK
    name: 'btbiti.com',
    url: 'http://btbiti.com/search/{keyWords}/{pageNumber}-0-0.html',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.pbox > .rs'
    },
    title: {
        selector: '.title h3 a',
        method: '.text()'
    },
    time: {
        selector: '.sbar > span:eq(2)',
        method: '.children("b").text()'
    },
    size: {
        selector: '.sbar > span:eq(3)',
        method: '.children("b").text()'
    },
    magnet: {
        selector: '.sbar > span:eq(0) > a',
        method: '.attr("href")'
    }
}, {
    //OK
    name: 'zhongzishenqi8.ws',
    url: 'http://zhongzishenqi8.ws/shenqi/{keyWords}/{pageNumber}-0-0/',
    keyWordsEncode: 'encodeURIComponent({originalKeyWords})',
    pageNumberStart: 1,
    block: {
        selector: '.list-area > .item'
    },
    title: {
        selector: 'dt a',
        method: '.text()'
    },
    time: {
        selector: 'dd.attr span b:eq(0)',
        method: '.text()'
    },
    size: {
        selector: 'dd.attr span b:eq(1)',
        method: '.text()'
    },
    magnet: {
        selector: 'dt a',
        method: '.attr("href").replace(".html","").replace("/show/","magnet:?xt=urn:btih:")'
    }
}];

var hotWordEngines = {
    //默认界面热词引擎
    default: {
        url: 'http://www.btsou.fun',
        selector: '.hwentry a',
        method: '.text()'
    },
    //下拉热词列表后的更多引擎
    more: {
        url: 'http://bobobt.com/lishi-{pageNumber}.html',
        selector: '.fh a',
        method: '.text()',
        pageNumberStart: 1
    }
};
