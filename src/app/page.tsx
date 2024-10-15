import Image from "next/image";
import Navbar from './components/Navbar';
import Link from "next/link";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function home(){
  return(
    <div>
        <Navbar/>
      
        <Hero/>
        <Footer/>
      
    </div>
  )
}