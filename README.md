[Git]: https://git-scm.com/
[Microsoft Visual Studio Code]: https://code.visualstudio.com/
[Angular 2/4]: https://angular.io/
[Node JS]: https://nodejs.org/
[Express]: https://expressjs.com/

[ER]: ./resources/img/Entity_Relationship_diagram.png "Egyed-kapcsolat diagram"

# JavaScript Technológiák - Cinema World

A projekt egy mozi frontend és backend rendszerének megvalósításáról szól, mely full-stack JavaScriptben van megírva.

## Célközönség:
Bármely személy, akinek a moziba járás nem csak a filmnézésről szól, hanem az élményekről, a kényelemről és a prémium minőségű finomságokról.

## Szerepkörök:
+ **Vendég**
+ **Felhasználó**
+ **Adminisztrátor**

## Funkcionális követelmények:
+ **Vendégként** szeretnék a filmek között szabadon böngészni.
+ **Vendégként** szeretném egy film adatait, leírását, előzeteseit megtekinteni.
+ **Vendégként** szeretnék filmeket keresni.
+ **Vendégként** szeretnék regisztrálni az oldalra.
+ **Felhasználóként** szeretnék bejelentkezni az oldalra.
+ **Felhasználóként** szeretném szerkeszteni a profiladataimat.
+ **Felhasználóként** szeretném a saját foglalásaim, illetve vásárlásaim megtekinteni.
+ **Felhasználóként** szeretném értékelni a filmeket.
+ **Adminisztrátorként** szeretnék új filmeket hozzáadni a műsorlistához, illetve törölni is róla.

## Nem funkcionális követelmények:
+ Használhatóság
+ Teljesítmény
+ Hatékonyság
+ Rendelkezésre állás
+ Biztonság
+ Karbantarthatóság
+ Platformfüggetlenség
+ Felhasználóbarát design

## Használt technológiák, fejlesztői környezetek, programozási nyelvek:
+ **[Git]** - Verziókezelő rendszer
+ **[Microsoft Visual Studio Code]** - Forráskód szerkesztő
+ **[Node JS]** - Szerver oldali JavaScript
+ **[Express]** - Node JS webalkalmazási keretrendszer
+ **[Angular 2/4]** - Programozási nyelv (HTML, CSS, SCSS, Typescript) (kliensoldal)

```
TODO: 
    1. admin jogok
    2. büfé
    3. nyereményjáték
    4. díjak
    5. foglaláshoz vissza gomb/booking
```

## Adatbázis séma:

