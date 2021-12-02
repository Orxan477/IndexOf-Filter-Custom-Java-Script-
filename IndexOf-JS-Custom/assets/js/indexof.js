//Index Of

Array.prototype.IndexOf=function(search){
    for (i=0; i<=arr.length; i++) {
        
        if (arr[i]==search) {
            return i;
        }
    }
    return -1;
}

const arr = [20,50,447,2389,20,91];
console.log("Index=",arr.IndexOf(2389));