import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import {clearPhoto, takeThePicture} from "../FormState/actionCreators"
import { useEffect, useState } from "react"
import axios from "axios"


const ALQ9 = (props) => {

    const { clearPhoto, takeThePicture } = props
   const [image, setImage] = useState("")
   const [button , setButton] =useState(true)
   const[button2, setButton2] =useState(true)
   const[ value, setValue] = useState("")

    const previewImage = (e) => {
        setButton(false)
        setButton2(false)
       e.preventDefault()
       console.log(e.target.files[0])
       const src = URL.createObjectURL(e.target.files[0])
       setImage(src) 
       takeThePicture(src)
       localStorage.setItem("inputValue4", e.target.value)
       
    }
    
    const clearimage = (e) => {
        e.preventDefault()
        setImage("")
        setButton2(true)
        setButton(true)
        clearPhoto()
        
    }

    useEffect(() => {
        setValue(localStorage.getItem("inputValue4"));
      }, []);
    return (

        <div className="App">
            <form>
                <div>
                    <p>Question 9:</p>

                    <label>
                        <input type="file" accept="image/*" capture="camera" onChange={previewImage} />
                    </label>

                    {image.length > 0 ? <div> <img className="makeitsmaller" src={image} alt="slefie" /> </div> : <div> Please Uploade an Image of Anything. </div>}
                    <div>
                    <NavLink to="10"><button disabled={button} >CLICK HERE TO SEE RESULTS</button></NavLink> 
                        <button onClick={clearimage} disabled={button2}> CLEAR IMAGE </button>
                    </div>
                 
                </div>
            </form>

        </div>
    )
}

export default connect(mstp => mstp, {clearPhoto, takeThePicture })(ALQ9)