import { NavLink, Route, Routes } from "react-router-dom"
import ALQ2 from "./ALQ2"



const ALQ1 = () => {

    return (
        <div className="App">


            <form>
                <div>
                    <p>Question 1:</p>
                    <label>
                        <input type="radio" name="q1" value="option1" />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="q1" value="option2" />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="q1" value="option3" />
                        Option 3
                    </label>
                </div>

            </form>

            <nav>
                <NavLink to="2"><button>NEXT</button></NavLink>&nbsp;
            </nav>
        
        </div>

    )
}

export default ALQ1