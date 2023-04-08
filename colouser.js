function math(math,eng){

    console.log('outer',math,eng)

     const  totalmarks =()=>{
        let urdu=200
        let to=urdu +math+eng
        return to
    }
   return totalmarks()

}

let gets=math(100,20);
console.log(gets)
