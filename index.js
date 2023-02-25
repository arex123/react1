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
const heading =()=> (
    <h1 id="title" key="h1">
        Hello world
    </h1>
)
const Heading1 =()=> (
    <h1 id="title" key="h1">
        Hello world
    </h1>
)

const heading2 = <h1>hello from another component</h1>


const HeadingComponent = () =>{
    return (
        <div>
            {/* {heading } */}
            <Heading1 /> {/**to render another component in any component , IMP: make sure that componet start with Cap letter
             * this is also known as component composition
             */} 
            <heading/> {/**this component is not getting rendered becoz its first letter is not Capital */}

            {/**as component are just functions so we can add component inside any component by calling it as a function also */}
            {Heading1()}
            {heading()} {/** same for this method also , even its first letter is small  */}

             {heading2}

            { 1 + 9 /*we can write any js code inside this braces*/} 
            <h2>Hello every i am learning React</h2>
            <h1>From Akshay saini</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
//whatever we write inside root tag in html code it gets overwritten 

// root.render(heading)
// root.render(container)
// root.render(heading) //to render react element we can directly pass its variabl name
root.render(<HeadingComponent/>) //to render react component we use html braces </> 