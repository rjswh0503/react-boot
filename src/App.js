import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
          <section className='mb-5'>
            <h2 className='mb-4'>세션2</h2>
            <div className='row'>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <div className='card-body'>
                      <h5 className='card-title'>카드1</h5>
                      <p className='card-text'>
                        안녕하세요. 카드 1입니다.</p>
                  </div>

                </div>

              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <div className='card-body'>
                      <h5 className='card-title'>카드2</h5>
                      <p className='card-text'>
                        안녕하세요. 카드 2입니다.</p>
                  </div>

                </div>
                

              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <div className='card-body'>
                      <h5 className='card-title'>카드3</h5>
                      <p className='card-text'>
                        안녕하세요. 카드 3입니다.</p>
                  </div>

                </div>
                

              </div>
            </div>

          </section>
          <section>
            <h2 className='text-center mb-4'>Contact Us</h2>
            <form>
              <div className='mb-3'>
                <label className='form-label'>
                  Name
                </label>
                <input type='text' className='form-control' id='name'/>
              </div>
              <div className='mb-3'>
                <label className='form-label'>
                  Email
                </label>
                <input type='email' className='form-control' id='emial'
                  aria-aria-describedby='이메일 입력'
                />
                <small id='emailSmall' className='form-text text-muted'>이메일</small>
              </div>

              <div className='mb-3'>
                <label className='form-label'>
                메세지 작성
                <textarea rows="4" className='form-control'></textarea>
                </label>

              </div>
              <button className='btn btn-success mb-3'>
                전송하기
              </button>
            </form>
          </section>
        </main>
        <footer className='bg-dark text-light text-center py-3'>
            <p>&copy; 2023 My React Site</p>
        </footer>
      </div>
  );
}

export default App;
