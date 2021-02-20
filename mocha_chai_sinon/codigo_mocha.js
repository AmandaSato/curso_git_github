class Math {
    sum(a,b){return a+b}

    sum_delayed(a,b,callback){
        setTimeout(()=>{callback(a+b);},1800)}

    sum_ULTRA_delayed(a,b,callback){
        setTimeout(()=>{callback(a+b);},2500)}

    multiply(a,b){return a*b}

    metodoIndefinido(obj, a, b){
        const m = obj.metodo("Babi", a+b);
        return m
        
    }
}

module.exports = Math;




