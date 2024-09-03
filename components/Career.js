function Career() {
  const Career = document.getElementById("Careers");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 gy-5 align-items-center">
    <div class="col text-body">
      <h2 class="title fw-bold">About Radmex Healthcare Pvt Ltd</h2>
      <p class="mt-2">
      At Radmex Healthcare Pvt Ltd, we are dedicated to transforming lives through our specialized nephrology (renal care) medicines. With a focus on innovation and quality, we strive to deliver treatments that meet the critical needs of patients with renal conditions, ensuring faster and more complete recovery.

      Our journey began with a vision to revolutionize renal care, and today, we are proud to be recognized as a trusted partner in the healthcare industry. Our products are the result of extensive research and a commitment to excellence, designed to improve patient outcomes and set new standards in treatment.
      
      We believe in the power of innovation to change lives, and our team of experts is constantly exploring new ways to advance renal care. At Radmex Healthcare, we are more than just a company; we are a beacon of hope for patients and their families, dedicated to making a meaningful difference in the world of healthcare.
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
