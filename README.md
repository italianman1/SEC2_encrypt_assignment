# SEC2_encrypt_assignment

Dit is mijn laatste opdracht voor het encryptie hoofdstuk van het vak Security 2.

Uitleg van de code:

Ik heb dus gekozen voor Javascript omdat dit makkelijk op te zetten was en we nu met dit blok voornamelijk zijn met javascript gerelateerde talen dacht ik dat dit de makkelijkste optie was.
Voor het encrypten en decrypten van de messages heb ik gebruik gemaakt van de CrypoJS library, wat een library is van alle populaire encryptie standaarden zoals AES en SHA512.

Index.html: 

In deze file staat het formulier om je naam, de message die je wilt encrypten en je wachtwoord op te geven.
Ook import hij de javascript file en de library die gebruikt worden.

Style.css:

Hier wordt een klein beetje aan styling gedaan.

Encrypt.js:

Deze file houdt 2 arrays bij, namelijk een messages array waarbij er wordt gekeken welke message met welke username correspondeert.
Ook houdt hij de array users bij waarbij hij de username met bijbehorend wachtwoord bijhoudt. 
Ook heeft hij nog een andere variabele, dit is namelijk het geheim dat nodig is om een message te encrypten of te decrypten. 

In deze file staat daarnaast een method genaamd encryptMessage, deze methode zorgt ervoor dat wanneer naam en wachtwoord correct worden ingevuld de bijbehorende message vanuit de messages array verschijnt. Echter, komt het wachtwoord of de username niet overeen met de ingevoerde waarde dan maakt hij encrypt hij de ingevoerde message en slaat hij de user met bijbehorende message op in de messages array en slaat hij de user met bijbehorend password op in de users array. Dit laatste stukje toevoegen gebeurt op voorwaarde dat de username niet al bestaat, dus wanneer er gebruik wordt gemaakt van een ander password maar wel dezelfde username, dan zal de app een waarschuwing geven dat de username al in gebruik is. 
