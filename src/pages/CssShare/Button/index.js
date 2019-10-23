import React, { useEffect } from 'react';
import './index.scss'

function Button() {
    return (
        <div className="flex-row-start-start container">
            <div className="svg-wrapper">
                <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
                    <rect id="shape" height="40" width="150" />
                    <div id="text">
                        <a href=""><span className="spot">Button 1</span></a>
                    </div>
                </svg>
            </div>
        </div>
    )
}
export default Button