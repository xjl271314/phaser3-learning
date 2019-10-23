import React from 'react';
import { Link } from 'react-router-dom'
import './index.scss'
function Display() {
    return (
        <ul className="flexColumnStart page">
            <li>
                <Link to="/display/flex">1.flex布局</Link>
            </li>
            <li>
                <Link to="/display/grid">1.gridDemo1</Link>
            </li>
            <li>
                <Link to="/display/grid2">1.gridDemo2</Link>
            </li>
        </ul>
    )
}

export default Display