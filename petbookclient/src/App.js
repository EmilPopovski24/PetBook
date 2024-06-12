import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PetProvider } from './contexts/PetContext';
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
import { PetAccount } from './components/PetAccount/PetAccount';
import { EditPet } from './components/EditPet/EditPet';
import { Profile } from './components/Profile/Profile';
import { AdvicesList } from './components/AdvicesList/AdvicesList';
import { AddPhoto } from './components/Profile/AddPhoto/AddPhoto';
import { AskForHelp } from './components/AskForHelp/AskForHelp';
import { RouteGuard } from './components/common/RouteGuard';
import { profileServiceFactory } from './services/profileService';
import { Post } from './components/AdvicesList/PostItem/Post/Post';
import { withAuth } from './components/hoc/withAuth';
import './App.css';

function App() {

    const navigate = useNavigate();
    const [image, setImage] = useState({}); 
    const [posts, setPosts] = useState([]);
    const profileService = profileServiceFactory(); 

    const onProfilePicSubmit = async(data) => {
        const result = await profileService.addPhoto(data)
        setImage(result)
        navigate(`/profile`)
};

    const onPostSubmit = async(post) => {
        const newPost = await profileService.addPost(post);
        setPosts(state => [...state, newPost]);
        navigate('/advices')
};

const EnhancedLogin = withAuth(Login);
return (
    <AuthProvider>
      <PetProvider>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/login' element={<EnhancedLogin />} />
          <Route path ='/register' element={<Register />} />
          <Route path ='/logout' element={<Logout />} />
          <Route path ='/catalog' element={<Catalog />} />    
            <Route element={<RouteGuard />}>
              <Route path ='/catalog/:petId' element={<PetAccount />} />
              <Route path ='/catalog/:petId/edit' element={<EditPet />} /> 
              <Route path ='/addpet' element={<AddPet auth={withAuth} />} />
              <Route path ='/profile' element={<Profile image={image} />} />
              <Route path ='/profile/addphoto' element={<AddPhoto onProfilePicSubmit={onProfilePicSubmit} />} />
              <Route path ='/help' element={<AskForHelp onPostSubmit={onPostSubmit} />} />
              <Route path ='/advices' element={<AdvicesList posts={posts} />} />
              <Route path ='/advices/:postId' element={<Post />} />
            </Route>
          <Route path ='/about' element={<About />} />
          <Route path ='/terms' element={<Terms />} />
          <Route path ='/faq' element={<FAQ />} />
        </Routes>
      </div>
      <Footer />
      </PetProvider>
    </AuthProvider>
  );
}

export default App;
