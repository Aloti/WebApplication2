// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$('#topBarUL li').click(function() {
    $('#topBarUL li').removeClass('selected');
    var text = this.textContent;
    switch(text){
      case 'Terminales':
        $('#terminals').addClass('selected');
        break;

      case 'Terminales Sin Asignar':
        $('#unassignedTerminals').addClass('selected');
        break;

    }
});

$(document).ready(function () {

    });