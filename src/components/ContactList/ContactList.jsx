import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { ContactItem } from '../ContactItem/ContactItem';

import { Contacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </Contacts>
  );
};