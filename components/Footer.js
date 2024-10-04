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
                  <a class="nav-link" target="_blank" href="https://www.facebook.com/profile.php?id=61565251318668&mibextid=LQQJ4d">Facebook</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://www.instagram.com/radmexhealthcare">Instagram</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://maps.apple.com/?ll=28.679060,77.084203&q=My%20Location&t=m">Locate us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7">Contact Us</a>
                </li>
              </ul>
              <div class="copyrights mt-1">
            <p class="call-us"> Call us - 011-41092728 / +91-9871026858 / +91-9312536936</p>
            </div> 
            </div>
            
          </div>

        </div>
  `;
  Footer.appendChild(Container);
}
Footer();

// {}