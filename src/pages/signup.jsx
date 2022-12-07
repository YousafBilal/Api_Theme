import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import img from "../images/img1.jpg"
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    Name: yup.string().matches(/^[aA-zZ]/, "Only alphabets are allowed for this field ").required(),
    LastName: yup.string().matches(/^[aA-zZ]/, "Only alphabets are allowed for this field ").required(),
    phone: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().oneOf([yup.ref('password'), null]).matches(/[aA-Zz]/, "Error").min(8).max(32).required(),
});

const SignUp = () => {
    const navigation = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });

    const onSubmitHandler = (data) => {

        console.log(data, "data");

        var newdata = JSON.parse(localStorage.getItem("data"))
        console.log("dta is not in local ");
        if (newdata) {
            newdata.push(data)
            localStorage.setItem("data", JSON.stringify(newdata))
        }
        else {
            console.log("else is not working");
            localStorage.setItem("data", JSON.stringify([data]))
        }


        reset();
        navigation("/signin")
    };


    return (
        <div className="container-fluid  d-flex align-items-center  text-white" style={{ height: "100vh", backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}>
            <div className="container text-center" style={{ width: "40%",boxShadow:"0px 0px 5px 5px #544E46" }}>

                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h1>Sign Up</h1>
                    <br />
                    <input {...register("Name")} type="text" placeholder="Name" required />
                    <p>{errors.Name?.message}</p>
                    <input {...register("LastName")} type="text" placeholder="Last Name" required />
                    <p>{errors.LastName?.message}</p>
                    <input
                        {...register("phone")} placeholder="Number" type="number"
                        required
                    />
                    <p>{errors.phone?.message}</p>
                    <input
                        {...register("address")} placeholder="Address" type="text"
                        required
                    />
                    <p>{errors.address?.message}</p>
                    <input {...register("email")} placeholder="Email" type="email" required />
                    <p>{errors.email?.message}</p>
                    <input
                        {...register("password")} placeholder="Password" type="password"
                        required
                    />
                    <p>{errors.password?.message}</p>


                    <button type="submit" style={{ width: "40%", height: "7vh", marginBottom: "15px", backgroundColor: "blue",border:"none", color: "white" }}>Sign up</button>
                </form>
            </div></div>
    );

};

export default SignUp;




























// import React from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import img from "../images/b.png"
// import { useNavigate } from "react-router-dom";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object().shape({
//     Name: yup.string().matches(/^[aA-zZ]/, "Only alphabets are allowed for this field ").required(),
//     LastName: yup.string().matches(/^[aA-zZ]/, "Only alphabets are allowed for this field ").required(),
//     phone: yup.string().required(),
//     address: yup.string().required(),
//     email: yup.string().email().required(),
//     password: yup.string().oneOf([yup.ref('password'), null]).matches(/[aA-Zz]/, "Error").min(8).max(32).required(),
// });

// const SignUp = () => {
//     const navigation = useNavigate()

//     const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });

//     const onSubmitHandler = (data) => {

//         console.log(data, "data");

//         var newdata = JSON.parse(localStorage.getItem("data"))
//         console.log("dta is not in local ");
//         if (newdata) {
//             newdata.push(data)
//             localStorage.setItem("data", JSON.stringify(newdata))
//         }
//         else {
//             console.log("else is not working");
//             localStorage.setItem("data", JSON.stringify([data]))
//         }


//         reset();
//         navigation("/signin")
//     };


//     return (
//         <div className="container-fluid  d-flex align-items-center  text-white" style={{ height: "100vh", backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}>
//             <div className="container text-center" style={{ width: "55%" }}>

//                 <form onSubmit={handleSubmit(onSubmitHandler)}>
//                     <h1>Lets sign up.</h1>
//                     <br />
//                     <input {...register("Name")} type="text" placeholder="Name" required />
//                     <p>{errors.Name?.message}</p>
//                     <input {...register("LastName")} type="text" placeholder="Last Name" required />
//                     <p>{errors.LastName?.message}</p>
//                     <input
//                         {...register("phone")} placeholder="Number" type="number"
//                         required
//                     />
//                     <p>{errors.phone?.message}</p>
//                     <input
//                         {...register("address")} placeholder="Address" type="text"
//                         required
//                     />
//                     <p>{errors.address?.message}</p>
//                     <input {...register("email")} placeholder="Email" type="email" required />
//                     <p>{errors.email?.message}</p>
//                     <input
//                         {...register("password")} placeholder="Password" type="password"
//                         required
//                     />
//                     <p>{errors.password?.message}</p>


//                     <button type="submit" style={{ width: "40%", height: "7vh", marginBottom: "15px", backgroundColor: "#440E7B", color: "white" }}>Sign up</button>
//                 </form>
//             </div></div>
//     );

// };

// export default SignUp;