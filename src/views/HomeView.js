import s from './HomeView.module.css';
import PhoneBook from './phone-book.png';
const HomeView = () => (
  <div className={s.conteiner}>
    <h1 className={s.ceader}>Welcome to Phonebook!!!!</h1>
    <img src={PhoneBook} alt="phonebook" className={s.image}></img>
  </div>
);

export default HomeView;
