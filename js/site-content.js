(function addProductionShowcase(){
 const css=document.createElement('link');css.rel='stylesheet';css.href='css/pipeline.css';document.head.appendChild(css);
 const orbit=document.createElement('script');orbit.src='js/orbit.js';document.body.appendChild(orbit);
 const intro=document.querySelector('.intro');
 if(intro&&!intro.querySelector('.intro-stats')){const stats=document.createElement('div');stats.className='intro-stats';stats.innerHTML='<span><b>10万+</b>全网粉丝</span><span><b>300+</b>短视频作品</span><span><b>AI × 增长</b>内容方法</span>';intro.insertBefore(stats,intro.querySelector('.scroll'));}
 const work=document.querySelector('#work');
 if(work&&!document.querySelector('#pipeline')){const pipeline=document.createElement('section');pipeline.id='pipeline';pipeline.className='pipeline';pipeline.innerHTML='<div class="section-kicker">PROCESS / 01</div><div class="pipeline-heading"><h2>AI 内容<br><em>生产流水线</em></h2><p>每一条作品都从一个问题开始，经过工具协作，最后回到真实的传播结果。</p></div><div class="pipeline-track"><article><span>01</span><b>灵感采集</b><small>热点、用户痛点、品牌命题</small></article><i>→</i><article><span>02</span><b>选题与脚本</b><small>ChatGPT · Claude · Gemini</small></article><i>→</i><article><span>03</span><b>视觉生成</b><small>Midjourney · 即梦 · 可灵</small></article><i>→</i><article><span>04</span><b>视频成片</b><small>Sora · 剪映 AI · 人工精修</small></article><i>→</i><article><span>05</span><b>数据复盘</b><small>CTR · ROI · 完播率</small></article></div><div class="pipeline-note"><strong>OUTPUT</strong><span>内容效率 ↑</span><span>转化路径 ↑</span><span>品牌记忆 ↑</span></div></section>';work.parentNode.insertBefore(pipeline,work);
 const introBox=document.createElement('div');introBox.className='archive-intro';introBox.innerHTML='<div><div class="section-kicker">ARCHIVE / 02</div><h2>作品<br><em>档案馆</em></h2></div><p>按内容任务整理的实验记录。点击卡片播放，进入编辑模式可以替换素材。</p>';work.insertBefore(introBox,work.firstChild);}
})();

(async()=>{
 const root=document.querySelector('#publishedCanvas');
 if(!root||!indexedDB)return;
 const req=indexedDB.open('wjy-studio-v1',1);
 req.onsuccess=()=>{
  const db=req.result, q=db.transaction('meta').objectStore('meta').get('state');
  q.onsuccess=()=>{
   const state=q.result;if(!state?.published)return;
   const wanted=location.pathname.endsWith('portfolio.html')?'portfolio':'home';
   const page=state.pages.find(p=>p.type===wanted||p.name===(wanted==='home'?'首页':'作品集'));if(!page)return;
   page.layers.forEach(l=>{if(l.hidden)return;const ar=db.transaction('assets').objectStore('assets').get(l.asset);ar.onsuccess=()=>{const a=ar.result;if(!a)return;const e=document.createElement('div');e.className='published-item';e.style.cssText=`left:${l.x}%;top:${l.y}%;width:${l.w}%;height:${l.h}%;transform:rotate(${l.r}deg)`;const m=a.kind==='视频'?document.createElement('video'):document.createElement('img');m.src=URL.createObjectURL(a.blob);if(a.kind==='视频'){m.autoplay=true;m.loop=true;m.muted=true;m.playsInline=true}e.append(m);root.append(e)}});
  };
 };
})();
