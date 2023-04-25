import { NavLink } from "react-router-dom"


const ALQ6 = () => {
    return (

        <div className="App">
            <form>

                <div>
                    <p>Question 6:</p>
                    <label>
                        <input type="radio" name="q6" value="option1" />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="q6" value="option2" />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="q6" value="option3" />
                        Option 3
                    </label>
                </div>
            </form>

            <nav>
                <NavLink to="7"><button>NEXT</button></NavLink>&nbsp;
            </nav>
        </div >


    )
}

export default ALQ6


