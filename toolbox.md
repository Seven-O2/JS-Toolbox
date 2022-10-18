# JS-Toolbox
Author und ©: [Joël Allemann](https://github.com/Seven-O2), auf Basis des Unterrichts von Dierk König

Diese Toolbox ist eine Zusammenfassung von wichtigsten Dingen im Zusammenhang mit JavaScript, welche im Unterricht Web Programming (webpr) gelernt wurden. 

![js_logo](resources/images/logo_js.png)

# Inhaltsverzeichnis
<!-- Auto generated TOC -->

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [JS-Toolbox](#js-toolbox)
- [Inhaltsverzeichnis](#inhaltsverzeichnis)
- [Generell](#generell)
- [Variablen](#variablen)
  - [`Const`](#const)
  - [`Let`](#let)
- [Scopes](#scopes)
  - [`global`](#global)
    - [Instanziierung](#instanziierung)
  - [`function`](#function)
    - [Instanziierung](#instanziierung-1)
    - [Variablen-Scoping](#variablen-scoping)
- [Testen](#testen)
  - [Dinge verstehen und lernen](#dinge-verstehen-und-lernen)
- [Funktionen](#funktionen)
  - [Deklaration](#deklaration)
    - [`function` Keyword](#function-keyword)
    - [`=>` Keyword (Lambda)](#keyword-lambda)
  - [Überladen](#überladen)
  - [Rückgabewerte](#rückgabewerte)
  - [Sammlungen von Funktionen](#sammlungen-von-funktionen)
  - [Funktionenx](#funktionensupxsup)
  - [Curried vs. multiple Arguments](#curried-vs-multiple-arguments)
- [Lambda Calculus](#lambda-calculus)
  - [Grundbausteine](#grundbausteine)
    - [$\alpha$ - Alpha Equivalence](#alpha-alpha-equivalence)
    - [$\beta$ - Beta reduction](#beta-beta-reduction)
    - [$\eta$ - Eta reduction](#eta-eta-reduction)
    - [Grundfunktionen](#grundfunktionen)
  - [Pairs](#pairs)
  - [Either](#either)
  - [Boolean Logik](#boolean-logik)
    - [True / False](#true-false)
    - [AND](#and)
    - [OR](#or)
  - [Map](#map)
  - [Filter](#filter)
  - [Reduce](#reduce)
- [Scripting](#scripting)
  - [Progressive Web-Applikation](#progressive-web-applikation)
  - [Expression Evaluation](#expression-evaluation)
    - [`eval()`](#eval)
    - [Optimierung mit `Function`](#optimierung-mit-function)
  - [Referencing](#referencing)
- [Strings](#strings)
- [Loggen](#loggen)
  - [Loglevel programmatisch setzen](#loglevel-programmatisch-setzen)
- [Spread-Operator `...`](#spread-operator)
- [Semicolons](#semicolons)

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
// so called iife -> immediately invoked function expression
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
> `[1, 2, 3] -> x => x * 2 -> [2, 4, 6]`

```javascript {.line-numbers}
const times = a => b => a * b;
[1, 2, 3].map(x => times(2)(x))
[1, 2, 3].map(times(2))     // lambda calculus allows for eta-reduction
const twoTimes = times(2);  // name a specific function -> alpha-reduction
[1, 2, 3].map(twoTimes)     
```

## Filter
Das Filtern von Daten bedeutet, dass auf jedes Element in einer Menge auf eine Condition geprüft wird. Beim Anwenden eines `filters` werden alle Elemente aus der Liste entfernt (oder behalten), auf welchem eine Condition `true` (oder `false`) gibt. Dabei wird der Datentyp der Liste, sowie die einzelnen Elemente welche noch behalten werden, nicht geändert. 

!!!Info Es ändert sich nur die Menge an Elementen.

> `[1, 2, 3] -> x => x % 2 === 1 -> [1, 3]`

```javascript {.line-numbers}
const odd = x => x % 2 === 1;
[1, 2, 3].filter(x => x % 2 === 1);
[1, 2, 3].filter(x => odd(x))   // name a specific function -> alpha-reduction
[1, 2, 3].filter(odd);          // lambda calculus allows for eta-reduction
```

## Reduce
Das Reduzieren von Daten bedeutet, dass auf jedes Element zusammen in der Menge eine kombinierende Funktion angewendet wird. Dabei wird auf das 1. und 2. Element die Funktion angewendet, dann auf das Resultat davon mit dem 3. Element etc. Dabei spricht man vom ersten Element (im Beispiel unten `x`) vom Akkumulator, und vom zweiten Element (im Beispiel unten `y`) vom Current. 

!!!Info Es ändern sich alles bis auf den Datentyp, dieser bleibt auf dem Typ des Akkumulators.

> `[1, 2, 3] -> x => y => x + y -> 6`

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

```html {.line-numbers}
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Plotter</title>
</head>

<body onload="start()">
  <canvas id="canvas" width="800" height="600"></canvas>
  <input type="text" id="user_function" value="Math.sin(x)">
  <script>
    const minX =  0;
    const maxX =  6;
    const minY = -1;
    const maxY =  1;

    function start() {
      const userFunction = document.getElementById('user_function');
      const canvas       = document.getElementById('canvas');
        
      // run display with canvas and user evaluated function
      const f = 
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
  </script>
</body>
</html>
```

<iframe src=resources/javascript/Plotter.html frameBorder="0"
style="height:650px"
>Shoot, the plotter script should be here :(</iframe>

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
```html {.line-numbers}
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Excel (kind of)</title>
</head>

<body onload="startExcel()">
  <table>
    <thead></thead>
    <tbody id="dataContainer">
      <!-- "Excel" inserted here -->
    </tbody>
  </table>
  <button onclick="refresh()">Calculate</button>
  <script>
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

  </script>
</body>
</html>
```
<iframe src=resources/javascript/Excel.html frameBorder="0"
>Shoot, here should be the excel :(</iframe>

Wie beim Plotter werden die Werte in den Zellen eingelesen, und evaluiert. Die Werte in der Klammer werden dann als `input` Objekt weitergegeben und von der Funktion `n` in Zahlen umgewandelt, und zusätzlich werden die einzelnen Funktionen (also das +) ausgeführt.

# Strings
In JavaScript können Strings über verschiedene Varianten angelegt werden. Spezielle Characters müssen mit "\" escaped werden. Das gilt auch für "\" selbst.
```javascript {.line-numbers}
$   "askf\tëä3aa"           
 -> "askf    ëä3aa"
$   "askf\\asd"             
 -> "askf\asd"
$   'askfasd'               
 -> "askfasd"
$   'Er sagte "Hallo!"'     
 -> "Er sagte \"Hallo!\""
$   "Er sagte 'Hallo!'"     
 -> "Er sagte 'Hallo!'"
$   const a = 1;
$   `x ist : ${a}`          
 -> "x ist 1"
$   /hallo\\s/              
 -> "/hallo\\s/"
$   String(/hallo\s/)       
 -> "/hallo\\s/"
```
Strings können mit `"`, `'` und `` ` `` definiert werden. Die `"` und `'` werden als normale Strings verwendet, der Backtick wird für sogenannte Template-Strings verwendet. Es handelt sich dabei um Literale Strings.  
Mithilfe des String-Konstruktors (`String()`) können Escape-Characters umgangen werden, wie zum Beispiel beim generieren einer Regex.

# Loggen
Die schönste Art in JavaScript zu loggen ist über die Konsole.
```javascript {.line-numbers}
$ const obj {x: 1, y: 2}
$ console.log(obj)
-> {x: 1, y: 2}
$ console.log(document.getElementByName('body'))
-> NodeList[]...
$ console.dir(document.getElementByName('body'))
-> NodeList[]... // schon aufgefaltet
$ console.info(obj)
-> ℹ️ {x: 1, y: 2}
$ console.warn(obj)
-> ⚠️ {x: 1, y: 2}
$ console.error(obj)
-> ⛔ {x: 1, y: 2}
$ console.debug(obj)
-> {x: 1, y: 2}
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

# Spread-Operator `...`
Der Spread-Operator erlaubt es dem Benutzer beliebig viele Variablen in eine Funktion mitzugeben.
```javascript {.line-numbers}
$ const foo = (a, b, c) => a + b + c;
$ foo(1, 2, 3)
-> 6
$ foo("1", 2, 3)
-> "123"
$ foo("1", 2)
-> "12undefined"
$ const bar = (...a) => a.length;
$ bar(1, 2, 3)
-> 3
$ bar()
-> 0
```
Im Hintergrund wird ein Objekt erstellt, welches die einzelnen Werte abspeichert. Er verwandelt eine Liste von Elementen in ein Array von Elementen. 

!!!Info Ein Array ist ein Objekt

# Semicolons
Semicolons sind nicht freiwillig, JavaScript versucht einfach sie selbst zu setzen.

!!!Quote "Unfortunately, JS has a misfeature called Automated Semicolon Insertion. It can fail in bad ways, so write like a professional." - Douglas Crockford, "How JavaScript works."
```javascript {.line-numbers}
$ console.log("hi");
  [1, 2, 3].map(it => it * 2);
-> "hi"
-> [2, 4, 6]

$ console.log("hi") // <- Missing Semicolon
  [1, 2, 3].map(it => it * 2);
-> TypeError: undefined is not an object (evaluation 'console.log("hi")[1, 2, 3]')
```
JavaScript sieht hier das `console.log` sowie das `[1, 2, 3]` als Ausdrücke. Somit wird beim vergessenen `;` ein Ausdruck generiert, welcher auf das `console.log` ausgeführt wird, welches nach dem Ausführen undefined ist.