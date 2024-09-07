function ProductSlider() {
    const Slider = document.getElementById("Slider");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <div class="py-2 bg-blue-500 border border-gray-500 max-h-screen" id="new-products">
      <div class="mx-auto overflow-hidden">
        <div class="px-2">
          <ul class="list-none m-0 p-0 flex overflow-hidden transition-all duration-1000 max-h-[calc(100vh-80px)]">
            <li class="bg-gray-400 m-0 mr-4 mb-[-1px] min-h-[150px]">
              <a href="#">
                <img src="Images/product-image/Ferimex-Lp.jpeg" alt="New Product 1" class="w-full" />
              </a>
            </li>
            <li class="bg-gray-400 m-0 mr-4 mb-[-1px] min-h-[150px]">
              <a href="#">
                <img src="Images/product-image/Mextrol-160.jpeg" alt="New Product 2" class="w-full" />
              </a>
            </li>
            <li class="bg-gray-400 m-0 mr-4 mb-[-1px] min-h-[150px]">
              <a href="#">
                <img src="assets/img/new-product-3.jpg" alt="New Product 3" class="w-full" />
              </a>
            </li>
            <li class="bg-gray-400 m-0 mr-4 mb-[-1px] min-h-[150px]">
              <a href="#">
                <img src="assets/img/new-product-4.jpg" alt="New Product 4" class="w-full" />
              </a>
            </li>
            <li class="bg-gray-400 m-0 mr-4 mb-[-1px] min-h-[150px]">
              <a href="#">
                <img src="assets/img/new-product-5.jpg" alt="New Product 5" class="w-full" />
              </a>
            </li>
            <li class="bg-gray-400 m-0 mr-4 mb-[-1px] min-h-[150px]">
              <a href="#">
                <img src="assets/img/new-product-6.jpg" alt="New Product 6" class="w-full" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between h-8 px-2 mt-2">
        <button type="button" class="border-none bg-white text-gray-800 text-lg rounded-md cursor-pointer hover:bg-gray-200">Prev</button>
        <button type="button" class="border-none bg-white text-gray-800 text-lg rounded-md cursor-pointer hover:bg-gray-200">Next</button>
      </div>
    </div>`;

    Slider.appendChild(Container);
}
ProductSlider();
