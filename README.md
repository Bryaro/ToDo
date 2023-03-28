Refaktorering av kod
I den här dokumentationen beskrivs förändringarna som har gjorts på den ursprungliga koden vid refaktorering.

Förändringar i createNewTask-funktionen
Funktionen createNewTask har refaktoriserats för att ta bort if-satsen och istället använda tidig retur.
Koden har modifierats för att använda objektdestrukturing för att förenkla skapandet av task-objektet.
console.log-satsen har tagits bort.
Funktionen createHTML har flyttats utanför else-blocket för att undvika onödighet.

Förändringar i completeTask-funktionen
Funktionen completeTask har refaktoriserats för att ta bort den onödiga if-satsen.
console.log-satsen har tagits bort.
Funktionen makeOngoing har extraherats som en separat funktion för att förbättra läsbarheten.

Förändringar i makeOngoing-funktionen
Funktionen makeOngoing har extraherats från completeTask-funktionen.
console.log-satsen har tagits bort.
className-egenskapen hos taskElement-, userText- och doneButton-elementen har modifierats för att använda template literals för läsbarhet.

Förändringar i addToTaskList-funktionen
Funktionen addToTaskList har extraherats från createHTML-funktionen.
console.log-satsen har tagits bort.
for-loop har ersatts med forEach-metoden för att förenkla koden.

Förändringar i removeTask-funktionen
console.log-satsen har tagits bort.
ListElement.innerHTML-satsen har flyttats till createHTML-funktionen.
for-loop har tagits bort och ersatts med en enkel rad kod för att sätta onList-egenskapen till false.