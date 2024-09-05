function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">Our Mission & Vision</h2>
      <p class="mt-2">
      To improve the lives of patients with kidney diseases by providing innovative, high-quality products and exceptional service, while maintaining the highest standards of ethics and integrity.
      \n\n

      To be the most trusted and preferred partner in the Nephrology segment, recognized for our commitment to quality, innovation, and customer satisfaction.


      </p>
      <a class="button btn-theme-default mt-3" href="#"> Join Now </a>
    </div>
    <div class="col container-body">
      <img
        class="img-fluid"
        src="./Images/career-illustration.png"
        alt=""
      />
    </div>
  </div>
    `;
  Career.appendChild(Container);
}
Career();
