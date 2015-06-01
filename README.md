##Write in russian words the amount in rubles|Сумма прописью

This wrapper uses rubles NPM module from http://meritt.github.io/rubles/.

##Сумма прописью
Эта обертка использует NPM модуль rubles из http://meritt.github.io/rubles/.

В российском документообороте принято писать сумму прописью. Такое должно быть в договорах, актах, расписках и других подобных документах. Rubles.js призван решить эту проблему комплексно, он работает в браузере и на серверной стороне.

###Установка
```bash
$ meteor add ag2s:rubles
```
###Использование
```meteor
var text = rubles(12.10);
console.log(text); // двенадцать рублей 10 копеек

var text = rubles("52151,31");
console.log(text); // пятьдесят две тысячи сто пятьдесят один рубль 31 копейка 
```
###Тестирование
```bash
$ meteor test-packages ag2s:rubles
```
