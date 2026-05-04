// JavaScript bàsic per a Tallers Egasa

document.addEventListener('DOMContentLoaded', function(){
  // Toggle menú mòbil
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', function(){
    mainNav.classList.toggle('open');
  });

  // Smooth scroll per als enllaços de navegació
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // tancar menú mòbil si està obert
        if(mainNav.classList.contains('open')) mainNav.classList.remove('open');
      }
    });
  });

  // Detectar paràmetre de servei en la URL
  var urlParams = new URLSearchParams(window.location.search);
  var serviceParam = urlParams.get('service');
  if(serviceParam){
    var serviceSelect = document.getElementById('service');
    if(serviceSelect){
      serviceSelect.value = serviceParam;
    }
  }

  // Formulari de contacte (simulat)
  var form = document.getElementById('contactForm');
  var feedback = document.getElementById('formFeedback');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
      feedback.style.color = 'crimson';
      feedback.textContent = 'Si us plau, completa tots els camps.';
      return;
    }

    // Validació simple d'email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      feedback.style.color = 'crimson';
      feedback.textContent = "Introdueix un correu vàlid.";
      return;
    }

    // Simulem enviament (a futur s'hi pot integrar una API)
    feedback.style.color = 'green';
    feedback.textContent = "Gràcies per contactar-nos, estem revisant la teva petició";
    form.reset();
  });

  // Posar l'any actual al footer
  var yearEl = document.getElementById('footerYear');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
