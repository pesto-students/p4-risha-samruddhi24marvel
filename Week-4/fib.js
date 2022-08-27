const obj = (n)=>({
    [Symbol.iterator](){
       let nw =1;
       let old =0 ;
        return{
                next : () => {
                    if(nw<=n){
                        old = old + nw;
                        nw++;
                       return{value : old, done : false};
                    }else{
                        return{done:true};
                    }
                }
        }
    }
});

console.log([...obj(5)]);