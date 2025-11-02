// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href');
    if(id && id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

// Lightbox
const lb=document.getElementById('lightbox');
const lbImg=document.getElementById('lightbox-img');
document.querySelectorAll('.figure img').forEach(img=>{
  img.addEventListener('click',()=>{ lbImg.src=img.src; lb.classList.add('open'); });
});
document.querySelector('.lightbox-close')?.addEventListener('click',()=> lb.classList.remove('open'));
lb?.addEventListener('click',e=>{ if(e.target===lb){ lb.classList.remove('open'); }});

// Scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(el=>{ if(el.isIntersecting) el.target.classList.add('reveal'); });
},{threshold: .15});
document.querySelectorAll('.section').forEach(sec=> io.observe(sec));