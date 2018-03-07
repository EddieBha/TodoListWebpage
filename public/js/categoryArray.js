console.log('innan loop');

var category, text, cLen, i;

category = ["Fritid", "Träning", "Skola"];
cLen = category.length;
text = "<ul>";
for (i = 0; i < cLen; i++) {
    text += "<li>" + category[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;