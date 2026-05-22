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

    // Fitur Klik Negara langsung ganti isi teks WhatsApp otomatis
    const nokosBtn = document.getElementById("nokosBtn");
    countryItems.forEach(item => {
        item.addEventListener("click", function () {
            // Hapus status select dari negara lain
            countryItems.forEach(i => i.classList.remove("selected"));
            
            // Tambahkan class selected ke negara yang di-klik
            this.classList.add("selected");
            
            // Ambil nama negara dan set teks WA baru
            const selectedCountry = this.innerText.trim();
            const waBaseUrl = "https://wa.me/62882008753937?text=";
            const textCustom = encodeURIComponent(`Halo Gan, saya mau order Nokos Negara ${selectedCountry} dong`);
            
            nokosBtn.href = waBaseUrl + textCustom;
            nokosBtn.innerText = `Beli Nokos (${selectedCountry}) via WA`;
        });
    });
});
