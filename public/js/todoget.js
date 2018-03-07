$(function() {
checkLogin(); // använder check login funktionen gör så att man inte kan se info om man ej är inloggad

        //$.getJSON('data/data.json', showTodo);    // Dummy JSON Data
        $.getJSON('http://127.0.0.1:8000/todocategory/', showTodo); // endpoint.

        function showTodo(data) { //funktion för att visa innehåll i listan.
            var output = '';
            $.each(data, function (key, item) {
                output += '<div class="seperator">'; // lägger till klass från css för att få ett finare utrymme mellan rader.
                output += item.todoTitle + '<br />';
                output += item.todoContent + '<br />';
                output += item.categoryName + '<br />';
                output += item.todoDate;
                output += '</div>';
            });
            $('#content').html(output); // skriver ut innehåll
        }



});







