function AboutUs() {
    const AboutUsSection = document.getElementById("AboutUs");
    const Container = document.createElement("div");
    Container.classList.add('about-us', 'py-5', 'bg-light');
  
    Container.innerHTML = `
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 mb-4">
            <h2 class="text-center text-lg-start fw-bold text-primary mb-3">
              Radmex Healthcare: Committed to Excellence and Complete Healthcare
            </h2>
            <p class="lead text-muted mb-4">
              At Radmex Healthcare, we are dedicated to delivering comprehensive healthcare solutions that go beyond treatment. Our commitment to excellence in renal care and other specialized fields ensures that every patient receives personalized and cutting-edge care, enhancing their quality of life.
            </p>
            <ul class="list-unstyled">
              <li class="mb-3">
                <h5 class="fw-bold text-secondary">1. Advanced Renal Care Specialties</h5>
                <p class="text-muted">Radmex Healthcare focuses on renal care, offering innovative treatments for kidney diseases, providing state-of-the-art solutions for chronic kidney conditions.</p>
              </li>
              <li class="mb-3">
                <h5 class="fw-bold text-secondary">2. Preventive Health Focus</h5>
                <p class="text-muted">We believe in preventive healthcare, offering screenings and wellness programs that help detect health issues early, reducing the burden of chronic diseases.</p>
              </li>
              <li class="mb-3">
                <h5 class="fw-bold text-secondary">3. Patient-Centered Approach</h5>
                <p class="text-muted">Our personalized care ensures that every patient receives the best possible treatment tailored to their needs, from diagnosis to recovery.</p>
              </li>
              <li class="mb-3">
                <h5 class="fw-bold text-secondary">4. Accessibility and Affordability</h5>
                <p class="text-muted">We strive to make healthcare accessible and affordable, ensuring advanced care is available to all, regardless of their background.</p>
              </li>
              <li class="mb-3">
                <h5 class="fw-bold text-secondary">5. Innovation and Expertise</h5>
                <p class="text-muted">Our team of experts leverages the latest medical innovations and technology to provide world-class care, continually advancing in medical science.</p>
              </li>
              <li class="mb-3">
                <h5 class="fw-bold text-secondary">6. Holistic Wellness</h5>
                <p class="text-muted">We take a holistic approach to health, addressing physical, mental, and social aspects of well-being to promote long-term wellness.</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 text-center">
            <img src="./Images/about-us-kidney-care.jpg" alt="Kidney Care" class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    `;
  
    document.body.appendChild(AboutUsSection);
  }
  
  AboutUs();
  