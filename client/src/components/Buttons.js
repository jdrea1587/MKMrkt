import { FaCommentAlt, FaThumbsUp, FaRegEye } from 'react-icons/fa'

const onCommentClick = () => alert('You clicked comments')
const onLikesClick = () => alert('You clicked comments')
const onViewsClick = () => alert('You clicked comments')

const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      ),
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
    },
  ]

  
  
  export default function Buttons() {
    return (
      <div>{buttons}</div>
    )
  }
  