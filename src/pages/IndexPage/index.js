import React from 'react';
import { Link } from 'react-router-dom'
import './index.scss'

const Menu = [
    {
        title: "布局",
        link: "/display"
    },
    {
        title: "sticky黏性布局",
        link: "/position/sticky"
    },
    {
        title: "svgButton",
        link: "/show/button"
    }
]
function Index(props) {
    return (
        <div className="indexPage">
            {
                Menu.map((item, index) => (
                    <Link to={item.link} key={index}>{item.title}</Link>
                ))
            }
        </div>
    )
}
export default Index;

