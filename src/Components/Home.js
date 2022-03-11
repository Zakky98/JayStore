function Home() {
  return (
    <div className="homePage">
      <h2>Welcome to Jays Boosting Service. 
        A boosting service for the game Escape From Tarkov.
      </h2>
      <div class="servOne">
      <h2>Boost Bonanza</h2>
      <p>This service will provide you with a boost of <b>15 million</b> roubles. 
        It will take 1 to 6 days for this service to be fulfilled.
      </p>
      <img className="jayBentimg" alt="#" src="BoostBonanza.jpg" />
      </div>
      <div class="servTwo">
      <h2>Big Boost</h2>
      <p>This service will provide you with a boost of <b>8 million</b> roubles.
        It will take 1 to 4 days for this service to be fulfilled 
      </p>
      <img className="boostBimg" alt="#" src="BigBoost.jpg" />
        </div>

        <div class="servThree">
        <h2>Baby Boost</h2>
      <p>This service will provide you with a boost of <b>3 million</b> roubles. 
        It will take 1 to 3 days for this service to be fulfilled.
      </p>
      <img className="tark1img" alt="#" src="BabyBoost.jpg" />
        </div>
    </div>
  );
}

export default Home;

