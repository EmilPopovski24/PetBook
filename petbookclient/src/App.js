import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from  './components/Home/Home';
import { Login } from  './components/Login/Login';
import { Register } from  './components/Register/Register';
import { Logout } from  './components/Logout/Logout';
import { Catalog } from  './components/Catalog/Catalog';
import { AddPet } from  './components/AddPet/AddPet';
import { About } from  './components/About/About';
import { Terms } from  './components/Terms/Terms';
import { FAQ } from  './components/FAQ/FAQ';
import { Route, Routes} from 'react-router-dom';
import { petServiceFactory } from './services/petService';
import { PetAccount } from './components/PetAccount/PetAccount';
import { EditPet } from './components/EditPet/EditPet';
import { Profile } from './components/Profile/Profile';
import { AdvicesList } from './components/AdvicesList/AdvicesList';
import { AddPhoto } from './components/Profile/AddPhoto/AddPhoto';
import { profileServiceFactory } from './services/profileService';
import { RouteGuard } from './components/guards/RouteGuard';
import { authServiceFactory } from './services/authService';
// import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const [pets, setPets] = useState([]);
    const [image, setImage] = useState({}); 
    const [posts, setPosts] = useState([]);
// const [petOwner, setPetOwner] = useState([]);
    const authService = authServiceFactory(auth.accessToken)
    const petService = petServiceFactory(auth.accessToken); // auth.accessToken
    const profileService = profileServiceFactory(auth.accessToken); //auth.accessToken

    useEffect(() => {
      petService.getAll()
        .then(result=> {
          setPets(result)
      })
    }, []);

    const onLoginSubmit = async (data) => {
        const result = await authService.login(data);
        setAuth(result)
        navigate('/catalog')
        alert(`You are welcome!`)
};    

    const onRegisterSubmit = async(values) => {
        const { confirmPassword, ...registerData } = values;
        if(confirmPassword !== registerData.password) {
          alert("Both passwords do not match!")
          return;
        };
    
        try {
            const result = await authService.register(values);
            setAuth(result);     
            alert("Successful registration!") 
            navigate('/catalog')
        } catch (error) {
            alert("User with the same details (email or username) already exists!")
        }
};

    const onLogout = async () => {
        await authService.logout();
        setAuth({});
};

    const onAddPetSubmit = async(petData) => {
    const newPet = await petService.addPet(petData);
    setPets(state => [...state, newPet]);
    navigate('/catalog')
};

    const onPetEditSubmit = async(values) => {
        const result = await petService.edit(values._id, values);
        setPets(state => state.map(x=> x._id === values._id ? result : x)) // to check this
        navigate(`/catalog/${values._id}`);
};

    const onProfilePicSubmit = async(data) => {
        const result = await profileService.addPhoto(data)
        setImage(result)
        navigate(`/profile`)
};

const onPostSubmit = async (post) => {
  const newPost = await profileService.addPost(post);
  setPosts(state => [...state, newPost]);
  const postOwner = post._ownerId;
  console.log(postOwner)
}

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken //truthy - false and vice versa
};

return (
    <AuthContext.Provider value={contextValues} >
      <Header />
      <div className="main-content">
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/login' element={<Login />} />
          <Route path ='/register' element={<Register />} />
          <Route path ='/logout' element={<Logout />} />
          <Route path ='/catalog' element={<Catalog pets={pets} />} />    
            <Route element={<RouteGuard />}>
              <Route path ='/catalog/:petId' element={<PetAccount pets={pets}/>} />
              <Route path ='/catalog/:petId/edit' element={<EditPet onPetEditSubmit={onPetEditSubmit} />} /> 
              <Route path ='/addpet' element={<AddPet onAddPetSubmit={onAddPetSubmit} />} />
              <Route path ='/profile' element={<Profile image={image} />} />
              <Route path ='/profile/addphoto' element={<AddPhoto onProfilePicSubmit={onProfilePicSubmit} />} />
              <Route path ='/advices' element={<AdvicesList posts={posts} onPostSubmit={onPostSubmit}/>} />
            </Route>
          <Route path ='/about' element={<About />} />
          <Route path ='/terms' element={<Terms />} />
          <Route path ='/faq' element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
