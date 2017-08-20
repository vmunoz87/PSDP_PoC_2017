$(document).ready(function() { // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered 

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

//navbar init modals opening
$('.modal').modal();

//navbar init- responsive
$(".button-collapse").sideNav();

$(document).ready(function() {
    $('select').material_select();
  });

$('select').material_select('destroy');
 
  /*$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );*/

//closing ready function
})