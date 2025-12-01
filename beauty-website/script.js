// script.js - small interactions: smooth scroll, portfolio lightbox, contact handler
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple gallery lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.8);z-index:1050;visibility:hidden;opacity:0;transition:opacity .2s';
  const img = document.createElement('img');
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  lightbox.appendChild(img);
  lightbox.addEventListener('click', function(){ lightbox.style.opacity=0; setTimeout(()=>lightbox.style.visibility='hidden',200); });
  document.body.appendChild(lightbox);

  document.querySelectorAll('.portfolio-item').forEach(function(item){
    item.addEventListener('click', function(){
      const src = this.querySelector('img').src;
      img.src = src;
      lightbox.style.visibility = 'visible';
      lightbox.style.opacity = 1;
    });
  });

  // Contact form handler (no backend) - show a simple message
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value || 'Guest';
      alert('Thanks, '+name+' — your request was captured locally. Implement backend to submit.');
      form.reset();
      document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
    });
  }
});
