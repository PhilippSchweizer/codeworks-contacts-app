function storeContact() {
  contactsList.push(contact);
}


$( document ).ready(function() {
  // Globals
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let address = $('#address').val();
  let contactList = $('#contactList');

  // On submit of form, save contact in object 
  $('#saveContact').click(() => {
    let contact = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
    }
    // Append contact to contact list
    contactList.html('<li></li>')
    // Save contact with email as identifier in localStorage
    localStorage.setItem($('#email').val(), JSON.stringify(contact));
  })

  // Handle contact list in form of state
  function setState(newState) {
    let 
  }


});