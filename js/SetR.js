function rValue(v, id){
    document.getElementById("r-values").value = v;
    document.getElementById("-r").innerHTML = v;
    document.getElementById("-r2").innerHTML = (-v/2).toString();
    document.getElementById("r").innerHTML = v;
    document.getElementById("r2").innerHTML = (v/2).toString();
    document.getElementById("-R").innerHTML = v;
    document.getElementById("-R2").innerHTML = (-v/2).toString();
    document.getElementById("R").innerHTML = v;
    document.getElementById("R2").innerHTML = (v/2).toString();
}

