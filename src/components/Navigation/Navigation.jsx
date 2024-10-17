
import { useGSAP } from "@gsap/react"
import styles from "./Navigation.module.css"
import { IoLogInOutline } from "react-icons/io5"
import gsap from "gsap/gsap-core"

const Navigation = () => {
    useGSAP(() => {
        gsap.from("nav ul li", {
            opacity: 0,
            y: -200,
            delay: 0.9,
            duration: 0.7,
            stagger: 0.1
        })
        gsap.from("nav .leftSideLogin", {
            opacity: 0,
            y: -200,
            delay: 0.9,
            duration: 0.7,
        })

    })

    return (
        <nav>
            <div className={styles.logo}>
                <img className="img" src="/nike-logo.png" alt="" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className={`${styles.login} leftSideLogin`}><a href="#"><span>Login</span><IoLogInOutline /></a></div>
        </nav>
    )
}

export default Navigation
