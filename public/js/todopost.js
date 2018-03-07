checkLogin();
$('#todoform').on('submit', function(e) {           // Används när man väl klickar in submit och lägger in något att göra
    e.preventDefault();
    var details = $('#todoform').serialize();
    $.post('http://127.0.0.1:8000/todo/', details, function(data) {  // Används för att skicka data
        $('#content').html('Tillagd i listan!');                    //Visar resultat
    });
});
