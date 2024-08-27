"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect } from "react";

export default  function Home() {

  function add(){
    console.log(2+3)
  }

  
  useEffect(()=>{
    const getData=async ()=>{
      try{

        const res=await fetch('http://localhost:3000/api/register')
        // we are awaiting the response and also converting the json response to object
       const data= await res.json()
        console.log(data)
      }

      catch(e){
        console.log("something went wrong")
      }
      
      
    }
    getData()
  },[])
  
    

  return (
    <div>
    
    <Navbar/>
    <Hero/>
    </div>
  );
}
