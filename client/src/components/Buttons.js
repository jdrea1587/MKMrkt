import { AiOutlineDelete } from 'react-icons/fa';

const onDeleteClick = () => alert('You clicked comments');

const buttons = [
  {
    label: (
      <>
        <AiOutlineDelete /> 187288 Views
      </>
    ),
    onClick: onDeleteClick,
  },
];

export default function Buttons() {
  return <div>{buttons}</div>;
}
