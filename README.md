# JS-Toolbox
Diese Toolbox ist eine Zusammenfassung von wichtigen Dingen im Zusammenhang mit JavaScript.  
Author und ©: Joël Allemann

![js_logo](resources/images/logo_js.png)

## Inhaltsverzeichnis
- [Tests](#Tests)
- [Funktionen](#Funktionen)
- [Komische Dinge in JavaScript](#komische-dinge-in-javascript)

# Tests
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
## Allgemeines
### `Function` Keyword
Eine Funktion mit dem function Keyword in Javascript sieht so aus:
```javascript
<script>
    function fun(arg) { return arg; }
</script>
```
- **function**: Keyword, definiert eine Funktion
- **fun**: Name der Funktion
- **(arg)**: Argumente, hier "arg"

### `=>` Keyword (Lambda)
Funktionen in JavaScript können auch mit `=>` erstellt werden. Es wird in eine Funktion evaluiert.
```javascript
<script>
    const tok = () => { return 1; }
</script>
```
`tok` ist in diesem Fall eine Referenz auf eine Funktion. Der Vorteil davon ist, ist dass `tok` nicht mehr überschrieben werden kann, da es mit `const` initialisiert ist. Wichtig zu bedenken ist, dass `=>` auch für Ausdrücke verwendet werden kann. Fehlen die `{}`, ist es nur ein Ausdruck, und es wird kein `return` benötigt
```javascript
<script>
    const tok = () =>  1;
    document.writeln((tok === 1).toString());
</script>
```
> $ true

## Überladen
Funktionen können nicht Überladen werden, denn der Funktionsdispatcher funktioniert anders wie bei anderen Programmiersprachen.  
Eine Funktion welche keine Parameter nimmt, kann mit Parametern aufgerufen werden. Es gibt keinen Fehler.
```javascript
<script>
    function fun1() { return 1; }
    document.writeln( (fun1(42) === 1).toString() )
</script>
```
> $ true

Bei JavaScript ist der Name der Funktion schon ein Ausdruck, das bedeutet es können zwar kopien erstellt werden (`blah = fun`), und `blah` kann auch mit `blah()` fun aufrufen, beim Überladen wird jedoch nur die zuletzt instanzierte Funktion geladen.

## Rückgabewerte
Wird kein `return` angegeben, wird davon ausgegangen, dass es sich um eine **void**-Funktion handelt.

## Sammlungen von Funktionen
Funktionen, bzw. Referenzen daruf können auch in einem Array gespeichert werden.
```javascript
<script>
    const fun1 = () => 1;
    const fun2 = () => { 1 };
    const funs = [null, undefined, fun1, fun2];
    document.writeln( (funs[2]() === 1).toString() );
</script>
```
> $ true

## Funktionen, die Funktionen zurückgeben
JavaScript erlaubt das zurückgeben von Funktionen in Funktionen.
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
Beim Aufrufen der Funktion doit, bzw. doit2 wird eine neue Funktion zurückgegeben, welche dann wieder mit einem Argument aufgerufen werden kann.

# Komische Dinge in JavaScript
JavaScript hat viele Dinge, bei welchen man sich manchmal denkt "*wieso*". Dies ist eine Sammlung von verschiedener solcher Dinge.

