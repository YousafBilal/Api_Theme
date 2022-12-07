import React from "react";

const Popup = props => {
    const pop=JSON.parse(localStorage.getItem("ele"))
    return (
        <div className="popup-box" style={{ position: "absolute", width: "18rem", right: "50px", top: "10vh" }}>
            <div className="box border border-danger">
                {props.content}
                <span className="close-icon" onClick={props.handleClose}>

                {
                    pop.map((ele)=>{
                        return(
                            <>
                            <div style={{height:"20vh", width:"20vw", overflow:"hidden"}}>
                            <img src={ele.images[0]} style={{height:"5vh",width:"5vw", }}/>
                            <h1>{ele.id}</h1>
                            <h2>{ele.title}</h2>
                            <p>{ele.description}</p>
                            <h1>Price: {ele.price}</h1>
                            <h1>Discount:{ele.discountPercentage}%</h1>
                            </div>
                            </>

                        )
                    })
                }


                    <button style={{ cursor: "pointer" }}>Close</button></span>

            </div>
        </div>
    );
};

export default Popup;