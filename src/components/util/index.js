function getIndexInArray(value,array){
    return array.find(item=>item===value);
}

console.log(getIndexInArray(1,[1,2,3]))