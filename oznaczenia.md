 

###Oznaczenia

$$ a_{sr} $$ śreni interwał przybycia zgłoszenia ( zawsze dane ? )

$$ b_{sr} $$ śreni rozmiar zgłoszenia

$$ v \ [wymiar zgloszenia/s]$$ prędkość procesora
 
$$ \tau_{sr} $$ średni czas obsługi zgłoszenia

$$ w_{sr} $$ średni opóźnienie buforowania

$$ d_{sr} $$ średni czas przebywania w systemie

$$ r \ [bezwymiarowe] $$ współczynnik obciążenie procesora | niestabilność przy $$ r \ge 1 $$  

$$ \rho \ [bezwymiarowe] $$ normatywny współczynnik obciążenia - w systemach wielo procesorowych

$$ L $$ frakcja zgłoszeń utraconych wskutek przepełnienia pamięci buforowej

$$ p_k \ [bezwymiarowe] $$ frakcja czasu w której w systemie jest k zgłoszeń

$$ 1 - p_0 \ [bezwymiarowe] $$ współczynnik zajętości ( wykorzystania ) procesora

$$ N_{sr} [bezwymiarowe] $$ średnia ilość zadań w systemie

### Wzory

$$ \tau_{sr} = \frac{b_{sr}}{v} $$

$$ r = \frac{b_{sr}}{a_{sr} * v} $$

$$ r = \frac{\tau_{sr}}{v} $$

Prawo Little'a:

$$  N_{sr} = \frac{1-L}{a_{sr}} * d_{sr} $$

w ujęciu procesora: $$ 1 - p_0 = \frac{(1-L)}{a_{sr}} * \tau_{sr} = (1-L) * r $$

w ujęciu pamięci buforowej: $$  N_{sr} - (1 - p_0 )= \frac{1 - L}{a_{sr}} * w_{sr} $$

### Notacja KENDALLA

#### A / B / S / Q / J

OZNACZENIA:
* A - rozkład interwałów zgłoszeń
* B - rozkład wielkości wymagań zgłoszeń. 
* S - liczba procesorów
* Q - pojemność pamięci buforowej ( jeśli nie podany to zakładamy $$ \infty $$ )
* J - rozmiar populacji źródeł zgłoszeń ( opcjonalny parametr )

Typy rozkładów:
* M - wykładniczy
* D - Deterministyczny
* G - Ogólny

*Systemy Typu: M/?/?/?*

* możemy rozdzielać stumień zgłoszeń w sposób losowy na inne rzadsze: 
* możemy agregować stumień zgłoszeń: 

*Systemy Typu: M/M/?/?* - Markowowskie:

*Systemy Typu: M/M/1/?*
 
$$ N_{sr} = \frac{r}{1-r} $$ - co w przypadku gdy r = 1 ? 

$$ p_{k} = p_0 * r^k $$ 

$$ p_0 + p_1 + p_2 + p_3 + ... = 1 $$  

$$ p_0 = 1 - (p_1 + p_2 + p_3 + ...) \Rightarrow p_0 = 1 - r $$

*Systemy Typu: M/M/1/Q*

$$ p_0 = \frac{1-r}{1-r^{Q+1}} $$

$$ L = \frac{1-r}{1-r^{Q+1}} * r^Q $$, gdy $$ r ne 1 $$

$$ L = \frac{1}{Q + 1} $$, gdy $$ r = 1 $$

*Systemy Typu: M/M/S*

$$ r = \frac{b_{sr}}{a_{sr} * v * S} $$  - współczynnik obciążenia

$$ \rho = \frac{b_{sr}}{a_{sr} * v} $$  - normatywny współczynnik obciążenia [erlangi]

Systemy Typu: M/M/$$ \infty $$

$$ N_{sr} = \rho $$