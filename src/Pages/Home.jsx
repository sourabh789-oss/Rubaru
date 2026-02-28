import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Buttons from "../components/Buttons";
import Footer from "../components/Footer";


const Home = () => {
const buttonRef=useRef(null);


    return (<>
        <Navbar />
        <Intro buttonRef={buttonRef} />
        <div ref={buttonRef} className='relative mt-20 mb-14   flex flex-col md:w-96 md:mx-auto md:justify-center  flex-wrap gap-3 justify-center'>
            <Buttons content={"Connect with Instragram"} link={"https://www.instagram.com/rubaruofficial.in?igsh=dzcyczFuMXpuZ2Yx"} iconContent={"ri-instagram-line text-pink-600"} />
            <Buttons content={"Join Whatsapp Community"} link={"https://chat.whatsapp.com/C7VIRIDn22K1ravR09yviU"}
                iconContent={"ri-whatsapp-line text-green-600"} />
            <Buttons content={"Connect On Sorts My Scene"} link={"https://sortmyscene.com/p/rubaru-events-entertainment"} iconContent={"ri-ticket-2-line text-pink-600"} />
            <Buttons content={"Message to Admin"} link={"https://wa.me/919826763552"}
                iconContent={"ri-whatsapp-line text-green-600"} />

        </div>

        <Footer/>
    </>
    )



}


export default Home;