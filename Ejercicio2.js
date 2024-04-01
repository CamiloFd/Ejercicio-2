var monto=0,descuento=0,valorfinal=0;

monto=parseFloat(prompt("Ingrese el monto"));

if (monto>100) {
    descuento=monto*0.10;
    valorfinal=(monto-descuento);
    alert("El descuento fue de $"+descuento+" y el valor final es de $"+valorfinal);
}
else{
    descuento=monto*0.02;
    valorfinal=(monto-descuento);
    alert("El descuento fue de $"+descuento+" y el valor final es de $"+valorfinal);
}