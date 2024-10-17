import styles from "./Hero.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP(()=>{
        gsap.from("main h1 span",{
            opacity:0,
            x:-200,
            duration:1,
            stagger: 0.1,
            delay:1.5,
        })

        gsap.from("main p",{
            opacity:0,
            x:-200,
            duration:1,
            stagger: 0.1,
            delay:1.5,
        })

        gsap.from("main button",{
            opacity:0,
            x:-200,
            duration:1,
            stagger: 0.1,
            delay:1.5,
        })
        gsap.from("main img",{
            opacity:0,
            x:200,
            duration:1,
            stagger: 0.1,
            delay:1.5,
        })

    })
    return (
        <main className={styles.container}>
            <div className={styles.heroContent}>
                <h1><span>YOUR FEET</span> <span>DESERVE</span> <br /> <span>THE BEST</span></h1>
                <p>Your Feet the Best and we are Here to help you with you shose. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus adipisci.</p>
                <div className={styles.btn}>
                    <button ><span>Shop Now</span> <FaShoppingCart /></button>
                    <button ><span>Category</span> <BiCategory /></button>
                </div>
                <p>Also Available on</p>
                <div className={styles.heroImgs}>
                    <img src="/public/amazon.png" alt="amazon-load" />
                    <img src="/public/flipkard.png" alt="flip-load" />
                </div>

            </div>
            <div className={styles.heroImg}>
                <img src="/public/shose.png" alt="nike-shose" />
            </div>
        </main>
    )
}

export default Hero
