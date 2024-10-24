import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useContacts } from '../hooks';
import css from './App.module.css';

const App = () => {
  const { contacts, filters } = useContacts();

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        {contacts.length > 1 && <SearchBox />}
        {contacts.length > 0 && <h2 className={css.subtitle}>Contacts</h2>}
        {contacts.length < 1 && (
          <p className={css.alterText}>
            There are no contacts in your contact list
          </p>
        )}
        {contacts.length === 0 && filters !== '' && (
          <p className={css.alterText}>No contacts found</p>
        )}
        <ContactList />
      </div>
    </>
  );
};

export default App;
