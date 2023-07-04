import { NavLink, Route, Routes } from "react-router-dom"
import ALQ1 from "./ALQ1"

const MainLayout = () => {
    return (

        <>


            <nav className="App">

                <div>
                    <h1>RULES</h1> 
                    
                     <ol>
                        <li>Provide 2-3 short sentences answering each question.</li>
                        <li>The more detailed you respond, the more accurate your results will be.</li>
                        <li>Once you have submitted your answered your destiny is sealed.</li>
                     </ol>

                     <h2>FIND YOUR DESTINY</h2>
                </div>
                <NavLink to="/1"><button>Start Quiz</button></NavLink>&nbsp;
            </nav>
           


        </>
    )
}





export default MainLayout