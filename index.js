// JavaScript File
function quechans() {
    var A = document.quechans.a.value;
    var b = document.quechans.b.value;
    var c = document.quechans.c.value;
    var res = document.quechans("res");
    var d = b * b - 4 * a * c;
    if ( d < 0 ) {
    string = "Pівняння не має дійсних коренів ! ! !";
  } else {
        string = "x<sub>1</sub> = ";
        string += (-b + Math.sqrt(d)) / (2 * a);
        string += ";<br> x<sub>2</sub> = ";
        string += (-b - Math.sqrt(d)) / (2 * a);
        string += ".";
        }
  res.innerHTML = string;
}
