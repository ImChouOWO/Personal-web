import React, { useEffect, useState } from 'react';
import './App.css';
import './css/main.css';
import 'aos/dist/aos.css';

 function App() {

    const totalInnerDivs =1500;
    const [contentHovered, setContent] = useState(false);
    const asd ="透過ＮＬＰ與網頁開發等技術開發出的為自閉症患者而生的系統，希望透過本系統所設計的功能減少用戶在早期治療所產生的時間成本，並透過數據分析的方式提供可視化的介面給用戶了解自身狀況．";
    const game ='以Unity引擎所開發的回合制RPG，並利用行為樹的方式構建許多不同的狀態機以實現NPC的戰鬥AI，其中美術的部分運用了大量的像素風與8-bit音樂．';
    const ai = "利用MediaPipe所提供的人體識別模型，實現自動瞄準與射擊的遊戲外掛，希望提供遊戲廠商不同的防範理念，不在是單單利用是否修改本地檔案為判斷依據．";

    const [innerContent , setInner ] = useState("");
    
    
    const divsArray = Array.from({ length: totalInnerDivs }, (_, index) => {
      const [hovered, setHovered] = useState(false);
  
      
      return (
        <div
          key={index}
          className={`inner-div ${hovered ? 'hovered' : ''}`}
          onMouseEnter={() => 
            {setHovered(true)}}
          
          onMouseLeave={() => {
            setTimeout(() => {
              setHovered(false);
            }, 1000); // 1秒後變回原本的顏色
          }}
        >
          
        </div>
      );
    });
      
   return (
    <div className='desktop'>
        <div className={`project-content ${contentHovered ? 'hovered' : ''}` }
          onMouseEnter={() => {setContent(true); }}
          onMouseLeave={()=>setContent(false)}
        
        >
          <div className='content-text'>
            <span className='content-title'>簡介</span>
            <span className={`content-text-inner ${contentHovered ? 'hovered' : ''}`}>
              {innerContent}
            </span>
          </div>
        
        </div>
        <div className='hero'>
          
            <span className='code-master'>Welcome</span>
            <div className="inner-div-container">
              {divsArray}
            </div>
            

        </div>
        <div className='text'>
          <div className='content'>
            <div className='paragraphs'>
              <span className='about'>
                  關於我
              </span>
              <span className='about-content'>
              我是一個目前就讀於高雄科技大學的學生，未來希望能投身ＡＩ產業，
              專業技能方面，跟著系所的安排接觸了ＡＩ、物聯網、前端後端、APP等不同領域，除了上述的領域我還自學了Uinty並且透過行為樹的技術實作了一場即時策略遊戲．
          
              </span>
              
            </div>
          
            {/* <div><img className='head' src={require('./img/icon_1.png')}></img></div> */}
          </div>
        </div>
        {/* <div className='shapes'></div> */}
        <div className='gallery'>
          <span className='portfolio-showcase'>相關作品</span>
          <div className='rows'>
            <a href='http://projectasd.chouisme.net/' className='asd'
              onMouseEnter={() => {
                setContent(true);
                setInner(asd);
              }}
              onMouseLeave={()=>setContent(false)}
            
            >
      
            </a>
            <div className='row-b'>
            <a className='game' href='https://github.com/ImChouOWO/SRPG'
              onMouseEnter={() => {
                setContent(true);
                setInner(game);
              }}
              onMouseLeave={()=>setContent(false)}
            ></a>
              <a href='https://github.com/ImChouOWO/AI_AutoShot' className='Iot' 
                onMouseEnter={() => {
                  setContent(true);
                  setInner(ai);
                }}
                onMouseLeave={()=>setContent(false)}
              ></a>
            </div>
       
          </div>
          <div className='testimonials'>
      
                <div className='columns'>
                  <div className='card'>
                    <span className='about'>AI</span>
                    <span className='about-content'>
                    <li>AI彈幕遊戲</li>
                    <li>遊戲人體識別</li>
                    </span>
                  </div>
                  <div className='card'>
                    <span className='about'>Unity</span>
                    <span className='about-content'>
                      <li>即時策略遊戲</li>
                      <li>地牢遊戲</li>
                      <li>彈幕遊戲</li>
                    </span>
                    </div>
                  <div className='card'>
                    <span className='about'>Other</span>
                    <span className='about-content'>
                      <li>API SERVER</li>
                      <li>寵物餵食器</li>
                      <li>前端設計</li>
                    </span>
                  </div>  
              
         
             
            </div>
            
            
          </div>
          <div className='shapes'>
              <a href='https://github.com/ImChouOWO?tab=repositories' className='know-more'>瞭解更多</a>
          </div>
          <div className='f-a-q'>
            <span className='quick-queries'>更多資訊</span>
            <div className='questions-row'>
              <div className='q-a'>
                <span className='text-title'>未來志向</span>
                <span className='text-content'>未來希望能投身台灣的ＡＩ產業，為此我正在相關領域中努力的學習．</span>

              </div>
              <div className='q-a'>
                <span className='text-title'>專業技能</span>
                <span className='text-content'>大學期間我透過學校課程與課餘時間接觸了 物聯網、前端後端、APP、ＡＩ等領域，也透過前後端技術完成了此網站與畢業專題．</span>
              </div>
              <div className='q-a'>
                <span className='text-title'>其他技能</span>
                <span className='text-content'>除了程式相關的技能我還熱愛攝影，會在空閒時間帶上相機出門拍攝．</span>
              </div>
            </div>
          </div>
          
          <div className='footer'>
            
            <div className='social-icon'>
            <a href='https://github.com/ImChouOWO?tab=repositories'><img className='icon' src={require('./css/img/github.png')} ></img></a>
            <a href='https://www.instagram.com/photographer_chou/'><img className='icon' src={require('./css/img/instagram.png')}></img></a>
            </div>
            <div class="my-infor-row">
                <div class="info-group">
                  <img class="icon-2" src={require('./css/img/phone.png')} />
                  <div class="icon-content">+886930859852</div>
                </div>
                
                <div class="info-group">
                  <img class="icon-2" src={require('./css/img/email.png')} />
                  <div class="icon-content">as0930859852@gmail.com</div>
                </div>
            </div>

          </div>
          
        </div>

    </div>
  );
}
 export default App;