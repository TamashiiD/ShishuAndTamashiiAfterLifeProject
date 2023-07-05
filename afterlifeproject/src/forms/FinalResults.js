import { SentimentAnalyzer } from 'natural';
import { useEffect, useState } from "react"
import { connect } from "react-redux"

const FinalResults = (props) => {
  const [resultoftext, setresultoftext] = useState({})
  const { picture } = props.savePicture

  const textPrompt = props.fullResponse.Q1 + props.fullResponse.Q2 + props.fullResponse.Q3

  const analyzeSentiment = () => {
    const analyzer = new SentimentAnalyzer('English', 'Afinn');
    const score = analyzer.getSentiment(textPrompt);
    console.log(score);
  
  }
  // Example usage
  useEffect(()=>{


    analyzeSentiment()


  },[])
  
  

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