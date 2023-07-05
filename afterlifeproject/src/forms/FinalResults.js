import { connect } from "react-redux"

const FinalResults = (props) => {
  // const { picture } = props.savePicture

  // const textPrompt = props.fullResponse.Q1 + props.fullResponse.Q2 + props.fullResponse.Q3


  

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