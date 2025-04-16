// JS107. Change the text of a paragraph using a button. 


const ctext = document.getElementById("change");

ctext.onclick = function()
{
    document.getElementById("para").innerText = "This is Paragraph ";
}
