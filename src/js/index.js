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
    console.log('click')
    let contact = $("<li class='list-group-item'><p>'"+ email +"'</p><p>'"+ firstName +"'</p><p>'"+ lastName +"'</p><p>'"+ phone +"'</p><p>'"+ address +"'</p></li>");
    
    // Append contact to contact list
    contactList.append(contact);
    // Save contact with email as identifier in localStorage
    localStorage.setItem($('#email').val(), JSON.stringify(contact));
  })

});