function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left d-flex align-items-center" id="navbarNav">
    <a class="navbar-brand me-5" href="#">
      <img
        class="BrandLogo"
        src="./Images/logo.png"
        alt="Brand Logo"
      />
    </a>
  </div>
  <div class="nav-right d-flex align-items-center">
    <ul class="navbar-nav d-none d-lg-flex">
      <li class="nav-item">
        <a class="nav-link" href="#AboutUs">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Metric">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://forms.gle/tx5c3x2FmGu6A1rQ7">Contact Us</a>
      </li>
    </ul>
    <button
      class="btn collapsed d-lg-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <div
    class="offcanvas offcanvas-end custom-offcanvas"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    style="max-width: 80%"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Radmex Healthcare</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#Herosection">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Metric">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
  `;
  navbar.appendChild(Container);
}

Navbar();

