// In this kata, you will make a function that converts between 
// camelCase, snake_case, and kebab-case.

// You must write a function that changes to a given case. It must be able to handle all three case types:

// js> changeCase("snakeCase", "snake")
// "snake_case"
// js> changeCase("some-lisp-name", "camel")
// "someLispName"
// js> changeCase("map_to_all", "kebab")
// "map-to-all"
// js> changeCase("doHTMLRequest", "kebab")
// "do-h-t-m-l-request"
// js> changeCase("invalid-inPut_bad", "kebab")
// undefined
// js> changeCase("valid-input", "huh???")
// undefined
// js> changeCase("", "camel")
// ""

// Your function must deal with invalid input as shown, though it will only be passed strings. 
// Furthermore, all valid identifiers will be lowercase except when necessary, in other words 
// on word boundaries in camelCase.

// (Any translations would be greatly appreciated!)

function changeCase(identifier, targetCase) {
  // Your code here!
    if((/[A-Z]/.test(identifier) && /-/.test(identifier)) || (/_/.test(identifier) && /[A-Z]/.test(identifier)) || (/-/.test(identifier) && /_/.test(identifier))){
        return undefined;
    }
    let string = identifier.split(/[-_]|(?=[A-Z])/);
    
    if(targetCase!== 'kebab' && targetCase !== 'snake' && targetCase !== 'camel'){
        return undefined;
    }

    if(targetCase === 'kebab'){
        return string.map(x=>x.toLowerCase()).join('-')
    }
    if(targetCase === 'snake'){
        return string.map(x=>x.toLowerCase()).join('_');
    }
    if(targetCase === 'camel'){
        return string.map((x,index)=>{
            const lower = x.toLowerCase();
            return index !== 0 ? lower.split('').map((el,index)=> index === 0 ? el.toUpperCase(): el).join('') : lower;
        }).join('');
    }
}