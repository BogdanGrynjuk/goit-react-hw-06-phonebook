import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/contactsSlice";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Form, Label, Input, Button } from "./ContactForm.styled";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);  

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const isDuplicate = Boolean(
      contacts.find(contact => contact.name.toLowerCase() === form.elements.name.value.toLowerCase())
    );
    
    if (isDuplicate) {
      Notify.failure(`${form.name.value} is already in contacts`);
      form.reset();
      return;
    };    

    const name = form.name.value;
    const number = form.number.value;    

    dispatch(addContact({name, number}));    
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Please enter a name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"         
          placeholder="Please enter a phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
