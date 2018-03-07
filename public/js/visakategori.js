$("#kategori").on("change", function(){
    var id = $(this).val();
    if (id === "0","1","2"){
        clearForm();
    } else {
        makeAjaxRequest(id);
    }
});

function makeAjaxRequest(specCategory){
    $.ajax({
        type: "POST",
        data: { specCategory: specCategory },
        dataType: "json",
        url: "",
        success: function(json) {
            insertResults(json);
        }
    });
}
function insertResults(json){
    $("#element_5_0").val(json["Fritid"]);
    $("#element_5_1").val(json["Träning"]);
    $("#element_5_2").val(json["Skola"]);

}
function clearForm(){
    $("#element_5_0, #element_5_1, #element_5_2").val("");
}
function mysqlConnect() {
    mysql_connect('localhost', 'user', 'pass')('Could not connect: '.mysql_error());
    mysql_select_db('tododb2')('Could not select database');

    $placeId = $_POST['specCategory'];

    $query = "SELECT * FROM category";
    $result = mysql_query($query)('Query failed: '.mysql_error());
    while ($row = mysql_fetch_assoc($result)) {
        if ($specCategory === $row['id']) {
            console.log($row);
        }
    }
}