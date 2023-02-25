import React from "react"
import ReactDOM  from "react-dom/client"

// const heading  = React.createElement("h1",{
//     id:"title"
// },"Hello World !!!!")

// // console.log("whats in heading: "+heading) //object gets hidden here like [object object]
// console.log(heading) //it shows proper object
// const heading2 = React.createElement(
//     "h2",
//     {
//         id:"title",
//         hello:"world"// we can add any random attribute to tag here,this is called props in react
//     },
//     "Heading 2"
// )

// const container = React.createElement(
//     "div",
//     {
//         id:"container"
//     },
//     [heading,heading2]
// )


//below is jsx code
const heading = (
    <h1 id="title" key="h1">
        Hello world
    </h1>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
//whatever we write inside root tag in html code it gets overwritten 

// root.render(heading)
// root.render(container)
root.render(heading)