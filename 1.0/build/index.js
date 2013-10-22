/*
combined files : 

gallery/next-tick/1.0/index

*/
/**
 * @fileOverview next-tick
 * @author 莫争 <gaoli.gl@taobao.com>
 * @version 1.0
 */

KISSY.add('gallery/next-tick/1.0/index',function(S) {

  var win = window,
      has = !win.ActiveXObject && win.postMessage;

  /**
   * nextTick
   */
  var nextTick = function() {
    this.init();
  };

  /**
   * 程序初始化
   */
  nextTick.prototype.init = function() {
    var self = this;

    self.tickQueue =[];
    has && self.bind();
  };

  /**
   * 事件绑定
   */
  nextTick.prototype.bind = function() {
    var self      = this,
        tickQueue = self.tickQueue;

    var msgHandle = function(event) {
      if (event.source == win && event.data == 'tick') {
        event.stopPropagation();
        if (tickQueue.length > 0) {
          var fn = tickQueue.shift();
          fn();
        }
      }
    };

    win.addEventListener('message', msgHandle, true);
  };

  /**
   * 间隔执行
   * @param {Function} fn
   */
  nextTick.prototype.push = function(fn) {
    var self      = this,
        tickQueue = self.tickQueue;

    if (S.isFunction(fn)) {
      if (has) {
        tickQueue.push(fn);
        win.postMessage('tick', '*');
      } else {
        setTimeout(function() {
          fn();
        }, 0);
      }
    }
  };

  return nextTick;

});
