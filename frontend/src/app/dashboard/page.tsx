"use client";

import {useEffect,useState} from "react";
import {api} from "@/lib/api/api";


export default function Dashboard(){

const [user,setUser]=useState();


useEffect(()=>{

api("/me")
.then(
r=>r.json()
)
.then(
setUser
);


},[]);



return (

<div>

<h1>
Dashboard
</h1>


<pre>
{
JSON.stringify(
user,
null,
2
)
}
</pre>


</div>

)

}