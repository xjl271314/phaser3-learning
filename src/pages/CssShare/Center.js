import React, { useEffect } from 'react';
import './Center.scss'
import loadScript from '../../utils/loadScript'

function CenterDemo() {
    useEffect(() => {
        // loadScript(require('../../utils/reveal.js'))
    }, [])
    return (
        <div className="center-container">
            <h1>水平居中</h1>
            <section>
                <h4>行内元素</h4>
                <code>
                    {
                        `.parent {
                            text-align: center;
                        }`
                    }
                </code><br/>
                <span>我是行内元素水平居中</span>
            </section>

        </div>
    )
}

export default CenterDemo