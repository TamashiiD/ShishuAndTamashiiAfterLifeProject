import { NavLink } from "react-router-dom"


const ALQ5 = () => {
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 5:</p>
                    <label>
                        <input type="radio" name="q5" value="option1" />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="q5" value="option2" />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="q5" value="option3" />
                        Option 3
                    </label>
                </div>
            </form>
            <nav>
                <NavLink to="6"><button>NEXT</button></NavLink>&nbsp;
            </nav>
        </div>

    )
}



export default ALQ5

