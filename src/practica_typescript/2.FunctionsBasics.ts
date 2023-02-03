// How to set the type in functions

function suma(a: number, b: number): number {
  return a + b;
}

const sumaArrow = (a: number, b: number): number => {
  return a + b;
};

// con valores opcionales
function sumaOptional(a: number, b?: number): number {
  return a + b;
}

// funcion que no retorna nada

function sumaVoid(a: number, b?: number): void {
  let result = a + b;
  console.log(result);
}

// Interface con funcion dentro y utilizada en un obj
interface ObjStructure {
  name: string;
  username: string;
  address: () => void; // function return void
  address_2: () => number; // function return number
}

const user: ObjStructure = {
  name: "HOla",
  username: "Hola 2",
  address() {
    console.log("return void");
  },
  address_2: () => {
    return 1;
  }
};

console.log(user.address_2());
console.log(suma, sumaArrow, sumaOptional, sumaVoid, user);
