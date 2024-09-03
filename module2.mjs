
/*

import tn from './module1.mjs'
console.log(tn);  //this will give A as it has been exported by default 

*/


import tn ,{b,c} from './module1.mjs'    //jo by default export ni hote, unko same name se aise export krna pdta h curly braces k andr
console.log(tn);
console.log(b);
console.log(c);  




