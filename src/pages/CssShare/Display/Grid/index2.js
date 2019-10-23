import React, { useState } from 'react'
import './index2.scss'
import useInterval from '../../../../libs/useInterval'
const data = [
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称1',
    },
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称2',
    },
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称3',
    },
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称4',
    },
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称5',
    },
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称6',
    },
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称7',
    },
    {
        img: "https://test2cdn.sharegoodsmall.com/sharegoods/144287d857b648e7b8982c89e88d9b75.jpg",
        title: '奖品名称8',
    },
    {
        type: 'btn',
        title: '点击抽奖',
    }
]
function GridDemo2() {
    let [current, setCurrent] = useState(0)
    const Len = data.length
    useInterval(() => {
        if (current < (Len - 1)) {
            setCurrent(current++)
        }
        else {
            setCurrent(0)
        }
    }, 800)
    return (
        <div className="container">
            <div className="grid-container">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="grid-item">
                                <img
                                    src={item.img}
                                />
                                <p className={item.type ? ' btn' : ''}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <h5>grid布局</h5>
            <div className="grid-container show" >
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="grid-item">
                                {index == current && <div className="cover"></div>}
                                <img
                                    src={item.img}
                                />
                                <p className={item.type ? ' btn' : ''}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <h5>flex布局</h5>
            <div className="flex-container show" >
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="flex-item">
                                {index == current && <div className="cover"></div>}
                                <img
                                    src={item.img}
                                />
                                <p className={item.type ? ' btn' : ''}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GridDemo2