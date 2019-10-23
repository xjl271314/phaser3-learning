import React, { useState, useCallback } from 'react'
import './index.scss'

const data = [
    {
        img: 'https://cdn.sharegoodsmall.com/sharegoods/ee81aec0c204463dacc009bda8e018f9.jpg',
        title: '商品名称',
        subTitle: '我是商品的副标题',
        price: 52
    },
    {
        img: 'https://cdn.sharegoodsmall.com/sharegoods/ee81aec0c204463dacc009bda8e018f9.jpg',
        title: '商品名称',
        subTitle: '我是商品的副标题',
        price: 52
    },
    {
        img: 'https://cdn.sharegoodsmall.com/sharegoods/ee81aec0c204463dacc009bda8e018f9.jpg',
        title: '商品名称',
        subTitle: '我是商品的副标题',
        price: 52
    },
    {
        img: 'https://cdn.sharegoodsmall.com/sharegoods/ee81aec0c204463dacc009bda8e018f9.jpg',
        title: '商品名称',
        subTitle: '我是商品的副标题',
        price: 52
    }
]
function GridDemo1() {
    const [listData, setData] = useState(data);
    return (
        <div className="grid-container">
            {
                listData.map((item,index)=>(
                    <div key={index} className="gird-item">
                        <div className="product-img">
                            <img src={item.img} alt="img"/>
                        </div>
                        <h2 className="name">我是商品的标题</h2>
                        <p>我是商品的副标题...</p>
                    </div>
                ))
            }
            <div className="gird-item">
                <div className="see-more">
                      查看更多
                </div>        
            </div>
        </div>
    )
}

export default GridDemo1