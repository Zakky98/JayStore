// TODO: Fun

function Navbar() {
  return (
    <div>
      <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="nav__logo">
            JaysBoostingService
          </a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <a href="#home" class="nav__link active link">
                  <i class="bx bx-home-alt nav__icon"></i>
                  <span class="nav__name">Home</span>
                </a>
              </li>

              <li class="nav__item">
                <a href="#Services" class="nav__link active link">
                  <i class="bx bx-basket nav__icon"></i>
                  <span class="nav__name">Services</span>
                </a>
              </li>

              <li class="nav__item">
                <a href="#ContactUs" class="nav__link active link">
                  <i class="bx bxs-contact nav__icon"></i>
                  <span class="nav__name">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section class="container section section__height" id="home">
          <h2 class="section__title">Home</h2>
        </section>

        <section class="container section section__height" id="Services">
          <h2 class="section__title">Services</h2>
        </section>

        <section class="container section section__height" id="ContactUs">
          <h2 class="section__title">Contact Us</h2>
        </section>
      </main>
    </div>
  );
}

export default Navbar;

//Fix Section??
//Add buttons to the list classes.
