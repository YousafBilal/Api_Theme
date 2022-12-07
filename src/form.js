import React from "react";
import { useForm } from "react-hook-form";
import img from "./images/bg.png"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    Name: yup.string().matches(/^[aA-zZ]/, "Only alphabets are allowed for this field ").required(),
    LastName: yup.string().matches(/^[aA-zZ]/, "Only alphabets are allowed for this field ").required(),
    email: yup.string().email().required(),
    password: yup.string().oneOf([yup.ref('password'), null]).matches(/[aA-Zz]/, "Error").min(8).max(32).required(),
});

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });

    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };
    return (
        <div className="container-fluid  d-flex align-items-center text-white" style={{ height: "100vh", backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}>
            <div className="container " style={{ width: "55%" }}>
                <div className="row text-center">
                    <h1 className="ha w-100  p-2" style={{ fontSize: "60px" }}>Create Acount</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <h2>Lets sign you up.</h2>
                    <br />
                    <input {...register("Name")} type="text" placeholder="Name" required />
                    <p>{errors.Name?.message}</p>
                    <br />
                    <input {...register("LastName")} type="text" placeholder="Last Name" required />
                    <p>{errors.LastName?.message}</p>
                    <br />
                    <input {...register("email")} placeholder="email" type="email" required />
                    <p>{errors.email?.message}</p>
                    <br />

                    <input
                        {...register("password")} placeholder="password" type="password"
                        required
                    />
                    <p>{errors.password?.message}</p>
                    <br />

                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );

};

export default Form;