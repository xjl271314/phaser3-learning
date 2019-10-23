
import React, { useState, useCallback } from 'react'
import './index.scss'
const data = [
    {
        img: 'https://cdn.sharegoodsmall.com/sharegoods/ee81aec0c204463dacc009bda8e018f9.jpg',
        title: '我是比较短的标题',
        subTitle: '副标题副标题副标题副标题',
        price: 52
    },
    {
        img: 'https://qiniu.mqdlf.cn/013060faf9d0e.jpg',
        title: '我是比较长的标题，我的内容很长很长很长所以会换行，我最大显示两行',
        subTitle: '副标题副标题副标题副标题',
        price: 36
    }
]
//flex 布局与图片高度宽度自适应
function FlexDemo() {
    const [listData, setData] = useState(data);
    const loadMore = useCallback(() => {
        let data = {
            img: 'https://qiniu.mqdlf.cn/01af7cb87a972.jpg',
            title: '这里有两行标题并且还有两个运营活动标签…',
            subTitle: '副标题副标题副标题副标题',
            price: 36
        }
        setData([...listData, data])
    })
    return (
        <div className="container">
            <h4 className="page-title">知识点归纳</h4>
            <ul className="knowledge-list">
                <li>1.flex布局</li>
                <li>2.文本指定行数超出隐藏</li>
                <li>3.scss mixin知识</li>
                <li>4.scss $符 @include @content知识</li>
                <li>5.useState useCallback</li>
                <li>6.图片高度与宽度相等自适应</li>
                <li>7.css ::before伪元素使用 ::first-letter使用</li>
                <li>8.多列布局样式探讨</li>
                <li>9.实现指定比例的图片</li>
                <li>10.单行文本居中 多行居中 最多显示两行</li>
            </ul>
            <div className="flex-container">
                {
                    listData.map((item, index) => {
                        return (
                            <div key={index} className="flex-item">
                                <div className="img-box">
                                    <img className="img" src={item.img} alt="图片" />
                                    <h5 className="sub-title">{item.subTitle}</h5>
                                </div>
                                <div className="flex-info">
                                    <h4 className="name">
                                        <p>
                                            <em>
                                                {item.title}
                                            </em>
                                        </p>
                                    </h4>
                                    <div className="content">
                                        <div className="price symbol">{item.price}</div>
                                        <span className="attention">关注:268人</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className="button" onClick={loadMore}>点击加载更多</button>
        </div>
    )
}

export default FlexDemo