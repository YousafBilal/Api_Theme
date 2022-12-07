import React, { Component } from 'react'
import img from "./images/bg.png"

export default class header extends Component {
    render() {
        return (
            <>
                <div className="container-fluid" style={{ backgroundColor: "#F8F9FA" }}>
                    <div className="container" >
                        <img className='im' style={{ height: "70vh", width: "100%" }} src={img} alt="" />
                    </div>
                </div>
            </>
        )
    }
}
