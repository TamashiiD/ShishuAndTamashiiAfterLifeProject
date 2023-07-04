import { useEffect, useState } from "react"
import { connect } from "react-redux"


const FinalResults = (props) => {
    const [resultoftext, setresultoftext] = useState({})
    const { picture } = props.savePicture

    const finalanswer = props.fullResponse.Q1 + props.fullResponse.Q2 + props.fullResponse.Q3

    var myHeaders = new Headers();
    myHeaders.append("apikey", "iEA4aq2vjkDTVXAPrbPSTa4kmvxsf3iU");




return (
    <>
        
    </>
)
    }

const mstp = (state) => {

    return {
        fullResponse: state.fullResponse,
        savePicture: state.savePicture
    }
}

export default connect(mstp, {})(FinalResults)