import { NavLink } from "react-router-dom"

const ALQ8 = () => {
    return (

<div className="App">
    <form>

        <div>
            <p>Question 8:</p>
            <label>
                <input type="radio" name="q8" value="option1" />
                Option 1
            </label>
            <label>
                <input type="radio" name="q8" value="option2" />
                Option 2
            </label>
            <label>
                <input type="radio" name="q8" value="option3" />
                Option 3
            </label>

        </div>
    </form>
    <nav>
        <NavLink to="9"><button>NEXT</button></NavLink>&nbsp;
    </nav>
</div>
)}

export default ALQ8