const modal=document.querySelector('dialog'),image=modal.querySelector('img');let trigger;document.querySelectorAll('[data-src]').forEach(button=>button.addEventListener('click',()=>{trigger=button;image.src=button.dataset.src;image.alt=button.dataset.label;modal.querySelector('p').textContent=button.dataset.label;modal.showModal()}));modal.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});modal.addEventListener('close',()=>trigger?.focus());

// Barre de progression et animations d'entrée.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!reducedMotion.matches){
 const observer=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('visible');observer.unobserve(item.target)}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(section=>{section.classList.add('js-reveal');observer.observe(section)});
}
const progress=document.querySelector('.scroll-progress');
function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight;progress.style.width=(total>0?scrollY/total*100:0)+'%'}
addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);updateProgress();
const motionButton=document.querySelector('.motion-toggle');
motionButton.addEventListener('click',()=>{const paused=document.body.classList.toggle('motion-paused');motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=paused?'Ativar movimento':'Pausar movimento'});
