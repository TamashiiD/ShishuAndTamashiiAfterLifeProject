import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { onbutton, offButton, radioChange } from "../FormState/actionCreators"
import { useEffect, useState } from "react"
import { getFullResponse } from "../FormState/actionCreators"





const ALQ2 = (props) => {
    const { getFullResponse } = props
    const [fullresponse, setFullResponse] = useState("")
    const [button, setButton] = useState(true)
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        e.preventDefault()
        getFullResponse(e.target.value, e.target.name)
        setFullResponse(e.target.value)
        if (fullresponse.length > 25) {
            setButton(false)
            localStorage.setItem("inputValue2", e.target.value)
        }
    }
    useEffect(() => {
        setValue(localStorage.getItem("inputValue2"));
    }, []);
    return (
        <div className="App">
            <form>
                <div>
                    <p>Question 2: Can you tell me about some recent experiences or events that have had an impact on you?</p>
                    <label>
                        <textarea
                            style={{ height: '100px', width: '600px', overflowWrap: 'break-word', wordWrap: 'break-word' }}
                            value={value}
                            name="Q1"
                            onChange={handleChange}
                        />                    </label>
                    {/* <label>
                        <input type="radio" checked={valueOfChoice === "option2" ? true : false} name="Question1" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option3" ? true : false} name="Question1" value="option3" onChange={handleChange} />
                        Option 3
                    </label> */}
                </div>

            </form>

            <nav>
                <NavLink to="3"><button value="button1" disabled={button} >NEXT</button></NavLink>&nbsp;
            </nav>

        </div>

    )
}

export default connect(mstp => mstp, { getFullResponse })(ALQ2)