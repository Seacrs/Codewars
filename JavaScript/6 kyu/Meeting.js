function meeting(s) {
    return s.toUpperCase()
            .split(";")
            .map(el=> el.split(":"))
            .sort((a, b)=>{
                if(a[1] === b[1]) return a[0].localeCompare(b[0]);
                else return a[1].localeCompare(b[1]);
            }).map(el =>{
                const [first, last] = el;
                const str = [last, first].join(', ')
                return `(${str})`
            }).join("");
}