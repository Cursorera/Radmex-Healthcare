function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
  <div
          class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
        >
          <div class="text-body position-absolute">
            <div class="quote-mark position-absolute">
              <img src="./Images/Quote mark.png" alt="" srcset="" />
            </div>
            <h2 class="title fw-bold">Our Strengths and Values</h1>
          </div>
          <div class="col">
            <div class="testimonial-item bg-white rounded item-1">
              <div class="content mt-3">
                <div class="feed-personalDetails">
                <ul class="feed">
                <li>
                Professional and dedicated team
                </li>
                <li>
                Strong distribution network across India
                </li>
                <li>
                World-class quality products
                </li>
                <li>
                Supported by India's leading nephrologists
                </li>
                <li>
                Commitment to innovation and customer satisfaction
                </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="testimonial-item bg-white rounded">
              <div class="content mt-3">
              <div class="feed-personalDetails">
              <ul class="feed">
              <li>
              Quality: We are committed to providing the highest quality products and services.
              </li>
              <li>
              Integrity: We operate with the highest standards of ethics and integrity.
              </li>
              <li>
              Innovation: We strive to innovate and improve our products and services continuously.
              </li>
              <li>
              Customer Satisfaction: We are dedicated to exceeding our customers' expectations.
              </li>
              </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
  `;
  Testimonial.appendChild(Container);
}
Testimonial();
