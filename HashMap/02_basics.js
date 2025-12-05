/*
Real-world example: Word Frequency (HashMap use case) */

// function countWords(str){
//   let m = new Map()
//   const words = str.split("")
// //   console.log(words);

// for(let word of words){
//     if(m.has(word)){
//         m.set(word, m.get(word) + 1)
//     }else{
//         m.set(word,1)
//     }
// }
// return m;
  


// }

// let str = "hi hello hi world hi"
// console.log(countWords(str));

const map = new Map()
map.set("name","pravin")
map.set("age",23)
map.set("email","one")

// map.set("a",1)
// map.set("a",4) // overwrite on first key 
// console.log(map.get("a")); => 4



// const obj = {id:1}
// map.set(obj,"data")
// console.log(map.get(obj));


// console.log(map.entries()) // Returns an iterable of key, value pairs for every entry in the map.

// console.log(map.keys()); // returns all keys of the object
// console.log(map.values()); // returns all values of the object


// for(let [keys, values] of map){
//     console.log(keys, ": " , values);
    
// }



function countWord(str){
 let map = new Map();
 let words = str.split(" ")

 for(let word of words){
    // console.log("word ",word);
    
    if(map.has(word)){
        map.set(word,map.get(word) + 1)
    }else{
        map.set(word,1)
    }
 }
 return map;
}

let str = "hi hello hi world hi"

console.log(countWord(str));


function countFreq(str){
 let map = new Map()
 let words = str.split(" ")

 for(let word of words){
    if(map.has(word)){
        map.set(word, map.get(word) + 1)
    }else{
        map.set(word,1)
    }
 }
 return map;

}

console.log(countFreq(str));
