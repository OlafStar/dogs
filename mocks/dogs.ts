const mockedDog = {
  breed: "Labrador Retriever",
  image: 'dog-mock.jpg',
  height: {
    males: "56–57 cm",
    females: "54–56 cm",
  },
  weight: {
    males: "29,5–36 kg",
    females: "25–32 kg",
  },
  countryOrigin: "Kanada",
  characteristics:
    "Labrador retriever to rasa psów żywiołowych, skorych do zabawy, także z innymi psami. Stworzone do pracy w wodzie i aportowania, potrzebują bezpośredniego kontaktu w pracy z człowiekiem. Lubią towarzystwo ludzi. Dobrze tolerują dzieci i są cierpliwe w kontaktach z nimi.",
  healthCare:
    "Trzeba zapewnić mu odpowiednią do jego potrzeb dawkę codziennego ruchu. Niespełnienie tego warunku prowadzi do otyłości powodującej choroby stawów, a także nadpobudliwości oraz przyczynia się do wielu niepożądanych zachowań. Psy tej rasy przejawiają średnie ryzyko do wystąpienia skrętu żołądka. Mogą zdradzać tendencję do połykania niejadalnych przedmiotów. Długość życia: 12 do 14 lat.",
  history:
    "Podobnie jak nowofundland i landseer rasa pochodzi z południa Nowej Fundlandii. W XVIII wieku była wykorzystywana przez rybaków do pracy na kutrach (psy pomagały przy wyciąganiu sieci, aportowaniu przedmiotów, a nawet ratowaniu tonących). Nazywane były psami św. Jana. Do Europy pierwsze psy tej rasy sprowadził w 1870 lord Malmesbury (błędnie nazywając je „psami z Labradoru”), który razem z synem rozpoczął ich hodowlę w Wielkiej Brytanii. To właśnie dzięki brytyjskim próbom hodowli, podejmowanym między innymi przez Earla Malmesbury (1778-1841), ukierunkowanym konsekwentnie na zdolności łowieckie rasy, stała się ona popularna wśród polującej szlachty. Dnia 7 lipca 1903 labrador retriever został oficjalnie uznany za rasę samodzielną przez angielski klub kynologiczny.",
};

export type Dog = typeof mockedDog

export const dogMock: Dog[] = [mockedDog];
