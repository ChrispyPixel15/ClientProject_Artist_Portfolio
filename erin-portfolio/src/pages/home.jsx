import React from "react";
import './home.css'
import { InstagramLogoIcon, EnvelopeSimpleIcon, CaretLeftIcon, CaretRightIcon, CaretDoubleDownIcon } from "@phosphor-icons/react";

function Home() {
    return (
        <div>
            <h1 className="heading">EverSephy</h1>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <p className="sub-title">Just Imagine</p>
            <section className="social-links">
                <a className="social-link-container" href="https://www.instagram.com/eversephy" target="_blank">
                    <InstagramLogoIcon size={32} color="#ffffff" />
                    <p>@eversephy</p>
                </a>
                <a className="social-link-container" href="mailto:eversephyart@gmail.com" target="_blank">
                    <EnvelopeSimpleIcon size={32} color="#ffffff" />
                    <p>eversephyart@gmail.com</p>
                </a>
            </section>
            <section className="about">
                <article className="about-text">
                    <p className="text-amarante">Hello, I'm Erin.</p>
                    <p className="text-amarante">It's a pleasure to meet you!</p>
                    <p className="text-baaj">I'm a freelance artist in South Africa with a love of jigsaw puzzles, cats, and the Moomins! I've been drawing for as long as I can remember, which is a couple of decades now.</p>
                    <p className="text-baaj">Bringing the worlds and people in my head to life; the magic in autumn leaves  and fairy lights, in galaxies and memories. That's what I want to  convey.</p>
                    <p className="text-baaj">Digital is my main focus and I'd like to think I'm decent at it, but that's for you to decide!</p>
                </article>
                <article className="about-image">
                    <div className="circle-bg"></div>
                    <img src="../src/images/website/erinImage.png" className="erin-image" />
                </article>
            </section>
        </div>
    )
}

export default Home;