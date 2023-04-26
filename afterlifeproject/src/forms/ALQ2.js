import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { onbutton, offButton, radioChange } from "../FormState/actionCreators"




const ALQ2 = (props) => {

    const { onbutton, offButton, radioChange } = props

    const valueOfChoice = localStorage.getItem("Question2")


    const handleChange = (e) => {
        radioChange(e.target.name, e.target.value)
        onbutton("button2", valueOfChoice)
        localStorage.setItem(e.target.name, e.target.value)

    }

    const handlebuttontoggle = (e) => {
        offButton(e.target.value, valueOfChoice)
    }
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 2:</p>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option1" ? true : false} name="Question2" value="option1" onChange={handleChange} />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option2" ? true : false} name="Question2" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option3" ? true : false} name="Question2" value="option3" onChange={handleChange} />
                        Option 3
                    </label>
                </div>
            </form>

            <nav>
                <NavLink to="3"><button disabled={props.togglebutton.button2} onClick={handlebuttontoggle}>NEXT</button></NavLink>&nbsp;
            </nav>
        </div>

    )
}

export default connect(mstp => mstp, { onbutton, radioChange, offButton })(ALQ2)

