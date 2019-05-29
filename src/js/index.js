function storeContact() {
  contactsList.push(contact);
}


$( document ).ready(function() {
  // On submit of form, save contact in object 
  $('#saveContact').click(() => {
    let contact = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      address: $('#address').val(),
    }
    // Save contact with email as identifier in localStorage
    localStorage.setItem($('#email').val(), JSON.stringify(contact));
  })
});