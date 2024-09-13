"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";
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
    <div className="bg-stone-800 h-max w-full">
      <Head>

      <meta name="description" content="Discover trendy clothing at our online store. Shop the latest styles in fashion, dresses, shirts, and accessories." />
        <meta name="keywords" content="clothing, fashion, trendy, apparel, dresses, shirts, accessories, online store" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        </Head>
    
    <Navbar/>
    <Hero/>
    </div>
  );
}
