// import React, { Component } from 'react'
// import { AiOutlineShoppingCart } from "react-icons/ai"
// export default class Navbar extends Component {


//     render() {



//         state = {
//             isOpen: false,
//         }

//         togglePopup = () => {
//             this.setState({ isOpen: !isOpen });

//         }
//         return (
//             <>
//                 <nav className="navbar navbar-light bg-light p-3">
//                     <div className="container">
//                         <a className="navbar-brand" href="#">
//                             <h3>Bootstrap</h3>
//                         </a>

//                         {/* <button type="button" className="btn " data-bs-toggle="modal"
//                             data-bs-target="#staticBackdrop">
//                             <AiOutlineShoppingCart
//                                 onClick={() => {
//                                     <div>
//                                         <h1>Hello</h1>
//                                     </div>
//                                     console.log("btn");

//                                 }}
//                             />

//                         </button> */}
//                         <input
//                             type="button"
//                             value="Click to Open Popup"
//                             onClick={togglePopup}
//                         />
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                         {isOpen && <Popup
//                             content={<>
//                                 <b>Design your Popup</b>
//                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                                 <button>Test button</button>
//                             </>}
//                             handleClose={togglePopup}
//                         />}

//                     </div>
//                 </nav>
//             </>
//         )
//     }
// }

import React from 'react'
import { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import Popup from './popup';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light p-3">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <h3>Bootstrap</h3>
                    </a>
                    <AiOutlineShoppingCart
                        type="button"
                        onClick={togglePopup}/>
                        
                    {isOpen && <Popup
                        content={
                            <>
                            </>}
                        handleClose={togglePopup}
                    />}

                </div></nav>
        </>
    )
}
