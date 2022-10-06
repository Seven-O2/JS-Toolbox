# JS-Toolbox
Author und ©: [Joël Allemann](https://github.com/Seven-O2), auf Basis des Unterrichts von Dierk König

Diese Toolbox ist eine Zusammenfassung von wichtigsten Dingen im Zusammenhang mit JavaScript, welche im Unterricht Web Programming (webpr) gelernt wurden. 

![js_logo](resources/images/logo_js.png)

## Inhaltsverzeichnis
- [Variablen](#variablen)
- [Scopes](#scopes)
- [Testen](#testen)
- [Funktionen](#funktionen)
- [Lambda](#lambda)
- [Strings](#strings)
- [Loggen](#loggen)

# Variablen
JavaScript kennt zwar keine Typen, jedoch müssen Variablen trotzdem deklariert werden. Dafür kennt JavaScript zwei Keywords.
## `Const`
Variablen welche mit `const` instanziert werden können nicht verändert werden (sind "*immutable*"). Also eine 5 bleibt immer eine 5. Verwendet man Objekte, kann das Objekt nie geändert werden. (die Member der Funktion jedoch schon!) Dasselbe gilt für Arrays.
```javascript
const x = 5;
const obj = {x: 10, y: 20};
x = 10;                     // illegal
obj = {x: 20, y: 10};       // illegal
obj.x = 9;                  // allowed
```
Jede Variable wird aus best-practice mit `const` angelegt. Muss eine Variable dennoch irgendwann verändert werden, wird sie dann auf `let` geändert.
## `Let`
Variablen welche mit `let` instanziert werden können wieder verändert werden.
```javascript
let x = 5;
let obj = {x: 10, y: 20};
x = 10;                     // allowed
obj = {x: 20, y: 10};       // allowed
obj.x = 9;                  // allowed
```

# Scopes
JavaScript bietet zwei Scopes an. Man mag meinen es gäbe mehrere, jedoch bildet JavaScript alles auf eines der zwei Scopes ab. (wobei es sich meistens um einen `function` Scope handelt)  
## `global`
Der `global` Scope ist das Fenster (im Browser), also quasi alles was sich auf dem Browserfenster befindet. 
### Instanzierung
Variablen im globalen Scope können wiefolgt angelegt werden.
```javascript
    x = ...
```
Das sollte normaleweise nicht gemacht werden.
## `function`
Der `function` Scope ist der Scope einer Funktion oder eines Lambdas. Diese sind dann nur Lokal in der Funktion gültig und werden nach Verlassen der Funktion zerstört.
### Instanzierung
Variablen im funktions Scope können wiefolgt angelegt werden.
```javascript
var x = ... // "hoisted" -> NEVER DO THIS
let x = ... 
const x = ...
```
"hoisted" bedeutet, dass die Variable irgendwo im Code definiert werden kann. Beim Ausführen wird sie dann an den Anfang des Codes gezogen.
[let](#let) und [var](#var) werden wie nach Beschreibung im lokalen Scope angelegt.  
### Variablen-Scoping
In verschiedenen Scopes können auch Variablen mit demselben Namen verwendet werden.
```javascript
const x = 0;
// so called iife -> immediately invoked function expression
(() => {
    const x = 1;
    document.writeln(String(x));
})(); 
// ↑ executes the iife
document.writeln(String(x));
```
> $ 1 0

# Testen
## Dinge verstehen und lernen
Testen in JavaScript geht ganz einfach ohne Framework. Möchte man zum Beispiel einfach etwas auf das Dokument schreiben, geht dies mit `document.writeln("")`. Man kann darin auch Statements anzeigen, zum Beispiel prüfen ob 1 wirklich 1 ist.

```javascript
document.writeln("Hallo!");
document.writeln((1 === 1).toString());
```
> $ Hallo true

# Funktionen
Funktionen oder auch Subroutinen sind in der Programmierung Codestücke, welche nicht bei der Initialisierung direkt ausgeführt werden müssen, sondern wenn immer nötig aufgeruft werden können
## Deklaration
Funktionen können (sinnvoll) auf zwei verschiedene Arten deklariert werden. Einmal mit dem [`function` Keyword](#function-keyword) und einmal mit einem [Lambda](#keyword-lambda).
### `function` Keyword
Funktionen die mit dem `function` Keyword deklariert werden, sehen syntaktisch am schönsten aus. Der Rückgabewert wird nicht explizit vor dem Namen, sondern mit dem `return` Wert implizit definiert.  
**Achtung, eine Funktion welche mit dem `function` Keyword deklariert wird, kann von einer gleichnahmigen Funktion überschrieben werden!**
Eine Funktion mit dem function Keyword in JavaScript sieht so aus:
```javascript
function fun(arg) { return arg; }
```
- **function**: Keyword, es folgt die Deklaration einer Funktion
- **fun**: Name der Funktion
- **(arg)**: Argumente, hier eines mit dem Namen `arg`

### `=>` Keyword (Lambda)
Funktionen in JavaScript können auch mit `() =>` erstellt werden. Es wird in eine Funktion evaluiert. Deklarationen welche anstelle der `()` stehen, definieren die Parameter der Funktion.
```javascript
const tok = arg => { return arg; }
```
`tok` ist in diesem Fall eine Referenz auf eine Funktion. Der Vorteil davon ist, ist dass `tok` nicht mehr überschrieben werden kann, da es mit `const` initialisiert ist.  
Wichtig zu bedenken ist, dass `=>` auch für Ausdrücke verwendet werden kann. Fehlen die `{}`, ist die Funktion in einen Ausdruck evaluiert. Es wird kein `return` benötigt, jedoch kann der Ausdruck auch nicht (fehlerfrei) aufgerufen werden.
```javascript
const tok = () =>  1;
document.writeln((tok === 1).toString());
```
> $ true

## Überladen
Funktionen können nicht Überladen werden, denn der Funktionsdispatcher funktioniert anders wie bei anderen Programmiersprachen, er merkt sich so gesehen nur den Namen der Funktion, und nicht wie bei zum Beispiel C die komplette Funktionssignatur.  
Eine Funktion welche keine Parameter nimmt, kann mit Parametern aufgerufen werden. Die Funktion wird (wenn auch mit Fehlern) aufgerufen.
```javascript
function fun1() { return 1; }
document.writeln( (fun1(42) === 1).toString() )
```
> $ true

Bei JavaScript ist der Name der Funktion schon ein Ausdruck, das bedeutet es können zwar kopien erstellt werden (`blah = fun`), und `blah` kann auch mit `blah()` die Funktion `fun` aufrufen, beim Überladen wird jedoch nur die zuletzt deklarierte Funktion geladen.

## Rückgabewerte
Wird kein `return` angegeben, wird davon ausgegangen, dass es sich um eine **void**-Funktion handelt. Für alle anderen `return` Werte wird der entsprechende Wert zurück gegeben.

## Sammlungen von Funktionen
Funktionen, bzw. Referenzen darauf können auch in einem Array gespeichert werden.
```javascript
const fun1 = () => 1;
const fun2 = () => { 1 };
const funs = [null, undefined, fun1, fun2];
document.writeln( (funs[2]() === 1).toString() );
```
> $ true

## Funktionen<sup>x</sup>
JavaScript erlaubt das Zurückgeben von Funktionen in Funktionen (in Funktionen in Funktionen ...).
```javascript
function doit(whatToDo) {
    return function bla(arg) { return whatToDo(arg); }
}
const doit2 = callme => arg => callme(arg);

// Both do the same thing!

doit(fun1)(10)
doit2(fun1)(10)
```
Beim Aufrufen der Funktion doit, bzw. doit2 wird eine weitere Funktion zurückgegeben, welche dann wieder mit einem Argument aufgerufen werden kann. Das bedeutet, der Ausdruck `doit(fun1)` ist selbst auch vom Typ Funktion.

# Lambda Calculus
Mithilfe des Lambda Calculus kann alles berechenbare berechnet werden. JavaScript verwendet viele dieser Lambda Calculus Eigenschaften.
`x => x` ist das gleiche wie $\lambda x . x$.

## $\alpha$ - Alpha translation
"Rename parameter"
Der Name in einem Lambda ist nicht ausschlaggebend für eine Funktion. Er kann umbenannt werden wie man möchte, der Effekt der Funktion ändert sich nicht.
```javascript
const id1 = x => x
const id2 = gurkensalat => gurkensalat
```

## $\beta$ - Beta reduction
"Apply argument"
Reduzieren der Argumente von mehreren Funktionen auf das endgültige Resultat. Also Quasi das ersetzen von Variablen durch den effektiven Wert.
```javascript
const id = x => x;
( f => x => f (x)) (id) (1)  // f evaluates to 1
(      x => id (x)) (1)      // x evaluates to 1
(           id (1))          // id = "x => x"
( x => x ) (1)               // x evaluates to 1
(1)
```

## $\eta$ - Eta reduction
"Cancel parameter"
Wenn das letzte Argument auf der rechten Seite dasselbe ist wie das letzte Argument auf der Linken seite, darf das gelöscht (gekürzt) werden. (Solange "plus" im Beispiel keine Nebenwirkungen hat)
```javascript
x => y => plus(x)(y)    // Implementation of function  ...
x =>      plus(x)       // ... with eta reduction ...
          plus          // ... gives us the reference to the function
```

## Grundfunktionen
Alles was sich im Lambda Calculus berechnen lässt, lässt sich auf 3 Grundfunktionen zurückführen:
- `const id = y => y;`
- `const konst = x => y => x;`
- (selten verwendet)
```javascript
// const kite = x => y => y;        // Expand with ID
// const kite = x => y => id(y)     // Eta reduction
// const kite = x => id;            // Expand with konst
// const kite = x => konst(id)(x)   // Eta reduction
const kite = konst(id)              // Finished!
document.writeln(kite(undefined)(0) === 0);
```
> $ true

## Pairs
Pairs sind Paare von Daten, wo zwei miteinander verwandte Daten abgespeichert werden können. Wie viele andere Dinge kann diese Datenstruktur auch mit Lambda-Calculus nachgebildet werden.
```javascript
const Pair = fn => ln => selector => selector(fn)(ln);
const firstname = x => y => x;  // konst
const lastname = x => y => y;   // snd

const joel = Pair("Joel")("Allemann");      // immutable, because "Pair => fn => ln", fn /ln are a closure
document.writeln(joel(firstname) === "Joel");
document.writeln(joel(lastname)  === "Allemann");
```
> $ true true

## Either
Either bedeutet entweder das eine oder das andere. Man kann also einen Ausdruck aufrufen, und kriegt entweder den ersten Wert oder den zweiten Wert.
```javascript
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
> $ 1 schlecht!

## Boolean Logik
Mit Lambdas kann auch boolean Logik gebaut werden.

### True / False 
Um True / False darzustellen, wird ganz einfach ein T und ein F definiert. 
- `T` gibt "1" zurück, wenn das erste Argument 1 ist. 
- `F` gibt "1" zurück, wenn das zweite Argument 1 ist.
```javascript
const konst = x => y => x;
const snd = x => y => y;
T = konst;  // True Function
F = snd;    // False Function
document.writeln(T(1)(0) === 1);
document.writeln(F(0)(1) === 1);
```
> $ true true  

Damit lassen sich nun ganze Logikgatter nachbauen. Das funktioniert 

### AND
Die AND Funktion:
|a|b||
|-|-|-|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|

```javascript
//                      x = TRUE    FALSE
//const and = x => y => x(y(T)(F))(y(F)(F))
const and = x => y => x(y)(x)

document.writeln(and(F)(F) === F);
document.writeln(and(T)(F) === F);
document.writeln(and(F)(T) === F);
document.writeln(and(T)(T) === T);
```
> $ true true true true

### OR
Die OR Funktion
|a|b||
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|
```javascript
//const or = x => y => x(y(T)(T))(y(T)(F))
const or = x => y => x(x)(y)

document.writeln(or(F)(F) === F);
document.writeln(or(T)(F) === T);
document.writeln(or(F)(T) === T);
document.writeln(or(T)(T) === T);
```
> $ true true true true

# Strings
In JavaScript können Strings über verschiedene Varianten angelegt werden. Spezielle Characters müssen mit "\" escaped werden. Das gilt auch für "\" selbst.
```javascript
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
Strings können mit ", ' und `(backtick) definiert werden. Die " und ' werden als normale Strings verwendet, der Backtick wird für sogenannte Template-Strings verwendet. Es handelt sich dabei um literale Strings.  
Mithilfe des String-Konstruktors können Escape-Characters umgangen werden, wie zum Beispiel beim generieren einer Regex.

# Loggen
```javascript
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
JavaScript bietet diverse Möglichkeiten auf die Konsole zu schreiben. Dabei gibt es wie bei sonstigen Logging-Frameworks verschiedene Stufen, nach welchen auch gefiltert werden kann. Wichtig, wenn das ganze Logging über die Konsole gemacht wird benötigt das Speicher und Rechenpower!

## Loglevel programmatisch setzen
Um das zu verhindern, können die Logs auch ein- und ausgeschaltet werden.
```javascript
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
Der wer logLevel kann dann von jedem über die JavaScript Konsole im Browser des Vertrauens gesetzt werden, und das Loglevel wird on-the-fly angepasst.
Dieser Code funktioniert ganz einfach, man gibt den Loggingfunktionen eine Funktion mit, welche ausgeführt wird nachdem `logLevel` überprüft wurde. Würde man das ganze mit einer Variable machen, würde diese (bei der Übergabe) zuerst evaluiert werden, auch wenn es sich dabei um eine lang laufende Funktion handelt!


