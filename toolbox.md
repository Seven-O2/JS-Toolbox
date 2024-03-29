# JS-Toolbox
Author und ©: [Joël Allemann](https://github.com/Seven-O2), auf Basis des Unterrichts von Dierk König

Diese Toolbox ist eine Zusammenfassung von wichtigsten Dingen im Zusammenhang mit JavaScript, welche im Unterricht Web Programming (webpr) gelernt wurden.

![js_logo](resources/images/logo_js.png)

# Inhaltsverzeichnis
<!-- Auto generated TOC -->

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JS-Toolbox](#-js-toolbox)
- [Inhaltsverzeichnis](#-inhaltsverzeichnis)
- [Generell](#-generell)
- [Variablen](#-variablen)
  - [`Const`](#-const)
  - [`Let`](#-let)
- [Scopes](#-scopes)
  - [`global`](#-global)
    - [Instanziierung](#-instanziierung)
  - [`function`](#-function)
    - [Instanziierung](#-instanziierung-1)
    - [Variablen-Scoping](#-variablen-scoping)
- [Testen](#-testen)
  - [Dinge verstehen und lernen](#-dinge-verstehen-und-lernen)
- [Funktionen](#-funktionen)
  - [Deklaration](#-deklaration)
    - [`function` Keyword](#-function-keyword)
    - [`=>` Keyword (Lambda)](#--keyword-lambda)
  - [Überladen](#-überladen)
  - [Rückgabewerte](#-rückgabewerte)
  - [Sammlungen von Funktionen](#-sammlungen-von-funktionen)
  - [Funktionenx](#-funktionensupxsup)
  - [Curried vs. multiple Arguments](#-curried-vs-multiple-arguments)
  - [Anwendung](#-anwendung)
- [Lambda Calculus](#-lambda-calculus)
  - [Grundbausteine](#-grundbausteine)
    - [$\alpha$ - Alpha Equivalence](#-alpha---alpha-equivalence)
    - [$\beta$ - Beta reduction](#-beta---beta-reduction)
    - [$\eta$ - Eta reduction](#-eta---eta-reduction)
    - [Grundfunktionen](#-grundfunktionen)
  - [Pairs](#-pairs)
  - [Either](#-either)
  - [Boolean Logik](#-boolean-logik)
    - [True / False](#-true--false)
    - [AND](#-and)
    - [OR](#-or)
  - [Map](#-map)
  - [Filter](#-filter)
  - [Reduce](#-reduce)
  - [Indexing](#-indexing)
- [Scripting](#-scripting)
  - [Progressive Web-Applikation](#-progressive-web-applikation)
  - [Expression Evaluation](#-expression-evaluation)
    - [`eval()`](#-eval)
    - [Optimierung mit `Function`](#-optimierung-mit-function)
  - [Referencing](#-referencing)
- [Objekte / Objects](#-objekte--objects)
  - [Offen und dynamisch](#-offen-und-dynamisch)
    - [`this` Keyword](#-this-keyword)
    - [Funktionen aufrufen](#-funktionen-aufrufen)
  - [Geschlossen und explizit](#-geschlossen-und-explizit)
    - [Anwendung](#-anwendung-1)
  - [Gemischt und klassifiziert](#-gemischt-und-klassifiziert)
  - [Konstruktoren](#-konstruktoren)
  - [Reihenfolge von Objekte](#-reihenfolge-von-objekte)
- [Klassen](#-klassen)
  - [Keyword `class`](#-keyword-class)
  - [Keyword `extends`](#-keyword-extends)
  - [Prototypen](#-prototypen)
    - [Setzen von Prototypen](#-setzen-von-prototypen)
    - [Ändern von Prototypen](#-ändern-von-prototypen)
- [Typen](#-typen)
  - [Eingebaute Typen](#-eingebaute-typen)
  - [JsDoc](#-jsdoc)
  - [Funktionen](#-funktionen-1)
    - [Optionalität](#-optionalität)
    - [Template](#-template)
  - [Datenstrukturen / Klassen](#-datenstrukturen--klassen)
  - [Typecast](#-typecast)
  - [Sonstige Annotationen](#-sonstige-annotationen)
- [Patterns](#-patterns)
  - [Observer](#-observer)
  - [MVC](#-mvc)
    - [Model](#-model)
    - [View](#-view)
    - [Controller](#-controller)
- [Asynchrone Programmierung](#-asynchrone-programmierung)
  - [Promise](#-promise)
    - [Async / Await](#-async--await)
- [Koordination](#-koordination)
  - [Keine Koordination](#-keine-koordination)
  - [Sequenz](#-sequenz)
  - [Resultatabhängigkeit](#-resultatabhängigkeit)
- [Modulsystem](#-modulsystem)
  - [Module importieren](#-module-importieren)
  - [Module exportieren](#-module-exportieren)
  - [Auswirkungen](#-auswirkungen)
  - [SOP](#-sop)
- [Transpilers](#-transpilers)
  - [TypeScript](#-typescript)
  - [Elm](#-elm)
  - [PureScript](#-purescript)
    - [PureScript ausprobiert](#-purescript-ausprobiert)
- [Strings](#-strings)
- [Loggen](#-loggen)
  - [Loglevel programmatisch setzen](#-loglevel-programmatisch-setzen)
- [Arrays](#-arrays)
  - [Spread-Operator `...` an Parameterposition](#-spread-operator--an-parameterposition)
  - [Spread-Operator `...` an Konstruktorposition](#-spread-operator--an-konstruktorposition)
  - [Slice](#-slice)
  - [Splice](#-splice)
- [Semicolons](#-semicolons)
- [JavaScript Iterator Protokol](#-javascript-iterator-protokol)
- [Moves](#-moves)
  - [0: Erforschen](#-0-erforschen)
  - [1: Beginne beim Ende](#-1-beginne-beim-ende)
  - [2: Extrahieren](#-2-extrahieren)
  - [3: Abstrahieren](#-3-abstrahieren)
  - [4: Reorganisierung](#-4-reorganisierung)
  - [5: Herausgeben (Release)](#-5-herausgeben-release)
  - [6: Retrospektive](#-6-retrospektive)
- [Crazy JavaScript](#-crazy-javascript)
  - [True and false](#-true-and-false)
  - [Type coercion](#-type-coercion)
  - [Times one would say "What the ..."](#-times-one-would-say-what-the-)
  - [Coole Dinge](#-coole-dinge)
    - [Generatoren](#-generatoren)
    - [Deconstructor](#-deconstructor)

<!-- /code_chunk_output -->


# Generell
JavaScript hat keinen Compiler!

# Variablen
JavaScript kennt zwar keine Typen, jedoch müssen Variablen trotzdem deklariert werden. Dafür kennt JavaScript zwei Keywords, [const](#const) und [let](#let). Es gibt noch `var`, sollte jedoch nicht verwendet werden.
## `Const`
Variablen welche mit `const` instanziiert werden können nicht verändert werden (sind "*immutable*"). Also eine 5 bleibt immer eine 5. Verwendet man Objekte, kann das Objekt nie geändert werden. (die Member der Funktion jedoch schon!) Dasselbe gilt für Arrays.
```javascript {.line-numbers}
const x = 5;
const obj = {x: 10, y: 20};
x = 10;                     // illegal
obj = {x: 20, y: 10};       // illegal
obj.x = 9;                  // allowed
```
!!!info Jede Variable wird aus best-practice mit `const` angelegt. Muss eine Variable dennoch irgendwann verändert werden, wird sie dann auf `let` geändert.
## `Let`
Variablen welche mit `let` instanziiert werden können wieder verändert werden.
```javascript {.line-numbers}
let x = 5;
let obj = {x: 10, y: 20};
x = 10;                     // allowed
obj = {x: 20, y: 10};       // allowed
obj.x = 9;                  // allowed
```

# Scopes
JavaScript bietet zwei Scopes an. Man mag meinen es gäbe mehrere, jedoch bildet JavaScript alles auf einen der zwei Scopes ab. (wobei es sich meistens um einen `function` Scope handelt)
## `global`
Der `global` Scope ist das Fenster (im Browser), also quasi alles was sich auf dem Browserfenster befindet.
### Instanziierung
Variablen im globalen Scope können wie folgt angelegt werden.
```javascript {.line-numbers}
    x = ...
```
!!!Warning Globale Variablen sollten normalerweise nicht verwendet werden.
## `function`
Der `function` Scope ist der Scope einer Funktion oder eines Lambdas. Diese sind dann nur Lokal in der Funktion gültig und werden nach Verlassen der Funktion zerstört.
### Instanziierung
Variablen im Funktionsscope können wie folgt angelegt werden.
```javascript {.line-numbers}
var x = ... // "hoisted"
let x = ...
const x = ...
```
[let](#let) und [const](#const) werden wie nach Beschreibung im lokalen Scope angelegt.

!!!Warning `Hoisted` bedeutet, dass die Variable irgendwo im Code definiert werden kann. Beim Ausführen wird sie dann quasi an den Anfang des Codes gezogen. Das sollte **nie** gemacht werden

### Variablen-Scoping
In verschiedenen Scopes können auch Variablen mit demselben Namen verwendet werden.
```javascript {.line-numbers}
const x = 0;
// so called iife → immediately invoked function expression
(() => {
    const x = 1;
    document.writeln(String(x));
})();
// ↑ executes the iife
document.writeln(String(x));
```
> `$ 1 0`

# Testen
## Dinge verstehen und lernen
Testen in JavaScript geht ganz einfach ohne Framework. Möchte man zum Beispiel einfach etwas auf das Dokument schreiben, geht dies mit `document.writeln("")`. Man kann darin auch Statements anzeigen, zum Beispiel prüfen ob 1 wirklich 1 ist.

```javascript {.line-numbers}
document.writeln("Hallo!");
document.writeln((1 === 1).toString());
```
> `$ Hallo true`

# Funktionen
!!!Info Eine Funktion ist ein Objekt
Funktionen oder auch Subroutinen sind in der Programmierung Codestücke, welche nicht bei der Initialisierung direkt ausgeführt werden müssen, sondern wenn immer nötig aufgerufen werden können
## Deklaration
Funktionen können (sinnvoll) auf zwei verschiedene Arten deklariert werden. Einmal mit dem Keyword [function](#function-keyword) und einmal mit einem [Lambda](#keyword-lambda).
### `function` Keyword
Funktionen die mit dem Keyword `function` deklariert werden, sehen syntaktisch am schönsten aus. Der Rückgabewert wird nicht explizit vor dem Namen, sondern mit dem `return` Wert implizit definiert.

!!!Warning Achtung, eine Funktion welche mit dem `function` Keyword deklariert wird, kann von einer gleichnamigen Funktion überschrieben werden!

Eine Funktion mit dem function Keyword in JavaScript sieht so aus:
```javascript {.line-numbers}
function fun(arg) { return arg; }
// |       |  |
// |       |  Argumente, hier eines mit dem Namen "arg"
// |       Name der Funktion
// Keyword, es folgt die Deklaration einer Funktion
```

### `=>` Keyword (Lambda)
Funktionen in JavaScript können auch mit `() =>` erstellt werden. Es wird in eine Funktion evaluiert. Deklarationen welche anstelle der `()` stehen, definieren die Parameter der Funktion.
```javascript {.line-numbers}
const tok = arg => { return arg; }
//     |
//     Funktionsreferenz
```
!!!success Der Vorteil davon ist, ist dass `tok` nicht mehr überschrieben werden kann, da es mit `const` initialisiert ist.

Wichtig zu bedenken ist, dass `=>` auch für Ausdrücke verwendet werden kann. Fehlen die `{}`, wird die Funktion in einen Ausdruck evaluiert. Es wird kein `return` benötigt, jedoch kann der Ausdruck auch nicht (fehlerfrei) aufgerufen werden.
```javascript {.line-numbers}
const tok = () =>  1;
document.writeln((tok === 1).toString());
```
> `$ true`

## Überladen
Funktionen können nicht Überladen werden, denn der Funktionsdispatcher funktioniert anders wie bei anderen Programmiersprachen. Bei JavaScript merkt er sich vereinfacht gesehen nur den Namen der Funktion, und nicht wie bei zum Beispiel Java die komplette Funktionssignatur.

```javascript {.line-numbers}
function fun1() { return 1; }
document.writeln( (fun1(42) === 1).toString() )
```
> `$ true`

!!!Info Eine Funktion welche keine Parameter nimmt, kann mit Parametern aufgerufen werden. Die Funktion wird (wenn auch mit Fehlern) aufgerufen.

Bei JavaScript ist der Name der Funktion schon ein Ausdruck, das bedeutet es können zwar Kopien erstellt werden (`blah = fun`), und `blah` kann auch mit `blah()` die Funktion `fun` aufrufen, beim Überladen wird jedoch nur die zuletzt deklarierte Funktion geladen.

## Rückgabewerte
Wird kein `return` angegeben, wird davon ausgegangen, dass es sich um eine ``void``-Funktion handelt. Für alle anderen `return` Werte wird der entsprechende Wert zurück gegeben.

## Sammlungen von Funktionen
Funktionen, bzw. Referenzen auf Funktionen können auch in einem Array gespeichert werden.
```javascript {.line-numbers}
const fun1 = () => 1;
const fun2 = () => { 1 };
const funs = [null, undefined, fun1, fun2];
document.writeln( (funs[2]() === 1).toString() );
```
> `$ true`

## Funktionen<sup>x</sup>
JavaScript erlaubt das Zurückgeben von Funktionen in Funktionen (in Funktionen in Funktionen ...).
```javascript {.line-numbers}
function doit(whatToDo) {
    return function bla(arg) { return whatToDo(arg); }
}
const doit2 = callme => arg => callme(arg);

// Both do the same thing!

doit(fun1)(10)
doit2(fun1)(10)
```
Beim Aufrufen der Funktion doit, bzw. doit2 wird eine weitere Funktion zurückgegeben, welche dann wieder mit einem Argument aufgerufen werden kann. Das bedeutet, der Ausdruck `doit(fun1)` ist selbst auch vom Typ Funktion.

!!!Info Diese Funktionen werden auch curried Functions genannt.

## Curried vs. multiple Arguments
In JavaScript können Funktionen curried (zusammengehängt) oder mit mehreren Argumenten definiert werden.
```javascript {.line-numbers}
const foo = (a, b) => a + b;
const bar = a => b => a + b;
document.write(foo("Hi"));
document.write(bar("Hi"));
```
> `$ "Hiundefined" b => a + b`

Beim Verwenden von mehreren Argumenten in einer Funktion wird versucht, das bestmögliche Resultat zu erzielen, auch wenn das nicht immer das ist was man erwartet.
Mit `curried` Funktionen wird nicht einfach etwas gemacht, sondern es wird dargestellt, dass hier noch eine Funktion ist, die ein Argument möchte.
Zusätzlich erlaubt es `curried`, Funktionen zu schreiben, welche nur Teilweise ausgeführt wurden.

## Anwendung
Infolge ist ein Beispiel bei welchem Funktionen eine grosse Rolle spielen. Ein Timer zeichnet das Feld alle 1000/40 Sekunden neu, und berechnet darauf die Position des Balls neu.
```javascript {.line-number}
//... unrelated html
const radius = 10;
const ball = { x: Math.random() * 400, y: 10, dx: 5, dy: 1 };
const old = { x: ball.x, y: ball.y };

function start() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  context.fillStyle = "black";

  // Refreshes every 1000/40 seconds
  setInterval(() => {
    if (Math.abs(ball.dx) < 0.1 && Math.abs(ball.dy) < 0.1) return;
    nextBoard();
    display(context);
  }, 1000 / 40);
}

function nextBoard() {
  old.x = ball.x;
  old.y = ball.y;
  if (ball.y >= 390 && ball.dy > 0) {  // ball.y < 0 cannot occur due to conservation of energy
    ball.dy -= 3.5;
    ball.dy *= -1;
    ball.dx *= 0.95
  }
  if (ball.x <= 10 && ball.dx < 0 || ball.x >= 390 && ball.dx > 0) {
    ball.dx *= -1;
    ball.dx *= 0.8;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;
  ball.y = Math.min(390, ball.y);
  ball.dy += 1.5;      // constant acceleration
}

function display(context) {
  context.clearRect(old.x - radius - 1, old.y - radius - 1, 22, 22);
  context.beginPath();
  context.arc(ball.x, ball.y, radius, 0, 6.3, false);
  context.fill();
}
// ... unrelated html
```
<iframe src=resources/javascript/Ball/Ball.html frameBorder="0" style="height:440px; width: 100%">
The ball script should be here :(
</iframe>

[Source](resources/javascript/Ball/Ball.js)

# Lambda Calculus
Mithilfe des Lambda Calculus kann alles berechenbare berechnet werden. JavaScript basiert auf diesen Lambda Calculus Eigenschaften.

!!!Info `x => x` in JavaScript ist das gleiche wie $\lambda x . x$ im Lambda Calculus

## Grundbausteine
### $\alpha$ - Alpha Equivalence
!!!Quote Rename parameter
Der Name in einem Lambda ist nicht ausschlaggebend für eine Funktion. Er kann umbenannt werden wie man möchte, der Effekt der Funktion ändert sich nicht.
```javascript {.line-numbers}
const id1 = x => x
const id2 = gurkensalat => gurkensalat
```

### $\beta$ - Beta reduction
!!!Quote Apply argument
Reduzieren der Argumente von mehreren Funktionen auf das endgültige Resultat. Also Quasi das ersetzen von Variablen durch den effektiven Wert.
```javascript {.line-numbers}
const id = x => x;
( f => x => f (x)) (id) (1)  // f evaluates to 1
(      x => id (x)) (1)      // x evaluates to 1
(           id (1))          // id = "x => x"
( x => x ) (1)               // x evaluates to 1
(1)
```

### $\eta$ - Eta reduction
!!!Quote Cancel parameter
Wenn das letzte Argument auf der rechten Seite dasselbe ist wie das letzte Argument auf der Linken Seite, darf dieses gelöscht (gekürzt) werden. (Solange "plus" im Beispiel keine Nebenwirkungen hat)
```javascript {.line-numbers}
x => y => plus(x)(y)    // Implementation of function  ...
x =>      plus(x)       // ... with eta reduction ...
          plus          // ... gives us the reference to the function
```

### Grundfunktionen
Alles was sich im Lambda Calculus berechnen lässt, lässt sich auf 3 Grundfunktionen zurückführen:
- `const id = y => y;`
- `const konst = x => y => x;`
- (selten verwendet)
```javascript {.line-numbers}
// const kite = x => y => y;        // Expand with ID
// const kite = x => y => id(y)     // Eta reduction
// const kite = x => id;            // Expand with konst
// const kite = x => konst(id)(x)   // Eta reduction
const kite = konst(id)              // Finished!
document.writeln(kite(undefined)(0) === 0);
```
> `$ true`

## Pairs
Pairs sind Paare von Daten, wo zwei (idealerweise miteinander verwandte Daten)  abgespeichert werden können. Wie viele andere Dinge kann diese Datenstruktur auch mit Lambda-Calculus nachgebildet werden.
```javascript {.line-numbers}
const Pair = fn => ln => selector => selector(fn)(ln);
const firstname = x => y => x;  // konst
const lastname = x => y => y;   // snd

const joel = Pair("Joel")("Allemann");      // immutable, because "Pair => fn => ln", fn /ln are a closure
document.writeln(joel(firstname) === "Joel");
document.writeln(joel(lastname)  === "Allemann");
```
> `$ true true`

## Either
Either bedeutet entweder das eine oder das andere. Man kann also einen Ausdruck aufrufen, und kriegt entweder den ersten Wert oder den zweiten Wert zurück.
```javascript {.line-numbers}
const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const Either = e => handleLeft => handleRight => e(handleLeft)(handleRight); // can be replaced with id

const safeDiv = num => divisor =>
    divisor === 0 ? Left("schlecht!") : Right(num / divisor);

Either( safeDiv(1)(1)  )
      ( x => document.writeln(x))
      ( x => document.writeln(x));

Either( safeDiv(1)(0)  )
      ( x => document.writeln(x))
      ( x => document.writeln(x));
```
> `$ 1 schlecht!`

!!!Warning Zu bedenken ist, dass die Either-Methode nicht ausgeführt wird, wenn entweder der Linke und der Rechte Wert nicht bearbeitet wird.
!!!Success Der Vorteil ist, dass man im "guten" Teil nie ein undefined oder falscher Wert stehen wird.

## Boolean Logik
Mit Lambdas kann auch boolean Logik gebaut werden.

### True / False
Um True / False darzustellen, wird ganz einfach ein T und ein F definiert.
- `T` gibt "1" zurück, wenn das erste Argument 1 ist.
- `F` gibt "1" zurück, wenn das zweite Argument 1 ist.
```javascript {.line-numbers}
const konst = x => y => x;
const snd = x => y => y;
T = konst;  // True Function
F = snd;    // False Function
document.writeln(T(1)(0) === 1);
document.writeln(F(0)(1) === 1);
```
> `$ true true`

!!!Success Damit lassen sich nun ganze Logikgatter nachbauen.

### AND
AND bedeutet, dass beide Inputs auf **true** sein müssen damit auch der Output **true** ist.
|a|b|z|
|-|-|-|
|0|0|0|
|0|**1**|0|
|**1**|0|0|
|**1**|**1**|**1**|

```javascript {.line-numbers}
//                   x = ↓   TRUE  ↓↓  FALSE  ↓
//const and = x => y => x( y(T)(F) )( y(F)(F) )
const and = x => y => x(y)(x)

document.writeln(and(F)(F) === F);
document.writeln(and(T)(F) === F);
document.writeln(and(F)(T) === F);
document.writeln(and(T)(T) === T);
```
> `$ true true true true`

### OR
Die OR Funktion
|a|b|z|
|-|-|-|
|0|0|0|
|0|**1**|**1**|
|**1**|0|**1**|
|**1**|**1**|**1**|
```javascript {.line-numbers}
//const or = x => y => x(y(T)(T))(y(T)(F))
const or = x => y => x(x)(y)

document.writeln(or(F)(F) === F);
document.writeln(or(T)(F) === T);
document.writeln(or(F)(T) === T);
document.writeln(or(T)(T) === T);
```
> `$ true true true true`

## Map
Das mappen von Daten bedeutet, dass auf jedes Element in einer Menge eine Funktion angewendet wird. Beim Anwenden einer `map` wird immer dieselbe Menge und der selbe Datentyp der Menge zurück gegeben.

!!!Info Es ändern sich nur die einzelnen Elemente. (Und unter Umständen ihre Datentypen)
> `[1, 2, 3] → x => x * 2 → [2, 4, 6]`

```javascript {.line-numbers}
const times = a => b => a * b;
[1, 2, 3].map(x => times(2)(x))
[1, 2, 3].map(times(2))     // lambda calculus allows for eta-reduction
const twoTimes = times(2);  // name a specific function → alpha-reduction
[1, 2, 3].map(twoTimes)
```

## Filter
Das Filtern von Daten bedeutet, dass auf jedes Element in einer Menge auf eine Condition geprüft wird. Beim Anwenden eines `filters` werden alle Elemente aus der Liste entfernt (oder behalten), auf welchem eine Condition `true` (oder `false`) gibt. Dabei wird der Datentyp der Liste, sowie die einzelnen Elemente welche noch behalten werden, nicht geändert.

!!!Info Es ändert sich nur die Menge an Elementen.

> `[1, 2, 3] → x => x % 2 === 1 → [1, 3]`

```javascript {.line-numbers}
const odd = x => x % 2 === 1;
[1, 2, 3].filter(x => x % 2 === 1);
[1, 2, 3].filter(x => odd(x))   // name a specific function → alpha-reduction
[1, 2, 3].filter(odd);          // lambda calculus allows for eta-reduction
```

## Reduce
Das Reduzieren von Daten bedeutet, dass auf jedes Element zusammen in der Menge eine kombinierende Funktion angewendet wird. Dabei wird auf das 1. und 2. Element die Funktion angewendet, dann auf das Resultat davon mit dem 3. Element etc. Dabei spricht man vom ersten Element (im Beispiel unten `x`) vom Akkumulator, und vom zweiten Element (im Beispiel unten `y`) vom Current.

!!!Info Es ändern sich alles bis auf den Datentyp, dieser bleibt auf dem Typ des Akkumulators.

> `[1, 2, 3] → x => y => x + y → 6`

```javascript {.line-numbers}
const plus = (accu, cur) => accu + cur;
[1, 2, 3].reduce((accu, cur) => accu + cur);
[1, 2, 3].reduce(plus);
[1, 2, 3].reduce(plus, 0); // The 0 sets the start value and the datatype
document.write([1, 2, 3].reduce(plus, 0));
document.write([1, 2, 3].reduce(plus, ""));
document.write([1, 2, 3].reduce((acc, cur) => [...acc, cur], [])) // Copies an array
```
> `$ 6 "123" [1, 2, 3]`

!!!Info Das Setzen des zweiten Arguments der `reduce` Funktion hat zwei Vorteile. Zum einen ist klar definiert, welcher Wert gesetzt ist, wenn die Liste leer ist. Zum anderen ist der Datentyp klar definiert.

## Indexing
Benötigt man in `map`, `reduce` oder `filter` einmal die Indexe, kann man Problemlos den Index abgreifen.
```javascript {.line-numbers}
$ const a1 = "a b c d".split("");
→ ["a", "b", "c", "d"]
$ [1, 2, 3, 4].map( (it, idx) => a1[idx] + it );
→ ["a1", "b2", "c3", "d4"]
```
Hier wird `it` verwendet um die Indizes aus dem Array `[1, 2, 3, 4]` zu verwerten und mit dem Array `["a", "b", "c", "d"]` zu verknüpfen.

# Scripting
Scripting ist ein komplett eigenes Paradigma in der Welt von JavaScript. Vieles kann mit Scripting sehr einfach programmiert werden, wie zum Beispiel Automation, Build Systeme, Command Line, self-modifying-code etc. Scripting bedeutet, dass der Code als Text während der Laufzeit "gelesen" wird und dann evaluiert wird, das ist auch als *interpretiert* bekannt.
## Progressive Web-Applikation
Eine Web-Applikation bei welcher der (komplette) Code noch nicht bekannt ist. Dieser lädt sich dann progressiv, je nach Verlangen, nach.
```javascript {.line-numbers}
// First solution, loading everything (non dynamic)
<script src="function/function.js"></script>
<script src="function/functionTest.js"></script>

<script src="lambda/lambda.js"></script>
<script src="lambda/lambdaTest.js"></script>

<script src="snake/snake.js"></script>
<script src="snake/snakeTest.js"></script>

// Better solution with "unlimited" programs
const testSuite = [
    "function",
    "lambda",
    "snake",
];

// execute for each element in testSuite
testSuite.forEach(name => {
    // obfuscation, because else JavaScript would see this        (↓) as end of script
    document.writeln("<script src=\"" + name + "/" + name + ".js\"></" + "script>");
    document.writeln("<script src=\"" + name + "/" + name + "Test.js\"></" + "script>");
})
```
> `true true true t..`

Progressiv ist hier, dass die Programme sowie deren Test-Programme erst im Nachhinein geladen werden, während das Hauptprogramm schon gestartet ist. Dies erlaubt unter anderem hier diese schöne TestSuite aufzubauen, welche (anstatt jede Datei aufzuschreiben) nur den Namen benötigt.

!!! Warning Progressives Laden darf normalerweise nur aus der selben Quelle geschehen. Mit diesem Trick kann das jedoch ganz einfach umgangen werden.

## Expression Evaluation
JavaScript bietet die Möglichkeit, externe Expressions zur Laufzeit zu evaluieren und auszuführen. Dafür gibt es eine Applikation **Function Plotter**, welcher eine eine beliebige Funktion auf einem Canvas zeichnet.

```javascript {.line-numbers}
//... unrelated html
function start() {
  const userFunction = document.getElementById('user_function');
  const canvas       = document.getElementById('canvas');

  // run display with canvas and user evaluated function
  const displayIt = () => display(canvas, x => eval(userFunction.value));
  displayIt();
  userFunction.onchange = () => displayIt();
}

function display(canvas, f) {
  // clear
  const context     = canvas.getContext("2d");
  context.fillStyle = "papayawhip";
  context.fillRect(0, 0, canvas.width, canvas.height);
  // draw the function plot
  const normx = normalizeX(canvas.width);
  const normy = normalizeY(canvas.height);

  context.fillStyle = "black";
  context.beginPath();
  context.moveTo(normx(minX), normy(f(minX)));

  const stride = (maxX - minX) / 100; // 100 Stützstellen
  for (let x = minX; x <= maxX; x += stride) {
    context.lineTo(normx(x), normy(f(x)));
    context.stroke();
  }
}

const normalizeY = height => y => {
  const scaleFactor = height / (maxY - minY);
  return height - (y - minY) * scaleFactor;
};

const normalizeX = width => x => {
  const scaleFactor = width / (maxX - minX);
  return ( x - minX) * scaleFactor;
};
//... unrelated html
```

<iframe src=resources/javascript/Plotter/Plotter.html frameBorder="0" style="height:650px; width: 100%">
The plotter script should be here :(
</iframe>

[Source](resources/javascript/Plotter/Plotter.js)

Der Plotter verwendet die Funktion `eval()` um vom Benutzer eingegebene Funktionen zu evaluieren. Wird zum Beispiel die Funktion `Math.sin(x)` verwendet, evaluiert sie zum gleichgeschriebenen Code, und mithilfe von `x => ...` wird sie zu einer richtig ausführbaren Funktion.
### `eval()`
Die Funktion `eval()` führt einen beliebigen String Code aus, welcher als Parameter mitgegeben wird. Eval kann auf den gesamten Scope, aus dem die Funktion aufgerufen wird, ausgeführt werden.
```javascript {.line-numbers}
eval("console.log(\"Hello!\")")
```
> `Hello!`

### Optimierung mit `Function`
Das Problem an `eval()` ist, dass bei jedem Aufruf alles erneut geparsed wird. `Function` kann dasselbe wie `eval()`, macht jedoch direkt eine Referenz auf eine ausführbahre Funktion. Zusätzlich hat diese Funktion (wie alle Funktionen), nur Zugriff auf den [globalen Scope](#global) sowie auf seinen eigenen [Funktionsscope](#function).
```javascript {.line-numbers}
const displayIt = () => display(canvas, Function('x', 'return ' + userFunction.value));
```
Wichtig, da es sich hier um eine "konventionelle" Funktion handelt, muss der Wert am Schluss unbedingt mit `return` zurückgegeben werden.

## Referencing
Zum Teil müssen von Programmen Werte aus Feldern / Forms lesen. Für das kann man in JavaScript auf deren Referenzen (wie in css mit #id) zugreifen und deren Werte auslesen. In der Excel Applikation wird genau das gemacht - es wird über die ID auf die jeweiligen Elemente zugegriffen und deren Werte evaluiert.
```javascript {.line-numbers}
//... unrelated html
// Construct the initial table
const Formulae = {
  A1: '1', B1: '1', C1: 'n(A1) + n(B1)',
  A2: '2', B2: '2', C2: 'n(A2) + n(B2)',
  A3: 'n(A1) + n(A2)', B3: 'n(B1) + n(B2)', C3: 'n(C1) + n(C2)',
};

const cols = ["A", "B", "C"];
const rows = ["1", "2", "3"];

function startExcel() {
  const dataContainer = document.getElementById('dataContainer');
  fillTable(dataContainer);
}

function fillTable(container) {
  rows.forEach(row => {
    const tr = document.createElement("TR");
    cols.forEach(col => {
      const td = document.createElement("TD");
      const input = document.createElement("INPUT");
      const cellid = "" + col + row;
      input.setAttribute("VALUE", Formulae[cellid]);
      input.setAttribute("ID", cellid);
      // Register a listener, which updates the Formulae table on change
      input.onchange = evt => {
        Formulae[cellid] = input.value;
        refresh();
      };
      // When clicked onto the field, load formulae
      input.onclick = evt => input.value = Formulae[cellid];
      td.appendChild(input);
      tr.appendChild(td);
    });
    container.appendChild(tr);
  });
}

// Refresh the table
function refresh() {
  cols.forEach(col => {
    rows.forEach(row => {
      const cellid = "" + col + row;
      const input = document.getElementById(cellid);
      input.value = eval(Formulae[cellid]);
    });
  });
}

// get the numerical value of an input element's value attribute
function n(input) {
  return Number(input.value);
}
//... unrelated html
```
<iframe src=resources/javascript/Excel/Excel.html frameBorder="0" style="width: 100%">
The excel script should be here :(
</iframe>

[Source](resources/javascript/Excel/Excel.js)

Wie beim Plotter werden die Werte in den Zellen eingelesen, und evaluiert. Die Werte in der Klammer werden dann als `input` Objekt weitergegeben und von der Funktion `n` in Zahlen umgewandelt, und zusätzlich werden die einzelnen Funktionen (also das +) ausgeführt.

!!!Warning Dieses Excel funktioniert nur gegen oben, also wenn eine Variable unter dem Feld benötigt wird (welche auch zuerst noch berechnet werden muss), funktioniert diese Funktion nicht. Siehe [Resultatabhängigkeit](#resultatabhängigkeit)

# Objekte / Objects
Objekte sind Datenstrukturen mit Methoden, die das managen und zugreiffen auf diese erlauben. Sie werden oft als Ort verwendet, um veränderbare (mutable) Daten zu speichern. Zusätzlich helfen Objekte, eine gewisse Abstraktion zu geben - indem man mehreren gleiche Objekte (wie zum Beispiel Punkte mit x- und y-Koordinaten) Namen geben kann.

!!!Warning Objekte und Objects sind nicht unbedingt dasselbe. Das eine sind Objekte ähnlich zu Java, die anderen sind Objects welche sich mehr wie ein Dictionary verhalten.

## Offen und dynamisch

!!!Quote Keine Sicherheit aber super dynamisch

Die bekannten "Dictionary" JavaScript Objects sind wiefolgt aufgebaut:

```javascript {.line-numbers}
const good = {
  firstname : "Good",
  lastname  : "Boy",
  getName   : function() {
      return this.firstname + " " + this.lastname;
  }
};
```

Dabei ist alles ein Key-Value-Pair, sogar [Funktionen](#funktionen).

!!!Info Der Key ist immer ein String

### `this` Keyword
Um in einer Funktion mit dem `function` Keyword auf eine Variable des Objekts zuzugreifen, benögtigt man das `this` Keyword.

!!!Warning Mit dem `=>` Lambda Keyword kann nicht auf Variablen des Objekts zugegriffen werden.

### Funktionen aufrufen
Das Aufrufen von Funktionen in JavaScript funktioniert vom Syntax her fast genau gleich wie in Java. Das Problem daran ist, dass sich Funktionen in JavaScript aber nicht so verhalten, sondern zum Teil ganz andere Ausgaben produzieren, wie man erwartet.

```javascript {.line-numbers}
const jedi = {
  firstname : "Obi-Wan",
  lastname  : "Kenobi,
  getName   : function() {
      return this.firstname + " " + this.lastname;
  }
};

const sith = {
  name     : "Luke",
  getName  : function() {
    return this.firstname;
  }
  getEnemy : jedi.getName
};

document.writeln(jedi.getName() + "\n");
document.writeln(sith.getName() + " hates " + sith.getEnemy());
```
> `$ Obi-Wan Kenobi`
> `$ Luke hates undefined`

Diese Ausgabe kann sehr verwirrend sein. Das `undefined` nach "hates" ist passiert, weil das `getName` von `jedi` in `sith` auf die Elemente/Member in `sith` zugreift, und gibt dann für `lastname` `undefined` zurück weil `sith` dieses Feld nicht hat.

## Geschlossen und explizit

!!!Quote Beste Sicherheit, einfach zu teilen, aber keine Klasse

Es gibt auch die Möglichkeit eine Art Factory zu bauen, bei welcher beim Aufrufen einer Funktion die den Konstruktor repräsentiert, ein Objekt generiert wird.

```javascript {.line-numbers}
function Person(first, last) {
  let firstname = first;  // immutable
  let lastname  = last;   // immutable
  return {
    getName: function() {
      return firstname + " " + lastname; // 'this' is gone!
    },
    setName: function(name) {
      firstname = name;
    }
  }
}
```
In diesem Beispiel wird `firstname` und `lastname` immuteable, und sie können nur Mithilfe des Setters geändert werden.
Alles was im `return` gegeben mitgegeben wird, ist dann von aussen zugänglich.

→ Müssen geschlossene und explizite Objekte identifiziert werden, kann die Methode [setzen von Prototypen](#setzen-von-prototypen) verwendet werden.

### Anwendung
Der geschlossene und explizite Ansatz eignet sich sehr gut für einfachen aber auch komplexeren Code, da er das Prinzip von Klassen fast am besten reflektiert. In diesem Beispiel wird das Spiel `OOPSIE` mithilfe von Objekten vereinfacht. Es ist damit auch einfacher, mehrere Spieler zu implementieren - quasi so viele wie man möchte.

!!!Info OOPSIE ist ein Spiel bei welchem gewürfelt wird. Man darf würfeln bis man genug hat, oder bis man eine 3 Würfelt. Im Falle der 3 wird man auf das Feld zurückgesetzt, bei welchem man seine Runde gestartet hat.

Das Objekt verwendet die versteckten Attribute `fallbackIndex` und `progressIndex` um die Position im Spiel zu speichern (und darzustellen). Im Fall dass keine 3 gewürfelt wurde, wird der `progress` erweitert, und bei einem `turn` dieser Wert als `fallback` gespeichert. Sollte man eine 3 Würfeln, wird man ganz einfach auf das Feld zurück geworfen, welches im `fallbackIndex` gespeichert ist.
Speziell ist noch die Reset Funktion, welche den Spieler ganz an den Anfang zurück schmeisst. Diese wird aufgerufen, wenn der andere Spieler auf demselben Feld landet wie dieser Spieler.
```javascript {.line-number}
// ... unrelated code
function Player(givenName) {
  let name = givenName;
  let fallbackIndex = 0;
  let progressIndex = 0;
  return {
    proceed          : stride => progressIndex += stride,
    fallback         : () => progressIndex = fallbackIndex,
    turn             : () => fallbackIndex = progressIndex,
    getFallbackIndex : () => fallbackIndex,
    getProgressIndex : () => progressIndex,
    reset            : () => {
      fallbackIndex = 0;
      progressIndex = 0;
    }
  }
}
// ... unrelated code
```
<iframe src=resources/javascript/Oopsie/Oopsie.html frameBorder="0" style="height:550px; width: 100%">
The oopsie script should be here :(
</iframe>

[Source](resources/javascript/Oopsie/Oopsie.js)

## Gemischt und klassifiziert
Das folgende Schema ist das meistverwendete - das Prototypenschema. Wir hier etwas geändert, werden alle Objekte die daraus instanziert wurden auch geändert.
```javascript {.line-numbers}
const Person = ( () => {          // lexical scope
  function Person(first, last) {  // Constructor and binding
    this.firstname = first;
    this.lastname  = last;
  }
  Person.prototype.getName = function() {
    return this.firstname + " " + this.lastname;
  }
  return Person;
}) (); // IIFE

new Person("Good", "Boy") instanceof Person;
```
- `new` → Generiert neues leeres Objekt (einen [Prototypen](#prototypen)), mit eigenem [Scope](#scopes).
- `function Person` → Initialisiert dieses leere Objekt mit einer Person.
- `Person.prototype.getName` → Generiert eine neue Funktion im Prototyp, welche auf das `this` (also den Scope) des neugenerierten Objekts referenziert.

Objekte welche so generiert werden, haben einen Typ, in diesem Fall den Typ `Person`. Dieser kann auch mit `instanceof` geprüft werden.

## Konstruktoren
Wie Arrays können Objekte mit verschiedenen Konstruktoren generiert werden.
```javascript {.line-numbers}
$ const obj = {x:1, y:2, z:3};
$ let foo;
// Object in parameter position
$ foo = (myobj) => console.log(myobj.x);
$ foo(obj);
→ 1
// Object deconstruction in parameter position
$ foo = ({x, y}) => console.log(x); // we get an object that has x and y, and maybe any other thing
$ foo(obj)
→ 1
$ const baz = () => obj;
$ const {x, y} = baz();
$ x
→ 1
```
Der literale Objektkonstruktor kann noch etwas mehr. Er kann auch direkt die Werte in einer Variable in einen gleichnahmigen Schlüssel speichern. Das kann man auch nutzen um aussagekräftigere Konsolenlogs zu erstellen.
```javascript {.line-numbers}
$ let x = 1;
$ let y = 2;
$ let obj = {x: x, y: y};
$ obj
→ {x: 1, y: 2}
$ obj = {x, y}  // shorter version of line 3
→ {x: 1, y: 2}
$ console.log("x: " + x, "y: " + y);
→ "x ist 1"  "y ist 2"
$ console.log({x, y}) // short version of line 8
→ {x: 1, y: 2}
```
Auch Funktionen müssen nicht explizit mit `function` definiert werden. Das Keyword kann weggelassen werden, und JavaScript evaluiert dies automatisch in einen Key des Objekts.
```javascript {.line-numbers}
$ let obj = { foo : function (x) {console.log(x)} };
$ obj.foo(42)
-> 42
$ obj = { foo(x) {console.log(x)} }; // JavaScript evalutes this into a function automatically
$ obj.foo(42)
-> 42
```

## Reihenfolge von Objekte
Properties von Objekten sind immer in einer definierten Reihenfolge. Die Reihenfolge ist wiefolgt definiert:
1) Strings welche eine Zahl Repräsentieren (aufsteigend)
2) Eingabereihenfolge

```javascript {.line-numbers}
$ Object.entries({a:1, b:2});  // iterate over the entries
→ [["a", 1], ["b", 2]]
$ Object.entries({a:1, b:2, 11:"x", 3:"y"});
→ [["3", "y"], ["11", "x"], ["a", 1], ["b", 2]]
```

# Klassen
!!!Quote Classes tend to be bad modules - D. Crockford, How JS works
Klassen sind in der Objektorientierten Programmierung immer vorzufinden. Sie sind dafür da, Objekte zu "klassifizieren", also zu erkennen zu was ein Objekt gehört.

## Keyword `class`
Das `class` Keyword wurde mit ES6 eingeführt. Man kann auch ohne damit arbeiten, und sollte nur als Synktatischer Zucker angesehen werden.
```javascript {.line-numbers}
class Person {
  constructor(first, last) {
    this.firstname = first;
    this.lastname = last;
  }
  getName() {
    return this.firstname + " " + this.lastname;
  }
}
const pers = new Person("Good", "Boy");
document.writeln(pers instanceof Person)
document.writeln(pers.getName())
```
> `$ true Good Boy`

Das `getName()` ist im Hintergrund dasselbe wie bei [gemischt und klassifiziert](#gemischt-und-klassifiziert).

## Keyword `extends`
"Erweitert" eine Klasse mit neuen Attributen und Funktionen.
```javascript {.line-numbers}
class Student extends Person {
  constructor(first, last, grade) {
    super(first, last);
    this.grade = grade
  }
}
const s = new Student("Top", "Student", 5.5);
```
Im Hintergrund arbeitet JavaScript mit miteinander verknüpften Prototypen.

## Prototypen
Prototypen sind ganz normale Objekte. Ihre Anwendung macht sie jedoch speziell. Der "Typ" eines Objektes wird über seinen Prototyp bestimmt.
```javascript
const s = new Student();
/*
 |  Student  |     |  Person   |     |  Object   |
 | prototype |  →  | prototype |  →  | prototype |
_______|
|                                                */
document.writeln(s.__proto__ === Student.prototype);
document.writeln(Object.getPrototypeOf(s) === Student.prototype);
document.writeln(s instanceof Student)
```
> `$ true true true`

JavaScript verarbeitet Vererbung ganz anders. Wenn auf einem Objekt eine Funktion aufgerufen wird, welche nicht vorhanden wird, prüft JavaScript ob das Objekt ein `Prototyp` hat, und wenn ja, prüft es ob der `Prototyp` die entsprechende Methode hat. Da die `Prototypen` verlinkt sind, findet JavaScript entweder die Funktion in einem verlinkten `Prototyp`, oder im Falle dass er es nicht findet einen Fehler. Darum werden auch Methoden von Objekten verändert, wenn der `Prototyp` verändert wird.

Alle Methoden einer "Klasse" werden im `Prototyp` (wie in [gemischt und klassifiziert](#gemischt-und-klassifiziert)) angelegt.

### Setzen von Prototypen
Die Prototypen können auch dynamisch gesetzt werden. Hat man zum Beispiel ein Objekt [geschlossen und explizit](#geschlossen-und-explizit) angelegt, kann man die "Identifizierung" machen, indem man den Prototypen setzt.

```javascript {.line-numbers}
function Person(first, last) {
  let firstname = first;
  let lastname  = last;
  const result = {
    getName: function() {
      return firstname + " " + lastname;
    },
    setName: function(name) {
      firstname = name;
    }
  }
  Object.setPrototypeOf(result, Person.prototype);
  return result;
}
```

!!!Warning Weil die Prototypen dyanmisch verändert werden können, können Codebasen enorm stark verändert werden!

### Ändern von Prototypen
Unsere Idee ist es nun eine Funktion zu schreiben, welche für jede erdenkliche Nummer `n` eine Funktion n-mal ausführt.

```javascript {.line-numbers}
// We need function keyword here because we need 'this'
Number.prototype.times = function(f) {
    return Array.from({length: this}).map((_, index) => f(index));
}
(10).times( n => document.writeln(n) );
```
> `$ 0 1 2 3 4 5 6 7 8 9`

Mit dem Überschreiben des `prototype` kann man für **alle** Nummern in JavaScript diese Funktionalität hinzufügen.

!!!Warning Das geht auch mit Packages welche bei npm hochgeladen werden

# Typen
JavaScript hat ein Typsystem namens Unityped, jedoch ist Javascript nicht streng typisiert. Es ist möglich, mit Hilfe von JsDoc Typen in einer IDE zu prüfen, wenn sie so konfiguriert ist.
## Eingebaute Typen
Eingebaute Typen umfassen: `Boolean`, `Number`, `String`, `Object`, `BigInt`, `Symbol`, `Null`, `Undefined`, `Function` (typeof)
Zusätzlich bietet JavaScript Objekt "Klassen" an: `Array`, `Date`, `RegExp`, `Error`, `Map`, `Set`, `JSON`, ...

## JsDoc
JsDoc hilft, den Code sauber zu dokumentieren. Zusätzlich hilft es, Variablen zu typisieren. Dabei wird der IDE gesagt, dass sie auf Typen prüfen soll. Der Code funktioniert aber immernoch, auch wenn die Typisierung nicht einghalten wird.

!!! Note Dass dies in Visual Studio Code Funktioniert, muss das Dokument mit `// @ts-check` beginnen

## Funktionen
Funktionen werden mit JsDoc folgendermassen dokumentiert:
```javascript {.line-numbers}
/**
 * Prints something to the log
 * @param { !String } toPrint - the string which will logged to console
 * @returns { void }
 * @function
 */
function print(toPrint) {
  document.writeln(toPrint)
}
print("Hello")  // IDE will be ok with that
print(123)      // IDE will report that types do not match
```
> `$ Hello 123`

- `@function` definiert dass der folgende Codeblock eine Funktion ist.
- `@param` definiert die Parameter einer Funktion
- `returns` definiert den zurückgegebenen Wert einer Funktion

### Optionalität
Um einen Typen zu forcieren, oder auch optional zu machen, können zusätzliche Zeichen verwendet werden:
- `!` am Anfang sagt, dass der Wert nicht `null` sein darf
- `?` am Ende sagt, dass das Element optional ist
- `...` am Anfang bedeutet, dass 0, 1 oder beliebig viele Elemente von dem Typ erlaubt sind

### Template
Wenn eine Funktion genau den Typen zurück gibt, die ihr als Parameter mitgegeben wird, wird ein sogenanntes `template` verwendet.

```javascript {.line-numbers}
/**
 * Identity function
 * The function is pure and runs in O(1). Function calls can be inlined.
 * @template a
 * @param { a } x
 * @return { a } - the parameter {@link x} unchanged
 * @example
 * id(1) === 1
 */
const id = x => x;

/**
 * A function with two parameters in curried form, that returns the first of the two parameters.
 * @type { <a> (x:a) => (...*) => a  }
 * @example
 * konst(42)(null) === 42;
 */
const konst = x => y => x;
```
Das `a` repräsentiert dabei den beliebigen Typ. Zusätzlich kann man das `@template a` auch durch ein `<a>` tauschen, welches dann für eine Zeile zählt.

## Datenstrukturen / Klassen
Datenstrukturen, also Klassen, werden mit JsDoc folgendermassen dokumentiert:
```javascript {.line-numbers}
/**
 * @typedef PlayerType
 * @property { () => String } getName
 * @property { () => Number } getAge
 * @property { (age:!Number) => void } getOlder - ages the person by {@link age}
 */

/**
 * @param { String } first
 * @param { String } last
 * @return { PlayerType }
 * @constructor
 * @example
 * Person("Joel", "Allemann")
 */
const Person = (first, last) => {
  const firstname = first;
  const lastname = last;
  let age = 0;
  return {
    getName  : () => { return (firstname + "  " + lastname) },
    getAge   : () => { return age },
    getOlder : years => age += years
  }
}
```
Konstruktoren werden mit `@constructor` gekennzeichnet. Properties dieser Klassen, also sogesehen Methoden, werden mit `@property` gekennzeichnet. Mithilfe von `@typedef` wird definiert, dass das folgende JsDoc einen Typen definiert.

```javascript {.line-numbers}
  /**
   * @param { "NEW" | "OLD" } oldOrNew
   * @return { void }
   */
  function oldOrNew (type) {
    if(type == "OLD"){
      console.log("The string is old");
    } else {
      console.log("The string is new");
    }
  }
```
Zusätzlich können `|` und `&` verwendet werden, um entweder **unions** (nur diese Werte sind erlaubt) oder **intersections** (dieser Wert welcher auch den anderen Wert hat sind erlaubt) zu generieren. Auch String literale können definiert werden, was bedeuetet, nur die literalen Strings sind erlaubt. Das `&` macht vor allem Sinn, wenn man nur z.B. Personen möchte, welche das property `cool` haben.

## Typecast
Manchmal muss man Typen casten. Man hilft so, dass Typen welche nicht klar gefolgert werden können, klar definiert sind.
```javascript {.line-numbers}
/* @type { String } */ const var = "Hello";
```

## Sonstige Annotationen
JsDoc erlaubt es beliebige Annotationen zu schreiben. Diese werden zwar von der IDE nicht speziell dargestellt, trotzdem ist es ein nettes Feature. Zusätzlich unterstützt die Beschreibung Markdown.
```javascript {.line-numbers}
/**
 * @LambdaCalculus $\lambda x . x$
 * ...
 */
  const id = x => x;
```

# Patterns
Wie in Java gibt es diverse Patterns, welche mit JavaScript implementiert werden können.

## Observer
Das Observer Pattern erlaubt es aufgrund von Wertänderungen Funktionen auszuführen. Das erlaubt, dass zum Beispiel im UI ein Text geändert wird, weil sich in der Business Logik ein Wert geändert hat.

```javascript {.line-numbers}
/**
 * @template _T_
 * @param { _T_ } value
 * @param { _T_ } oldValue
 * @function ObserverCallback
 */

/**
 * @typedef ObservableType
 * @template _T_
 * @property { () => _T_ } getValue - returns the current value of the observable
 * @property { newValue:_T_ => void } setValue - sets the observable to the value {@link newValue} and updates all listeners
 * @property { ObserverCallback<_T_> => void } onChange - the callback that should be called when the value changes
 * @property { ObserverCallback<_T_> => void } removeListener - removes the listener from the listener list and thus ending all notifications to it
 */

/**
 * A simple Observable that updates listeners with the old and new value
 * @param { _T_ } value - the initial value of the variable
 * @return { ObservableType<_T_> }
 * @constructor
 */
const Observable = value => {
  const listeners = [];
  return {
    getValue: ()             => value,
    setValue: newValue       => {
      if (value === newValue) return;
      const oldValue = value;
      value = newValue;
      listeners.forEach(callback => callback(value, oldValue));
    },
    onChange: callback       => {
      listeners.push(callback);
      callback(value, value);
    },
    removeListener: callback => {
      const i = list.indexOf(callback);
      if (i >= 0) { list.splice(i, 1) }
    }
  }
};

const observable = new Observable(0);
observable.onChange((value, oldValue) => {
  document.writeln("The value is " + value + " and was " + oldValue + "\n")
});
observable.setValue(42);
observable.setValue(7);
```
> `$ The value is 0 and was 0`
> `$ The value is 42 and was 0`
> `$ The value is 7 and was 42`

!!! Warning Wird ein Listener nicht mehr gebraucht sollte er unbedingt aus dem Observable entfernt werden, ansonsten entstehen Memory Leaks.

## MVC
Das MVC Pattern, oder auch **M**odel **V**iew **C**ontroller Pattern wird in JavaScript oft verwendet. Dabei wird die Business Logik von der UI Logik getrennt und mit einem Layer verbunden. Infolge wird das MVC anhand einer grafischen ToDo Liste implementiert.

### Model
Das Model ist die erste Komponente des MVCs. Das Model hält die internen Daten und bietet eine Datenstruktur dafür an. Für die ToDo Liste sind es Observables sowie eine Observable Liste.
```javascript {.line-numbers}
// ... observable from above, without removeListener function
const ObservableList = list => {
  const addListeners       = [];
  const delListeners       = [];
  const removeAt           = array => index => array.splice(index, 1);
  const removeItem         = array => item  => { const i = array.indexOf(item); if (i>=0) removeAt(array)(i); };
  const listRemoveItem     = removeItem(list);
  const delListenersRemove = removeAt(delListeners);
  return {
    onAdd: listener => addListeners.push(listener),
    onDel: listener => delListeners.push(listener),
    add: item       => {
      list.push(item);
      addListeners.forEach( listener => listener(item))
    },
    del: item       => {
      listRemoveItem(item);
      const safeIterate = [...delListeners]; // shallow copy as we might change listeners array while iterating
      safeIterate.forEach( (listener, index) => listener(item, () => delListenersRemove(index) ));
    },
    removeDeleteListener: removeItem(delListeners),
    count:   ()     => list.length,
    countIf: pred   => list.reduce( (sum, item) => pred(item) ? sum + 1 : sum, 0)
  }
};
```

[Source](resources/javascript/Todo/TodoModel.js)

### View
Die View ist die HTML-Datei. In dieser wird definiert wie das Programm aussehen soll. Zusätzlich wird bei der View die HTML-Elemente definiert, welche von JavaScript verändert werden. Dies hat den Vorteil, dass Elemente, welche über die ID ausgewählt werden, nicht direkt ersichtlich sind und nicht "magisch" im Code auftauchen. Zusätzlich wird aus dem HTML noch der Code gestartet.

```html {.line-numbers}
<!-- unrelated html -->
</main>

<!-- The actual scripts containing logic -->
<script src="../observable/observable.js"></script>
<script src="TodoController.js"></script>
<script src="TodoView.js"></script>

<!-- The elements we'll need in the JavaScript source code -->
<script>
    const todoController = TodoController();

    TodoItemsView(todoController, document.getElementById('todoContainer'));
    TodoTotalView(todoController, document.getElementById('numberOfTasks'));
    TodoOpenView (todoController, document.getElementById('openTasks'));

    todoController.addTodo();

</script>
<!-- unrelated html -->
```

[Source](resources/javascript/Todo/Todo.html)

Das HTML soll hauptsächlich für die Formatierung verwendet werden. Deswegen gibt es trotzdem eine JavaScript source Datei, welche die dynamische Logik beinhaltet.

```javascript {.line-numbers}
const TodoItemsView = (todoController, rootElement) => {
  const render = todo => {
    function createElements() {
      const template = document.createElement('DIV'); // only for parsing
      template.innerHTML = `
        <button class="delete">&times;</button>
        <input type="text" size="36">
        <input type="checkbox">
      `;
      return template.children;
    }
    const [deleteButton, inputElement, checkboxElement] = createElements();

    checkboxElement.onclick = _ => todo.setDone(checkboxElement.checked);
    deleteButton.onclick    = _ => todoController.removeTodo(todo);

    todoController.onTodoRemove( (removedTodo, removeMe) => {
      if (removedTodo !== todo) return;
      rootElement.removeChild(inputElement);
      rootElement.removeChild(deleteButton);
      rootElement.removeChild(checkboxElement);
      removeMe();
    } );

    rootElement.appendChild(deleteButton);
    rootElement.appendChild(inputElement);
    rootElement.appendChild(checkboxElement);
  };

  // binding
  todoController.onTodoAdd(render);

  // we do not expose anything as the view is totally passive.
};

const TodoTotalView = (todoController, numberOfTasksElement) => {

  const render = () =>
    numberOfTasksElement.innerText = "" + todoController.numberOfTodos();

  // binding
  todoController.onTodoAdd(render);
  todoController.onTodoRemove(render);
};

const TodoOpenView = (todoController, numberOfOpenTasksElement) => {

  const render = () =>
    numberOfOpenTasksElement.innerText = "" + todoController.numberOfOpenTasks();

  // binding
  todoController.onTodoAdd(todo => {
    render();
    todo.onDoneChanged(render);
  });
  todoController.onTodoRemove(render);
};
```

[Source](resources/javascript/Todo/TodoView.js)

### Controller
Der Controller ist die letzte Komponente des MVCs. Er verbindet die View mit dem Model, und schützt dabei die View von dem Model und umgekehrt. Der Controller hat eine Instanz des Models, und die Views haben eine referenz auf einen Controller.
```javascript {.line-numbers}
const Todo = () => {                                // facade
  const textAttr = Observable("text");            // we currently don't expose it as we don't use it elsewhere
  const doneAttr = Observable(false);
  return {
    getDone:       doneAttr.getValue,
    setDone:       doneAttr.setValue,
    onDoneChanged: doneAttr.onChange,
  }
};

const TodoController = () => {
  // observable array of Todos, this state is private
  const todoModel = ObservableList([]);
  const addTodo = () => {
    const newTodo = Todo();
    todoModel.add(newTodo);
    return newTodo;
  };
  return {
    numberOfTodos:            todoModel.count,
    numberOfOpenTasks:        () => todoModel.countIf(todo => ! todo.getDone() ),
    addTodo:                  addTodo,
    removeTodo:               todoModel.del,
    onTodoAdd:                todoModel.onAdd,
    onTodoRemove:             todoModel.onDel,
    removeTodoRemoveListener: todoModel.removeDeleteListener, // only for the test case, not used below
  }
};
```

<iframe src=resources/javascript/Todo/Todo.html frameBorder="0" style="height:440px; width: 100%">
The todolist script should be here :(
</iframe>

# Asynchrone Programmierung
Ein Grundbaustein von JavaScript ist die asynchrone Programmierung. Gerade das Callback-Paradigma erlaubt es, immer nach Erfolg einer Funktion eine andere Funktion aufzurufen. Oft führt dies aber zu sogenannten Wildgänsepattern, wo aufgrund vieler Callbacks ein grosses `>` in der Codebasis entsteht.
## Promise
Promises schaffen hier Abhilfe. Sie sind auch bekannt als `thenable`, also quasi "dannbar".
```javascript {.line-numbers}
fetch ('http://fhnw.ch/json/students/list')       // fetch from web
 .then(response => response.json())               // make a new (async) JSON parse
 .then(students => console.log(students.length))  // when JSON is finished, log
 .catch(err     => console.error(err))            // when fetch or parse fails
```
Wenn immer eine Promise erfüllt wird, wir die Funktion im `.then()` ausgeführt. Geschieht ein Fehler, wird die Funktion in `.catch()` ausgeführt. Promises, die Promises zurückgeben, können wiederum mit `.then()` verknüft werden - dies nennt sich dann **Monad**.

Man kann auch selbst Promises erstellen.
```javascript {.line-numbers}
const processEven = i => new Promise(
  (resolve, reject) => {
    i % 2 === 0 ? resolve(i) : reject(i)
  });

const run = number => processEven(number)
 .then(i => document.writeln("Good, " + i + " is even!"))
 .catch(i => document.writeln("Oh no, " + i + " is odd!"));

run(2);
document.writeln("\n");
run(3);
```
> `$ Good, 2 is even!`
> `$ Oh no, 3 is odd!`

Das obere Beispiel zeigt eine Funktion, welche nur gerade Zahlen prozessiert.
```javascript {.line-numbers}
processEven(4)                            // ↓ auto promotion to promise
 .then ( it => {document.writeln(it); return it})
 .then ( it => processEven(it + 1))
 .catch( err => {document.writeln( "Error: " + err)});
```
> `4 Error: 5`

Zusätzlich werden Werte, welche nicht als Promise zurückgegeben werden, automatisch befördert (auto promotion). Das Promise wird einfach sofort nach dem Ausführen `resolved`.

### Async / Await
Async und Await sind alternative Syntax für Promises. Funktionen lesen sich so mehr wie imperativen Code.
```javascript {.line-numbers}
const foo = async i => {
  const x = await processEven(i).catch( err => err ); // on catch, err is returned
  document.writeln("foo: " + x);
}

async function bar(i) {
  try{
    const x = await processEven(i);
    document.writeln("bar: " + x)
  } catch (err) {
    document.writeln("bar: " + err)
  }
}

foo(4); bar(4); foo(3); bar(3);
```
> `$ foo:4 bar:4 foo:3 bar:3`

Async und Await müssen nicht verwendet werden, helfen aber manchmal beim Verständnis des Codes.

!!! Warning Nur Funktionen welche mit `async` gekenntzeichnet sind können auch `await` verwenden.

# Koordination
Koordination wird dann benötigt, wenn asynchron Programmiert wird. Mit Koordination ist dabei gemeint, wie asynchrone Aufrufe ausgeführt werden. Dafür gibt es drei Arten, wie dies gemacht werden kann.

Für die Beispielcodes wird auf die [Todo Liste](#mvc) die Koordination Beispielhaft implementiert. Dazu wird ein "Feelin' lucky" Button hinzugefügt, welcher ein zufälliges Fortune nach einer gewissen Zeit hinzufügt.

```javascript {.line-numbers}
const fortunes = [
    "Do the WebPr Homework",
    "Care for the JavaScript Toolbox",
    "Watch the recommended videos",
    "Read the recommended chapters in You-dont-know-JS",
    "Do the dataflow excel challenge!"
];

// This function is called on button-click
function fortuneService(whenDone) {
    setTimeout(
        () => whenDone(fortunes[Math.floor((Math.random() * fortunes.length))]),
        Math.floor((Math.random() * 3000))
    );
}
```

[Source](./resources/javascript/Coordination/Todo/FortuneService.js)

## Keine Koordination
Es wird nichts für die Koordination getan. JavaScript im Browser ist in diesem Fall Thread confined, also der Browser handhabt diese Asynchronität und wir als Programmierer müssen uns nicht darum kümmern.
```javascript {.line-numbers}
const addFortuneTodo = button => {
  const newTodo = Todo();
  todoModel.add(newTodo);
  newTodo.setText("...");
  fortuneService( text => {
    newTodo.setText(text);
  });
  return newTodo;
};
```

[Source](./resources/javascript/Coordination/Todo/NoCoordination/Todo.js)

<iframe src=resources/javascript/Coordination/Todo/NoCoordination/todo.html frameBorder="0" style="height:350px; width: 100%">
The todolist script should be here :(
</iframe>

## Sequenz
Sequenzen sind asynchrone Aktionen, welche in einer gewissen Reihenfolge ausgeführt werden müssen. Dies erfordert Koordination. Um dies umzusetzen wird sogenannte Delegated Coordination verwendet. Dabei wird die Koordination in an einen Koordinator gegeben, welcher dann diese Aktionen ab arbeitet (bzw. die Aktionen startet).

```javascript {.line-numbers}
const scheduler = Scheduler();
const addFortuneTodo = button => {
  button.disabled = true;
  const newTodo = Todo();
  todoModel.add(newTodo);
  newTodo.setText("...");

  // The scheduler runs the task in the lambda expression and
  // waits until resolve is called
  scheduler.add( resolve => {
    fortuneService( text => {
      newTodo.setText(text);
      button.disabled = false;
      resolve();
    });
  });
};
```

[Source](./resources/javascript/Coordination/Todo/Sequencial/Todo.js)

Für die sequenzielle Implementierung wird ein sogenannter `Scheduler` verwendet. Dieser schaut unter anderem, dass erst wenn der Task fertig generiert ist, der Button um ein neuen Task anzulegen auch wieder freigegeben wird. Wird der Button nicht deaktiviert, werden die Tasks trotzdem nur nacheinander ausgeführt.

```javascript {.line-numbers}
// execute asynchronous tasks in strict sequence, aka "reactive stream", "flux architecture"
const Scheduler = () => {
  let inProcess = false;
  const tasks = [];                     // fifo queue
  const process = () => {
    if (inProcess)          { return; } // guard clause -> when already running, skip
    if (tasks.length === 0) { return; } // guard clause -> when no tasks in queue, skip
    inProcess = true;
    const task = tasks.pop();           // Load the new task
    new Promise( (resolve, _) => {
      task(resolve);                    // Run the task
    }).then ( () => {                   // When finished
      inProcess = false;                // show that the scheduler is finished
      process();                        // Restart the process
    });
  }
  const add = task => {
    tasks.unshift(task);  // append to end
    process();            // process the task
  }
  return {
    add: add,
    addResolve: task => add( ok => { task(); ok(); }) // convenience, will automatically make a scheduler task from a function
  }
};
```

[Source](./resources/javascript/Coordination/Todo/Sequencial/Scheduler.js)

<iframe src=resources/javascript/Coordination/Todo/Sequencial/Todo.html frameBorder="0" style="height:350px; width: 100%">
The todolist script should be here :(
</iframe>

## Resultatabhängigkeit
Aktion B und C benötigen das Resultat von A. A muss genau einmal vor B und C ausgeführt werden. Diese sogenannte implizite Koordination ist durch die Architektur gegeben, wesswegen diese implizit genannt wird. Umgesetzt wird dies mit sogenannten `DataFlowVariablen`.

Da die resultatabhängige Koordination für andere Use-Cases als die Todo Liste gedacht ist, wird hierfür das Beispiel [Excel](#referencing) verwendet.

```javascript {.line-numbers}
// a dataflow abstraction that is not based on concurrency but on laziness
const DataFlowVariable = howto => {
  let value = undefined;
  return () => undefined === value  // when undefined, run the howto function
    ? value = howto()
    : value;
};
```

[Source](./resources/javascript/Coordination/ResultDependency/DataflowVariable.js)

Bevor man die Evaluation laufen lässt baut man voneinander abhängige DataFlows. Diese werden dann der Abhängikeit nach abgearbeitet. Diese Werte sind sogesehen [lazy-loaded](https://en.wikipedia.org/wiki/Lazy_loading). Die schon berechneten Werte (also die Abhängigen) werden dann bevor sie an der Reihe sind berechnet und gecached.

```javascript {.line-numbers}
// Make a DFV of the eval function, which is later executed
return DataFlowVariable ( () => {
  return Number(eval(Formulae[input.id]))
} ) ;
```

<iframe src=resources/javascript/Coordination/ResultDependency/View.html frameBorder="0" style="width: 100%">
The excel script should be here :(
</iframe>

# Modulsystem
Module helfen Code zu organisieren und klar die Abhängigkeiten zu definieren. Zusätzlich helfen sie Fehler bei [Globals](#global), [Scopes](#scopes) und Namespaces zu verhindern. Man möchte den Code gut und feingranular bearbeiten können.
Module sind keine:

- Pakete (diese sind versioniert)
- Abhängigkeiten, Bibliotheken oder Releases
- Sind keine Einheit der Publikation
- Objekte

Ein Modul ist Code welcher `import` oder `export` verwendet. Sobald man ein Modul importiert, ist man selber auch ein Modul.

## Module importieren
!!!Warning Module können nur asynchron geladen werden.
Wenn man das macht, sollte man die Speicherorte direkt per `URI` angeben

Im HTML wird normalerweise eine Datei importiert, welche dann alle weiteren Imports via `import` importiert.
```javascript {.line-numbers}
<script src="./my.js" type="module">
import("./my.js").then(mod => ...);
//     ↑ must be a literal string, no variables allowed
```
Möchte man auf eine Funktion oder eine Variable im Modul zugreifen, muss im `.then` via `mod.x` darauf zugegriffen werden. Achtung, dies ist invasiv.

```javascript {.line-numbers}
import "module-name"; // loads all
import {export1, export2} from "module-name"; // loads export1, export2
```
Module werden am besten mit dem oben stehenden Syntax geladen. Wenn man nur eine Menge exports benötigt, sollte man dies auch explizit angeben.

## Module exportieren
Module können auch exportiert werden. Exportierte Werte sind immer `read-only`.
```javascript {.line-numbers}
export {name1, name2, ..., nameN};
```
Am meisten Sinn macht es, am Anfang des Files zu definieren, welche Teile genau exportiert werden. Auch hier sollte immer alles explizit angegeben werden.

## Auswirkungen
- Module sind immer `use strict`
- Exports sind read-only (`const`)
- Das `this` kann nicht wirklich verwendet werden, man hat also auch kein Zugriff auf das globale Objekt
- Es gibt kein [hoisting](#let)
- Implizit ist man im `defer` Modus → `document.writeln` ist nicht mehr nützlich
- Module sind Namespaces
- Module sind Singleton

!!!Info `defer` (engl. für Verschoben) steht für asynchrone Ausführung

## SOP
Module müssen die `SOP` (**S**ame **O**rigin **P**olicy) beachten. Das bedeutet, das Dateisystem ist `null`. Am besten Umgeht man dies indem man den Debugmodus des Browsers startet (welcher SOP deaktiviert hat und die Daten nicht cached) oder man verwendet einen lokalen Webserver.

# Transpilers
Transpiling bedeutet, dass Sprachen in eine andere Programmiersprache (in diesem Fall JavaScript) übersetzt wird.
Oft verwendete Transpilers sind:
- TypeScript
- PureScript
- Elm
Alle haben prinzipiell denselben Rendering-Status.
```
  ↓ ----------------- ←
State → View → Action ↑
```
Infolge werden die verschiedenen Transpilers mithilfe einer Multiplikationstabelle dargestellt.
|n|1|2|3|4|5|6|7|8|9|
|-|-|-|-|-|-|-|-|-|-|-|
|*2|2|4|6|8|10|12|14|16|18|
Verbindet man nun jeweils die 1 mit der 2, die 2 mit der 4 usw. erhält man einen sogenannten Times Table.
Für folgende Beispiele wurden direkt von [Dierk König](https://gist.github.com/Dierk)'s Github Gist kopiert und mit Kommentaren beschrieben.

## TypeScript
TypeScript ist typisiert geschrieben und Aktionen sind Funktionen oder Lambdas. Zustandsunveränderbarkeit und Seiteneffektfrei kann nur mit Disziplin erreicht werden. Objekte/Komponenten werden abstrahiert, es können also Objekte und Komponenten erstellt werden.

Ein Paar Eindrücke aus Typescript:
```typescript {.line-numbers}
import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
export interface HelloState { slices: number; table: number }

export class Hello extends React.Component<HelloProps, HelloState> {

  constructor(props: HelloProps) {
    super(props);
    this.state = { slices:10, table:2 }

    this.modifyState = this.modifyState.bind(this); // oh, this is so silly
  }
  render() {
    // eventually compiles into createElement('h1') → Uses h1 function from react
    // and also replaces the {this.props.compiler} with the actual string
    return <div>
      <h1>Beautiful Math with {this.props.compiler} and {this.props.framework}</h1>

      <p>See also implementations in
        <a href="https://gist.github.com/Dierk/221e2991955578f196b5ae81ab0b9956">Elm</a>
        and
        <a href="https://gist.github.com/Dierk/c820c4a9dd6f60ecb4e78fe90709bd6c">Purescript/Pux</a>
      </p>

      <div>
        <button onClick={ () => this.modifyState(1, 0) }> Slices + </button>
        { this.state.slices }
        <button onClick={ () => this.modifyState(-1, 0)}> Slices - </button>
      </div>

      <div>
        <button onClick={ () => this.modifyState(0, 1) }> Table + </button>
        { this.state.table }
        <button onClick={ () => this.modifyState(0, -1)}> Table - </button>
      </div>

      <div>
        <svg viewBox="0 0 100 100" width="400px">
          <circle cx="50"  cy="50" r="49" fill="transparent"  stroke="papayawhip"></circle>
          { this.lines(this.state) }
        </svg>
      </div>

    </div>;
    }

  lines(state : HelloState) {
    const xpos       = (angle: number) => 50.0 + 50.0 * Math.cos(angle);
    const ypos       = (angle: number) => 50.0 + 50.0 * Math.sin(angle);
    const sliceAngle = (slice: number) => slice * 2.0 * Math.PI / state.slices;
    const origin     = (slice: number) => sliceAngle (slice);
    const target     = (slice: number) => sliceAngle (slice * state.table);
                        // TypeScript forces us to define the type with :
    const numbers = new Array(state.slices);
    for (let i = 1; i <= state.slices; i++) {
      numbers.push(
        <line key={"line"+i}
          x1={xpos(origin(i))}
          y1={ypos(origin(i))}
          x2={xpos(target(i))}
          y2={ypos(target(i))}
          stroke="#A0A0F080">
        </line>
      );
    }
    return numbers;
  }

  modifyState(sliceDelta : number, tableDelta : number) {
    this.setState( {
      slices: this.state.slices + sliceDelta,
      table : this.state.table  + tableDelta
    })
  }
}
```
- Das FFI (**F**oreign **F**unction **I**nterface) JavaScript wird via Typdeklaration aufgerufen
- Kann überall ausgeführt werden, wo JavaScript läuft (also u.A. mit Node)
- Das Programmierparadigma ist stark Objekt Orientiert mit Generics
- TypeScript wird als Sprache beworben
- Summe / Union Typ und literaler typ String

## Elm
Elm ist wie TypeScript typisiert, und die Actionstypen haben Werte. Der Status ist immer `immutable` und Nebeneffekte von Aktionsänderungen werden vermieden. Die Sprache besteht aus Funktionskomposition.

Hier ein paar Eindrücke aus Elm.
```elm {.line-numbers}
import Html exposing (Html, button, div, text)
import Html.App as App
import Html.Events exposing (onClick)
import Svg exposing (svg, circle, line)
import Svg.Attributes exposing (..)
import List exposing (map, (::))


main = App.beginnerProgram { model = state, view = view, update = update }


-- MODEL
                              -- like Typescript, we have defined types here
type alias State = { slices : Int, table  : Int }

state : State
state = { slices = 10, table = 2 }


-- UPDATE
-- ALL actions are clearly defined in a list
type Action = SlicePlus | SliceMinus | TablePlus | TableMinus

update : Action -> State -> State -- type declaration
update msg state = -- implementation
  case msg of
    SlicePlus  ->  { state | slices = state.slices + 1 }
    SliceMinus ->  { state | slices = state.slices - 1 }
    TablePlus  ->  { state | table  = state.table  + 1 }
    TableMinus ->  { state | table  = state.table  - 1 }


-- VIEW
-- This is somewhat the same from <div> in TypeScript
view : State -> Html Action
view state =
  div []
    [ div []
      [ button [ onClick SlicePlus ]  [ text "Slice +" ]
      , text (toString state.slices)
      , button [ onClick SliceMinus ] [ text "Slice -" ]
      ]
    , div []
      [ button [ onClick TablePlus ]  [ text "Table +" ]
      , text (toString state.table)
      , button [ onClick TableMinus ] [ text "Table -" ]
      ]
    , div []
      [ svg [ viewBox "0 0 100 100", width "500px"] <|
          circle [ cx "50", cy "50", r "49", fill "transparent", stroke "papayawhip" ] []
          :: allLines state
      ]
    ]

allLines state = map(\slice -> sliceLine state slice)[1 .. state.slices]

sliceLine state slice =
  let
    xpos angle   = toString <| 50.0 + 50.0 * cos angle
    ypos angle   = toString <| 50.0 + 50.0 * sin angle
    origin       = sliceAngle  slice
    target       = sliceAngle (slice * state.table)
    sliceAngle x = (toFloat x) * 2.0 * pi / (toFloat state.slices)
  in line
    [ x1 <| xpos origin
    , y1 <| ypos origin
    , x2 <| xpos target
    , y2 <| ypos target
    , stroke "#A0A0F080"
    , strokeWidth "0.8"
    ] []
```
- Das FFI von JavaScript wird via Port aufgerufen, also so wie als wenn JavaScript auf einer anderen Maschine ausgeführt wird. Um das performant zu machen, wird dies über Flags erledigt.
- Elm lief lange nur in Browser, hat inzwischen aber Unterstützung für Node etc.
- Das Programmierparadigma ist Funktional
- Elm wird als ganzes Programmiersystem beworben.
- Elm bietet semantische Versionsgarantie, das bedeuted dass nicht eine veränderte Codebasis gepusht wird, und es kann sogenanntes `Time Travel Debug` gemacht werden.


## PureScript
PureScript sieht im Vergleich zu [Elm](#elm) fast genau gleich aus, ist aber noch etwas mehr wie Haskell.

Hier ein Paar Eindrücke aus Purescript:
```purescript {.line-numbers}
module App.Counter where

import Prelude (($), (+), (-), (*), (/), (>), const, show)
import Data.Array ((..), (:), mapWithIndex)
import Data.Int (toNumber, floor)
import Math (sin, cos, pi )
import Pux.Html (Html, div, span, button, text, canvas, svg, circle, line )
import Pux.Html.Attributes (width, height, viewBox, cx, cy, r, fill, x1, y1, x2, y2, stroke, strokeWidth)
import Pux.Html.Events (onClick)

data Action = SlicePlus | SliceMinus | TablePlus | TableMinus

type State =
  { slices :: Number -- so many points on the circle circumference to make slices
  , table  :: Number -- the base number of the multiplication table
  }

init :: State
init = { slices : 10.0, table : 2.0 }

update :: Action -> State -> State
update SlicePlus  state = state { slices = state.slices + if state.slices > 19.0 then 10.0 else 1.0 }
update SliceMinus state = state { slices = state.slices - if state.slices > 19.0 then 10.0 else 1.0 }
update TablePlus  state = state { table = state.table + 1.0 }
update TableMinus state = state { table = state.table - 1.0 }

view :: State -> Html Action
view state =
  div []
    [ div []
      [ button [ onClick (const SlicePlus) ] [ text "Slices +" ]
      , span   []                            [ text (show state.slices) ]
      , button [ onClick (const SliceMinus) ] [ text "Slices -" ]
      ]
    , div []
      [ button [ onClick (const TablePlus) ] [ text "Table +" ]
      , span   []                            [ text (show state.table) ]
      , button [ onClick (const TableMinus)] [ text "Table -" ]
      ]
    , div []
      [ svg [ viewBox "0 0 100 100", width "500px"] $
        circle [ cx "50", cy "50", r "49", fill "white", stroke "papayawhip" ] []
        : allLines state
      ]
    ]

allLines state = mapWithIndex (\i n -> sliceLine state (toNumber n)) $
  1 .. floor state.slices

sliceLine state n =
  line
    [ x1 $ xpos $ origin n
    , y1 $ ypos $ origin n
    , x2 $ xpos $ target n
    , y2 $ ypos $ target n
    , stroke "#A0A0F080"
    , strokeWidth "0.8"
    ] []
  where
    origin n   = sliceAngle state.slices n
    target n   = sliceAngle state.slices (n * state.table)
    xpos angle = show $ 50.0 + 50.0 * cos angle
    ypos angle = show $ 50.0 + 50.0 * sin angle
    sliceAngle slices n = n * 2.0 * pi / slices
```
- Das FFI von JavaScript wird via Typdeklaration aufgerufen
- Kann überall ausgeführt werden, wo JavaScript läuft (also u.A. mit Node)
- Das Programmierparadigma ist Funktional
- PureScript wird als Sprache mit Werkzeugen (Modulssystem, etc.) beworben. Interessant ist der Ansatz, dass jedes Modul immer mitkompiliert wird und somit viel sicherer wird, da zum Beispiel der Zugriff aufs Filesystem limitiert ist
- PureScript erlaubt es sehr feingranular zu bestimmen, wann und wie der Status ändert

### PureScript ausprobiert
!!! Warning ```f x === f(x) → bedeuted dasselbe```

```purescript {.line-numbers}
-- id :: String -> String → ID only supports Strings

id :: forall a. a -> a -- we define that ID returns a for all a
id x = x -- the ID function from the lambda calculus

--                  ↓ f must be a function
once :: forall a b. (a -> b) -> a -> b -- f makes b out of an a, thus x must be from type a
-- if we replace b with a, we can only run functions that take a and return a
once f x = f x -- run the function f once with argument x

twice :: foreall a. (a -> a) -> a -> a
twice f x = f (f x)

-- document.writeln() kindof
main :: Effect Unit
main = render =<< withConsole do logShow (once id "Hi webPr")
main = render =<< withConsole do logShow (twice id "Hi webPr")
```
> `Hi webPr`
> `Hi webPr` Only shown once, because we call id(id("Hi webPr"))

# Strings
In JavaScript können Strings über verschiedene Varianten angelegt werden. Spezielle Characters müssen mit "\" escaped werden. Das gilt auch für "\" selbst.
```javascript {.line-numbers}
$ "askf\tëä3aa"
→ "askf    ëä3aa"
$ "askf\\asd"
→ "askf\asd"
$ 'askfasd'
→ "askfasd"
$ 'Er sagte "Hallo!"'
→ "Er sagte \"Hallo!\""
$ "Er sagte 'Hallo!'"
→ "Er sagte 'Hallo!'"
$ const a = 1;
$ `x ist : ${a}`
→ "x ist 1"
$ /hallo\\s/
→ "/hallo\\s/"
$ String(/hallo\s/)
→ "/hallo\\s/"
```
Strings können mit `"`, `'` und `` ` `` definiert werden. Die `"` und `'` werden als normale Strings verwendet, der Backtick wird für sogenannte Template-Strings verwendet. Es handelt sich dabei um Literale Strings.
Mithilfe des String-Konstruktors `String()` können Escape-Characters umgangen werden, wie zum Beispiel beim generieren einer Regex.

# Loggen
Die schönste Art in JavaScript zu loggen ist über die Konsole.
```javascript {.line-numbers}
$ const obj {x: 1, y: 2}
$ console.log(obj)
→ {x: 1, y: 2}
$ console.log(document.getElementByName('body'))
→ NodeList[]...
$ console.dir(document.getElementByName('body'))
→ NodeList[]... // schon aufgefaltet
$ console.info(obj)
→ 🟦 {x: 1, y: 2}
$ console.warn(obj)
→ 🟨 {x: 1, y: 2}
$ console.error(obj)
→ 🟥 {x: 1, y: 2}
$ console.debug(obj)
→ {x: 1, y: 2}
```
JavaScript bietet diverse Möglichkeiten auf die Konsole zu schreiben. Dabei gibt es wie bei den meisten Logging-Frameworks verschiedene Stufen, nach welchen auch gefiltert werden kann.

!!!Warning Wenn das ganze Logging über die Konsole gemacht wird benötigt das Speicher und Rechenpower, auch wenn gefiltert wird!

## Loglevel programmatisch setzen
Um zu Log-Spam verhindern, können die Logs auch ein- und ausgeschaltet werden.
```javascript {.line-numbers}
// Define the log levels
const LEVEL_NONE    = -1;
const LEVEL_ERROR   =  0;
const LEVEL_WARN    =  1;
const LEVEL_INFO    =  2;
const LEVEL_LOG     =  3;
const LEVEL_DEBUG   =  4;
let logLevel = LEVEL_LOG;

// Create the logging functions
const error = f => { if (logLevel >= LEVEL_ERROR) console.error(f()); }
const warn  = f => { if (logLevel >= LEVEL_WARN)  console.warn (f()); }
const info  = f => { if (logLevel >= LEVEL_INFO)  console.info (f()); }
const log   = f => { if (logLevel >= LEVEL_LOG)   console.log  (f()); }
const debug = f => { if (logLevel >= LEVEL_DEBUG) console.debug(f()); }

// Prints an error onto log
error( _=> longRunning("error"));
//     ↑ ignore the variable

```
Der Wert `logLevel` kann dann von jedem über die JavaScript Konsole im Browser des Vertrauens gesetzt werden, und das Loglevel wird on-the-fly angepasst.
Dieser Code funktioniert ganz einfach, man gibt den Loggingfunktionen eine Funktion mit, welche ausgeführt wird nachdem `logLevel` überprüft wurde.

!!!Warning Würde man das ganze mit einer Expression machen, würde diese (bei der Übergabe) zuerst evaluiert werden, auch wenn es sich dabei um eine lang laufende Funktion handelt!

# Arrays
!!!Info Ein Array ist ein Objekt
Arrays in JavaScript können in mehreren wegen generiert werden. Ein weg ist der Literale Konstruktor, der andere ist der Funktionale Konstruktor.
```javascript {.line-numbers}
$ const foo = [0, 1, 2, 3, 4];       // Literaler Konstruktor mit '[]'
$ const bar = Array(0, 1, 2, 3, 4);  // Literaler Konstruktor mit '[]'
$ const [first, second] = foo;       // Literaler Dekonstruktor auf linker Seite
$ first;
→ 0
$ second;
→ 1
$ console.log(foo === bar);
→ true
```
Arrays können auch für viele andere Dinge verwendet werden, da sie on-the-fly generiert werden können. So gibt es zum Beispiel auch eine viel einfachere Möglichkeit, zwei Werte zu swappen.
```javascript {.line-numbers}
$ let x = 1;
$ let y = 2;
$ [y, x] = [x, y];
$ x;
→ 2
```
## Spread-Operator `...` an Parameterposition
Der Spread-Operator erlaubt es dem Benutzer beliebig viele Variablen in eine Funktion mitzugeben.
```javascript {.line-numbers}
$ const foo = (a, b, c) => a + b + c;
$ foo(1, 2, 3)
→ 6
$ foo("1", 2, 3)
→ "123"
$ foo("1", 2)
→ "12undefined"
$ const bar = (...a) => a.length;
$ bar(1, 2, 3)
→ 3
$ bar()
→ 0
$ const foobar = (a, b) => console.log(a, b)
$ foobar(...[1,2,3])
→ 1, 2
```
Im Hintergrund wird ein Objekt erstellt, welches die einzelnen Werte abspeichert. Er verwandelt eine Liste von Elementen in ein Array von Elementen.

## Spread-Operator `...` an Konstruktorposition
Der Spread-Operator kann auch an Konstruktorposition verwendet werden, wo bei einer Rückgabe eines Arrays alle restlichen Werte in `rest` gespeichert werden.
```javascript {.line-numbers}
$ const foo = [0, 1, 2, 3, 4];
$ const [first, second, ...rest] = foo;
$ rest
→ [2, 3, 4]
```

## Slice
Slice wird verwendet um Arrays zu schneiden. Slice schneidet einen an einem und an einem anderen Ort, und gibt ein neues Array zurück.
```javascript{.line-numbers}
Array.slice(StartIndex, EndIndex)
```
`StartIndex` bestimmt wo das slicing beginnt, und der `EndIndex` bestimmt wo das slicing endet.
```javascript{.line-numbers}
$ const chars = "a b c d e f g".split(" ");
$ chars
→ ["a", "b", "c", "d", "e", "f", "g"]
$ chars.slice(1,3)      // get all in between this index
→ ["b", "c", "d"]
$ chars.slice(-3, -1)   // also works with negative indexes
→ ["e", "f"]
$ chars.slice(1)        // get all after the index
→ ["b", "c", "d", "e", "f", "g"]
$ chars.slice()         // copy the array
→ ["a", "b", "c", "d", "e", "f", "g"]
$ chars.slice(-1)       // remove last element
→ ["a", "b", "c", "d", "e", "f"]

```

## Splice
Splice wird verwendet, um Arrays zu schneiden, aber auch um darin Elemente zu ersetzen. Splice entfernt die Werte in einem Bereich, und ersetzt Sie wenn ein Argument angegeben wird.
```javascript{.line-numbers}
Array.splice(StartIndex, Length, ...ReplaceWith)
```
`StartIndex` bestimmt, wo das splice beginnt, `Length` wie viele Elemente entfernt werden, und `RepalceWith` sind die Elemente welche dann in das Array eingefügt werden.
```javascript{.line-numbers}
$ const chars = "a b c d e f g".split(" ");
$ chars
→ ["a", "b", "c", "d", "e", "f", "g"]
$ chars.splice(1, 2)                  // get all in between this index
→ ["b", "c"]
$ chars                               // Attention, original array was changed!
→ ["a", "d", "e", "f", "g"]
$ chars.splice(1, 1, "x", "y", "z");  // get all in between this index and replace
→ ["d"]
$ chars
→ ["a", "x", "y", "z", "e", "f", "g"] // Attention, original array was changed!
```

!!!Warning Splice arbeitet auf dem originalen Array, nicht auf einer Kopie.

# Semicolons
Semicolons sind nicht freiwillig, JavaScript versucht einfach sie selbst zu setzen.

!!!Quote "*Unfortunately, JS has a misfeature called Automated Semicolon Insertion. It can fail in bad ways, so write like a professional.*" - Douglas Crockford, "How JavaScript works."
```javascript {.line-numbers}
$ console.log("hi");
  [1, 2, 3].map(it => it * 2);
→ "hi"
→ [2, 4, 6]

$ console.log("hi") // <- Missing Semicolon
  [1, 2, 3].map(it => it * 2);
→ TypeError: undefined is not an object (evaluating 'console.log("hi")[1, 2, 3]')
```
JavaScript sieht hier das `console.log` sowie das `[1, 2, 3]` als Ausdrücke. Somit wird beim vergessenen `;` ein Ausdruck generiert, welcher auf das `console.log` ausgeführt wird, welches nach dem Ausführen undefined ist.

# JavaScript Iterator Protokol
Mit dem query selector von JavaScript erhält man eine sogenannte `NodeList`. Diese kann als iterierbare Liste angesehen werden - ist aber kein Array. Dem Iterator Protokoll gehören noch weitere Klassen dazu, wie zum Beispiel HTMLCollection und Array.

```javascript {.line-numbers}
$ const p = document.querySelectorAll("p");
$ p;
→ NodeList[<p>, <p>, <p>]
$ for (const n of p) { console.log(n); } // Supports lazy loading
→ <p>Lorem</p>
→ <p>Ipsum</p>
→ <p>dolor</p>

$ const body = document.querySelector("body").children; // HTMLCollection
$ for (const c of body) { console.log(c); }
→ <h1>Hello</h1>
→ <p>Lorem</p>
→ <p>Ipsum</p>
→ <p>dolor</p>

$ for (const a of [1, 2, 3, 4]) { console.log(a); } // Array
→ 1
→ 2
→ 3
→ 4

$ [...document.querySeectorAll("body")]
→ [<body>]

$ [...p] // We can also put iterators into the literal array constructor, and maken an array out of it
→ [<p>, <p>, <p>]

$ for(const n of "abc") {console.log(n); }
→ "a"
→ "b"
→ "c"
```
Jedes Objekt kann Iterierbar werden, indem es die Symbol.iterator Funktion implementiert.

!!!Warning Bei for-Schleifen kann auch `in` verwendet werden. Dies führt aber nicht zum Ziel und zeigt die einzelnen Properties des Elements an - also zum Beispiel auch Funktionen.

# Moves
Programmieren ist eine Aktivität. Programmieren ist nicht natürlich und muss Schritt für Schritt gelernt werden. Beim Lernen eignet man sich sogenannte Moves an. Diese Moves werden hier mit Hilfe eines einfaches "Römisch zu Arabisch" Konverters gezeigt. Das Ziel ist, dass zum Beispiel `MDCIII` in `1603` konvertiert wird.
## 0: Erforschen
Bevor man mit einem Programm beginnt, muss man sich zuerst einmal Gedanken machen wie man das Problem angeht.
- Gibt es schon Lösungen?
- Was sind die Randbedingungen?
- Wie kann man das Problem angehen?
Dieser Schritt sollte immer vor Beginn des Projektes ausgeführt werden, denn er bestimmt die grundlegende Richtung, in welches sich das Projekt bewegt.
## 1: Beginne beim Ende
Am besten überlegt man sich im nächsten Schritt wie die Applikation genau aussehen soll. Das macht man am besten mit einem statischen Sketch, mit dem Prinzip FITYMI (**F**ake **I**t **T**ill **Y**ou **M**ake **I**t). Dynamische Teile lässt man noch komplett weg.

```javascript {.line-numbers}
<!DOCTYPE html>
<html lang="en">
<head>
  <title> Roman Numerals Sketch </title>
</head>
<body>

<script>
  const arab = roman => {
    if(roman.length === 0) return 0;
    if(roman === "I") return 1;
    if(roman === "II") return 2;
    if(roman === "II") return 3;
    throw new Error("Invalid Roman numeral: " + roman);
  }

  document.writeln((arab("") === 0).toString());
  document.writeln((arab("I") === 1).toString());
  document.writeln((arab("II") === 2).toString());
  document.writeln((arab("III") === 3).toString());
</script>
</body>
</html>
```

> $ true true true true

!!! Info Es können auch zuerst Test-Cases geschrieben werden.

## 2: Extrahieren
Im nächsten Schritt werden Repetitionen in Funktionen und Loops extrahiert und statische Werte durch Variablen ersetzt. Die dynamik entsteht.

```javascript {.line-numbers}
//...
<script>
  const arab = roman => {
    if(roman.length === 0) return 0;
    // shortened and nicer, but more complex / harder to understand

    // Special cases
    if(roman.slice(0, 2) === "IV") return   4 + arab(roman.slice(2));
    if(roman.slice(0, 2) === "IX") return   9 + arab(roman.slice(2));
    if(roman.slice(0, 2) === "XL") return  40 + arab(roman.slice(2));
    if(roman.slice(0, 2) === "XC") return  90 + arab(roman.slice(2));
    if(roman.slice(0, 2) === "CD") return 400 + arab(roman.slice(2));
    if(roman.slice(0, 2) === "CM") return 900 + arab(roman.slice(2));

    // normal cases
    if(roman.slice(0, 1) === "I") return    1 + arab(roman.slice(1));
    if(roman.slice(0, 1) === "V") return    5 + arab(roman.slice(1));
    if(roman.slice(0, 1) === "X") return   10 + arab(roman.slice(1));
    if(roman.slice(0, 1) === "L") return   50 + arab(roman.slice(1));
    if(roman.slice(0, 1) === "C") return  100 + arab(roman.slice(1));
    if(roman.slice(0, 1) === "D") return  500 + arab(roman.slice(1));
    if(roman.slice(0, 1) === "M") return 1000 + arab(roman.slice(1));
    throw new Error("Invalid Roman numeral: " + roman);
  }

  // removes the duplication of document.writeln() and toString()
  const assertEqual = (a, b) => {
    document.writeln( String(a===b) );
  }

  // Common cases
  assertEqual(arab(""),            0);
  assertEqual(arab("I"),           1);
  assertEqual(arab("II"),          2);
  assertEqual(arab("III"),         3);
  assertEqual(arab("V"),           5);
  assertEqual(arab("VI"),          6);
  assertEqual(arab("X"),          10);
  assertEqual(arab("L"),          50);

  // Special cases
  assertEqual(arab("IV"),          4);
  assertEqual(arab("IX"),          9);
  assertEqual(arab("XL"),         40);
  assertEqual(arab("XC"),         90);
  assertEqual(arab("CD"),        400);
  assertEqual(arab("CM"),        900);

  // Realistic values
  assertEqual(arab("MDCXXXII"), 1632);
</script>
//...
```

> $ true true true ... true

## 3: Abstrahieren
Beim generieren kann man auch nur mal ganz einfach Duplikationen generieren. Man sieht dann unter anderem die Abhängigkeiten und kann daraus besseren und schöneren Code mit hoher Sicherheit generieren. Das nennt sich das Abstrahieren des Codes.

```javascript {.line-numbers}
//...
<script>
  const mapping = {
    // Edge cases
    "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400, "CM": 900,
    // Normal cases
    "I" : 1, "V" : 5, "X" : 10, "L" : 50, "C" : 100, "D" : 500, "M" : 1000
  }

  const arab = roman => {
    if(roman.length === 0) return 0;
    // makes code less duplicated but keeps the same functionality
    for(const[key, value] of Object.entries(mapping)) {
      if(roman.startsWith(key)) return value + arab(roman.slice(key.length))
    }
    throw new Error("Invalid Roman numeral: " + roman);
  }

  const assertEqual = (a, b) => {
    document.writeln( String(a===b) );
  }

  // After implementing above optimization, we can also optimize the way test cases are handled.
  const testArabConverter = () => {
    const testCases = {
      // Normal cases
      "": 0, "I": 1, "II": 2, "III": 3, "V": 5, "VI": 6, "X": 10, "L": 50,
      // Edge cases
      "IV": 4, "IX": 9, "XL": 40, "XC": 90, "CD": 400, "CM": 900,
      // Realistic Cases
      "MDCXXXII": 1632
    }
    for([fnValue, should] of Object.entries(testCases)){
      document.writeln(String(arab(fnValue) === should));
    }
  }

  testArabConverter();
</script>
//...
```

> $ true true true ... true

## 4: Reorganisierung
Beim Reorganisieren geht es darum, sich die Arbeit in der Zukunft einfacher zu machen. Dazu gehört vor allem Refactoring und Dokumentieren. Das Ziel nach diesem Schritt ist es, Code zu haben, welcher in der Zukunft weiter entwickelt werden kann.
1) Auslagern der einzelnen Codeteilen in Module
2) Dokumentieren mit JsDoc

## 5: Herausgeben (Release)
All diese Schritte sind erfolgreich ausgeführt, wenn der Code ohne schlechtem Gewissen herausgegeben werden kann. Um etwas herauszugeben, sollte das Programm für sich alleine stehend verwendet werden können. Es muss also vorhanden sein:
- Dokumentation
- Tests
- Beispiele

## 6: Retrospektive
In der Retrospektive wird noch einmal über den Prozess gegangen und überlegt, was man behalten möchte und was man das nächste mal anders machen möchte.

# Crazy JavaScript
JavaScript hat ein paar spezielle Konventionen.

## True and false
Was gilt als `false`:
- `undefined`
- `false`
- `NaN`
- `null`
- `0`
- `""`

Was gilt als `true`:
- `"0"`
- `{}`
- `[]`
- `everything else`

Es gibt aber in JavaScript nicht nur `true` und `false`, sondern auch `truthy` und `falsely`, wobei die zwei letzteren die coercion eines Wertes sind.

## Type coercion
Type coercion (Typerzwingung) wird die Umwandlung von Typen in andere Typen genannt. JavaScript macht gewisse coercions automatisch.
|Ausdruck   |Coercion|
|-----------|-|
|`!!a`      |Zwingt den Wert `a` zu einen Boolean|
|`a == b`   |Ist ein Wert eine Nummer, wird das Resultat eine `Nummer`. Das `==` sollte nur in einem Fall verwendet werden: `a == null` anstelle von `a === null || a === undefined`|
|`a + b`    |Ist ein Wert ein String, wird das Resultat ein `String`|
|`a - b`    |Ist ein Wert eine Nummer, wird das Resultat eine `Nummer`|
|`Number(a)`|`a` wird in eine Nummer gezwungen|

!!!Warning `new Number(a)` konvertiert `a` in ein Objekt!

Diese type coercion kann einem aber auch ins Bein schiessen. Es gibt eine Faustregel, welche aber nicht wirklich zuverlässig ist: `object → string → number → boolean`

## Times one would say "What the ..."
```javascript {.line-numbers}
                          "2" + 1   →   "21"
                          "2" - 1   →   1
                        "2" - - 1   →   3
                      1 + 2 + "3"   →   "33"
                               -0   →   0
                            +true   →   1
                           +false   →   0
                      true + true   →   2
                       NaN == NaN   →   false
                      NaN == !NaN   →   true
                         [] == []   →   false
                        [] == ![]   →   true
                              +[]   →   0
                         2 == [2]   →   true              // "2" == "2"
                          {} + []   →   0                 // or "[object Object]"
                          [] + {}   →   "[object Object]"
                 JSON.parse("-0")   →   0
               JSON.stringify(-0)   →   "0"
                      typeof null   →   "object"
           null instanceof Object   →   false
                       typeof NaN   →   "number"
                     typeof (1/0)   →   "number"
                0.1 + 0.2 === 0.3   →   false             // 0.30000000000000004
                 9999999999999999   →   10000000000000000 // We went out of the safe integer zone
             Number.MAX_VALUE > 0   →   true
             Number.MIN_VALUE < 0   →   false             // MIN_VALUE is the closest number to zero
Math.min(1,2,3) < Math.max(1,2,3)   →   true
          Math.min() < Math.max()   →   false
                            1 < 2   →   true
                       "a" < "ab"   →   true
                      "ac" < "ab"   →   false
                       "03" < "1"   →   true
"03" < "1" && "1" < 2 && 2 < "03"   →   true              // Equivalent to a < b < c < a (what?)
                        1 < 2 < 3   →   true
                        1 > 2 > 3   →   false
                         {} == {}   →   false
                          {} > {}   →   false
                         {} >= {}   →   true              // (a >= b) is replaced with !(a < b)
                         "0" == 0   →   true
                          0 == []   →   true
                        "a" == []   →   false             // transitivity is not guaranteed
```
!!!Info Wenn JavaScript nicht weis wie etwas zu vergleichen ist, macht es einfach einen String daraus und vergleicht diesen.

## Coole Dinge
JavaScript macht aber nicht alles schlecht. Unter anderem bietet es einige sehr angenehme Dinge.
### Generatoren
Generatoren sind auch bekannt als Lazy-Streams. Das bedeutet, dass die Werte erst dann generiert werden, wenn sie effektiv gebraucht werden.
```javascript {.line-numbers}
function *foo() {
  console.log("a:", yield 1);
  console.log("b:", yield 2);
}

const it = foo();
it.next();    // {value:1, done:false}
it.next(5);   // a:5
              // {value:2, done:false}
it.next(10);  // b:10
              // {value:undefined, done:true}
```
### Deconstructor
Der Deconstructor ist ein sehr angenehmer syntaktischer Zucker von JavaScript.
```javascript {.line-numbers}
function foo() {
  const x = 2, y = 3;
  return (x: x, y: y);
}
const o = foo();
const x = o.x, y = o.y;
console.log(x, y) // 2 3

const {x, y} = foo();
console.log(x, y) // 2 3

function bar({x, y} {
  console.log(x, y);;
})
bar({y: 10, x: 25}); // 25, 10
bar({y: 10}); // undefined 5
```
