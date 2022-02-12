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
      onClick: onCommentClick,
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      ),
      onClick: onLikesClick,
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      ),
      onClick: onViewsClick,
    },
  ]


  
  
  export default function Buttons() {
    return (
      <div>{buttons}</div>
    )
  }
  