
import { motion } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import FeedBackContext from '../Context/FeedBackContext'


function FeedBackList({isVisible}) {
   const {feedback} = useContext(FeedBackContext)
    if(!feedback || feedback.length===0){
        return <p>No feedbacks</p>
    }
  return (
    <>
   
     {feedback.map((item)=>(
      <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit ={{opacity:0}} >
         <FeedbackItem item={item} key={item.id} />
         </motion.div >
     ))}
      
    </>
  )
}

export default FeedBackList
