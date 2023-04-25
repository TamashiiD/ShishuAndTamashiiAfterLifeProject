import { NavLink } from "react-router-dom"


const ALQ4 = () => {
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 4:</p>
                    <label>
                        <input type="radio" name="q4" value="option1" />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="q4" value="option2" />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="q4" value="option3" />
                        Option 3
                    </label>
                </div>
            </form>

            <nav>
                <NavLink to="5"><button>NEXT</button></NavLink>&nbsp;
            </nav>
        </div>

    )
}

export default ALQ4



