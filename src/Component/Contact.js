import React, {useState, useEffect} from 'react';

function Contact() {

    return(
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
    )




}

export default Contact;