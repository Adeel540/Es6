//pending: initial state, neither fulfilled nor rejected.
let x=new Promise((resovole,reject)=>{
    resovole('Done')
})
x.then((list)=>{
    console.log("resolve"+list);

}).catch((err)=>{
    console.log('reject'+err)

})