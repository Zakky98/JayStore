function Home() {
  return (
    <div className="homePage">
      <h2>Welcome to Jays Boosting Service. A boosting service for the game Escape From Tarkov.
        {/* TODO CHANGE BUTTONS TO TEXT, LOOKS RETARDED */}
      </h2>
      <br></br>
      <ul>
            <li>Mega Boost Bonanza:
            <button className="buyButton">£80</button>
            <li><img className="jayBentimg" src="JayBent.jpg" /></li>
            </li>
            <li>Boost Bonanza:
                <button className="buyButton">£60</button>
            </li>
            <li>Image</li>
            <li>Big Boost:
                <p>Test wording</p>
                <button className="buyButton">£40</button>
            </li>
            <li><img className="boostBimg" src="BoostB.jpg" /></li>
            <li>Baby Boost:
                <p>This service will provide you with a boost of 5 levels dependent upon your current level.</p>
                <button className="buyButton">£20</button>
            </li>
            <li><img className="tark1img"src="Tark1.webp" /></li>
        </ul>
    </div>
  );
}

export default Home;
