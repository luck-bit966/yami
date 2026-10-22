(()=>{
  let target=.5,current=.5;
  const update=e=>{if(!document.body.classList.contains('gesture-ring'))return;target=Math.max(0,Math.min(1,e.clientX/innerWidth));document.body.style.setProperty('--orbit-progress',target)};
  addEventListener('pointermove',update,{passive:true});
  const tick=()=>{current+=(target-current)*.08;if(document.body.classList.contains('gesture-ring')){const cards=[...document.querySelectorAll('.gesture-ring .grid-item')];const shift=(.5-current)*Math.PI*.9;const radius=Math.min(innerWidth,innerHeight)*.34;cards.forEach((el,i)=>{const a=i/cards.length*Math.PI*2-Math.PI/2+shift;el.style.left=(innerWidth/2+Math.cos(a)*radius)+'px';el.style.top=(innerHeight/2+Math.sin(a)*radius)+'px';el.style.transform=`translate(-50%,-50%) rotate(${(i%2?4:-4)+Math.sin(a)*3}deg) scale(${Math.sin(a)>.75?1.08:1})`})}requestAnimationFrame(tick)};tick();
})();
