# Türkçe atasözleri için APİ
## Kullanım
#### APİ URL : https://turkce-atasozleri-api.herokuapp.com/
#### İstek tipi : `POST`
### Parametreler 
| İsim     | Tanım | Alabileceği değerler | Varsaılan değer |
|----------|-------|:--------------------:| --- |
| `splitted` | Dönen cevabın alfabetik olarak <br> bölünüp bölünmeyeceğini tanımlar | `true`,`false` | `true` |
| `letter` | Sadece belirtilen harfle başlayan <br> atasözlerini getirir | `a`-dan  `z`-ye kadar tüm harfler.Liste vermeniz gerekmektedir.Listeye birden fazla harfde vere bilirsiniz | Hiçbir değer vermediğiniz takdirde tüm harfler gelicek |
| `limit` | Dönen listenin uzunluğunu tanımlar.Bu parametrenin çalışması için `splitted` parametresinin `false` olması gerekir. | sayı | Değer vermediğiniz takdirde hicbir kisitlama olmayacaktir. |



<!-- | `random` | Dönen atasözlerinin rastgele olup olmayacağını tanımlar.Eger `letter` parametresi verdiyseniz sadece sectiginiz harfden rastgele atasozleri gelicek | `true`,`false` | `false` | -->
<!-- ### NOT : `splitted` === `false` oldugu durumlarda `letter` parametresini vermemelisiniz. -->

## Örnekler
### NOT : Kolaylık olması açısından örneklerde `axios` kütüphanesini kullandım.`axios`-u `npm i --save axios` komutuyla indire bilirsiniz.


```js
 axios.post("https://turkce-atasozleri-api.herokuapp.com/",{limit:15}) // limit parametresi calismaz
    .then(result => {
        console.log(result.data);
        res.send(result.data)
    })

// Çıktı:
// Tum atasozlerini bolumus sekilde getirir
```


```js
axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],splitted:false}) 
    .then(result => {
        console.log(result.data);
        res.send(result.data)
    })

// Çıktı:
// a,b ve e harfleri ile baslayan tum atasozlerini getirir
```


```js
axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a"],limit:13})
    .then(result => {
        console.log(result.data);
        res.send(result.data)
    })
// a harfi ile baslayan 13 atsozu getirir
```




```js
axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],limit:200})
    .then(result => {
        console.log(result.data);
        res.send(result.data)
    })

// Çıktı: a,b ve e harfleri ile baslayan 200 atasozu getirir.(a ve b harflerinde atasozu cok oldugu icin bu kod e harfini getirmez(limiti kaldirin ve ya artirin))
```




```js
axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],splitted:false}) // Yanlis parametre fakat calisir
    .then(result => {
        console.log(result.data);
        res.send(result.data)
    })

// Çıktı: a,b ve e harfleri ile baslayan tum atasozlerini getirir(Yanlis parametre fakat calisir) 
```





```js
axios.post("https://turkce-atasozleri-api.herokuapp.com/",{letter:["a","b","e"],splitted:false})
    .then(result => {
        console.log(result.data);
        res.send(result.data)
    })

// Çıktı: a,b ve e harfleri ile baslayan tum atasozlerini getirir(Dogru parametre) 
```


## Özerllikler
* Tahminen 1400 atasözü
* Günün her saati aktif
* Dokümantasyon
* Örnekler
* Özerlleştirilebilir
* Açık kaynak
* İlk ve tek








