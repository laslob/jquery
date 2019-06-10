$(document).ready(function() {

    $('#4-cifreni').click(function() {                      
        $('#random4c').attr('value', slucajanBroj());                     
    });

    $('#pozadina').click(function() {
        $('html').toggleClass('klasa1');
    })

    $('#dugme1').click(function() {
        $('#lista').prepend('<li>Kafa</li>');
    });

    $('#dugme2').click(function() {
        $('#lista').append('<li>Vinjak</li>');
    });

    $('#dugme3').click(function() {
        $('#lista li').remove();
    });

    $('form').addClass('stilForme');

    $('#sakrij').click(function() {
        $('#kontakt').fadeOut(1500);
    });

    $('#slika').prepend('<img src="./ns.jpg">');    



});

function slucajanBroj() {
    return Math.floor(1000 + Math.random() * 9000);    
}
