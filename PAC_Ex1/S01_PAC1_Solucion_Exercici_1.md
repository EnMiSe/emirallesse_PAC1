
# PAC 1: Desenvolupament Front End (Teoria)

1.	L'aparició de HTML5/CSS3/JS ha suposat el naixement del desenvolupament front-end modern. (0.75 punts)
- Quin és l'avantatge d'utilitzar etiquetes semàntiques? Anomena i explica com a mínim 3 d'aquests avantatges.

Millora l'accessibilitat. Dites etiquetes  proporcionen una estructura clara i significativa al contingut web, facilitant la navegació per als lectors de pantalla i altres dispositius. Això fa que el lloc web sigui més accessible per a persones amb discapacitats o altres problemes d'accessibilitat. Per altra banda tambe ajuden als motors de cerca a comprendre el contingut del teu lloc web, optimitzant el SEO. Això pot millorar la teva classificació dels resultats de cerca i fer que el teu lloc sigui més visible per als usuaris en línia.
Finalment, també facilita el manteniment: del lloc web, ja que proporciona una estructura lògica i ordenada al contingut. Això fa que sigui més fàcil entendre i canviar el codi en el futur, afegir noves funcionalitats o fer actualitzacions

Finalment, també facilita el manteniment: del lloc web, ja que proporciona una estructura lògica i ordenada al contingut. Això fa que sigui més fàcil entendre i canviar el codi en el futur, afegir noves funcionalitats o fer actualitzacions.

- Cita almenys 3 APIs HTML5 i explica breument la seva funcionalitat.

API de Geolocalització: Aquesta API permet als llocs web accedir a la ubicació geogràfica de l'usuari mitjançant GPS o altres fonts de localització del dispositiu. S'utilitza per a oferir contingut o funcionalitats basades en la ubicació, com ara mapes o serveis de cerca local.

API de Web Storage:  API que proporciona una forma d'emmagatzemar dades al navegador de l'usuari, ja sigui de forma persistent (localStorage) o de forma temporal (sessionStorage). És útil per desar informació localment al navegador sense necessitat de comunicar-se constantment amb el servidor.

API de Canvas: Permet als desenvolupadors dibuixar gràfics i imatges de forma dinàmica al navegador utilitzant JavaScript. Es pot utilitzar per a crear gràfics interactius, jocs i altres aplicacions riques en contingut visual.

- Cita quina opció ofereix CSS3 per aconseguir que s'apliquin diferents estils CSS sobre el mateix element en la visualització en diferents dispositius (diferents mides de pantalla).

Per aconseguir que s'apliquin diferents estils CSS sobre el mateix element en la visualització en diferents dispositius (diferents mides de pantalla), es pot fer servir l'"Responsive Web Design". Això es fa mitjançant mitjans com els "Media Queries", que permeten establir condicions per a aplicar estils CSS específics basats en la grandària de la pantalla, l'orientació i altres característiques del dispositiu. Aquest enfocament permet adaptar el disseny del lloc web a una varietat gran de dispositius i resolucions de pantalla.

- Cita almenys 4 de les característiques principals de TypeScript (important superset de JavaScript que tractarem al següent capítol).

TypeScript ofereix un sistema de tipus estàtics, que permet declarar el tipus de les variables, paràmetres de funcions i altres elements del teu codi. Això ajuda a identificar errors de tipus abans de l'execució del codi.
Per altra banda TypeScript es converteix en JavaScript mitjançant un procés de compilació. Això permet als desenvolupadors utilitzar les característiques modernes de JavaScript mentre garanteix la compatibilitat amb versions anteriors de navegadors.
Seguidament, també ofereix suport per a les característiques de les últimes versions d'ECMAScript (com ara ES6 i ES7), que amplia les capacitats de JavaScript.
Per acabar, TypeScript és un llenguatge orientat a objectes que permet la definició de classes, interfícies i altres conceptes orientats a objectes per a millorar la reutilització del codi, cosa que permet mostrar un codi amb més claredat a l'usuari.


2. El llenguatge CSS és molt rígid, poc pràctic i endreçat a l'hora de programar. Per evitar aquest problema s'han creat els preprocessadors CSS, que ofereixen avantatges evidents (0.5 punts)

- Citeu almenys 2 d'aquests preprocessadors.

El primer a citar es Sass (Syntactically Awesome StyleSheets). Sass és un dels preprocessadors CSS més populars, que introdueix una sintaxi més elegant i funcionalitats addicionals com variables, mixins i herència que faciliten la gestió de l'estil d'un lloc web.

També es troba Less (Leaner Style Sheets): És un altre preprocessador que ofereix una sintaxi similar a Sass. També inclou funcionalitats avançades com variables, mixins i operacions aritmètiques.

