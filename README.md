# PRG04 opdracht 

Object Oriented Game Design in Typescript - inleveropdracht

## Deadline: Week 9 - 30 juni - 10:00 uur

Voor dit vak werk je wekelijks aan je typescript game. Deze reposistory bevat je wekelijkse updates. **Let op de deadline! Hierna kan je geen werk meer inleveren**

Je werk wordt beoordeeld volgens de cursushandleiding. Je krijgt punten voor onderstaande criteria, door elk punt individueel te *beschrijven in dit inleverdocument* én *toe te passen in je code*.

---

<br>
<br>
<Br>

## Gameplay

Ik heb een endless runner/side scroller gemaakt met als player karakter een dino. (Alhoewel het meer een dino/draak is geworden want hij heeft vleugels)

Je moet als dino rennend astroids en space rocks ontwijken. Als je geraakt wordt verlies je levens en als al je levens op zijn ben je game over.

## Classes

Ik heb in totaal 10 classes. Je begint met een game. Hierin worden alle gamescreens aangemaakt. Je hebt een startscreen, controlscreen, een gamescreen (de game zelf) en een endscreen. 

In de gamescreen worden de meeste dingen gedaan dit is namelijk echt waar je de game speelt. 

In de gamescreen worden de players, de astroids, de header UI en de rocks aangemaakt. 

Als laatste heb ik nog een gameobject class. De player, astroid en rock zijn allemaal gameobjecten en die gebruiken variabelen en functies die in gameobject zitten. 

## Encapsulation

Encapsulation is het afschermen van eigenschappen voor lezen en schrijven. 
Oftewel het private, public of protected maken van al je variabelen en functies. Dit heb ik bij al mijn classes toegepast.
Het meeste is allemaal private gebleven. Met uitzondering van een paar.

