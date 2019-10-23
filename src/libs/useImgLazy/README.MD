上面代码逻辑就是通过getBoundingClientRect获取图片元素的位置，从而判断是否显示图片真实地址，用useEffect模拟页面加载成功（onload事件）同时监听scroll事件。

在需要使用图片懒加载的项目中使用：

```js
function App(){
    // ...
    useImgLazy('lazy-img')
    // ...
    return (
        <div>
            // ...
            <img className='lazy-img' data-sourceSrc='真实图片地址'/>
        </div>
    )
}
```