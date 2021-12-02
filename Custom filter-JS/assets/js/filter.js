//Filter

let arr2=[];
Array.prototype.myfilter=function(func){
    for (var i =0; i <=arr1.length; i++) {
        if (func(arr1[i])) {
            console.log(arr1[i]);
        }
    }   
}

const arr1 = [20,50,447,2389,91,841,-201,-211,36];
// console.log(arr1.myfilter(n=>n>50));
arr1.myfilter(n=>n>35)