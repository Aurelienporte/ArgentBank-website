import Statement from "../../Components/Statement/Statement"

import chat from "../../img/icon-chat.png"
import money from "../../img/icon-money.png"
import security from "../../img/icon-security.png"

import './Home.css';

function Home(){
    return(
        <main>
            <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
            </div>
            <section className="features">
            <h2 className="sr-only">Features</h2>
            <Statement 
                src={chat}
                alt="Chat Icon"
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our
                24/7 chat or through a phone call in less than 5 minutes."
            ></Statement>
            <Statement
                src={money}
                alt="Money Icon" 
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
            ></Statement>
            <Statement 
                src={security}
                alt="Security Icon"
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money
                    is always safe."
            ></Statement>
            </section>
        </main>
    )
}

export default Home