- Cita almenys 4 avantatges que ofereixen aquests preprocessadors.

Com s'ha esmentat anteriorment, aquests preprocessadors ofereixen les següents ventatges:
Permeten definir variables CSS, el que facilita la reutilització de valors com colors, mides de tipus de lletra, marges, etc. Això fa que el codi sigui més fàcil de mantenir.
També, les funcions i mixins permeten reutilitzar conjunts d'estils en diversos llocs del codi, reduint la duplicació i fent que les actualitzacions siguin més senzilles.
Amb la herència, es permet heretar estils d'un selector a un altre, el que fomenta la reutilització i redueix la necessitat de codi duplicat.
Finalment amb l'anidament o també conegut com a nesting, permet realitzar a l'usuari una sintaxi més jeràrquica i llegible, ja que pots anidar selectors dins d'altres selectors, reflectint millor la relació entre els elements HTML.

- Explica breument en què consisteixen els sourcemaps.

Sourcemaps són fitxers que vinculen el codi font original (com ara Sass o LESS) amb el codi CSS generat mitjançant el preprocessador. Això permet als desenvolupadors depurar i inspeccionar el codi CSS d'origen en les eines de desenvolupament del navegador, tot i que estiguin treballant amb codi CSS minificat. Això millora significativament la capacitat de depuració i facilita la identificació d'errors en el codi.

- Explica què és un transpilador

Un transpilador és una eina que converteix el codi font d'un llenguatge de programació a un altre. En el context del desenvolupament web, sovint es fa referència a transpiladors quan es parla de passar de llenguatges com TypeScript o ECMAScript 6 (ES6) a JavaScript, ja que aquests no es converteixen totalment, sinó que es transpilen, mantenint l'estructura, però ajustant-se a la compatibilitat dels navegadors. Això permet als desenvolupadors utilitzar les últimes característiques del llenguatge sense preocupar-se de la compatibilitat amb les versions més antigues d'aquests.

3. El flux de treball professional a front-end fa indispensable l'ús d'eines com a controls de versions i eines de gestió de mòduls (0.75 punts).

- Cita almenys dos sistemes de control de versions i dues eines de gestió de mòduls.

Sistemes de Control de Versions:

Git és un dels sistemes de control de versions més utilitzats. Permet el seguiment de canvis en els arxius i la col·laboració entre desenvolupadors. És conegut per la seva eficiència i flexibilitat.

També,  SVN és un altre sistema de control de versions que manté un historial de canvis en els arxius. Ofereix un enfocament centralitzat, a diferència de Git, que és descentralitzat.

Eines de Gestió de Mòduls:
Un es npm, la principal eina de gestió de paquets per a l'ecosistema de JavaScript. S'utilitza per descarregar i gestionar llibreries i mòduls de JavaScript de tercers. És àmpliament utilitzat per a la gestió de dependències en projectes front-end.
Un altre es Yarn, una alternativa a npm per a la gestió de paquets i dependències en JavaScript. S'ha desenvolupat per ser més ràpid i eficient que npm, i també inclou característiques com la generació de "lock files" per garantir la coherència de les versions dels paquets.

- Cita i explica almenys 3 ordres de Git.

git init: Aquesta ordre s'utilitza per iniciar un nou repositori Git en un directori. Inicia el seguiment dels canvis als arxius en aquest directori i crea un directori ocult .git on es guardaran les dades del repositori.

git add: Amb aquesta ordre, pots afegir canvis als arxius al "staging area", una àrea intermèdia on pots preparar els canvis que vols incloure en el proper commit.

git commit: Aquesta ordre realitza un "commit" dels canvis que has afegit al "staging area". Cada commit crea un punt en l'historial del teu repositori amb una descripció i una estampa de temps associada als canvis.

- Cita i explica breument les característiques més definitòries de WebPack.

Webpack és una eina de construcció i empaquetament (bundling) que s'utilitza àmpliament en el desenvolupament front-end. Les seves característiques principals són:
Divisió per mòduls. WebPack permet als desenvolupadors dividir el seu codi en diferents mòduls que faciliten la gestió de dependencies i la divisió del codi en petites parts.
També, WebPack és capaç de prendre tots aquests mòduls i empacotar-los en un o diversos fitxers JavaScript optimitzats per a la producció, reduint la càrrega i millorant el rendiment. Aquest procés es coneix com a empaquetament o Bundling.
Per altra banda, a través de  càrregues de recursos (loaders), WebPack permet gestionar i transformar diferents tipus d'arxius, com arxius CSS, imatges i fonts, com si fossin mòduls del projecte.
Finalment, WebPack també ofereix una sèrie de característiques d'optimització, com la minificació de codi JavaScript i la gestió eficient de les dependencies, per millorar el rendiment i la velocitat de càrrega de les aplicacions web.
