// Switch Case:JavaScript switch case anahtar kelimesi koşullara göre komut akışını yönlendirmek için kullanılır.
// Örnegin:
// let a = 10;
// let b = 12;
// switch (a + b) {
//   case 9:
//     console.log("toplam 9");
//     break;
//   case 14:
//     console.log("toplamlar 14");
//     break;
//   case 12:
//     console.log("toplam 12");
//     break;
//   case 6:
//     console.log("toplam 9");
//     break;
//   default:
//     console.log("toplamlar belirtilmedi.");
// }

// day = 0 day = 6

// switch (day) {
//   default:
//     console.log("Gün değeri alınırken bir hata oluştu.");
//     break;
//   case "pazar":
//   case "cumartesi":
//     console.log("Oley Haftasonu geldi.");
//     break;
//   case 4:
//   case 5:
//     console.log("Haftasonu Yaklaştı");
//     break;
//   case 1:
//   case 2:
//   case 3:
//     console.log("Haftasonuna çok var.");
//     break;
// }



// STRING METHODLARI
// console.log(); //built-in

// let text = "";
// let uzunluk = text.length;
// console.log(uzunluk);
// console.log(text.length);

// // index
// console.log(text[1]);
// console.log(text[4]);

//NOT => length sayımı 1'den index sayımı 0'dan başlar.


//STRING'LERI PARÇALAMA
// let text = "Hello World!";
// slice, substring, substr

//slice(start index, end index)

// console.log(text.slice(6, 8));
// console.log(text.slice(5, -3));
// text değişkenini 0'ındexten başlayarak 5. indexe kadar (5 dahil değil) kes.

// substring(start index, end index)
// console.log(text.substring(1));
// Not => slice özelliği - index alabilir. - index de sağdan saymaya başlar.

//substr//
// substr(start index, length);
// let meyveler = "armut ayva kivi";
// console.log(meyveler.substr(6, 4));


// TEXT DEĞİŞTİRME =>
// let text = "Hoşgeldin 2023.";
// let text2 = "HoŞgElDin 2023. Hoşgeldin 2023.";

//replace() =>
// replace(değişmesini istediğim text, değiştireceğim text);

// console.log(text2.replace("2023", "2024"));
// console.log(text2.replace("Hoşgeldin", "Güle Güle"));
// console.log("-------------------------");
// console.log(text2.replaceAll("2023", "2024"));
// console.log(text2.replaceAll("Hoşgeldin", "Güle Güle"));

// console.log(text2.replace(/hoşgeldin/i, "güle güle"));

//  Not => büyük küçük harf duyarlılığının önüne geçmek için tırnak işaretlerini kaldırıp, metni Kesme işareti ile sararak sonuna bir küçük i koyalım.

// let chatEntry = "küfür";

// chatEntry.replaceAll("küfür", "*******");

// toUpperCase =>
// let text = "Hello S Ş Ö Ü";
// console.log(text.toUpperCase());

//toLowerCase =>

// let text = "      Hello     ";
// console.log(text.trim());
// console.log(text.trimStart());
// console.log(text.trimEnd());
// let trimmedEnd = text.trim();
// console.log(trimmedEnd.length);

//padding =>

//padStart(length, "değer")
//padEnd(length, "değer")

// let text = "hi.";

// console.log(text.padStart(1, "1234"));
// metin 12 karakter uzunluğuna gelene kadar 0 harfini eklemeye devam et.

// let text = "Hello World!";
// let aradigimHarf = "H";

// console.log(text[0]);
// console.log(text.charAt(0));

// console.log(text.charAt(0).replace("H", "O"));
// console.log(text.replace("H", "O"));
// console.log(text.replace(aradigimHarf,'L'))


//STRINGLERDE ARAMA METHODLARI =>
//indexOF() =>

// let text = "bla bla bla aaa";

// console.log(text.indexOf("aaa"));

// let text2 = "aaa bla bla bla aaa";
// console.log(text2.indexOf("aaaa"));
// console.log(text2.lastIndexOf("aaa"));
// if (text2.indexOf("aaaa") == -1) {}

//includes() =>

// console.log(text2.includes("bla"));
// console.log(text2.includes("blaa"));
// if(text.includes('aaaa'))

let text = "Hello";

//startsWith('aranacak değer', aramaya başlanacak index numarası)

// text.startsWith("H"); //true
// text.startsWith("He"); //true
// text.startsWith("Hel"); //true
// console.log(text.startsWith("l", -1)); //false
// text.startsWith("llo", 2); //true

//NUMBER METHODLARI VE ÖZELLİKLERİ =>

// BigInt veri tipine sahip.
//numberlar 15 karakterden fazlasında doğruluklarını kaybederler. 2^53 sayısının

