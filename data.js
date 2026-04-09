/* ============================================
   VIRTUALIOS KELIONĖS ŠIAULIUOSE
   data.js – visų objektų duomenys
   ============================================ */

const OBJECTS = {

  // ==========================================
  // LANKOMOS VIETOS (13)
  // ==========================================

  "katedra": {
    title: "Šv. Apaštalų Petro ir Pauliaus katedra",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/katedra.jpg",
    youtube: "",
    description: [
      "Šiaulių katedra – viena seniausių ir didžiausių bažnyčių Žemaitijoje, pirmą kartą paminėta 1445 metais. Per savo ilgą istoriją ji išgyveno daugybę gaisrų, karų ir atstatymų, tačiau kiekvieną kartą atgimė dar gražesnė.",
      "Bažnyčia stovi pačiame miesto centre ir yra renesanso epochos architektūros paminklas. Jos interjere dominuoja baroko stilius – puošnūs altoriai, vertingi paveikslai ir skulptūros. Bokšto aukštis siekia 70 metrų, o nuo jo atsiveria nuostabi miesto panorama.",
      "Katedra nėra tik religinis pastatas – ji yra Šiaulių dvasinio ir kultūrinio gyvenimo centras, pritraukiantis tiek tikinčiuosius, tiek architektūros mėgėjus ir turistus iš viso pasaulio."
    ],
    address: "Aušros al. 3, Šiauliai",
    funFact: "Katedros bokštas yra aukščiausias pastatas Šiaulių senamiestyje – nuo jo matosi net 30 km aplink."
  },

  "cerkve": {
    title: "Šiaulių Šv. Apaštalų Petro ir Povilo cerkvė",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/cerkve.jpg",
    youtube: "",
    description: [
      "Stačiatikių cerkvė, pastatyta 1909 metais, yra vienas ryškiausių rusiško bizantinio stiliaus architektūros pavyzdžių Šiauliuose. Pastatas iš raudonų plytų su būdingais svogūniniais kupolais traukia tiek tikinčiuosius, tiek architektūros mėgėjus.",
      "Cerkvė buvo pastatyta Šiaulių rusų stačiatikių bendruomenės reikmėms, kai miestas priklausė Rusijos imperijai. Nepaisant istorinių suiručių – dviejų pasaulinių karų ir sovietmečio – pastatas išliko beveik nepakitęs.",
      "Šiandien cerkvė yra veikianti stačiatikių šventovė ir svarbus architektūrinis paminklas, primenantis Šiaulių daugiakultūrę praeitį."
    ],
    address: "Tilžės g. 59, Šiauliai",
    funFact: "Tai viena iš nedaugelio raudonų plytų stačiatikių cerkvių Lietuvoje, išlaikiusi originalią architektūrą."
  },

  "gelezine-lape": {
    title: "Geležinė lapė",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/gelezine-lape.jpg",
    youtube: "",
    description: [
      "Geležinė lapė – didžiausia gyvūno skulptūra Lietuvoje, tapusi vienu ryškiausių Šiaulių simbolių. Skulptūros svoris – beveik 7 tonos, ilgis – apie 15 metrų, aukštis – 6,6 metro!",
      "Tai šiauliečio dizainerio Viliaus Purono kūrinys, skirtas Lietuvos vardo tūkstantmečiui paminėti. Dizaineris juokavo, kad jei Vilnius turi legendą apie geležinį vilką, tai Šiauliai galės didžiuotis geležine lape – apsukrumo ir išminties simboliu.",
      "Skulptūros plieninėje širdyje paslėpta laiko kapsulė su žinute ateities kartoms. Pagal tradiciją, kiekvienas, kas paglosto lapės nosį, sulaukia sėkmės."
    ],
    address: "Ežero g., Šiauliai",
    funFact: "Lapės širdyje slepiasi laiko kapsulė – ją atidaryti planuojama tik po 100 metų!"
  },

  "frenkelio-vila": {
    title: "Chaimo Frenkelio vila-muziejus",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/frenkelio-vila.jpg",
    youtube: "",
    description: [
      "Prabangi XIX amžiaus pabaigos vila, pastatyta Šiaulių odos pramonininko Chaimo Frenkelio užsakymu. Tai moderno architektūros statinys, žavintis interjere išlikusia medžio apdaila, puošniais lipdiniais ir tapybos fragmentais.",
      "Vila yra viena iš populiariausių kultūrinio turizmo vietų Šiaurės Lietuvoje. Dviejų aukštų viloje įrengta stilizuota muziejinė ekspozicija, atspindinti turtingą dvaro gyvenimą ir kultūrinius poreikius.",
      "Parko teritorijoje vasarą vyksta populiarūs kultūriniai renginiai, koncertai ir festivaliai. Chaimo Frenkelio vila – vienas brangiausių Šiaulių karūnos deimantų."
    ],
    address: "Vilniaus g. 74, Šiauliai",
    funFact: "Chaimas Frenkelis buvo vienas turtingiausių Šiaulių verslininkų – jo odos fabrikas buvo didžiausias Europoje."
  },

  "jurgio-baznycia": {
    title: "Šiaulių Šv. Jurgio bažnyčia",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/jurgio-baznycia.jpg",
    youtube: "",
    description: [
      "Raudonų plytų bažnyčia su aukštu aštuonkampiu bokštu – vienas seniausių Šiaulių sakralinių pastatų. Pirmą kartą paminėta XVI amžiuje, bažnyčia buvo ne kartą perstatyta ir atnaujinta.",
      "Pastato architektūroje matomi neogotikos bruožai – smailėjantys langai, dekoratyviniai plytų ornamentai ir masyvus bokštas su mažu svogūniniu kupolu viršūnėje. Po stogu eina būdingas arkadų frizas.",
      "Bažnyčia iki šiol yra veikianti parapija ir svarbus Šiaulių sakralinis pastatas, pritraukiantis tiek tikinčiuosius, tiek architektūros entuziastus."
    ],
    address: "S. Daukanto g., Šiauliai",
    funFact: "Tai viena iš nedaugelio bažnyčių Šiauliuose, kurios fasadas puoštas dekoratyviniu plytų frizų."
  },

  "lojolos-baznycia": {
    title: "Šiaulių Šv. Ignaco Lojolos bažnyčia",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/lojolos-baznycia.jpg",
    youtube: "",
    description: [
      "Barokinė bažnyčia, pastatyta XVIII amžiuje jėzuitų vienuolių. Tai vienas gražiausių baroko stiliaus pastatų Šiauliuose, kurio fasadą puošia elegantiški piliastrai ir skulptūrinės detalės.",
      "Bažnyčios viduje – vertingi dailės kūriniai, freskų fragmentai ir puošnūs altoriai, bylojantys apie turtingą miesto kultūros istoriją. Jėzuitai čia ne tik meldėsi, bet ir steigė mokyklas bei skleidė švietimą.",
      "Šiandien bažnyčia yra svarbus architektūrinis ir istorinis paminklas, primenantis apie jėzuitų ordino veiklą Lietuvoje ir jų indėlį į miesto kultūrinį gyvenimą."
    ],
    address: "Vilniaus g. 2, Šiauliai",
    funFact: "Jėzuitai Šiauliuose įkūrė vieną pirmųjų mokyklų mieste, kuri veikė šalia šios bažnyčios."
  },

  "paminklas-popieziui": {
    title: "Paminklas popiežiui Jonui Pauliui II",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/paminklas-popieziui.jpg",
    youtube: "",
    description: [
      "Bronzinis paminklas popiežiui Jonui Pauliui II, pastatytas prisimenant jo istorinį vizitą Lietuvoje 1993 metais. Tai buvo pirmasis popiežiaus apsilankymas Baltijos šalyse po Nepriklausomybės atkūrimo.",
      "Skulptūra vaizduoja Šventąjį Tėvą su kryžiumi – jis stovi ant akmeninio postamento su įrašais. Paminklas primena jo žodžius apie tikėjimą, laisvę ir viltį, pasakytus Lietuvos žmonėms.",
      "Vieta tapo svarbia piligriminės kelionės stotele ir mėgstama šiauliečių susitikimų erdve. Paminklas simbolizuoja Šiaulių dvasinę tradiciją ir tikėjimo svarbą miesto gyvenime."
    ],
    address: "Tilžės g., Šiauliai",
    funFact: "Jonas Paulius II 1993 m. aplankė Kryžių kalną ir pavadino jį 'vilties kalnu'."
  },

  "turgaus-aikste": {
    title: "Turgaus aikštė",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/turgaus-aikste.jpg",
    youtube: "",
    description: [
      "Istorinė Šiaulių turgaus aikštė – vieta, kur nuo seniausių laikų virė prekyba ir miesto gyvenimas. Čia susitikdavo pirkliai, amatininkai ir miestiečiai, čia skelbdavo svarbias žinias.",
      "Neseniai atnaujinta aikštė tapo modernia viešąja erdve, tačiau išlaikė istorinį charakterį. Aplink aikštę stovi seni pastatai, menantys tarpukario Šiaulių architektūrą.",
      "Šiandien aikštė yra populiari pasivaikščiojimų ir renginių vieta – čia vyksta mugės, festivaliai ir miesto šventės. Tai tikra Šiaulių senamiesčio širdis."
    ],
    address: "Turgaus a., Šiauliai",
    funFact: "Viduramžiais turgaus aikštėje stovėjo gėdos stulpas – prie jo buvo pririšami nusikaltėliai."
  },

  "dviraciu-muziejus": {
    title: "Dviračių muziejus",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/dviraciu-muziejus.jpg",
    youtube: "",
    description: [
      "Vienintelis specializuotas dviračių istorijai skirtas muziejus Lietuvoje! Čia galima pamatyti dviračių evoliuciją nuo XIX amžiaus penny-farthing iki šiuolaikinių modelių.",
      "Ekspozicijoje – daugiau kaip 100 dviračių, įskaitant retus kolekcinius eksponatus. Muziejuje dera tradicinės ekspozicijos ir naujausios technologijos – kiekvienas lankytojas tampa aktyviu dalyviu.",
      "Muziejus įsikūręs Vilniaus gatvėje ir siūlo ne tik apžiūrėti eksponatus, bet ir interaktyvias edukacines programas. Puiki vieta visai šeimai!"
    ],
    address: "Vilniaus g. 139, Šiauliai",
    funFact: "Muziejuje saugomas seniausias dviratis Lietuvoje, pagamintas XIX amžiaus pabaigoje."
  },

  "auksinis-berniukas": {
    title: "Auksinis berniukas",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/auksinis-berniukas.jpg",
    youtube: "",
    description: [
      "Nedidelė, bet labai mylima šiauliečių skulptūra pėsčiųjų bulvare. Auksinis berniukas ant kolonos – miesto sėkmės simbolis ir vienas atpažįstamiausių Šiaulių ženklų.",
      "Skulptūra vaizduoja mažą berniuką, stovintį ant dekoratyvios kolonos. Pagal tradiciją, palietęs jo pėdą gausi sėkmės – todėl skulptūros apačia visada blizga nuo daugelio rankų prisilietimų.",
      "Auksinis berniukas tapo populiariu turistų traukos objektu ir mėgstama fotosesijų vieta. Jis yra neatsiejama Šiaulių pėsčiųjų bulvaro dalis."
    ],
    address: "Vilniaus g., Šiauliai",
    funFact: "Berniuko pėda blizga todėl, kad tūkstančiai žmonių ją liečia tikėdamiesi sėkmės!"
  },

  "zubovu-dvaras": {
    title: "Grafų Zubovų dvaras",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/zubovu-dvaras.jpg",
    youtube: "",
    description: [
      "Senasis Šiaulių parkas, priklausęs grafų Zubovų giminei – viena seniausių ir gražiausių žaliųjų erdvių mieste. Dvaro parkas buvo įkurtas XIX amžiuje ir iki šiol žavi savo romantišku kraštovaizdžiu.",
      "Parke auga šimtamečiai medžiai – ąžuolai, liepos ir klevai, kurie sukuria unikalią atmosferą bet kuriuo metų laiku. Čia galima rasti retus augalų egzempliorius ir pasimėgauti gamtos ramybe.",
      "Neseniai parkas buvo atnaujintas – atsirado nauji takai, apšvietimas ir poilsio zonos. Tai puiki vieta pasivaikščiojimams, romantiškai pasimatymams ir šeimos poilsiui."
    ],
    address: "Zubovų g., Šiauliai",
    funFact: "Parke auga ąžuolas, kurio amžius siekia daugiau nei 200 metų!"
  },

  "fotografijos-muziejus": {
    title: "Fotografijos muziejus",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/fotografijos-muziejus.jpg",
    youtube: "",
    description: [
      "Šiaulių „Aušros" muziejaus padalinys – vienintelis specializuotas fotografijos meno ir technikos muziejus Lietuvoje. Muziejus saugo ir reprezentuoja beveik 150 000 eksponatų.",
      "Čia eksponuojamos tiek istorinės, tiek šiuolaikinės fotografijos parodos. Kolekcijoje – senos fotokameros, stiklo negatyvai, albumai ir dokumentai, atskleidžiantys Lietuvos fotografijos istoriją nuo pat jos pradžios.",
      "2014 metais modernizuotame muziejuje organizuojamos parodos, susitikimai su autoriais, edukaciniai užsiėmimai. Tai privaloma vieta kiekvienam fotografijos mėgėjui."
    ],
    address: "Vilniaus g. 140, Šiauliai",
    funFact: "Muziejuje saugoma viena seniausių fotografijų Lietuvoje, daryta dar 1860-aisiais metais."
  },

  "laikrodis-gaidys": {
    title: "Laikrodis gaidys",
    category: "lankomos-vietos",
    image: "img/lankomos-vietos/laikrodis-gaidys.jpg",
    youtube: "",
    description: [
      "Mechaninis laikrodis su metaliniu gaidžiu – vienas žinomiausių ir mylimiausių Šiaulių simbolių pėsčiųjų bulvare. Kas valandą gaidys „pragysta" ir suploja sparnais, sukeldamas šypsenas praeivių veiduose.",
      "Laikrodis buvo pastatytas kaip miesto puošmena ir greitai tapo populiariausia pasimatymų vieta Šiauliuose. „Susitinkam prie gaidžio" – ši frazė žinoma kiekvienam šiauliečiui.",
      "Mechaninis gaidys yra tikras inžinerijos šedevras – jo mechanizmas veikia patikimai jau daugelį metų. Laikrodis yra mėgstamiausias fotografų objektas ir neatsiejama bulvaro dalis."
    ],
    address: "Vilniaus g., Šiauliai",
    funFact: "„Susitinkam prie gaidžio" – populiariausia frazė Šiauliuose jau kelis dešimtmečius!"
  },

  // ==========================================
  // PRAMONĖ (6)
  // ==========================================

  "ruta": {
    title: "Saldainių fabrikas Rūta",
    category: "pramone",
    image: "img/pramone/ruta.jpg",
    youtube: "N4WXD-OTbDY",
    description: [
      "Legendinis Šiaulių saldainių fabrikas, veikiantis nuo 1913 metų – vienas seniausių saldainių gamintojų Lietuvoje. Per daugiau nei šimtą metų „Rūta" tapo tikra Šiaulių legenda.",
      "Čia gimsta visiems pažįstami saldainiai – „Kregždutė", „Miško nykštukas", „Pieniška" ir daugybė kitų, kuriuos myli visos kartos. Fabriko šokolado muziejus siūlo interaktyvias edukacijas, kur galite patys gaminti saldainius.",
      "Senajame fabriko pastate veikia „Rūtos" šokolado muziejus ir parduotuvė. Tokio muziejaus pavydėti galėtų net Belgijos meistrai! Tai privaloma vieta kiekvienam, apsilankiusiam Šiauliuose."
    ],
    address: "Tilžės g. 133, Šiauliai",
    funFact: "„Rūta" per metus pagamina apie 6000 tonų saldumynų – tai maždaug 2 kg kiekvienam Lietuvos gyventojui!"
  },

  "baltik-vairas": {
    title: "Baltik vairas",
    category: "pramone",
    image: "img/pramone/baltik-vairas.jpg",
    youtube: "",
    description: [
      "Didžiausia dviračių gamykla Baltijos šalyse, veikianti nuo 1948 metų. Per savo istoriją „Baltik vairas" pagamino milijonus dviračių, kurie važinėjo visoje Sovietų Sąjungoje.",
      "Šiandien įmonė yra modernizuota ir naudoja pažangiausias technologijas. Gamykla eksportuoja dviračius į daugiau nei 30 pasaulio šalių – nuo Skandinavijos iki Japonijos.",
      "„Baltik vairas" yra ne tik pramonės milžinas, bet ir svarbi Šiaulių identiteto dalis – ne veltui mieste yra Dviračių muziejus, o dviratis yra vienas miesto simbolių."
    ],
    address: "Pramonės g. 3, Šiauliai",
    funFact: "Sovietmečiu „Baltik vairas" gamino iki 1 milijono dviračių per metus!"
  },

  "grafu-baldai": {
    title: "Grafų baldai",
    category: "pramone",
    image: "img/pramone/grafu-baldai.jpg",
    youtube: "kxAHUA78kfw",
    description: [
      "Šiaulių baldų gamybos įmonė, gaminanti aukštos kokybės baldus iš natūralios medienos. „Grafų baldai" sujungia tradicinį amatą su šiuolaikinėmis technologijomis.",
      "Įmonė gamina elegantiškus baldus tiek Lietuvos, tiek užsienio rinkoms. Kiekvienas baldas yra rankų darbo šedevras – nuo klasikinių iki modernių dizainų.",
      "Gamykloje galima užsisakyti ekskursiją ir pamatyti, kaip iš paprastos medienos gimsta meno kūriniai. Tai puiki proga suprasti, kodėl Šiauliai garsėja savo amatininkais."
    ],
    address: "Šiauliai",
    funFact: "Vienas baldas gali turėti iki 200 detalių, kurias meistrai surinks per kelias savaites!"
  },

  "oro-uostas": {
    title: "Šiaulių oro uostas",
    category: "pramone",
    image: "img/pramone/oro-uostas.jpg",
    youtube: "",
    description: [
      "Šiaulių tarptautinis oro uostas – vienas strategiškai svarbiausių aviacijos objektų Lietuvoje. Jo kilimo-tūpimo takas yra vienas ilgiausių regione – 3500 metrų.",
      "Oro uostas aptarnauja tiek civilinius, tiek NATO karinius skrydžius. Šalia veikia Aviacijos bazė, kuri priima NATO oro policijos misijas Baltijos šalių oro erdvei saugoti.",
      "Nors oro uostas daugiausia orientuotas į krovininius ir karinius skrydžius, jis turi potencialą tapti svarbiu keleivių aviacijos mazgu regione."
    ],
    address: "Oro uosto g., Šiauliai",
    funFact: "Šiaulių oro uosto kilimo-tūpimo takas yra pakankamai ilgas, kad galėtų priimti didžiausius pasaulio lėktuvus!"
  },

  "doloop": {
    title: "Doloop (Putokšnis)",
    category: "pramone",
    image: "img/pramone/doloop.jpg",
    youtube: "Ze0I3VJzDRs",
    description: [
      "Šiuolaikiška gėrimų gamybos įmonė, gaminanti natūralius sulčių gėrimus „Putokšnis" prekės ženklu. Tai viena inovatyviausių gamybos įmonių Šiauliuose.",
      "„Doloop" naudoja pažangias gamybos technologijas ir orientuojasi į sveiką bei kokybišką produkciją. Įmonė gamina PET butelius ir pilsto įvairius gėrimus.",
      "Gamykloje galima užsisakyti ekskursiją ir pamatyti visą gamybos procesą – nuo žaliavų iki gatavos produkcijos. Tai puiki proga suprasti šiuolaikinę pramonę iš vidaus."
    ],
    address: "Šiauliai",
    funFact: "Gamykla per dieną gali pagaminti iki 100 000 butelių gėrimų!"
  },

  "salda": {
    title: "Salda",
    category: "pramone",
    image: "img/pramone/salda.jpg",
    youtube: "QMViCplVE8s",
    description: [
      "Ilgametę istoriją turinti Šiaulių trikotažo ir tekstilės įmonė. „Salda" gamina aukštos kokybės megztinius ir trikotažo gaminius, kurie vertinami už natūralias medžiagas.",
      "Įmonė savo produkciją eksportuoja į daugelį Europos šalių. Gaminiai pasižymi kokybišku siuvimu, natūraliomis medžiagomis ir šiuolaikiniais dizainais.",
      "„Salda" yra puikus pavyzdys, kaip tradicinė Šiaulių tekstilės pramonė sėkmingai prisitaiko prie šiuolaikinės rinkos reikalavimų ir konkuruoja tarptautiniu lygiu."
    ],
    address: "Šiauliai",
    funFact: "„Salda" produkcija parduodama daugiau nei 15 Europos šalių!"
  }

};
