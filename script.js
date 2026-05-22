document.addEventListener("DOMContentLoaded", function () {
    
    // Smooth Scroll ke Bagian Produk
    const scrollBtn = document.querySelector('a[href="#produk"]');
    if (scrollBtn) {
        scrollBtn.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector("#produk").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Fitur Pencarian Negara Nokos
    const searchInput = document.getElementById("searchCountry");
    const countryItems = document.querySelectorAll(".country-item");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const filter = this.value.toLowerCase();
            
            countryItems.forEach(item => {
                const countryName = item.getAttribute("data-name");
                if (countryName.includes(filter)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // Fitur Klik Negara Nokos otomatis ganti teks WA untuk KEDUA Admin
    const nokosBtn1 = document.getElementById("nokosBtn1");
    const nokosBtn2 = document.getElementById("nokosBtn2");
    
    countryItems.forEach(item => {
        item.addEventListener("click", function () {
            countryItems.forEach(i => i.classList.remove("selected"));
            this.classList.add("selected");
            
            const selectedCountry = this.innerText.trim();
            const waBaseUrl1 = "https://wa.me/62882008753937?text=";
            const waBaseUrl2 = "https://wa.me/62895355121060?text=";
            
            const textCustom1 = encodeURIComponent(`Halo Admin 1, saya mau order Nokos Negara ${selectedCountry} dong`);
            const textCustom2 = encodeURIComponent(`Halo Admin 2, saya mau order Nokos Negara ${selectedCountry} dong`);
            
            nokosBtn1.href = waBaseUrl1 + textCustom1;
            nokosBtn1.innerText = `Admin 1 (${selectedCountry})`;
            
            nokosBtn2.href = waBaseUrl2 + textCustom2;
            nokosBtn2.innerText = `Admin 2 (${selectedCountry})`;
        });
    });
});
