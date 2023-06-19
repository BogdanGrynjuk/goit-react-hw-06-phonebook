
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Layout from './Layout';
import PhoneBook from './PhoneBoock';
import ContactForm from './ContactForm';

const App = () => {

  return (
    <Layout>
      <PhoneBook>      
      <ContactForm />
      <Filter  />
      
      <h2>Contacts</h2>
      <ContactList  />

      </PhoneBook>
      
    </Layout>
  );
};

export default App;