// let ikiElliUc = 9007199254740991;
// let ikiElliUc2 = 9007199254740999n; //kullan
// // let ikiElliUc2 = BigInt(9007199254740999); // kullanma
// let sonuc = ikiElliUc2 / ikiElliUc2;

// let x = Number.MAX_SAFE_INTEGER;
// let y = Number.MIN_SAFE_INTEGER;
// console.log(x);
// console.log(y);

// console.log(sonuc);
// console.log(ikiElliUc);
// console.log(ikiElliUc2);

// let ikiElliUc = 9007199254740992;

// let dogrula = Number.isSafeInteger(ikiElliUc);
// console.log(dogrula);

// Number

// let x = 0.2 * 10;
// let y = 0.1 * 10;

// let sonuc = (x + y) / 10;

// console.log(sonuc);

// Uç Uca Ekleme ve Toplama

// let x = 10;
// let y = 20;
// let sonuc = "Sonuc = " + (x + y);
// console.log(sonuc);

// let x = 10;
// let y = 20;
// let z = "30";

// let sonuc = z + y + x;
// console.log(sonuc);

// ARRAY =>

// const array1 = ["elma", "limon", "ayva", "armut", -1, true];

// console.log(array1);
// console.log(typeof array1);
// let elemanlar = array1.toString();
// console.log(elemanlar);

// const array2 = [80, 70, 50];
// let array2uzunluk = array2.length;

// let sonuc = array2[0] + array2[1] + array2[2];
// let ortalama = sonuc / array2uzunluk;
// console.log(ortalama);

// let x = ["brokoli", "patlıcan", "ıspanak", "domates"];

// console.log(x[x.length - 1]);

// 0 1 2 3 4 5
// 1 2 3 4 5 6

let cars = ["bmw", "audi", "mercedes"];

let car15 = "toyota";

console.log(cars);
cars.push("toyota");
console.log(cars);
cars.push(car15);
console.log(cars);




// const array1 = ["muz", "kivi", "elma"];
// const array3 = ["100", "25", "6"];
// console.log(array1.sort());

// const array2 = array1.sort();
// console.log(array2);

// //sort => alfabetik sıralama yapar.

// console.log(array2.reverse());

// date objesi

// let date = new Date();
// console.log(date);

// new Date(3, 5, 2021);
// 1 Ocak 1970 00:00:00:00 tarihinden itibaren milisaniye olarak hesaplanır.

// new Date(yıl, ay, gün, saat, dakika, saniye, milisaniye)
// console.log(new Date(2018, 11, 14, 10, 33, 30, 0));
// console.log(new Date(2018, 11, 14, 10, 33, 30));
// console.log(new Date(2018, 11, 14, 10, 33));
// console.log(new Date(2018, 11, 14, 10)); yıl ay gün saat
// console.log(new Date(2018, 11, 14)); yıl ay gün
// console.log(new Date(2018, 11)); yıl ve ay

// console.log(new Date(2018)); // milisaniye değeri yazılır.

// 86 400 000

//MATH
// Math.methodismi()

//round =>

// let sayi = 1.5;
// console.log(sayi);
// console.log(Math.round(sayi));
// .4 ve öncesinde bir gerideki tam sayıya, .5 ve sonrasında bir sonraki tam sayıya yuvarlama işlemi yapılır.

//ceil =>
let sayi2 = 1.1;
// console.log(Math.ceil(sayi2));
// ondalıklı sayıları bir üst tam sayıya yuvarlar.

//floor =>
// sayi2 = 1.9;
// console.log(sayi2);
// console.log(Math.floor(sayi2));

// ondalıklı sayıları bir alt tam sayıya yuvarlar.

// sqrt (square root) =>
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(12));

//abs => (absolute)

// console.log(Math.abs(-5));
// console.log(Math.abs(5));

// min / max

// console.log(Math.max(200, 200, 500, 1892, -1));
// console.log(Math.min(100, 200, 500, 1892, -1));

// console.log(Math.max("200", 200, "500", "1892", "-1"));

// console.log(Math.ceil(Math.random() * 5));
// console.log(Math.ceil(Math.random() * 5));
// console.log(Math.ceil(Math.random() * 5));
// console.log(Math.ceil(Math.random() * 5));
// console.log(Math.ceil(Math.random() * 5));
// console.log(Math.ceil(Math.random() * 5));
// console.log(Math.ceil(Math.random() * 5));

// Math.round(Math.random() * 9);

// 1 - 9
// console.log(Math.ceil(Math.random() * 9));

// 1 - 51
// console.log(Math.ceil(Math.random() * 51));

