// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// function functionName(){
//     console.log('ran')
// }

// let ourFunction = () =>{
//     console.log("new function")
// }


// functionName();
// ourFunction();

// let objectName = {
//     "key": "value",
//     "name": "Bob",
//     "age": 12,
// }
// let data = async()=>{
//     let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await response;
//     console.log('async', data)
// }

// let x = data();


fetch('https://v2.jokeapi.dev/joke/Any')
      .then(response => response.json())
      .then(json => console.log(json))


let data = async()=>{
    let res = await fetch('https://v2.jokeapi.dev/joke/Any');
     let data = await response;
    console.log('async', data)
}