In gameobject maak ik gebruik van protected (#) variabelen zodat ik deze variabelen ook kan gebruiken in player, astroid en rock maar niet zomaar in een andere class. 

Als we gamescreen als voorbeeld nemen (hier heb ik de meeste variabelen in zitten) hier zijn alle variabelen private omdat ik ze niet gebruik in andere classes maar alleen hier. Behalve gameover. Gameover is iets wat ik in meerdere classes moet gebruiken. Hier heb ik dan ook een getter en een setter voor gemaakt zodat ik hem in andere classes kan gebruiken (bijvoorbeeld player).

Ook bij UI maak ik gebruik van 3 getters en setters. music, score en pause zijn allemaal variabelen die ik ook in de gamescreen moet gebruiken. Zo zorg ik ervoor dat ik niet dingen te vaak herhaal.

## Composition

Composition gebruik je om aan te geven of een class een andere (of meerdere) class(es) heeft.

Dit gebruik ik eigenlijk twee keer in mijn game. 

De eerste keer bij gamescreen, de class die het meeste bestuurd. 
Gamescreen heeft een (has a) player, rock en astroid.

De tweede keer bij game. De class die de gamescreens aanmaakt.
game heeft een (has a) startscreen,controlscreen, gamescreen en endscreen.

Bij de game is dit handig zodat je een titelscherm en een gameover scherm kan maken en eigenlijk steeds meerdere gamescreens er makkelijk bij kan zetten. Zo was het dus heel makkelijk om op het eind nog even snel een controlscreen erbij te zetten om de controls uit te leggen. 

Bij gamescreen is dit handig omdat al mijn verschillende gameobjects dan worden aangemaakt in één class. Dit maakt het veel overzichtelijker.


## Inheritance

Inheritance gebruik je om DRY te programmeren (Do not Repeat Yourself). Als je meerdere classes hebben die veel dezelfde variabelen en functies hebben kun je een nieuwe class maken met al diezelfde variabelen en functies zodat je ze maar 1x hoeft te typen. Daarna kun je deze nieuwe class gebruiken als overkoepelende class.

Bij mij wordt inheritance toegepast bij mijn gameObject class. Dit is de overkoepelende class die ervoor zorgt dat ik niet alles 3 keer hoef te herhalen voor zowel mijn astroid als mijn rock en player.

Alles wat in gameObject (de parent class) wordt overgenomen door de player, astroid en rock (de children classes). 

Hier wordt het een stuk overzichtelijker van en hoef je niet dingen te herhalen. In een eerdere iteratie was ik ook nog van plan een soort trees erin te zetten, mocht je dat nu willen doen hoef je ze daarna alleen maar ook de overkoepelende class gameobject te geven. Je kunt dus makkelijk extra 'enemies' toevoegen. 

## Game development techieken

# HTML + CSS

Ik heb 1 HTML bestand met een body waar de achtergrond al in zit en een header waar al 3 lege elementen in zitten. 
Hierdoor heb ik een overkoepelde achtergrond bij al mijn gamescreens. Dit vond ik wel mooi dus heb ik dit zo gehouden.
De header met de lege elementen is gekomen omdat ik echt met geen mogelijkheid het voor elkaar kreeg om de header en elementen aan te maken in typescript. Ik heb alles geprobeerd maar elke keer verdween mijn header. Dit heb ik opgelost door de lege elementen hardcoded in mijn HTML te zetten en ze daarna in typescript te vullen. 

CSS gebruik ik voor het stylen van al mijn sprites, tekst en buttons. Iets leuks wat ik heb toegevoegd met classes in css is dat de sprite veranderd als je naar links en naar echts loopt en als je springt krijgt de dino vleugels. Ja een dino heeft eigenlijk geen vleugels dus nu is het een dino draak I guess? Maar het maakt de game wat levendiger.

# Game loop

De gameloop wordt bij mij voor het eerst opgeroepen in mijn game class. Hier zegt hij dat je de de gameloop start. Wat er daarna allemaal nog meer in gebeurd wordt verteld bij mijn gamescreen class. Hier staat in dat de rocks worden gespawned, de player geupdate wordt, dat de gameloop stopt als er op pauze wordt gedrukt of als je gameover bent, wat er gebeurd als je geraakt wordt, dat de achtergrond moet bewegen en wat er gebeurd als je gameover bent. 

# Collision detection

Bij mij hebben de player, rock en astroid een collision nodig dus heb ik die in gameobject gezet in een eigen functie. 
Daarna checkt hij voor de collision in de gameloop functie van gamescreen en daar wordt dan ook verteld wat er gebeurd als je elkaar aan raakt.

# Besturing

Ik gebruik de pijltjestoetsen (en wasd) en de spatiebalk als besturing. Pijltjestoetsen voor het lopen en de spatiebalk voor het springen.

De besturing wordt gedaan in de player class. Hier heb ik een onkeyup en onkeydown handler in zitten die verteld wat er gebeurd moet worden als er een knop wordt ingedrukt. Daarna wordt de x en y waarde geupdate in de update functie. 

# Timer

Ik gebruik een timer voor het spawnen van rocks. Dit gebeurd in de gamescreen class in de gameloop functie. De spawner begint op 0 en als hij bij 120 is spawnt hij een rock en begint hij weer opnieuw met tellen.

Een ander soort timer die ik gebruik gebruik ik bij de hit functie in de player class. Hier verander ik de grayscale van mijn sprite zodat je ziet dat hij geraakt is door iets. Je wil natuurlijk dat hij maar heel even een andere kleur flikkert en dat hij daarna weer zijn eigen kleur wordt. Hier gebruik ik de setTimeout functie voor. Dan doet hij het voor een halve seconde.

# Object pool

In mijn game gebruik ik een object pool bij zowel rock als astroids. Dit zijn allebei arrays waarin hij de rocks en de astroids opslaat. Deze volledige arrays gebruik ik in de gameloop van gamescreen om de rocks en de astroids te updaten. En nog een keer in cleanScreen om de volledige array leeg te maken.

## Link

https://jayjaymonster.github.io/dinosaur/
