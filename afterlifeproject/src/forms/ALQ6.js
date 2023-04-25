import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { radioChange } from "../FormState/actionCreators"

const ALQ6 = (props) => {

    const { radioChange } = props
    const handleChange = (e) => {
        radioChange(e.target.name, e.target.value)
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
                <NavLink to="7"><button>NEXT</button></NavLink>&nbsp;
            </nav>
        </div >


    )
}

export default connect(mstp => mstp, { radioChange })(ALQ6)


