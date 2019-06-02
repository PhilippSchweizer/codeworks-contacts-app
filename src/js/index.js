// IIFE - Immediately Invoked Function Expression
(function(globalObject) {
  // The global jQuery object is passed as a parameter
  globalObject(window.jQuery, window, document);
})(function($, window, document) {
  $(function() {
    // Globals
    const contactList = $('#contactList');
    const modal = $('#addContact');
    const saveContact = $('#saveContact');
    
    // Clear form after submit
    $('body').on('hidden.bs.modal', function(e) {
      console.log(e)});

    modal.on('hidden.bs.modal', function() {
      console.log(this);
      $(this).find('form')[0].reset();
    });

    // On submit of form ...
    saveContact.click((event) => {
      event.preventDefault();
      const email = $('#email').val();
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();
      const address = $('#address').val();
      const phone = $('#phone').val();
      const contact = $(
        '<li class="list-group-item"><div class="row"><div class="col-sm-3 bg-info rounded">' + email + '</div><div class="col-sm-9"><div class="row"><p class="col">' + firstName + '</p><p class="col">' + lastName + '</p></div><div class="row"><p class="col">' + address + '</p><p class="col">' + phone + '</p></div></div></div></li>');

      contactList.append(contact);
      modal.modal('hide');
    });
  });
});
