-> whatever we write in root element in html, it will get override if we render any react element in it.

-> bundlers: vite,parcel,webpack

npm create-react-app uses webpack bunblers


for now we will use parcel for igniting our react app

package-lock.json : it keeps the exact version of node modules 

react project setup:
npm i -D parcel
npm i react
npm i react-dom

execute the app And to create developement build: { npx parcel index.html }
 



pacel auto relodes server after anything gets changed in file, because of HMR: hot module replacement

HMR uses file watcher algorithm which is written in c++,

parcel removes console log , when we create a production build ,
parcel caches while developement,(super fast build algorithm)
it optimize images also,
it compreses our file and even rewrite our code.
it is compatable with older version of browsers
It add polyfiles(?)
Https on dev( npx parcel index.html --https),
parcel uses consistent hashing algorithm to caches things up

* we should put .parcel-cache it in gitignore

to create production build : {npx parcel build index.html}

Q: dist : it conatains minified version of code(project)

Q: what is transitive dependency? A: dep. which depends upon inner more dependency