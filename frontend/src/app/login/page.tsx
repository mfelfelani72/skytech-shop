"use client";

import { useState } from "react";
import { api } from "@/lib/api/api";


export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    async function submit() {

        const res =
            await api("/login",
                {

                    method: "POST",

                    body: JSON.stringify({
                        email,
                        password
                    })

                });


        const data =
            await res.json();


        localStorage.setItem(
            "token",
            data.token
        );


      console.log(data,"data")

    }



    return (

        <div>

            <h1>
                Login
            </h1>


            <input
                placeholder="email"
                onChange={
                    e => setEmail(e.target.value)
                }
            />


            <input
                placeholder="password"
                type="password"
                onChange={
                    e => setPassword(e.target.value)
                }
            />


            <button onClick={submit}>
                Login
            </button>


        </div>

    )

}