Tinytest.add('Construct', function (test) {
  test.isFalse(rubles());
  test.isFalse(rubles(void 0));
  test.isFalse(rubles(false));
  test.isFalse(rubles(0));
  test.isFalse(rubles("0"));
  test.isFalse(rubles("0.00"));
  test.isFalse(rubles("0,00"));
  test.isFalse(rubles("test"));
  test.isFalse(rubles([]));
  test.isFalse(rubles([10]));
  test.isFalse(rubles({}));
  test.isFalse(rubles({test: 10}));
});

Tinytest.add('Decimals', function (test) {
  test.equal(rubles(1.00), 'один рубль 00 копеек');
  test.equal(rubles(1.01), 'один рубль 01 копейка');
  test.equal(rubles(2.02), 'два рубля 02 копейки');
  test.equal(rubles(3.05), 'три рубля 05 копеек');
  test.equal(rubles(4.12), 'четыре рубля 12 копеек');
  test.equal(rubles(5.51), 'пять рублей 51 копейка');
  test.equal(rubles(9.99), 'девять рублей 99 копеек');
  //strange results
  test.equal(rubles("0.000001"), ' рублей 00 копеек');
  test.equal(rubles("0,01"), ' рублей 01 копейка');
  test.equal(rubles("0,99"), ' рублей 99 копеек');
});

Tinytest.add('Bad decimals', function (test) {
  test.equal(rubles(1.156), 'один рубль 16 копеек');
  test.equal(rubles("2,189"), 'два рубля 19 копеек');
  test.equal(rubles(3.185), 'три рубля 19 копеек');
  test.equal(rubles(4.0185), 'четыре рубля 02 копейки');
  test.equal(rubles(5.134), 'пять рублей 13 копеек');
});

Tinytest.add('Numbers', function (test) {
  test.equal(rubles(12), 'двенадцать рублей 00 копеек');
  test.equal(rubles(52), 'пятьдесят два рубля 00 копеек');
  test.equal(rubles(100), 'сто рублей 00 копеек');
  test.equal(rubles(112), 'сто двенадцать рублей 00 копеек');
  test.equal(rubles(152), 'сто пятьдесят два рубля 00 копеек');
  test.equal(rubles(512), 'пятьсот двенадцать рублей 00 копеек');
  test.equal(rubles(552), 'пятьсот пятьдесят два рубля 00 копеек');
  test.equal(rubles(999), 'девятьсот девяносто девять рублей 00 копеек');
});

Tinytest.add('Thousands', function (test) {
  test.equal(rubles(1000), 'одна тысяча рублей 00 копеек');
  test.equal(rubles(2000), 'две тысячи рублей 00 копеек');
  test.equal(rubles(5000), 'пять тысяч рублей 00 копеек');
  test.equal(rubles(1052), 'одна тысяча пятьдесят два рубля 00 копеек');
  test.equal(rubles(52151), 'пятьдесят две тысячи сто пятьдесят один рубль 00 копеек');
  test.equal(rubles(341000), 'триста сорок одна тысяча рублей 00 копеек');
  test.equal(rubles(123456), 'сто двадцать три тысячи четыреста пятьдесят шесть рублей 00 копеек');
  test.equal(rubles(999001), 'девятьсот девяносто девять тысяч один рубль 00 копеек');
});

Tinytest.add('Millions', function (test) {
  test.equal(rubles(1000000), 'один миллион рублей 00 копеек');
  test.equal(rubles(2000000), 'два миллиона рублей 00 копеек');
  test.equal(rubles(5000000), 'пять миллионов рублей 00 копеек');
  test.equal(rubles(1000001), 'один миллион один рубль 00 копеек');
  test.equal(rubles(1001000), 'один миллион одна тысяча рублей 00 копеек');
  test.equal(rubles(1001001), 'один миллион одна тысяча один рубль 00 копеек');
  test.equal(rubles(12000000), 'двенадцать миллионов рублей 00 копеек');
  test.equal(rubles(52000000), 'пятьдесят два миллиона рублей 00 копеек');
  test.equal(rubles(52000122), 'пятьдесят два миллиона сто двадцать два рубля 00 копеек');
  test.equal(rubles(123456789), 'сто двадцать три миллиона четыреста пятьдесят шесть тысяч семьсот восемьдесят девять рублей 00 копеек');
});

Tinytest.add('Billions', function (test) {
  test.equal(rubles(1000000000), 'один миллиард рублей 00 копеек');
  test.equal(rubles(2000000000), 'два миллиарда рублей 00 копеек');
  test.equal(rubles(5000000000), 'пять миллиардов рублей 00 копеек');
  test.equal(rubles(1000000001), 'один миллиард один рубль 00 копеек');
  test.equal(rubles(1000000100), 'один миллиард сто рублей 00 копеек');
  test.equal(rubles(1000001000), 'один миллиард одна тысяча рублей 00 копеек');
  test.equal(rubles(1001000000), 'один миллиард один миллион рублей 00 копеек');
  test.equal(rubles(1000001001), 'один миллиард одна тысяча один рубль 00 копеек');
  test.equal(rubles(1001001001), 'один миллиард один миллион одна тысяча один рубль 00 копеек');
  test.equal(rubles(999999999999), 'девятьсот девяносто девять миллиардов девятьсот девяносто девять миллионов девятьсот девяносто девять тысяч девятьсот девяносто девять рублей 00 копеек');
});

Tinytest.add('Negative', function (test) {
  test.isFalse(rubles(-100));
  test.isFalse(rubles(-0.01));
  test.isFalse(rubles("-100"));
  test.isFalse(rubles("-0.01"));
  test.isFalse(rubles("-0,0001"));
});
