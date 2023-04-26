import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { onbutton, offButton, radioChange } from "../FormState/actionCreators"


const ALQ8 = (props) => {

    const { onbutton, offButton, radioChange } = props

    const valueOfChoice = localStorage.getItem("Question8")

    const handleChange = (e) => {
        radioChange(e.target.name, e.target.value)
        onbutton("button8", valueOfChoice)

        localStorage.setItem(e.target.name, e.target.value)

    }

    const handlebuttontoggle = (e) => {
        offButton(e.target.value, valueOfChoice)
    }
    return (

        <div className="App">
            <form>

                <div>
                    <p>Question 8:</p>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option1" ? true : false} name="Question8" value="option1" onChange={handleChange} />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option2" ? true : false} name="Question8" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option3" ? true : false} name="Question8" value="option3" onChange={handleChange} />
                        Option 3
                    </label>

                </div>
            </form>
            <nav>
                <NavLink to="9"><button disabled={props.togglebutton.button8} onClick={handlebuttontoggle}>NEXT</button></NavLink>&nbsp;
            </nav>
        </div>
    )
}

export default connect(mstp => mstp, { onbutton, offButton, radioChange })(ALQ8)