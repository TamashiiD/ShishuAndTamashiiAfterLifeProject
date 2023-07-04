import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { onbutton, offButton, radioChange } from "../FormState/actionCreators"
import { useState } from "react"

const ALQ9 = (props) => {

    // const { onbutton, offButton, radioChange } = props
   const [image, setImage] = useState("")
   const [button , setButton] =useState(true)

    const previewImage = (e) => {
        setButton(false)
       e.preventDefault()
       console.log(e.target.files[0])
       const src = URL.createObjectURL(e.target.files[0])
       setImage(src)
       
        
    
    }
    
    const handlesubmit = (e) => {
        e.preventDefault()
        

    }

    // const valueOfChoice = localStorage.getItem("Question9")

    // const handleChange = (e) => {
    //     radioChange(e.target.name, e.target.value)
    //     onbutton("button9", valueOfChoice)

    //     localStorage.setItem(e.target.name, e.target.value)

    // }
    // const handlebuttontoggle = (e) => {
    //     offButton(e.target.value, valueOfChoice)
    // }
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 9:</p>
                    {/* <label>
                        <input type="radio" checked={valueOfChoice === "option1" ? true : false} name="Question9" value="option1" onChange={handleChange} />
                        Option 1
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option2" ? true : false} name="Question9" value="option2" onChange={handleChange} />
                        Option 2
                    </label>
                    <label>
                        <input type="radio" checked={valueOfChoice === "option3" ? true : false} name="Question9" value="option3" onChange={handleChange} />
                        Option 3
                    </label> */}

                    <label>
                        <input type="file" accept="image/*" capture="camera" onChange={previewImage} />
                    </label>

                    {image.length > 0 ? <div> <img className="makeitsmaller" src={image} alt="slefie" /> </div> : <div> Please Uploade an Image </div>}
                    <div>
                        <button onClick={handlesubmit} disabled={button} >CLICK HERE TO SEE RESULTS</button>
                    </div>
                 
                </div>
            </form>

            {/* <nav>
                <NavLink to="10"><button disabled={props.togglebutton.button9} onClick={handlebuttontoggle}>NEXT</button></NavLink>&nbsp;
            </nav> */}
        </div>
    )
}

export default connect(mstp => mstp, { onbutton, offButton, radioChange })(ALQ9)