// selektovanje prema tagu
/*$(document).ready(function(){
    // brojanje p eleenata
    var paragraf = $('p');
    console.log('ima ukupno ' + paragraf.length + " paragrafa na stranici");
    // vezba
    //var divovi = $('div').css('color', 'red');;
    //console.log('ima ukupno ' + divovi.length + " divova na stranici");

    //selektovanje prema id-u
  /*  $(document).ready(function(){
        console.log($('#TestDiv').html()); // dohvatamo ceo html element
        console.log($('#TestDiv').text()); // dohvatamo samo vrednost teksta unutar nekog html elementa
*/
        


/*    });*/
    //vezba I - prikazati html kod od elementa koji ima id form1
    //vezba II - ofarbati tekst u zelenu boju za element ID CommentsTExtBox
 /*   $(document).ready(function(){
       var forma = $('#form1').html();
       console.log(forma);

        $('#CommentsTextBox').css('color', 'green');
    })

/// selektovanje elemenata prema klasi

$(document).ready(function(){
    stilizujElement();
})

function stilizujElement() {
   // $('.BlueDiv').css('border', '5px solid red');
    //$('.RedDiv').css('background-color', 'green');
    //selektovati div blue div i postaviti neki border
    //$('div.BlueDiv').css('border', '3px solid yellow');
    //$('span.BlueDiv').css('border', '20px double purple');

// dodavanje vise css pravila
/*
$('.BlueDiv, .RedDiv').css({ 
    'font-size': '25px',
    'color': 'green',
})
*/

/*
// selektovanje prema atributima
$(document).ready(function() {
    var imaTitle = $('div[title]').length;
    console.log('ukupno ima: ' + imaTitle);
    var element = $('div[title = "Div Title"]').length;
    console.log('ukupno ima' + element);
    // zadatak - naci sve input elemente sa atributom type i vrednoscu text i dodati neki border
    var tekst = $('input[type = "text"]').css('border', '4px pink solid').length;
    console.log(tekst);
})

// input selektori
$(document).ready(function() {
    // prikazati vrednost prvog inputa
    var inputs = $('input');
    console.log(inputs[0].value);
    console.log($(inputs[0]).val());

    //prikazati vrednost svih inputa kroz petlju
    $('input').each(function() {
        var element = $(this).val();
        console.log(element.val);
    })
})

// ostali selektori
$(document).ready(function() {
    // pronaci div koji sadrzi 'moj div' reci
    $('div:contains("moj div")').css('border', '3px dashed red');

    // ofarbati sve parne tr u zutu boju, a parne u zelenu
    $('tr:even').css('background-color', "green");
    $('tr:odd').css('background-color', "yellow");

    // ofarbati samo tr prvu decu posle roditelja
    $('tr:first-child').css('background-color', "red");

    // selektovanje elementa koji ima 2 klase
    $('.BlueDiv.Test').css('border', '5px solid black');

    // selektovanje naslednog elementa
    $('.BlueDiv .GreenDiv').css('border', '5px solid green');

})
*/

// modifikovanje atributaaaaaaaa
$(document).ready(function() {   
    $('#TestDiv').attr('title', 'Promenjen title pomocu jquery');
    // zadatak - promeniti atribut title, zatim boju, font nad divovima sa klasama bluediv i reddiv
    $('.BlueDiv, .RedDiv').attr('title', 'NOVO');
    $('.BlueDiv, .RedDiv').css({
        'color': 'yellow',
        'font-size': '30px'
    });
});