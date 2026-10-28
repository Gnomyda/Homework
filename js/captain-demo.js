// Demonstration only: no personal data is transmitted or stored.
document.querySelectorAll('form[data-demo-form]').forEach(function(form){
  form.addEventListener('submit', function(event){
    event.preventDefault(); event.stopImmediatePropagation();
    var status=form.querySelector('.demo-form-status');
    if(status) status.textContent='Дякуємо! Це демонстраційний запит — жодні дані не були надіслані.';
    // For future GA4 integration, an anonymous demo event can be added here.
  }, true);
});
