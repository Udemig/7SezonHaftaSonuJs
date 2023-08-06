//console.log('Bağlandı')


//JavaScript  Fonksiyonlar

//Uygulamamızda kompleks işevleri içerisinde çalıştrıtmak fonksisyonları kullanıyoruz

//Fonksiyon Yazım Kuralı

// 1- function fonksiyonAdi(parametreler){ çalıştırılacak kodalr}
// 2- const fonksiyonAdi = (parametreler) =>{çalıştırılacak kodlar}


// function ekranaYaz(){
//     console.log('Fonksiyondan Merhaba')
//     //alert('FonksiyonALerti')
// }

// ekranaYaz()


//Fonksiyon içerisinde yapılacak işlemlerde kullanılmak üzre parametreler alır

// const toplamaFonksiyonu=(sayi1,sayi2)=>{

//     console.log(sayi1+sayi2)

// }

//toplamaFonksiyonu(2,4)

// const carpmaFonksiyonu=(sayi1,sayi2)=>{

//     //return fonksiyonun sonucunu fonksiyonun çağrıldığı kullanılmak üzere fonksiyona eşiter
//     return sayi1*sayi2
// }

// const carpimSonuc=carpmaFonksiyonu(3,4)
// console.log(carpimSonuc)

// //console.log(carpmaFonksiyonu(2,3))


// const egitmenAdi='Hasan'

// const soyad='ÇELİK'

// const egitmenSoyad=soyad

// console.log('Eğitmen Adı: ',egitmenAdi)
// console.log('Eğitmen Soyadı: ' , egitmenSoyad)


// const egitmenBilgi=(ad,soyad)=>{
//     return ad + '  ' + soyad
// }

// console.log(egitmenBilgi('Hasan','ÇELİK'))

//Fonksiyon Girilen iki sayıyı bölsun.bölüm değişkeni oluştur ekranda alert şeklinde göster

// const bolmeFonksiyonu=(sayi1,sayi2)=>{

//     return sayi1/sayi2
// }

// const bolumSonuc=bolmeFonksiyonu(6,3)

// alert(bolumSonuc)

const personel={
    adi:'Hasan',
    soyadi:'ÇELİK',
    yas:25,
    sirket:'Arabuleu'
}

function personelBilgi(personelIsim,personelSoyisim,personelYas,sirket='Udemig'){


    console.log('Personelin Adı : ' + personelIsim)
    console.log('Personelin Sotadı: ' + personelSoyisim)
    console.log('Personelin Yaşı: ' + personelYas)
    console.log('Şirket Bilgisi:' + sirket)

}

//personelBilgi('Hasan','ÇELİK',25,'Mimcode')

//const {adi,soyadi,yas,sirket}=personel
//personelBilgi(adi,soyadi,yas,sirket)

const ogrenciler = [
    { id: 1, first_name: "Sven", last_name: "D'Onisi" },
    { id: 2, first_name: "Phillida", last_name: "Yeowell" },
    { id: 3, first_name: "Barnett", last_name: "Sewart" },
    { id: 4, first_name: "Dorette", last_name: "de Nore" },
    { id: 5, first_name: "Shandeigh", last_name: "Heake" },
    { id: 6, first_name: "Gennifer", last_name: "Dakin" },
    { id: 7, first_name: "Tiffie", last_name: "Elington" },
    { id: 8, first_name: "Gabrielle", last_name: "Janaszewski" },
    { id: 9, first_name: "Chaunce", last_name: "Holley" },
    { id: 10, first_name: "Hedwig", last_name: "Stendell" },
  ];

  const ogrenciBilgi=(numara,isim,soyisim,okul='Udemig Koleji')=>{

    console.log('Öğrenci Numarası : ' + numara)
    console.log('Öğrenci Adı  : ' + isim)
    console.log('Öğrenci Soyadı  : ' + soyisim)
    console.log('Okul : ' + okul)
 
  }

  ogrenciler.map((ogrenci)=>{
    //console.log(ogrenci)
    const{id,first_name,last_name}=ogrenci
    ogrenciBilgi(id,first_name,last_name)
  })