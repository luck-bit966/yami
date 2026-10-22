(()=>{
 const boot=()=>{const hero=document.querySelector('.jiayi-hero');if(!hero)return false;if(hero.dataset.timeline==='ready')return true;const copy=hero.querySelector('.jiayi-copy'),cards=hero.querySelectorAll('.jiayi-card');if(!copy||cards.length<1)return false;hero.dataset.timeline='ready';
  const startup=document.createElement('div');startup.className='hero-startup-screen';startup.innerHTML='<span>JIAYI</span><b>.exe</b>';hero.prepend(startup);
  const secondary=document.createElement('a');secondary.className='jiayi-secondary';secondary.href='portfolio.html';secondary.textContent='认识我一点';copy.append(secondary);
  hero.classList.add('timeline-running');setTimeout(()=>hero.classList.add('timeline-idle'),3500);return true;
 };
 if(!boot()){const observer=new MutationObserver(()=>{if(boot())observer.disconnect()});observer.observe(document.body,{childList:true,subtree:true});setTimeout(()=>observer.disconnect(),5000)}
})();