// 0 - 99
// console.log(Math.round(Math.random() * 99));
// console.log(Math.floor(Math.random() * 100));

//Belirli bir aralıktan değer seçmek =>
// let minDeger = 11;
// let maxDeger = 16;
// let randomDeger = Math.random() * (maxDeger - minDeger) + minDeger;
// console.log(Math.round(randomDeger));

// Math.round(Math.random() * 5);
// 0 ile 5 arasında
// 0 + 11 ile 5 + 11
// 11 ile 16 arasında

// 1 - 6 //zar atma
// Math.round(Math.random() * 5 + 1);
// 0 1 2 3 4 5

// yazı tura
// let yaziTura = Math.round(Math.random());

// if (yaziTura == 0) {
//   console.log("Yazı geldi.");
// } else if (yaziTura == 1) {
//   console.log("Tura Geldi.");
// } else {
//   console.log("Bir Hata Oluştu.");
// }

// array'den random seçim

// const array = ["taş", "kağıt", "makas"];
// let randomDeger = Math.ceil(Math.random() * 3 - 1);
// console.log(array[randomDeger]);

// for (döngü değişkeni tanımlaması ;döngü değişkenine sınır belirtme;döngü değişkenini artırma yada azaltma işlemi) {
//     // sınırını belirttiğim kadar kodlar çalışacak.
// }
// let text = [];
// for (let i = 0; i <= 500; i++) {
//   text.push(i);
// }
// console.log(i);
// console.log(text);
// console.log(Number.MAX_SAFE_INTEGER);
// for (let i = 18; i >= 0; i--) {
//   console.log(i);
// }
// console.log(i);

// const array = [5, 9, 12, 16, 20];

// console.log(array);
// let sayi = +prompt("Lütfen bir sayı giriniz");

// console.log(`${sayi} sayısını seçtiniz.`);

// for (let i = sayi; i <= 50; i += 5) {
//   console.log(i);
// }
// console.log(sayi);
// i j x y
// console.log(array);

//WHILE

// for (let i = 0; i < 15; i++) {}

// let i = 16;
// while (i < 15) {
//   //kodlar buraya
//   console.log(i);
//   i++;
// }
// // console.log(i);

// do {
//   console.log(i);
//   i++;
// } while (i < 15);

// let i = 0;
// while (i < 14) {
//   console.log(i);

//   i++;
// }

// 1'den 1000'e kadar 3 ün katlarını bir array'e, çift sayıları başka bir array'e, 5'in katlarını da başka bir array'e atalım.
// const ikininKati = [],
//   ucunKati = [],
//   besinKati = [];

// let date = new Date();
// let baslangicSaat = date.getMilliseconds();

// for (let i = 0; i < 1001; i++) {
//   if (i % 2 == 0) {
//     ikininKati.push(i);
//   }
//   if (i % 3 == 0) {
//     ucunKati.push(i);
//   }
//   if (i % 5 == 0) {
//     besinKati.push(i);
//   }
// }
// date = new Date();
// sonucSaat = date.getMilliseconds();

// console.log(ikininKati);
// console.log(ucunKati);
// console.log(besinKati);
// console.log(baslangicSaat);
// console.log(sonucSaat);

//dizideki en küçük ve en büyük elemanı bulup ekrana yazdırma.

// const sayilar = [-5, 9, 12, 3, 6, -2, 22];
// //                0  1  2   3   4   5  6
// //                1  2   3   4  5   6  7
// let buyukSayi = 0,
//   kucukSayi = 0;

// for (let i = 0; i < sayilar.length; i++) {
//   if (kucukSayi > sayilar[i]) {
//     kucukSayi = sayilar[i];
//   }
//   if (buyukSayi < sayilar[i]) {
//     buyukSayi = sayilar[i];
//   }
// }
// console.log(buyukSayi);
// console.log(kucukSayi);

// array içindeki 10 sayının tek veya çift olanlarını farklı array'ler içine alalım. tek ve çiftlerin de toplamını bulalım.

// const sayilar2 = [5, 9, 12, 3, 6, -5, 22, 18, 0, 41],
//   tekSayilar = [],
//   ciftSayilar = [];

// let tekToplam = 0,
//   ciftToplam = 0;

// for (let i = 0; i < sayilar2.length; i++) {
//   if (sayilar2[i] % 2 == 0) {
//     ciftSayilar.push(sayilar2[i]);
//     ciftToplam += sayilar2[i];
//   } else {
//     tekSayilar.push(sayilar2[i]);
//     tekToplam += sayilar2[i];
//   }
// }

// console.log(ciftSayilar, ciftToplam);
// console.log(tekSayilar, tekToplam);

// Faktoriyel

// let sayi = 5;
// let sonuc = 1;

