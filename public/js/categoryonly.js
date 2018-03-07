
var categoryArray, text, categoryArrayLen, i; // array och for-loop för att visa de olika kategorierna man kan skriva in.

categoryArray = ["Fritid", "Träning", "Skola"];
categoryArrayLen = categoryArray.length;
text = "";
var index;
for (i = 0; i < categoryArrayLen; i++) {
    index = i + 1;
    text += '<option value="' + index + '">' + categoryArray[i] + '</option>';
    //text += categoryArray[i] + " id " + index;
}
document.getElementById('todoCategoryId').innerHTML = text;
