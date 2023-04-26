import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { onbutton, offButton, radioChange } from "../FormState/actionCreators"

const ALQ5 = (props) => {

    const { onbutton, offButton, radioChange } = props

    const valueOfChoice = localStorage.getItem("Question5")

    const handleChange = (e) => {
        radioChange(e.target.name, e.target.value)
        onbutton()
        localStorage.setItem(e.target.name, e.target.value)

    }

    const handlebuttontoggle = () => {
        offButton()
    }
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 5:</p>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option1" ? true : false} name="Question5" value="option1" onChange={handleChange} />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option2" ? true : false} name="Question5" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option3" ? true : false} name="Question5" value="option3" onChange={handleChange} />
                        Option 3
                    </label>
                </div>
            </form>
            <nav>
                <NavLink to="6"><button disabled={props.togglebutton.buttonoff} onClick={handlebuttontoggle}>NEXT</button></NavLink>&nbsp;
            </nav>
        </div>

    )
}



export default connect(mstp => mstp, { onbutton, offButton, radioChange })(ALQ5)