<table align="center" width="100%">
    <th colspan="3" width="100%">CINEMA</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">mozi azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">COUNTRY</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">ország neve</td>
    </tr>
        <td align="center" width="33%">CITY</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">város neve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">DISTRICT</td>
        <td align="center" width="33%">VARCHAR2(8)</td>
        <td align="justify" width="33%">kerület neve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">STREET</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">utca neve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">HOUSE_NUMBER</td>
        <td align="center" width="33%">TINYINT</td>
        <td align="justify" width="33%">házszám</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">NAME</td>
        <td align="center" width="33%">VARCHAR2(20)</td>
        <td align="justify" width="33%">mozi neve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">AMENITIES_CHARGE</td>
        <td align="center" width="33%">SMALLINT</td>
        <td align="justify" width="33%">kényelmi díj értéke</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">BOOKING</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">foglalás azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">SCREENING_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">vetítés azonosítója (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">CATEGORY</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CATEGORY</td>
        <td align="center" width="33%">VARCHAR2(20)</td>
        <td align="justify" width="33%">kategória neve (PK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">FILM_CATEGORY</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">film kategória azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">FILM_TITLE</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">film neve (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CATEGORY</td>
        <td align="center" width="33%">VARCHAR2(20)</td>
        <td align="justify" width="33%">kategória neve (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">FILM</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">TITLE</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">film címe (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PICTURE</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">film borítójának url címe</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">LANGUAGE</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">nyelvezet</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PLAY_TIME</td>
        <td align="center" width="33%">SMALLINT</td>
        <td align="justify" width="33%">játékidő</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PREMIERE</td>
        <td align="center" width="33%">DATE</td>
        <td align="justify" width="33%">premier dátuma</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">AGE_LIMIT</td>
        <td align="center" width="33%">TINYINT</td>
        <td align="justify" width="33%">korhatár</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">DIRECTOR_FIRST_NAME</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">rendező keresztneve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">DIRECTOR_LAST_NAME</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">rendező vezetékneve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">COUNTRY</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">ország</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">YEAR</td>
        <td align="center" width="33%">SMALLINT</td>
        <td align="justify" width="33%">gyártási év</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">RATE</td>
        <td align="center" width="33%">DECIMAL</td>
        <td align="justify" width="33%">értékelés</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">DESCRIPTION</td>
        <td align="center" width="33%">VARCHAR2(500)</td>
        <td align="justify" width="33%">leírás</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">TRAILER</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">URL</td>
        <td align="center" width="33%">VARCHAR2(200)</td>
        <td align="justify" width="33%">film előzetes url címe (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">FILM_TITLE</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">film címe (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">ROOM</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">terem azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">NAME</td>
        <td align="center" width="33%">VARCHAR2(20)</td>
        <td align="justify" width="33%">terem neve</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">VIP</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">vip szoba-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">BED_ROOM</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">ágyas szoba-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">IMAX</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">ismeri-e az IMAX technológiát</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">THREE_DIMENSIONAL</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">ismeri-e a három dimenziós technológiát</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">FOUR_DIMENSIONAL</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">ismeri-e a négy dimenziós technológiát</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ROW</td>
        <td align="center" width="33%">TINYINT</td>
        <td align="justify" width="33%">sorok száma a teremben</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">SEAT_NUMBER</td>
        <td align="center" width="33%">TINYINT</td>
        <td align="justify" width="33%">székek száma egy sorban</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CINEMA_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">mozi neve, melyben megtalálható a terem (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">SCREENING</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">vetítés azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">TWO_DIMENSIONAL</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">két dimenziós vetítés-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">THREE_DIMENSIONAL</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">három dimenziós vetítés-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">FOUR_DIMENSIONAL</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">négy dimenziós vetítés-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">IMAX</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">IMAX vetítés-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">LANGUAGE</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">nyelvezet</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">INSCRIPTIVE</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">szinkronos vetítés-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">SYNCHRON</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">feliratos vetítés-e</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">SCREEN_DAY</td>
        <td align="center" width="33%">DATE</td>
        <td align="justify" width="33%">vetítési dátum</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">SCREEN_TIME</td>
        <td align="center" width="33%">TIME</td>
        <td align="justify" width="33%">vetítési időpont</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CINEMA_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">mozi neve, melyben aktuális a vetítés (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ROOM_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">terem azonosító, melyben aktuális a vetítés (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">FILM_TITLE</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">film cím, melyet vetítenek (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
   <th colspan="3" width="100%">SCREENING_TICKET</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">vetítési jegytípus azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">SCREENING_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">vetítés azonosítója (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">TICKET</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">jegytípus azonosítója (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">TICKET</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">TYPE</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">jegy típusa (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PRICE</td>
        <td align="center" width="33%">SMALLINT</td>
        <td align="justify" width="33%">ár</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">BOOKING_TICKET</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">foglalási jegy azonosítója (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PAYMENT</td>
        <td align="center" width="33%">VARCHAR2(20)</td>
        <td align="justify" width="33%">fizetési mód</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ROW</td>
        <td align="center" width="33%">TINYINT</td>
        <td align="justify" width="33%">sor</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CHAIR</td>
        <td align="center" width="33%">TINYINT</td>
        <td align="justify" width="33%">szék</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">BOOKING_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">foglalás azonosítója (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">TICKET_TYPE</td>
        <td align="center" width="33%">VARCHAR2(30)</td>
        <td align="justify" width="33%">jegy típusa (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">USERNAME</td>
        <td align="center" width="33%">VARCHAR2(15)</td>
        <td align="justify" width="33%">jegyet foglaló felhasználó neve (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">USER</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">USERNAME</td>
        <td align="center" width="33%">VARCHAR2(15)</td>
        <td align="justify" width="33%">felhasználónév (PK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PASSWORD</td>
        <td align="center" width="33%">VARCHAR2(25)</td>
        <td align="justify" width="33%">jelszó</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">EMAIL</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">email cím</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">PHONE_NUMBER</td>
        <td align="center" width="33%">VARCHAR2(14)</td>
        <td align="justify" width="33%">telefonszám</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">ADMIN_RIGHT</td>
        <td align="center" width="33%">BOOLEAN</td>
        <td align="justify" width="33%">adminisztrátori jogosultság</td>
    </tr>
</table>

### Implicit kapcsoló-táblák:

<table align="center" width="100%">
    <th colspan="3" width="100%">USER_BOOKING</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">USERNAME</td>
        <td align="center" width="33%">VARCHAR2(15)</td>
        <td align="justify" width="33%">felhasználónév (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">BOOKING_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">foglalás azonosítója (FK)</td>
    </tr>
</table>

<table align="center" width="100%">
    <th colspan="3" width="100%">CINEMA_FILM</th>
    <tr align="center" width="100%">
        <th width="33%">ATTRIBÚTUM</th>
        <th width="33%">TÍPUS</th>
        <th width="33%">LEÍRÁS</th>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">CINEMA_ID</td>
        <td align="center" width="33%">BIGINT</td>
        <td align="justify" width="33%">mozi azonosítója (FK)</td>
    </tr>
    <tr align="center" width="100%">
        <td align="center" width="33%">FILM_TITLE</td>
        <td align="center" width="33%">VARCHAR2(50)</td>
        <td align="justify" width="33%">film címe (FK)</td>
    </tr>
</table>

## Szerzők:
+ **Szendrei Ferenc**

## Felhasznált források:
+ **Kapás Dorina Anita**: szferenc15/cinema_world (Alkalmazások fejlesztése tantárgy közös beadandója, kliens oldal alapja)
+ **Móger Tibor**: Hapcy/js-tech-anyagok/express (szerver oldal kiinduló alapja)