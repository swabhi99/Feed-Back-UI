import {FaTimes,FaEdit} from 'react-icons/fa'
import Card from './Card'
import {useContext} from 'react'
import FeedBackContext from '../Context/FeedBackContext'

function FeedbackItem({item}) {
   const {handleDelete,editFeedback} = useContext(FeedBackContext) 
  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      <button className='close'>
        <FaTimes onClick={()=>handleDelete(item.id)} color='purple'></FaTimes>
      </button>
      <button className="edit" onClick={()=>editFeedback(item)}>
        <FaEdit color='purple'></FaEdit>
      </button>
   <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
