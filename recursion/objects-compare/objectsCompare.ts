/** Are arrays/objects deeply equal? */

/*
Pseudo

if(a and b are not arrays), must be objects.
change a and b to be arrays , Object.entries()

Loop through array by index
  elemA = a[i]
  elemB = b[i]

  If elem FROM BOTH a and b are arrays
    recursively check those elems.
      if those elems return true, keep going
      else return false

  If elem FROM BOTH a and b are instanceof Object (not an arr at this point)
    recursively check those elems by turning them into Arrays.
    Object.entries()
      if those elems return true, keep going
      else return false

  compare each element at the same index from a and b
  can safely compare by index
  elemA !== elemB return false

*/

function objectsCompare(
  a: Record<string, any> | any[],
  b: Record<string, any> | any[]): boolean {

  // Make Objects into Arrays
  if (!Array.isArray(a) && !Array.isArray(b)) {
    a = Object.entries(a); // o(n)
    b = Object.entries(b); // TODO: typing // o(m)
  }

  if (a.length !== b.length) return false; // fail fast

  for (let i = 0; i < a.length; i++) { // Both arrays will be the same length
    const elemA = a[i]; // o(1)
    const elemB = b[i]; // o(1)

    if(Array.isArray(elemA) && Array.isArray(elemB)){ // o(1)
      if(!objectsCompare(elemA, elemB)) return false;
      continue;
    }
    if(elemA instanceof Object && elemB instanceof Object){ // o(1)
      const elemAArray = Object.entries(elemA); // o(l)
      const elemBArray = Object.entries(elemB); // o(p) // TODO: see if I can remove this which is causing a quadratic solution
      if(!objectsCompare(elemAArray, elemBArray)) return false;
      continue;
    }

    if(elemA !== elemB) return false;
  }

  return true;
}


// Chat GPT's answer
// function objectsCompare(
//   a: Record<string, any> | any[],
//   b: Record<string, any> | any[]
// ): boolean {
//   // Check if both are identical references
//   if (a === b) {
//     return true;
//   }

//   // Check if both are not objects or arrays
//   if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
//     return false;
//   }

//   // Get keys of both objects
//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);

//   // Check if both have the same number of keys
//   if (keysA.length !== keysB.length) {
//     return false;
//   }

//   // Check if all keys and values are the same
//   for (const key of keysA) {
//     if (!keysB.includes(key) || !objectsCompare(a[key], b[key])) {
//       return false;
//     }
//   }

//   return true;
// }


export { objectsCompare };