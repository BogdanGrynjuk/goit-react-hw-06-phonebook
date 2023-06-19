
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

import { Container } from './App.styled';

export const App = () => {
  

  return (
    <Container>
      <h1>Phoneboock</h1>
      <ContactForm />
      <Filter  />
      
      <h2>Contacts</h2>
      <ContactList  />
    </Container>
  );
};