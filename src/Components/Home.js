function Home() {
  return (
    <div className="HomePage">
      <h2>Welcome to Jays Boosting Service. A boosting service for the game Escape From Tarkov.
        
      </h2>
      <br></br>
      <ul>
            <li>Mega Boost Bonanza:
            <button className="BuyButton">£80</button>
            <li>Image</li>
            </li>
            <li>Boost Bonanza:
                <button className="BuyButton">£60</button>
            </li>
            <li>Image</li>
            <li>Big Boost:
                <p>Test wording</p>
                <button className="BuyButton">£40</button>
            </li>
            <li className="BoostB" src="BoostB.jpg"><img className="BoostBimg" src="BoostB.jpg" /></li>
            <li>Baby Boost:
                <p>This service will provide you with a boost of 5 levels dependent upon your current level.</p>
                <button className="BuyButton">£20</button>
            </li>
            <li className="Tark1"><img className="Tark1img"src="Tark1.webp" /></li>
        </ul>
    </div>
  );
}

export default Home;
