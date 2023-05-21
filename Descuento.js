var precio_final = 0;
var precio_base = 0;
var descuento = 0;

function calcular_precio(precio_base, descuento){
if (precio_base <= 0 || descuento < 0 || descuento > 100){
    return "Los valores ingresados son inválidos";
    } if (descuento == 0) {
        return "El precio sin descuento es: " + precio_base;
    } if (descuento > 0 && descuento <= 100) {
        precio_final = precio_base - (descuento*precio_base/100);
        return "El precio final con descuento es $ " + precio_final;
    }
}
console.log (calcular_precio(200,20))