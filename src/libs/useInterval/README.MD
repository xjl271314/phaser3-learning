1、通过useRef创建一个对象；
2、将需要执行的定时任务储存在这个对象上；
3、将time作为第二个参数是为了当我们动态改变定时任务时，能过重新执行定时器。

开发中使用useInterval如下：

``` js
useInterval(() => {
    // you code
}, 1000);

```