
import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Post from './components/pages/Post/Post';
import NotFound from './components/pages/NotFound/NotFound';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';

const App = () => {
    return (

    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/post/add" element={<AddPost />} />
            <Route path="/post/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    

      );
    }
    
    export default App;








    
// const App = () => {
//   return (
//     <main>
//       <NavBar />
//       <Container>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/favorite" element={<Favorite />} />
//           <Route path="/list/:listId" element={<List />} />
//           <Route path="*" element={<NotFound />} />
//       </Routes>
//       </Container>
//    </main>
//   );
// };

// export default App;

