import Statement from "../../Components/Statement/Statement";

import chat from "../../img/icon-chat.png";
import money from "../../img/icon-money.png";
import security from "../../img/icon-security.png";
import "./Home.css";
// import tree_jpeg from "../../img/bank-tree.jpeg";
// import tree_1650 from "../../img/bank-tree_1650.webp";
// import tree_1366 from "../../img/bank-tree_1366.webp";
// import tree_920 from "../../img/bank-tree_920.webp";
// import tree_768 from "../../img/bank-tree_768.webp";
// import tree_480 from "../../img/bank-tree_480.webp";

function Home() {
  return (
    <main>
      <div className="hero">
        {/* <img
          srcSet={`${tree_1650} 1650w,${tree_1366}1366w, ${tree_920}920w,${tree_768}768w, ${tree_480}480w`}
          sizes="(min-width:480px) 768px, (min-width:768px) 920px,(min-width:920px) 1366px, 1650px"
          src={tree_jpeg}
          className="hero-img"
          alt="Young plant growing in a pot filled with coins"
        ></img> */}
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
  );
}

export default Home;
