import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddContact from '../components/AddContact/AddContact';
import ContactList from '../components/ContactList/ContactList';
import { fetchContact } from '../redux/operations';
import { getLoading } from '../redux/selectors';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingTodos = useSelector(getLoading);

  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return (
    <div>
      <AddContact />
      <ContactList />
      {isLoadingTodos && <h1>Загружаем...</h1>}
    </div>
  );
}
