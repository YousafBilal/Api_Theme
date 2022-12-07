import React, { Component } from 'react'
import Navbar from '../navbar'
import Header from '../header'
import Body from '../body'
// import img from "../images/bg.png"

const Desktop = () => {
    // const user = JSON.parse(localStorage.getItem("user"))
    // var user1 = user[0]

    return (
        <>

            <Navbar />
            <Header />
            <div className="container-fluid" style={{ backgroundColor: "#F8F9FA" }}>
                <div className='container d-flex flex-wrap  justify-content-around' style={{ width: "90%" }}>
                    <Body />
                </div>
            </div>

        </>

    )


}
export default Desktop