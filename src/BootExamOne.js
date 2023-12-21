import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function BootExamOne() {
  return (
      <div className='App'>
        <header className= 'bg-dark text-light'>
            <h1 className='py-5'>리액트 부트스트랩 사이트</h1>
        </header>
        {/* 
          bg-dark : 
          bg : background 배경색
          dark : 검정

          text-light : 글자색 흰색으로 설정


          py-5
          py : padding-y

          y : 위 아래 여백을 조절하는 값
          x : 좌 우 여백을 조절하는 값
          부트스트랩에서 패딩을 상하좌우 주고 싶다면 px-1 py-1 해서 숫자 조절해주면 됨 
          BootStrap : 여백의 크기를 1 ~ 5 까지 5단계

          container : 본문을 담을 컨테이너를 생성함
          mt-4 : mt는 margin-top을 나타냄 
          margin-top : 본문에 위 크기를 조정
          -4 : 상단 마진을 4 단위로 설정
          row : 컬럼을 나열하는데 사용

          col-md-6 
          col : column 컬럼의 약자
          md : medium 중간 화면 크기
          -6 : 6개의 컬럼을 차지
          1줄의 컬럼은 12개 구성


        
        */}
        <main className='container mt-2'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>하나</h2>
              <p>이것은 하나입니다.</p>
            </div>
            <div className='col-md-6'>
              <h2 className='text-center'>둘</h2>
              <p>이것은 둘입니다.</p>
            </div>
            <div className='col-md-6'>
              <h2>삼</h2>
              <p>이것은 삼입니다.</p>
            </div>
            <div className='col-md-6'>
              <h2>넷</h2>
              <p>이것은 넷입니다.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h2>하나</h2>
              <p>이것은 하나입니다.</p>
            </div>
            <div className='col-md-6'>
              <h2>둘</h2>
              <p>이것은 둘입니다.</p>
            </div>
            <div className='col-md-6'>
              <h2>삼</h2>
              <p>이것은 삼입니다.</p>
            </div>
            <div className='col-md-6'>
              <h2>넷</h2>
              <p>이것은 넷입니다.</p>
            </div>
          </div>

          



        </main>
          



      </div>
  );
}

export default BootExamOne;
