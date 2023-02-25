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


parcel caches while developement,(super fast build algorithm)
it optimize images also,
it compreses our file and even rewrite our code.
it is compatable with older version of browsers
It add polyfiles(?)
Https on dev( npx parcel index.html --https),
parcel uses consistent hashing algorithm to caches things up,
tree shaking: parcel removes unwanted code

* we should put .parcel-cache it in gitignore

to create production build : {npx parcel build index.html}

Q: dist : it conatains minified version of code(project)

Q: what is transitive dependency? A: dep. which depends upon inner more dependency


* parcel does not remove console log, we need another plugin to remove it (babel plugin tranform runtime console)

* JSX: html like code inside javscript

JSX = React.createElement = object = html(rendered in DOM)

* babel: it transforms latest version of js code so that they can run in older versions of browsers also.
and also babel transforms JSX code to react.createElement like code .

babel comes along with parcel