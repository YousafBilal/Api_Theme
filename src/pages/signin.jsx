import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import img from "../images/img1.jpg"
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});


const SignIn = () => {
    const navigation = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {

        console.log({ data });
        const alluser = JSON.parse(localStorage.getItem("data"))
        const reset = alluser.find(obj => {
            if (obj.email == data.email && obj.password == data.password) {
                console.log("user is logged inn", obj)

                localStorage.setItem("user", JSON.stringify([obj]))
                return obj
            }
            else {
                alert("ain't gonna work bitch")
            }
        }
        );
        // return result
        navigation("/desktop")
        reset();
    };
    return (
        <div className="container-fluid  d-flex align-items-center  text-white" style={{ height: "100vh", backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}>
            <div className="container text-center" style={{ width: "55%", }}>

                <form onSubmit={handleSubmit(onSubmitHandler)} className="frm">
                    <h1> Sign In </h1>
                    <br />

                    <input {...register("email")} placeholder="email" type="email" required />
                    <p>{errors.email?.message}</p>
                    <br />

                    <input
                        {...register("password")}
                        placeholder="password"
                        type="password"
                        required
                    />
                    <p>{errors.password?.message}</p>
                    <br />

                    <button type="submit" style={{ width: "40%", height: "7vh",border:"none", marginBottom: "15px", backgroundColor: "blue", color: "white" }}>Sign in</button>
                </form>
            </div></div>
    );
};

export default SignIn;




























// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import img from "../images/b.png"
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";

// const schema = yup.object().shape({
//     email: yup.string().email().required(),
//     password: yup.string().min(8).max(32).required(),
// });


// const SignIn = () => {
//     const navigation = useNavigate()

//     const { register, handleSubmit, formState: { errors }, reset } = useForm({
//         resolver: yupResolver(schema),
//     });
//     const onSubmitHandler = (data) => {

//         console.log({ data });
//         const alluser = JSON.parse(localStorage.getItem("data"))
//         const reset = alluser.find(obj => {
//             if (obj.email == data.email && obj.password == data.password) {
//                 console.log("user is logged inn", obj)

//                 localStorage.setItem("user", JSON.stringify([obj]))
//                 return obj
//             }
//             else {
//                 alert("ain't gonna work bitch")
//             }
//         }
//         );
//         // return result
//         navigation("/desktop")
//         reset();
//     };
//     return (
//         <div className="container-fluid  d-flex align-items-center  text-white" style={{ height: "100vh", backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}>
//             <div className="container text-center" style={{ width: "55%" }}>

//                 <form onSubmit={handleSubmit(onSubmitHandler)}>
//                     <h1>Lets sign you in.</h1>
//                     <br />

//                     <input {...register("email")} placeholder="email" type="email" required />
//                     <p>{errors.email?.message}</p>
//                     <br />

//                     <input
//                         {...register("password")}
//                         placeholder="password"
//                         type="password"
//                         required
//                     />
//                     <p>{errors.password?.message}</p>
//                     <br />

//                     <button type="submit" style={{ width: "40%", height: "7vh", marginBottom: "15px", backgroundColor: "#440E7B", color: "white" }}>Sign in</button>
//                 </form>
//             </div></div>
//     );
// };

// export default SignIn;