// for (let i = sayi; i > 1; i--) {
//   sonuc *= i;
//   // 1 * 5
//   // 5 * 4
//   // 20 * 3
//   // 60 * 2
// }


// Fonksiyonlar =>

function fonksiyonIsmi() {
    //kodlar buraya gelecek.
    console.log("merhaba");
  }
  
  // function selamla() {
  //   console.log("Hello World!");
  // }
  
  // selamla();
  
  // let isim1 = "Yağız",
  //   isim2 = "Ahmet",
  //   isim3 = "Ayşe";
  
  // console.log(`Merhaba, ${isim1}`);
  // console.log(`Merhaba, ${isim2}`);
  // console.log(`Merhaba, ${isim3}`);
  
  // function selamla(isim1) {
  //   console.log(`Merhaba ${isim1}`);
  // }
  
  // selamla(isim1);
  // selamla(isim2);
  // selamla(isim3);
  
  // function islem() {
  //   let sayi1 = +prompt("Lütfen ilk sayıyı girin:");
  //   let sayi2 = +prompt("Lütfen ikinci sayıyı girin:");
  //   let islem = prompt("Yapılacak İşlem Nedir ?");
  //   if (islem == "+") {
  //     return sayi1 + sayi2;
  //   } else if (islem == "-") {
  //     return sayi1 - sayi2;
  //   } else if (islem == "/") {
  //     return sayi1 / sayi2;
  //   } else if (islem == "*") {
  //     return sayi1 * sayi2;
  //   } else {
  //     console.log("Bir Hata Oluştu.");
  //   }
  // }
  // console.log(typeof islem());
  
  // console.log(sonuc);
  
  // Kullanıcıdan iki not değeri alalım. bu sayıları argüman olarak kullanarak, iki notun ortalamasını alarak 50'nin üstünde geçti, 50'nin altında kaldı diyelim.
  // let sayi1 = +prompt("Vize Notu: ");
  // let sayi2 = +prompt("Final Notu: ");
  // function notHesapla(not1, not2) {
  //   let sonuc = (not1 + not2) / 2;
  //   if (sayi1 >= 0 && sayi2 >= 0) {
  //     if (sonuc > 49) {
  //       return "Geçti.";
  //     } else if (sonuc > 0 && sonuc < 50) {
  //       return "Kaldı.";
  //     } else {
  //       return "Bir Hata Oluştu";
  //     }
  //   } else {
  //     return "Eksi değer girdiniz";
  //   }
  // }
  // console.log(notHesapla(sayi1, sayi2));
  
  //Kullanıcıdan alınan sayının pozitif mi negatif mi olduğunu bulalım, ardından tek veya çift olması durumunu da inceleyerek sonuçta örneğin "negatif, tek" veya "pozitif, çift" gibi bilgiler verelim.
  
  // function sorgula(x) {
  //   if (x > 0) {
  //     if (x % 2 == 0) {
  //       return "Çift ve pozitif.";
  //     } else {
  //       return "Tek ve pozitif.";
  //     }
  //   } else if (x == 0) {
  //     return "Değer Nötr'dür.";
  //   } else {
  //     if (x % 2 == 0) {
  //       return "Çift ve negatif.";
  //     } else {
  //       return "tek ve negatif.";
  //     }
  //   }
  // }
  // let degisken = -4;
  
  // console.log(sorgula(degisken));
  
  // Vücut kitle endeksi hesaplama.
  // (formül: vücut kitle endeksi = vücut ağırlığı / (boy * boy)
  
  // let agirlik = 55;
  // let boy = 165;
  // function vkiHesapla(x, y) {
  //   return (x / (y * y)) * (100 * 100);
  // }
  // console.log(vkiHesapla(agirlik, boy));
  
  //5 elemanlı kaynak bir array'den yeni bir array oluşturup elemanlarını ters şekilde ekleyelim. ()
  
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // // const array2 = array.reverse();
  // function terseCevir(arr1) {
  //   const array2 = [];
  //   for (let i = arr1.length - 1; i >= 0; i--) {
  //     array2.push(arr1[i]);
  //   }
  //   return array2;
  // }
  
  // console.log(terseCevir(array));
  
  let degisken = "deger";
  let degisken2 = "deger2";
  let degisken3 = "deger3";
  
  const array1 = ["deger", "deger2", "deger3"];
  
  array1[0];
  
  const obj1 = { degisken: "deger", degisken2: "deger2", degisken3: "deger3" };
  
  console.log(obj1.degisken[0]);
  
  const isim = { firstName: "Ali", lastName: "Atay", age: 50, isMarried: true };
  
  const isim2 = ["Ali", "Atay", 50, true];
  