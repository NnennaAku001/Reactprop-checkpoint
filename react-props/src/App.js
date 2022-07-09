//import logo from './logo.svg';
import './App.css';
import Profile from './Profile/ProfileComponent';

const App = () => {
    const  = (e) => {
        "Nnenna Deborah Nwaenyi"
    }

  return (
    <div style={{textAlign: 'center' ,margin: '60%', border:'4px ', padding: '50px', width: '80%', height: '70%'}}>

      <Profile fullName="Nnenna deborah Nwaenyi" bio="I'm a web programmer and a fashion enthusiast" profession="Web developer">
        <img  src="./pic/Photo.jpg" alt="MyProfile" />
      </Profile>

      
    </div>
  );
}

export default App;





