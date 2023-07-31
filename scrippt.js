// function myDisplayer(some) {

//     console.log(some);
// }


// let myPromise = new Promise(function (myResolve, myReject) {
//     let x = 0;

//     // some code (try to change x to 5)

//     if (x == 0) {
//         myResolve("OK");
//     } else {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function (value) { myDisplayer(value); },
//     function (error) { myDisplayer(error); }
// );
function Display(a){
    console.log(a)
    return a;
}
async function myFunction(){
    // console.log('hello world')
    return "hello"+ "world" + + 9;
}
myFunction().then(
    function(value){ Display(value);}
)