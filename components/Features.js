function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Tailor-made products</h2>
  <p class="">
  At Radmex Healthcare Pvt Ltd, we're committed to advancing the field of nephrology with our specialized, high-quality renal care medicines. Designed to meet the critical needs of patients with renal conditions, our products promote faster, more complete recovery, setting new standards in treatment excellence
  </p>
</div>
<div
class="text-body text-center d-flex flex-column align-items-center"
>
<h4 class="title fw-bold">Renal Medicine</h4>
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>

  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Ferimex - LP</div>
      <div class="description text-center">
        Ferric Pyrophosphate - 30mg, Vitamin C- 50mg, Vitaming B-12 - 0.75mcg,
        Folic Acid - 200mcg
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">RenoMex</div>
      <div class="description text-center">
        N-Acetylecystine - 150mg & Taurine - 500mg Tablet
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Racidosis - EC</div>
      <div class="description text-center">
       Sodium Bicarbonate 500/1000mg\n
       Enteric Coated Tablet
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-7.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">PhosLess - 667</div>
      <div class="description text-center">
       Calcium Acetate 667mg Tablet
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Velamex - 400/800</div>
      <div class="description text-center">
        Sevelamer Carbonate 400/800mg Tablet
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-8.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Racitrol - 0.25</div>
      <div class="description text-center">
        Calcitriol 0.25mcg Tablet
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
  <div class="icon d-flex justify-content-center">
    <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
  </div>
  <div class="text">
    <div class="title fw-bold text-center">Mextrol</div>
    <div class="description text-center">
      Magestrol Acetate 40/80/160mg Tablet
    </div>
  </div>
</div>
<div class="col d-flex flex-column justify-content-center pt-5">
<div class="icon d-flex justify-content-center">
  <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
</div>
<div class="text">
  <div class="title fw-bold text-center">Ketrena - DS</div>
  <div class="description text-center">
    Alfa Ketoanalogue 1260mg Tablet
  </div>
</div>
</div>
<div class="col d-flex flex-column justify-content-center pt-5">
<div class="icon d-flex justify-content-center">
  <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
</div>
<div class="text">
  <div class="title fw-bold text-center">ProPreX - 45</div>
  <div class="description text-center">
    Pre & Pro Biotec-45 Billion CFU Capsule
  </div>
</div>

</div>

</div>
<div
class="text-body text-center d-flex flex-column align-items-center mt-10"
>
<h4 class="title fw-bold">Transplant Range</h4>
</div>
`;
  Features.appendChild(Container);
}
Features();
