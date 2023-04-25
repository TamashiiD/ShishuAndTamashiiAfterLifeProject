import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { radioChange } from "../FormState/actionCreators"

const ALQ5 = (props) => {

    const { radioChange } = props
    const handleChange = (e) => {
        radioChange(e.target.name, e.target.value)
    }
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 5:</p>
                    <label>
                        <input type="radio" name="Question5" value="option1" onChange={handleChange} />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="Question5" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="Question5" value="option3" onChange={handleChange} />
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



export default connect(mstp => mstp, { radioChange })(ALQ5)

