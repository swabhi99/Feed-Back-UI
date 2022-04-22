import {createContext,useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const FeedBackContext = createContext()

export const FeedbackProvider = ({children})=>{
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:'This item is from contest',
            rating:10,
        }
    ])
   
    const [feedbackEdit,setFeedbackEdit]=useState({
        item: {},
        edit:false,
    })

    const handleDelete = (id)=>{
        if(window.confirm("Are are sure you want to delete?")){
          setFeedback(feedback.filter((feedback)=> feedback.id!==id))
        }
      }

      const handleFeedback = (newFeedback)=>{
        console.log(newFeedback)
        newFeedback.id=uuidv4();
        setFeedback([newFeedback,...feedback])
     }

    const editFeedback = (item)=>{
         setFeedbackEdit({
             item,
             edit:true,
         })
    }

    const updateFeedback = (id,updItem)=>{
        setFeedback(feedback.map((item)=>item.id===id ?{...item,...updItem}:item))
    }

 return <FeedBackContext.Provider value={
     {
         feedback:feedback,
         handleDelete,
         handleFeedback, 
         editFeedback,
         feedbackEdit,
         updateFeedback
     }
 }>
     {children}
 </FeedBackContext.Provider>
}
export default FeedBackContext