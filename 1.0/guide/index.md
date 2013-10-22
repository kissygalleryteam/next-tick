## 综述

next-tick 是

* 版本：1.0
* 作者：莫争
* 标签：postMessage, setTimeout
* demo：[http://gallery.kissyui.com/next-tick/1.0/demo/index.html](http://gallery.kissyui.com/next-tick/1.0/demo/index.html)

## 初始化组件

    S.use('gallery/next-tick/1.0/index', function (S, NextTick) {
         var nextTick = new NextTick();
         
         nextTick.push(a);
         nextTick.push(b);
         nextTick.push(c);
         ...
    })

## API说明

- push(fn)

	间隔执行
	
	* 参数：
	
		fn {Function}：被执行函数