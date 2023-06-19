import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { Contact, Text, Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Contact>
      <Text>{name}: {number}</Text>
      <Button type="button" onClick={handleDelete}>Delete</Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};