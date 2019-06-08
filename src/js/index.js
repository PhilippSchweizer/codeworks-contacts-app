// IIFE - Immediately Invoked Function Expression
(function(globalObject) {
  // The global jQuery object is passed as a parameter
  globalObject(window.jQuery, window, document);
})(function($, window, document) {
  $(function() {
    // Globals
    const contactList = $("#contactList");
    const modal = $("#addContact");
    const saveContact = $("#saveContact");
    const searchBar = $("#search");

    // Clear form after submit
    $("body").on("hidden.bs.modal", function(e) {
      console.log(e);
    });

    modal.on("hidden.bs.modal", function() {
      console.log(this);
      $(this)
        .find("form")[0]
        .reset();
    });

    // On submit of form ...
    saveContact.click(event => {
      event.preventDefault();
      const email = $("#email").val();
      const firstName = $("#firstName").val();
      const lastName = $("#lastName").val();
      const address = $("#address").val();
      const phone = $("#phone").val();
      const contact = $(
        '<div class="card"><div class="card-header" id="' +
          lastName +
          "_" +
          firstName +
          '"><h2 class="mb-0 row"><button class="btn col text-left" type="button" data-toggle="collapse" data-target="#collapse_' +
          lastName +
          "_" +
          firstName +
          '" aria-expanded="true" aria-controls="collapse_' +
          lastName +
          "_" +
          firstName +
          '"> ' +
          lastName +
          ", " +
          firstName +
          '</button><button class="delete btn px-0 col-1"><span class="oi oi-delete text-danger" title="delete"   aria-hidden="true"></span></button></h2></div><div id="collapse_' +
          lastName +
          "_" +
          firstName +
          '" class="collapse" aria-labelledby="' +
          lastName +
          "_" +
          firstName +
          '" data-parent="#contactList"><div class="card-body"><p>' +
          email +
          "</p><p>" +
          phone +
          "</p><p>" +
          address +
          "</p></div></div></div>"
      );

      contactList.append(contact);
      modal.modal("hide");
    });

    // Delete contact
    contactList.on("click", ".delete", () => {
      $(event.target)
        .parents(".card")
        .remove();
    });

    // Search contacts
    searchBar.keyup(function() {
      // Variables
      let filter, contactContainers, contact, txtValue;
      filter = searchBar.val().toUpperCase();
      contactContainers = contactList.find(".card");

      // Loop through all contacts and hide those who don't match the search query
      for (let i = 0; i < contactContainers.length; i++) {
        contact = contactContainers.eq( i ).find("button").eq( 0 );
        txtValue = contact.text();
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          contactContainers.eq( i ).css("display", "");
        } else {
          contactContainers.eq( i ).css("display", "none");
        }
      }
    });
  });
});
