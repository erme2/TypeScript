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
