import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { onbutton, offButton, radioChange } from "../FormState/actionCreators"

const ALQ3 = (props) => {

    const { onbutton, offButton, radioChange } = props
    const handleChange = (e) => {
        radioChange(e.target.name, e.target.value)
        onbutton()
    }
    const handlebuttontoggle = () => {
        offButton()

    }


    return (

        <div className="App">
            <form>
                <div>

                    <p>Question 3:</p>
                    <label>
                        <input type="radio" name="Question3" value="option1" onChange={handleChange} />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="Question3" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="Question3" value="option3" />
                        Option 3
                    </label>
                </div>
            </form>



            <nav>
                <NavLink to="4"><button disabled={props.togglebutton.buttonoff} onClick={handlebuttontoggle}>NEXT</button></NavLink>&nbsp;
            </nav>
        </div>

    )
}

export default connect(mstp => mstp, { onbutton, offButton, radioChange })(ALQ3)


