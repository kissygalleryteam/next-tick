/**
 * @fileoverview 
 * @author 莫争<gaoli.gl@taobao.com>
 * @module next-tick
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Next-tick
     * @constructor
     * @extends Base
     */
    function Next-tick(comConfig) {
        var self = this;
        //调用父类构造函数
        Next-tick.superclass.constructor.call(self, comConfig);
    }
    S.extend(Next-tick, Base, /** @lends Next-tick.prototype*/{

    }, {ATTRS : /** @lends Next-tick*/{

    }});
    return Next-tick;
}, {requires:['node', 'base']});



