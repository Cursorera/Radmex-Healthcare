function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row gx-4 gy-5">
          <div class="col-12 col-md-10 left-section ">
            <div class="brand-logo">
              <a class="navbar-brand" href="#">
                <img class="BrandLogo" src="./Images/logo.png" alt="" srcset="" />
              </a>
            </div>
            <div class="nav-links d-flex flex-column mt-4">
              <ul class="nav justify-content-left row-2">
                <li class="nav-item">
                  <a class="nav-link" href="#Products">Facebook</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://www.instagram.com/radmexhealthcare">Instagram</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contacts</a>
                </li>
              </ul>
            </div>
            <div class="copyrights mt-4">
              © 2024 <a class='text-decoration-underline' href="">Radmex Healthcare</a>
            </div>
          </div>

        </div>
  `;
  Footer.appendChild(Container);
}
Footer();
