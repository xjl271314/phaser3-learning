import React, { useState } from 'react'
import './index.scss'
const data = [
    {
        title: '我是分类导航标题一',
        content: [
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            }, {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            }
        ]
    },
    {
        title: '我是分类导航标题二',
        content: [
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            }
        ]
    },
    {
        title: '我是分类导航标题三',
        content: [
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            },
            {
                text: '我是内容'
            }
        ]
    }
]
function StickyDemo() {
    return (
        <div className="container">
            {
                data.map((section, sectionIndex) => {
                    const list = section.content;
                    return (
                        <div className="section-list" key={sectionIndex}>
                            <h2 className="section-head">{section.title}</h2>
                            {
                                list.map((listItem, listIndex) => (
                                    <div className="list-item" key={listIndex}>
                                        {listItem.text}{listIndex+1}
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </div >
    )
}

export default StickyDemo