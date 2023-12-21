import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movie from './Component/Movie';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Component/Contact';
import Blog from './Component/blog';


function App() {
  return (
      <div className='App'>
        <header className='bg-dark text-light'>
            <h1 className='py-5'>리액트 부트스트랩 사이트</h1>
        </header>
        
        <main className='container mt-2'>
          <section className='mb-5'>

          
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/458000/458212-Sapporo-And-Vicinity.jpg"/>
            </div>
            <div className='col-md-6'>
              <h2 className='text-success'>About</h2>
              <p className='text-success'>이미지 설명</p>
            </div>
          </div>
          </section>
          <section className='md-5'>
            <div className='row'>
              <div className='col-md-6'>
                <h2>About</h2>
                <p className='text-info'>이미지 설명</p>
                </div>
                <div className='col-md-6'>
                  <img className='img-fluid' src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/502000/502372-odori-park.jpg"/>
                </div>
            </div>
          </section>
          <Router>
          <section className='mb-5 mt-4'>
            <h2 className='mb-4'>세션2</h2>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <div className='card-body'>
                      <h5 className='card-title'>뮤직비디오</h5>
                      <p className='card-text'>
                        뮤비평가</p>
                        <Link to="/movie">Movie</Link>
                        
                  </div>

                </div>

              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <div className='card-body'>
                      <h5 className='card-title'>Blog</h5>
                      <p className='card-text'>
                        Blog</p>
                        <Link to="/blog">Blog</Link>
                  </div>

                </div>
                

              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <div className='card-body'>
                      <h5 className='card-title'>Contact Us</h5>
                      <p className='card-text'>
                      Contact Us</p>
                      <Link to="/contact">Contact Us</Link>
                        
                  </div>

                </div>
                

              </div>
            </div>
          
          </section>
          <hr />
          <Routes>
          <Route path="/movie" element={<Movie/>}></Route>
          </Routes>
          <Routes>
          <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
          <Routes>
          <Route path="/blog" element={<Blog/>}></Route>
          </Routes>

          
          </Router>
        </main>
        <footer className='bg-dark text-light text-center py-3'>
            <p>&copy; 2023 My React Site</p>
        </footer>
      </div>
  );
}

export default App;
