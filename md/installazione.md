# Installazione
Bisogna installare NodeJS e poi TypeScript. Io ho un mac e ho usato [brew](https://brew.sh/), se avete windows o linux potete googolare o andare direttamente sul sito di [TypeScript](https://www.typescriptlang.org/download) 
```bash
$ brew install node typescript
$  node -v
v16.19.1
$ tsc -v
Version 5.0.3
```

## Editor
Io uso [VSCode](https://code.visualstudio.com/) al momento perché supporta nativamente JS, TS e NodeJS, ma qualsiasi editor dovrebbe avere un supporto esteso per questi tre linguaggi.


## Configurazione
Settare un file di configurazione di TS all'interno di un progetto ci aiuterà a migliorare la compilazione del progetto stesso.


```bash
tsc --init

Created a new tsconfig.json with:                                                                                       
                                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true
```
Questo creerà un file [tsconfig.json](../tsconfig.json) con una enorme lista di opzioni commentate.

Per fortuna ce ne interessano solo alcune:
- [target](./installazione.md#target)
- [modules](./installazione.md#modules)
- [rootDir](./installazione.md#rootdir)
- [outDir](./installazione.md#outdir)
- [removeComments](./installazione.md#removecomments)
- [noEmitOnError](./installazione.md#noemitonerror)
- [sourceMap](./installazione.md#sourcemap)
- [noImplicitAny](./installazione.md#noimplicitany)
- [noUnusedParameters](./installazione.md#nounusedparameters)
- [noUnusedLocals](./installazione.md#nounusedlocals)

### target
Di default TS compila i files per essere compatibili con una versione di JS molto vecchia [ES5 (ECMAScript 5 - 2009)](https://www.w3schools.com/Js/js_es5.asp), ma noi vorremmo usare una versione un po' più recente, e per fare questo possiamo sono possibili diverse [opzioni](https://www.typescriptlang.org/tsconfig#target). Più si va indietro nel tempo e maggiore sarà la compatibilità in tutti gli ambiti ma con una ottimizzazione minore, più si va avanti e più il codice sarà ottimizzato ma la scelta sarà limitata.

### modules
???

### rootDir
Specifica la directory dove salvare i sorgenti TS, di default questa é la root del progetto (`./`), ma per convenzione creeremo una cartella `src` che contenga tutti i sorgenti TS e sposteremo tutti i file TS che vogliamo compilare in quella cartella e aggiorneremo il file `tsconfig.json`.
```
"rootDir": "./src", 
```

### outDir
Come `rootDir` ma specifica la cartella di output per i files compilati in JS. Per convensione creeremo una cartella `dist` e aggiorneremo il file `tsconfig.json` cosí:
```
"rootDir": "./src", 
```

### removeComments
Se settata a true questa impostazione rimuoverà i commenti nella compilazione

### noEmitOnError
Se settata a true la compilazione non emetterà alcun risultato se si verificherà un qualsiasi errore

### sourceMap
Se abilitato TS creerà un file `.map` che ci permetterà di capire cosa é stato compilato e dove si trova nella `dist` dir.

### noImplicitAny
Se abilitato consente l'uso indiscriminato di variabili di tipo `any` (non usatela se possibile)

### noUnusedParameters
Se abilitata (fortemente consigliata) non sarà possibile dichiarare funzioni che non usino tutti i parametri richiesti

### noImplicitReturns
Se abililitata (fortemente consigliata) le funzioni non potranno restituire `undefined`

### noUnusedLocals
Se abilitata (fortemente consigliata) avrai errore se ci sono variabili dichiarate ma non usate


## Debug in VsCode
Selezionate il file di partenza (molto importante), cliccate sull'icona `Run and Debug` sulla barra di controllo, quando lo fate per la prima volta dovrete cliccare su `create a launch.json file` e poi selezionate `Node.js`. VsCode creerà una cartella `.vscode` con dentro un nuovo file [`launch.json`](./../.vscode/launch.json). Questo file dirà a VsCode come fare per eseguire il debug sull'applicazione che state scrivendo.
Dovremo aggiungere solo una linea, subito dopo la linea `"program"` e prima di `"outFiles"`
```json
  [...]
      "program": "${workspaceFolder}/applicazione/src/index.ts",
      "preLaunchTask": "tsc build - tsconfig.json",
      "outFiles": [
  [...]
```
Aggiungete un `breackpoint` nel file `index.ts` sulla prima riga e cliccate su launch (in alto a sinistra nella barra del `Run and debug`)




 