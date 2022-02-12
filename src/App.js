import logo from './logo.svg';
import Address from './profile/address.js';
import FullName from './profile/fullName';
import './App.css';
import ProfilePhoto from './profile/profilePhoto';

function App() {
  return (
    <>
    <div className='main'>
      
      <div>
        <ProfilePhoto/>
      </div>
      <div>
        <FullName/>
        <Address/>
      </div>
      
    </div>
    </>
  );
}

export default App;
