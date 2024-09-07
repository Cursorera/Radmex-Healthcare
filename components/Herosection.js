function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class=" fw-bold">
              Revolutionizing Renal Care with Cutting-Edge Treatments
              </h1>
              <p class="mt-3">
              RADMEX HEALTHCARE PVT. LTD. is a leading healthcare company specializing in the Nephrology segment, operating at a pan-India level. We are dedicated to providing world-class quality products and exceptional services to our customers, supported by a team of professionals and a strong distribution network.
              </p>
            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-default" href="https://forms.gle/tx5c3x2FmGu6A1rQ7">Contact Us</a>
            </div>
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
