function Pricing() {
  const Pricing = document.getElementById("Pricing");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
          <h2 class="text-center fw-bold">Pricing Packages</h2>
          <p class="text-center">
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>
        <div class="row mt-5">
          <!-- Pricing Table -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">FERIMEX-LP Tablets</div>
              <img src="Images/product-image/Ferimex-Lp.jpeg" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 2 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Mextrol-160</div>
              <img src="Images/product-image/Mextrol-160.jpeg" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Tablem 3 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">Mycorex-S360</div>
              <img src="Images/product-image/Mycorex-S360.jpeg" alt="New Product 1" class="w-100 h-50" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 4-->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">PHOSLESS-667</div>
              <img src="Images/product-image/Phosless-667.jpeg" alt="New Product 1" class="w-100" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 5 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">RACIDOSIS</div>
              <img src="Images/product-image/Racidosis.jpeg" alt="New Product 1" class="w-100" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 6 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">RACITROL</div>
              <img src="Images/product-image/Racitrol.jpeg" alt="New Product 1" class="w-100" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 7 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">RENOMEX</div>
              <img src="Images/product-image/Renomex.jpeg" alt="New Product 1" class="w-100" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 8 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">TACREX-1MG</div>
              <img src="Images/product-image/Tacrex1.png" alt="New Product 1" class="w-100" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 9 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">TACREX</div>
              <img src="Images/product-image/Tacrex.jpeg" alt="New Product 1" class="w-100" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
          <!-- Pricing Table 10 -->
          <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box overflow-hidden position-relative">
              <div class="title">VELAMEX</div>
              <img src="Images/product-image/Velamex.jpeg" alt="New Product 1" class="w-100" />
              <div class="table-footer">
                <a href="#" class="button btn-theme-1">View Profile</a>
              </div>
            </div>
          </div>
        </div>
  `;
  Pricing.appendChild(Container);
}
Pricing();
