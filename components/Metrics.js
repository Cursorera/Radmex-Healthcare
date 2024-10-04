function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
          <h2 class="text-center fw-bold">Nephrological Range</h2>
          <p class="text-center">
          At Radmex Healthcare, we are dedicated to delivering comprehensive healthcare solutions that go beyond treatment. Our commitment to excellence in renal care and other specialized fields ensures that every patient receives personalized and cutting-edge care, enhancing their quality of life.
          </p>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">KETRENA</div>
              <img src="Images/product-image/Ketrena.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 2 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">KETRENA-DS</div>
              <img src="Images/product-image/Ketrena-DS2.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <!-- Pricing Tablem 3 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">RACITROL</div>
              <img src="Images/product-image/Recitrol.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 4-->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">RENOMEX</div>
              <img src="Images/product-image/Renomex.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 5 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">TACREX-0.5</div>
              <img src="Images/product-image/Tacrex0.5.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 6 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">TACREX-1</div>
              <img src="Images/product-image/Tacrex1.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 10 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">VELAMEX</div>
              <img src="Images/product-image/Velamex.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">MEXTROL</div>
              <img src="Images/product-image/Mextrol.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">MYCOREX-S360</div>
              <img src="Images/product-image/Mycorex-s360.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">PROPREX-FORTE</div>
              <img src="Images/product-image/pro-prex-forte.png" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a target="_blank" href="https://forms.gle/tx5c3x2FmGu6A1rQ7" class="button btn-theme-1">Know More</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
