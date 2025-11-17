const modalBox = document.getElementById('image-modal-content');
const modalImage = document.getElementById('modal-image-src');
const modalText = document.getElementById('modal-day-text');
const closeModalBtn = document.getElementById('modal-close-btn');

// --- 2. Tüm Açılabilir Kutuları Seç (index.ejs de ayarladım)---
const openableBoxes = document.querySelectorAll('.box.openable');

// --- 3. Modalı Kapatmak İçin Bir Fonksiyon  ---
function closeModal() {
    modalBox.classList.remove('active'); // Pop-up'tan 'active' sınıfını kaldırır
}

// --- 4. Her Bir Kutuyu Dinlemeye Al ---
// (Tüm kutuları (openableBoxes) tek tek geziyoruz)
openableBoxes.forEach(box => {
    
    // Her kutuya SADECE BİR KEZ çalışan bir tıklama olayı ekle
    box.addEventListener('click', () => {

        // --- Tıklandığında Olacaklar ---

        // a. Tıklanan kutunun gün numarasını (data-day) oku
        const dayNumber = box.getAttribute('data-day');

        // b. Pop-up'ın başlığını o günle güncelle
        modalText.innerText = `${dayNumber}. Günün Sürprizi!`;

        // c. Pop-up'ın resmini o günle güncelle
        // (Resimlerin /public/images/gun-1.jpg formatında olduğunu varsayar)
        modalImage.src = `/images/gun-${dayNumber}.jpg`;

        // d. Pop-up'ı görünür yap (CSS'teki .active sınıfını ekleyerek)
        modalBox.classList.add('active');
        
        // e. Tıklanan kutunun rengini değiştir (görsel geri bildirim)
        box.style.backgroundColor = '#FFD700'; // Altın sarısı
        box.style.cursor = 'default';
        
        // f. Kutunun hover efektini kaldır
        box.classList.remove('openable');

    }, { once: true }); // {once: true} bu olayın sadece 1 kez çalışmasını sağlar
});

// --- 5. Modalı Kapatma Olayını Ekle ---
// (Kapatma (X) düğmesine tıklandığında closeModal fonksiyonunu çalıştır)
closeModalBtn.addEventListener('click', closeModal);