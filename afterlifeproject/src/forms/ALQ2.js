import { memo } from "react"
import { NavLink } from "react-router-dom"




const ALQ2 = memo = ( () => {
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 2:</p>
                    <label>
                        <input type="radio" name="q2" value="option1" />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="q2" value="option2" />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="q2" value="option3" />
                        Option 3
                    </label>
                </div>    
            </form>

            <nav>
                <NavLink to="3"><button>NEXT</button></NavLink>&nbsp;
            </nav>
        </div>

    )
})

export default ALQ2

