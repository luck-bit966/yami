(()=>{
 const intro=document.querySelector('.intro');if(!intro)return;
 intro.classList.add('hero-stage');
 const startup=document.createElement('div');startup.className='hero-startup';startup.setAttribute('aria-hidden','true');startup.innerHTML='<span>JIAYI</span><b>.exe</b>';
 const visual=document.createElement('div');visual.className='hero-portrait';visual.innerHTML='<div class="portrait-scan"></div><img src="img/portfolio/p-114.jpg" alt="AI视觉创作人物占位图">';
 const collage=document.createElement('div');collage.className='hero-collage';collage.innerHTML='<span class="hero-chip chip-tools">AI TOOLS<br><b>ChatGPT · Gemini · 即梦</b></span><span class="hero-chip chip-project">PROJECTS<br><b>CONTENT / MOTION / GROWTH</b></span><span class="hero-tape">JIAYI / 01—03</span>';
 intro.prepend(startup,visual,collage);
 const title=intro.querySelector('h1');if(title){title.dataset.heroTitle='';title.innerHTML='<span>NOT YOUR</span><em>AVERAGE GIRL.</em>'}
 const desc=intro.querySelector('.desc');if(desc)desc.innerHTML='用 AI 创造内容，也创造更多可能。<br><small>AI 内容运营｜短视频运营｜广告投放｜品牌营销</small>';
 const cta=document.createElement('div');cta.className='hero-cta';cta.innerHTML='<a href="#work">看看我做的事 ↗</a><a href="portfolio.html">认识我一点</a>';desc.after(cta);
 let raf=0,tx=0,ty=0,cx=0,cy=0;
 const move=e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;tx=(e.clientX/innerWidth-.5)*14;ty=(e.clientY/innerHeight-.5)*10;if(!raf)raf=requestAnimationFrame(loop)};
 const loop=()=>{cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;intro.style.setProperty('--hero-x',cx.toFixed(2)+'px');intro.style.setProperty('--hero-y',cy.toFixed(2)+'px');raf=0;if(Math.abs(tx-cx)>.05||Math.abs(ty-cy)>.05)raf=requestAnimationFrame(loop)};
 addEventListener('pointermove',move,{passive:true});
 setTimeout(()=>intro.classList.add('hero-idle'),3600);
})();
