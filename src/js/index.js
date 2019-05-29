$(document).ready(function() {
  // Globals
  let contactList = $("#contactList");
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let address = $('#address').val();

  let state;
  function setState(newState) {
    for (let name of Object.keys(newState.contacts)) {
      let contact = $("<li class='list-group-item'><p>'"+ email +"'</p><p>'"+ firstName +"'</p><p>'"+ lastName +"'</p><p>'"+ phone +"'</p><p>'"+ address +"'</p></li>");
      contactList.append(contact);
    }

    localStorage.setItem("Contacts", JSON.stringify(newState));
    state = newState;
  }
  
  $("#saveContact").click(() => {
    let name = email;
    if (name)
      setState({
        contacts: Object.assign({}, state.contacts, { [name]: "" })
      });
  });
});
