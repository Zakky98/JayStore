// TODO: Fun
import Home from "./Home";
import Service from "./ServicePage"
import Contact from "./Contact"
import UpdateService from "./UpdateService";

function Navbar() {
  return (
    <div>
      <header class="header" id="header">
        <nav class="nav container">
          <a href="#" class="nav__logo">
            Jays Boosting Service
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
                  <i class="bx bx-info-square nav__icon" ></i>
                  <span class="nav__name">Services</span>
                </a>
              </li>

              <li class="nav__item">
                <a href="#UpdateService" class="nav__link active link">
                  <i class='bx bx-edit-alt nav__icon'></i>
                  <span class="nav__name">Update Service</span>
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
        <section class="container section section__height PageColor" id="home">
          <h2 class="section__title">Home</h2>
          <Home />
        </section>

        <section class="container section section__height PageColor" id="Services">
          <h2 class="section__title">Services</h2>
          <Service />
        </section>

        <section class="container section section__height PageColor" id="UpdateService">
          <h2 class="section__title">Update Service</h2>
          <UpdateService />
        </section>

        <section class="container section section__height PageColor" id="ContactUs">
          <h2 class="section__title">Contact Us</h2>
          <Contact />
        </section>

        <footer>
        <div class="footer_bg">
            <div class="footer_container grid">
            <div>
            <h1 class="footer_title">Jays Boosting Service</h1>
            <span class="footer_subtitle">Website Created by Zakky98</span>
            </div>
        <div class="footer_socials">
                    <a href="https://www.linkedin.com/in/zak-wilson-a69858197/" target="_blank" class="footer_social" rel="noreferrer">
                        <i class='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/Zakky98" target="_blank" class="footer_social" rel="noreferrer">
                        <i class='bx bxl-github' ></i>
                    </a>
                </div>
            </div>
        </div>
        </footer>
      </main>
    </div>
  );
}

export default Navbar;
