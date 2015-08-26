#ZADANIE 1-01

## Treść

System masowej obsługi realizuje średnio w siągu sekundy 800 transakcji, wymagających wykonania średnio 5000 operacji. 
Każda przybuwająca transakcja otrzymuje do swej dyspozycji procesor o średniej wydajności 4 000 000 operacji na sekundę.
Oblicz średnią licznę transakcji w systemie.

## Rozwiązanie

> Prawo Little'a
> Średnia populacja = średnia cyrkulacja * średni czas życia



### sposób 1

średnia cyrkulacja = $$ 800 \frac{tranakcji}{s} $$

średni czas życia = $$ \frac{5000 operacji}{4 000 000 \frac{operacji}{s}} = \frac{1}{800} s $$

średnia populacja = $$ 800\frac{transakcji}{s} * \frac{1}{800}s = 1 transakcja $$

### sposób 2

$$ N_{sr} = \frac{(1 - L)}{a_{sr}} * d_{sr}, gdzie= d_{sr}=\frac{b_{sr}}{v} $$

> N = liczba zgłoszeń w systemie

> d opóżnienie systemowe

> interwał

> frakcja utraconych transakcji w skutek przepełnienia bufora

> wymagane zgłoszenia [jednostek operacji]

> wydajność procesora

######przyjmujemy że bufor jest nieskończony czyli $$ L = 0 $$ z treści zadania nie wynika innaczej
 
$$ d_{sr} = \frac{5000 operacji}{4 000 000 \frac{operacji}{s}} = \frac{1}{800}s $$

$$ a_{sr} = \frac{1 s}{8000 operacji} $$

$$ N_{sr} = \frac{1 - 0}{ \frac{1}{800}} * \frac{1}{800} = 1 $$

----------
**Odpowiedź:** Srednia liczba transakcji w systemie wynosi 1.


 



