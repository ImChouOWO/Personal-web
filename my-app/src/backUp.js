import React, { useEffect, useState } from 'react';
import { Parallax } from 'rc-scroll-anim';

import './App.css';
import './css/main.css';


import AOS from 'aos';
import 'aos/dist/aos.css';
 function App() {
  AOS.init(); // 初始化 AOS
   return (
    <div className="container">
      <div className='about'  data-aos="fade-up" data-aos-duration="1500"></div>
      <div className='projectIot' data-aos="fade-right" data-aos-duration="1500">
      
         
        <div className='textZone'>
          <Parallax
            animation={{ x: 0 ,opacity: 1 }}
            style={{ transform: 'translateX(-200px)', margin: '10px auto' , opacity: 0 }}
            className="code-box-shape"
          >
          <h1><h2>寵物自動餵食器</h2>智慧家居</h1>
          </Parallax>
          <Parallax
            animation={{ x: 0 ,opacity: 1 }}
            style={{ transform: 'translateX(200px)', margin: '10px auto', opacity: 0 }}
            className="code-box-shape"
          >
          <p>利用<span> Raspberry Pi、Python</span></p>
          <p>構建一個能夠紀錄寵物進食狀態的裝置</p>
          <p>並透過網頁的方式呈現</p>
          </Parallax>
        </div>
        
        <div className='photoZone'>
          
          <img src={require("./img/Iot.svg")} ></img>
          
        </div>
        
      </div>
      <div className='projectmedia' data-aos="fade-left" data-aos-duration="1500">
        <div className='photoZone'></div>
        <div className='textZone' >
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
          >
          <h1><h2>射擊遊戲外掛</h2>圖像辨識</h1>
          </Parallax>
          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
            className="code-box-shape"
          >
          <p>利用<span > Mediapipe</span></p>
          <p>令遊戲角色自動瞄準敵人並攻擊</p>
          <p>提供不同的思路杜絕外掛</p>
         </Parallax>
        </div>
      </div>
      <div className='projectUnity' data-aos="fade-right" data-aos-duration="1500">
        <div className='textZone'>
          <h1><h2>自製 Roguelike</h2>Unity實作</h1>
          <p>利用<span> Unity</span></p>
          <p>自製的一款高隨機性的地牢遊戲</p>
        </div>
        <div className='photoZone'>
          <img src={require('./img/unity.png')}></img>
        </div>
      </div>
      <div className='projectNLP' data-aos="fade-left" data-aos-duration="1500">
        <div className='photoZone'>
          <img src={require('./img/asd.jpeg')}></img>
        </div>
        <div className='textZone'>
          <h1><h2>伴星聊癒</h2>ＮＬＰ技術應用</h1>
          <p>利用<span> GPT Python ReactJS </span></p>
          <p>構建的一個具備遊戲治療功能的平台</p>
          <p>供自閉症患者使用能透過此平台改善病況</p>
        </div>
      </div>
    </div>
  );
}
 export default App;