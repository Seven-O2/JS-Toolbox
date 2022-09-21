# JS-Toolbox
Author und ©: Joël Allemann  
Diese Toolbox ist eine Zusammenfassung von wichtigsten Dingen im Zusammenhang mit JavaScript, welche im Unterricht Web Programming (webpr) gelernt wurden. 

![js_logo](resources/images/logo_js.png)

## Inhaltsverzeichnis
- [Testen](#testen)
- [Funktionen](#funktionen)
- [Komische Dinge in JavaScript](#komische-dinge-in-javascript)

# Testen
## Dinge verstehen und lernen
Testen in JavaScript geht ganz einfach ohne Framework. Möchte man zum Beispiel einfach etwas auf das Dokument schreiben, geht dies mit `document.writeln("")`. Man kann darin auch Statements anzeigen, zum Beispiel prüfen ob 1 wirklich 1 ist.

```javascript
<script>
    document.writeln("Hallo!");
    document.writeln((1 === 1).toString());
</script>
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
<script>
    function fun(arg) { return arg; }
</script>
```
- **function**: Keyword, es folgt die Deklaration einer Funktion
- **fun**: Name der Funktion
- **(arg)**: Argumente, hier eines mit dem Namen `arg`

### `=>` Keyword (Lambda)
Funktionen in JavaScript können auch mit `() =>` erstellt werden. Es wird in eine Funktion evaluiert. Deklarationen welche anstelle der `()` stehen, definieren die Parameter der Funktion.
```javascript
<script>
    const tok = arg => { return arg; }
</script>
```
`tok` ist in diesem Fall eine Referenz auf eine Funktion. Der Vorteil davon ist, ist dass `tok` nicht mehr überschrieben werden kann, da es mit `const` initialisiert ist.  
Wichtig zu bedenken ist, dass `=>` auch für Ausdrücke verwendet werden kann. Fehlen die `{}`, ist die Funktion in einen Ausdruck evaluiert. Es wird kein `return` benötigt, jedoch kann der Ausdruck auch nicht (fehlerfrei) aufgerufen werden.
```javascript
<script>
    const tok = () =>  1;
    document.writeln((tok === 1).toString());
</script>
```
> $ true

## Überladen
Funktionen können nicht Überladen werden, denn der Funktionsdispatcher funktioniert anders wie bei anderen Programmiersprachen, er merkt sich so gesehen nur den Namen der Funktion, und nicht wie bei zum Beispiel C die komplette Funktionssignatur.  
Eine Funktion welche keine Parameter nimmt, kann mit Parametern aufgerufen werden. Die Funktion wird (wenn auch mit Fehlern) aufgerufen.
```javascript
<script>
    function fun1() { return 1; }
    document.writeln( (fun1(42) === 1).toString() )
</script>
```
> $ true

Bei JavaScript ist der Name der Funktion schon ein Ausdruck, das bedeutet es können zwar kopien erstellt werden (`blah = fun`), und `blah` kann auch mit `blah()` die Funktion `fun` aufrufen, beim Überladen wird jedoch nur die zuletzt deklarierte Funktion geladen.

## Rückgabewerte
Wird kein `return` angegeben, wird davon ausgegangen, dass es sich um eine **void**-Funktion handelt. Für alle anderen `return` Werte wird der entsprechende Wert zurück gegeben.

## Sammlungen von Funktionen
Funktionen, bzw. Referenzen darauf können auch in einem Array gespeichert werden.
```javascript
<script>
    const fun1 = () => 1;
    const fun2 = () => { 1 };
    const funs = [null, undefined, fun1, fun2];
    document.writeln( (funs[2]() === 1).toString() );
</script>
```
> $ true

## Funktionen<sup>x</sup>
JavaScript erlaubt das Zurückgeben von Funktionen in Funktionen (in Funktionen in Funktionen ...).
```javascript
<script>
    function doit(whatToDo) {
        return function bla(arg) { return whatToDo(arg); }
    }
    const doit2 = callme => arg => callme(arg);
    
    // Both do the same thing!
    
    doit(fun1)(10)
    doit2(fun1)(10)
</script>
```
Beim Aufrufen der Funktion doit, bzw. doit2 wird eine weitere Funktion zurückgegeben, welche dann wieder mit einem Argument aufgerufen werden kann. Das bedeutet, der Ausdruck `doit(fun1)` ist selbst auch vom Typ Funktion.

# JavaScript Goodies
JavaScript hat viele Dinge, bei welchen man sich manchmal denkt "*wieso*". Dies ist eine Sammlung von verschiedener solcher Dinge.

