//console.log('bağlandı')

//const egitmenIsmi = "hasan";
//const egitmenYasi = "25";
//console.log(egitmenIsmi)
//console.log(egitmenYasi)

//Eğitmen Bilgilerini içeren obje
// //
//Objeye yeni bir veri eklenmesi
//egitmenBilgileri.calismaModeli='Uzaktan'

//Eğer string ifadede javascript kodu çalıştrımak istniyorsa backtik `` kullanılır
// console.log(

//  `
//  Eğitmen Adı: ${egitmenBilgileri.egitmenIsmi}
//  Eğitmen Yaşı: ${egitmenBilgileri['egitmenYasi']}
//  Eğitmen Ünvanı: ${egitmenBilgileri.egitmenTitle}
//  Eğitmen Tecrübesi: ${egitmenBilgileri.egitmenTecrube}
//  Eğitmen Çalışma Şekli: ${egitmenBilgileri.calismaModeli}
//  `);

//objedeki veriyi silmek için delete kullanılır. Delete objedeki veriyi olduğu siler
//yazım şekli obje.silinecekveri
//delete egitmenBilgileri.egitmenYasi
//normal string ifadelri alta almak için \n opartor kullnaılır
//console.log('akjsdhflıudhfıuaqefhıuewfhuıo \n auhefuıewhf')
//console.log(egitmenBilgileri.egitmenYasi)

//console.log(egitmenBilgileri)

//delete işlevinin farklı şekilde yazımı
//delete egitmenBilgileri['egitmenIsmi']
// console.log(egitmenBilgileri)

// const personelBilgisi = {
//   isim: "Ahmet",
//   yas: 40,
//   arabalar: [
//    { araba1: "BMW",model:['520','X5','X3']},
//     {araba2: "Fiat",model:['egea','linea','doblo']},
//    { araba3: "Volvo",model:['xc90','xc60','s60']},
//   ],
// };

const arabalar = ["Volvo", "BMW", "Fiat", "Porsche"];

//console.log(arabalar)

//Dizi deki elemanları gezmek için kullanılar yöntem
// for(i=0;i<arabalar.length;i++){
//     console.log(arabalar[i])
// }

//arabalar.map((dsfg)=>console.log(dsfg))

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

//ogrencielr dizini tek tek dönyyr
// ogrenciler.map((ogrenci) => {
//   if (ogrenci.id == 10) {
//     console.log(`
// Öğrenci Sıra Numarası: ${ogrenci.id}
// Öğrenci Adı: ${ogrenci.first_name}
// Öğrenci Soyadı: ${ogrenci.last_name}
// `);
//   }else{
//     console.log('Aranılan öğrenci buşlanmaıd')
//   }
// });

//Ekrana Personelin adı Ahmet 2.arabası Fiat

// console.log(
//   "Personelin Adı:" +
//     personelBilgisi.isim +
//     `'in ikincisi arabası  ` +
//     personelBilgisi.arabalar.araba2
// );

//console.log('ahmetin 1.arabsnın modeli '+ personelBilgisi.arabalar[0].model[0])

// console.log(personelBilgisi.arabalar.map((araba)=>{
//     console.log('Arabalarım',araba.model.map((mdl)=>{console.log(mdl)}))
// }))

//Objede Fonksiyon ÇAlıştrıma
// const kisi = {
//   isim: "Hasan",
//   soyisim: "Çelik",
//   yas: 25,
//   fullName: function () {
//     return this.isim + "  " + this.soyisim;
//   },
// };

//console.log(kisi.fullName())

// const personel = {
//   personelAdi: "Kemal",
//   personelSoyisim: "Çelik",
//   personelYas: 80,
//   personelDili: "İngilzce",
//   personelDogum: "KAraman",
//   fonksiyon: function () {
//     return (
//       '1- ' + this.personelAdi +
//       "  \n" +
//       '2- ' + this.personelAdi +
//       "  \n" +
//       '3- ' + this.personelDogum +
//       "  \n" +
//       this.personelAdi
//     ).toUpperCase();
//   },
// };

// console.log(personel.fonksiyon());

//bir evdeki bulunan çocoukları evebynlerin bilgirini ve cocukların yaşını belirten

//JavaScriptte Verileri bu şekilde önce modelleme yapıp daha sonra bu model üzerinden okuyabilirz
// function Kisi(isim,soyIsim,yas){
//     this.ad=isim,
//     this.soyad=soyIsim,
//     this.kisiYas=yas

// }
//Oluşturduğumuz modeli burda veri gödnerek yeniden oluşturyoruz
// const gelenKisi=new Kisi('Hasan','Çelik',25)

// console.log(gelenKisi.ad)

// gelenKisi.memleket='Karaman'

//console.log(gelenKisi)

//öğrencinin yaşı eğitim bilgisi isim soyisim alan bir veri protoipi oluşturun


//const harfler=new Set(['a','b','c','d'])

//console.log(harfler)

// const harfler=new Set();


// let as='a'

// harfler.add(as);
// harfler.add('b');
// harfler.add('c');
// harfler.add('c');
// harfler.add('d')



//console.log(harfler)

const kisi={
    isim:'Hasan',
    soyIsim:'Çelik',
    yas:25
}





//console.log(kisi.isim + '  ' + kisi.soyIsim + '  ' +  kisi.yas)

//Objeyi parçalayrak yazımı kolaylaştrıyoruz
const {isim,soyIsim,yas}=kisi

console.log(isim + '  ' + soyIsim + '  ' + yas)

//ogrenci numarası adı soyasıd sınıfı içrek bir oje hazrılayıp consolo onjeyi açark yazın


