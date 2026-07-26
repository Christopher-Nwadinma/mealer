
// function Header(){

//     //let's say we send a request to a backend server and it sends back a response
//     const appName = "ChowDeck Restaurant"


//     //every functional components must return JSX
//     return(
//         <div className="row text-center bg-primary">
//             <div className="col-md-12" py-5>
//                 <h1>{appName}</h1>
//                 <p>A place to satisfy your hunger...</p>
//             </div>
//         </div>
//     )
// }

//using inline css
//this child component has received a prop from its parent component (App.jsx) and it is using that prop to display the number of page visits.
function Header(props){
    console.log(props) //this will display the number of page visits in the console
    //let's say we send a request to a backend server and it sends back a response
    const appName = "ChowDeck Restaurant"

    const rowStyle = {
        backgroundColor : "tomato",
        padding : "50px 10px",
        color : "white",
        textAlign : "center"
    }


    //every functional components must return JSX
    return(
        <div className="row" style={rowStyle}>
            <div className="col-md-12" py-5>
                <h1>{appName}</h1>
                <p className="motto">A place to satisfy your hunger... Visit: <strong>{props.xyz}</strong></p> {/* child component is using the prop passed from parent component to display the number of page visits. */}
            </div>
        </div>
    )
}

export default Header