// 1. Gerekli kütüphaneleri çağır
const express = require('express');
const path = require('path'); // Dosya yollarını yönetmek için

//webi ayağa kaldırıyom yani sunucu oluşturdum adı da app
const app = express();

// 3. Sitenin çalışacağı portu belirle
const PORT = 3000;

// 4. EJS'i şablon motoru olarak ayarla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // 'views' klasörünün yerini belirt
//burda path os dan bağımsız dosya ve dizin yollarıyla çalışmamı sağlıyor
//__dirname bulunduğum klasörün adı 
//.join() metodu os a uygun / \ gibi sembolleri ayarlar. yol parçalarını birleştirir. 
//views de sunucuya istek gelice render edeceği şeyleri tutuyor. onu yaptım yani bu kısımda


//app.set dinamik yani sunucunun işlem yaptğı dosyalarda kullanılır app.use iste statik resim gibi şeylrde aradaki fark bu 


// 5. 'public' klasörünü (CSS, JS, resimler için) statik hale getir
// Tarayıcı bu klasördeki dosyalara doğrudan erişebilecek
app.use(express.static(path.join(__dirname, 'public')));
//app.use gelen her http isteği için belirli ara yazılımın çalışmasını sağlıyor.
//express.staticten gelenleri her isteğe uygular yani app.use

//express.static gelen bir isteğin statik bir dosyaya ait olup olmadığını kontrol eder /style.css gibi
//eğer dosya varsa tarayıcıya doğrudan sunar böylece manuel yönlendirme her statik dosya için yazmamız gerekmez


// 6. Ana Sayfa Yönlendirmesi (Route)
// Birisi sitemin ana sayfasına (http://localhost:3000/) geldiğinde bu kod çalışacak
app.get('/', (req, res) => {

    res.render('index', {
        toplamGun: 24,
        acilabilirGunSayisi: 24 // Tüm kutular açık
    });
});
//app.get http isteiğini yakalar cevabı belirler. '/' ana sayfama yapılan isteği gösteriyor
//req= tarayıcıdan gelen isteklerin bilgilerini içeren nesnedir(kullanıcı verileri vb.)
//res= sunucunun tarayıcıya geri göndereceği cevabı kontrol etmemi sağlayan nesne.
//res.render= res nesnesinin görünümünü işlicem sonra göndericem (html göndericem)
//index işelencek dosyanın adı diğerleri de bu dosyaya gönderilecek parametreler.



// 7. Sunucuyu başlat ve dinlemeye al
app.listen(PORT, () => {
    // Sunucu başladığında terminale bu mesajı yazdır
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});