import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import {onbutton, offButton, radioChange } from "../FormState/actionCreators"

const ALQ6 = (props) => {

    const { onbutton, offButton, radioChange } = props
    const handleChange = (e) => {
        radioChange(e.target.name, e.target.value)
        onbutton()
    }

    const handlebuttontoggle = () => {
        offButton()
        }

    console.log(props)
    return (

        <div className="App">
            <form>

                <div>
                    <p>Question 6:</p>
                    <label>
                        <input type="radio" name="Question6" value="option1" onChange={handleChange} />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" name="Question6" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" name="Question6" value="option3" onChange={handleChange} />
                        Option 3
                    </label>
                </div>
            </form>

            <nav>
                <NavLink to="7"><button disabled={props.togglebutton.buttonoff} onClick={handlebuttontoggle}>NEXT</button></NavLink>&nbsp;
            </nav>
        </div >


    )
}

export default connect(mstp => mstp, {onbutton, offButton, radioChange })(ALQ6)


