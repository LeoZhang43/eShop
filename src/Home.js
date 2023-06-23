import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home(){
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoNDQ0NDQ8NDQ0IDQoIDQ0NDQ8NDwgNFREWFhURExMYHCggGBolGxMTITEhJSk3Li4xIyszODMtNygtLisBCgoKDg0OFw8QFysbFRkrOCs3Ly0rKystLS04Ky03MisrKy0tKy0rLS0tLSsrNystKy0rLS0rKy0tKy0rKysrK//AABEIAKkBKwMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMRABAAIBAgMFBwIHAAAAAAAAAAECEQMEEiFBBTFRYXETMkJSgZGhFCIGM4KxwdHw/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwYE/8QAHREBAQADAAMBAQAAAAAAAAAAAAECERIhMVEDQf/aAAwDAQACEQMRAD8A+pAeAeuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABQESZQSIyk2ACgAACMgkRlEipyjKMomUNLZMs+JaK2NVfC2U5U4fNbC6qJylUQWCAQAUAAAAAAAAAAEEs72ZWRa14hl+pxLO8sLJMvLfL1qatLRz5ecdybaPWOcT4PHprWpPLu6x0l3bfdVt7szE9Yddy+3O4Wems1mFW0a3jET6cjFJ7p+ksXD4nWvbHKcptpzCkw522NblWyZUE7XS+UZUyrN1mS8tMomzC2tEObW3cQ1N301y7bakR3y5tffVjlXnP4edq7i09Va6Gtf3aWnPXGI+8u2GH1Lppbte9PhrafOZ5MNT+INxM8opH0mXTTsTUt/MtFY8K/ul112Oz20cdojMfFeeKZ9I/wBO/WHxqcT+brzNPtzXz+6KT5YmHv7fU461t3ccRbHg+X3+v+o14mleGIitI7s285fUaVOCla/LEV/DH6yQ/STU8atXhaFIXh80c6mEohKsgCgAAAAAAAAACLM7Q1lWYRY5rVZWq6pqzmrFdJXLarOaf94Ou1FJoS6aV0t3evK37o/Ls0txp27p5+E8pcU6ak6bcyZuMr1YlbLyqX1K91p9J5tq7y/WsT6ThrqVi4O7kiaQ5672nWJj8rxu9Lx+8SaxTVXnRjxn7KTton4p+yf1Wl80Ind6Xzf3JjibyUns+k99rfSYj/BXs7bx8Mz6zMptvdPzn6Mrb+elfvLfUhrKuqmlp192tY84iM/c1dalYzaYh519xrW649OX5ZRpWmeeZ9Wbm1MG+47R6acf1W6fR5W547zm0zafPp6PU09nM97p09vSvTM+MpP0+NTWLxex9pM6sTaPczec/h788yIThM8rkmWW7shaARiphJAIAKAAAAAAAAAAAAKzCs1aIwml2ymqk1bzCMM6alYTRXgdHCjhTS9OedNX2bq4TgDpyTponSdnAcC+Tpx+xPYuzgOBPK9OP2S0aDrii0VXVTpzV0IbV04hpgwvLNyquE4WFRUTgwCEiQAFQAAAAAAAAAAAAAAAARhICMGEgqMGEiCMGEggAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==" alt="home background" className="home_image" />
                    <div className="home_row">
                        <Product 
                            id="11341441"
                            title="Apple AirPods Max Wireless Over-Ear Headphones. Active Noise Cancelling, 
                                Transparency Mode, Spatial Audio, Digital Crown for Volume Control. Bluetooth 
                                Headphones for iPhone - Green"
                            price={479}
                            rating={1}
                            image="https://m.media-amazon.com/images/I/71JHImkRXsL._AC_SX679_.jpg"
                        />
                        <Product 
                            id="5235235"
                            title="Sony WH-1000XM5 Wireless Industry Leading Headphones with Auto Noise Canceling Optimizer, Crystal Clear Hands-Free Calling, and Alexa Voice Control, Silver"
                            price={398}
                            rating={2}
                            image="https://m.media-amazon.com/images/I/61aT4CcnGmL._AC_SX679_.jpg"
                        />
                    </div>
                    <div className="home_row">
                        <Product 
                            id="735653"
                            title="Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Shadow Gray (Latest Model)"
                            price={179}
                            rating={3}
                            image="https://m.media-amazon.com/images/I/61DqKs7xflL._AC_SX679_.jpg"
                        />
                        <Product 
                            id="352352"
                            title="Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black WH1000XM4"
                            price={348}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SX679_.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home