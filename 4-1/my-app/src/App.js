import './App.css';
import Avatar from './Avatar';
import Gallery from './Gallery';
import MyApp from './MyButton';
import AboutPage from './MyJSX';
import Profile from './Profile';

export default function App() {
  return (
    <>
      <AboutPage />
      <MyApp />
      <Gallery />
      <Profile />
      <Avatar />
    </>
  );
}