import { TconsoleTitle } from "./types";

/**
 * Un array es una estructura de datos que almacena una colección de elementos ordenados. Los elementos pueden ser de cualquier tipo y se acceden a través de índices numéricos.
 */
export const arrays = (consoleTitle: TconsoleTitle) => {
  consoleTitle("ARRAYS")

  let array: number[] = [1, 2, 3, 4, 5];
  console.log(array[0]); // 1
  array.push(6); // Agrega un elemento al final
  array.pop(); // Elimina el último elemento
};

/**
 * Un objeto es una colección de pares clave-valor. Las claves son cadenas (o Symbols) y los valores pueden ser de cualquier tipo.
 */
export const Objects = (consoleTitle: TconsoleTitle) => {
  consoleTitle("OBJECTS")

  interface Person {
    nombre: string;
    edad: number;
    profesion: string;
  }

  let obj: Person = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
  };
  console.log(obj.nombre); // Juan
  obj.profesion = "Desarrollador"; // Modifica el valor
};

/**
 * Un Set es una colección de valores únicos. Puedes agregar, eliminar y comprobar la existencia de valores en un Set.
 */
export const Sets = (consoleTitle: TconsoleTitle) => {
  consoleTitle("SETS")
  let set: Set<number> = new Set();
  set.add(1);
  set.add(2);
  set.add(2); // No se agregará porque ya existe
  console.log(set.has(2)); // true
  set.delete(2); // Elimina el valor 2
};

/**
 * Un Map es una colección de pares clave-valor, donde las claves pueden ser de cualquier tipo.
 */
export const Maps = (consoleTitle: TconsoleTitle) => {
  consoleTitle("MAPS")
  let map: Map<string, any> = new Map();
  map.set("nombre", "Juan");
  map.set("edad", 30);
  console.log(map.get("nombre")); // Juan
  map.delete("edad"); // Elimina la clave 'edad'
};
