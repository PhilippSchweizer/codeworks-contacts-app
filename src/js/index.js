let contactsList = [];

function storeContact() {
  let contact = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    email: $('#email').val(),
    phone: $('#phone').val(),
    address: $('#address').val(),
  }
  // const email = $('#email');
  // const phone = $('#phone');
  // localStorage.setItem('contact', JSON.stringify(contact));
  contactsList.push(contact);
}


$( document ).ready(function() {

});