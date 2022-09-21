const activo = true;

// Es el operador ternario condicional teniendo la función de un if-else
const msg = activo ? 'Estoy activo' : 'No estoy activo';

// && es una operacion logica y es una operacion de asignacion, se considera solo como un IF conel caso verdadero, devolviendo un flase en automatico si no se cumple
const msg2 = activo && 'Estoy activo';

console.log(msg, msg2);
