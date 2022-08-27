const obj = (n)=>({
    [Symbol.iterator](){
       let fibNUm =1;
       let old =0 ;
       let nw=1;
        return{
                next : () => {
                    if(fibNUm<=n){
                        let val = old + nw;
                        old=nw;    
                        nw=val; 
                        fibNUm++;
                       return{value : val, done : false};
                    }else{
                        return{done:true};
                    }
                }
        }
    }
});

console.log([...obj(6)]);