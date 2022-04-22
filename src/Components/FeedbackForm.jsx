import { useState,useContext,useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import FeedBackContext from '../Context/FeedBackContext'

function FeedbackForm() {
  
  const {handleFeedback,feedbackEdit,updateFeedback} = useContext(FeedBackContext)
  const [rating,setRating] = useState(10); 
  const [text, setText] = useState('');
  const[msg,setMsg] = useState('');
  const[btnDisabled,setBtnDisabled] = useState(true)

   useEffect(()=>{
      if(feedbackEdit.edit===true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
   },[feedbackEdit])

  const handleChange = (e) => {
    
      if(text===''){
          setMsg('Text must have atleast 10 characters')
      }
      else if(text!==""&&text.trim().length<10){
          setMsg('Text must have atleast 10 characters')
      }
      else{
          setMsg(null)
          setBtnDisabled(false)
      }
      setText(e.target.value)
  };


  const submitHandler = (e)=>{
      e.preventDefault();
      if(text.trim().length>10){
      const newFeedback={
        text:text,
        rating:rating,
      }
      if(feedbackEdit.edit===true){
        updateFeedback(feedbackEdit.item.id,newFeedback)
      }else{
        handleFeedback(newFeedback)
        // setText('')
      }
      
    }
      
  }

  return (
    <div>
      <Card>
        <form onSubmit={submitHandler}>
          <h2>How would you rate our service with us?</h2>
          <RatingSelect select={(rating)=>{(setRating(rating))}}></RatingSelect>
          <div className="input-group">
            <input
              type="text"
              placeholder="Write a review"
              onChange={handleChange}
              value={text}
            />
            <Button type="submit" version="primary" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          <div className="message">{msg}</div>
        </form>
      </Card>
    </div>
  );
}

export default FeedbackForm;
