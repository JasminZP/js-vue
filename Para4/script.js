// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// for(let i = 10; i >= 1; i-=2) {
//     console.log(i);
// }

// let sum = 0;
// for(let i = 0; i < 30; i++) {
//     sum += i;
//     console.log(sum);
// }


//1
//_____________________________________________
// let sum = 0;
// for(let i = 0; i <= 50; i+=2) {
//     sum += i;
// }
// console.log(sum);
//_____________________________________________
// let count = 0;
// for(let i = 1; i <= 100; i++){
//     if (i % 3 === 0){
//         count ++;
//     }
// }
// console.log(count);

// for(let i = 1; i <= 100; i++){
//     if (i > 20 && i % 4 === 0 && i % 6 === 0){
//         console.log(i);
//         break;
//     }
// }

// for(let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i)
// }

// let N = +prompt("Kilkist uchniv");
// let sum = 0;
// let max = 0;
// let min = 0;
// let highL = 0;
// let others = 0;
// if (N > 0) {
//     for(let i = 1; i <= N; i++) {
//         let ocinka = +prompt(`Ocinka uchna nomer ${i}`);
//         if (ocinka > 0 && ocinka <= 12) {
//             sum += ocinka;
//             if (ocinka >= max) {
//                 max = ocinka;
//             }
//             else if (ocinka <= min || min === 0) {
//                 min = ocinka;
//             }
//             if (ocinka >= 10) {
//                 highL++;
//             }
//             else {
//                 others ++;
//             }
//         }
//         else {
//             ocinka = +prompt(`Vvedit pravilnu ocinko uchna ${i}`);
//             i --;
//         }
//     }
// }
// else {
//     alert("Ne pravilna kilkist");
// }
// console.log(sum);
// console.log(max);
// console.log(min);
// console.log(sum/N);

// ________________________________________________________________________ DZ
let N = +prompt("Kilkist uchasnykiv");

let sum = 0;
let max = 0;
let min = 0;

let high = 0;
let middle = 0;
let low = 0;

let first100 = 0;

if (N > 0) {

    for (let i = 1; i <= N; i++) {

        let result = +prompt(`Rezultat uchasnyka nomer ${i}`);

        if (result >= 0 && result <= 100) {

            sum += result;

            if (result >= max) {
                max = result;
            }
            else if (result <= min || min === 0) {
                min = result;
            }

            if (result >= 90) {
                high++;
            }
            else if (result >= 60) {
                middle++;
            }
            else {
                low++;
            }

            if (result === 100 && first100 === 0) {
                first100 = i;
            }

        }
        else {
            alert(`Vvedit pravilnyi rezultat uchasnyka ${i}`);
            i--;
        }
    }

}
else {
    alert("Ne pravilna kilkist");
}

console.log("Suma:", sum);
console.log("Serednii rezultat:", sum / N);
console.log("90–100:", high);
console.log("60–89:", middle);
console.log("Nyzche 60:", low);
console.log("Naivyshchyi rezultat:", max);
console.log("Nainyzhchyi rezultat:", min);
console.log("Pershyi uchasnyk зі 100:", first100);