let  uniqid = require('uniqid'); 

let arr1 = [1,2,3,4,5,6,'dsgfdsg','dsg','sg', 'sdfg' , 'sg']
let count = 0
arr1.forEach(item => {
    if (typeof item === "string"){
        count+=1
    }
})
console.log(uniqid())
