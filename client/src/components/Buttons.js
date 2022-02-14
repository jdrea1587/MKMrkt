import { AiOutlineDelete } from 'react-icons/fa';

const onDeleteClick = () => alert('You clicked comments');

const buttons = [
  {
    label: (
      <>
        <AiOutlineDelete /> Delete
      </>
    ),
    onClick: onDeleteClick,
  },
];

export default function Buttons() {
  return <div>{buttons}</div>;
}
