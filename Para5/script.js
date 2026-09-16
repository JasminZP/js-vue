// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num ++;
// }

// let usernum = prompt("Vash number");
// while (usernum < 1 || usernum > 10) {
//     usernum = prompt("Vash number she raz");
// }
//
// console.log(usernum);

// let age = +prompt('Enter age');
// while ( Number.isNaN(age) || age <= 0 || age >= 100) {
//     age = +prompt('Enter age again');
// }

// const correctpin = 1234;
// let i = 1;
// let pin = +prompt("PINkod");
// while (i <= 3 && pin !== correctpin) {
//     pin = +prompt(`PINKod znovu scprob: ${i}`);
//     i++;
// }
// if (pin === correctpin) {
//     alert("Molodca");
// }
// else {
//     alert("loh");
// }

// let attempt = 1, password = 1234;
// while (attempt <= 3) {
//     let password2 = +prompt("Vash parol");
//     if (password === password2) {
//         alert("Dostup E");
//         alert(attempt);
//         break;
//     }
//     alert("parol govno");
//     attempt ++;
// }

// let menuchoice;
// do {
//     menuchoice = +prompt("Oberit diu: \n" +
//     "1 - Profil\n," + "2 - settingsi\n" + "0 - vihid\n");
//     if (menuchoice === 1) {
//         alert("Profil vash prekrasniy");
//     }
//     else if(menuchoice === 2) {
//         alert("Settinge vashi proklati");
//     }
//     else if (menuchoice === 0) {
//         alert("Do pobachenya");
//     }
//     else {
//         alert("nevidomyi punkt");
//     }
// }
// while (menuchoice === 0);

// _____________________________________________

// let menuchoice;
// do {
//     menuchoice = +prompt("Oberit diu: \n" +
//         "1 - Profil\n" + "2 - settingsi\n" + "3 - Novini" + "0 - vihid\n");
//     switch (menuchoice) {
//         case 1: alert("Profil vash prekrasniy");
//             break;
//         case 2: alert("Settingi vashi proklati");
//             break;
//         case 3: alert("Novin ne vashi");
//             break;
//         case 0: alert("Do pobachenya");
//             break;
//     }
// }
// while (menuchoice === 0);

// __________________________________________________________________

// let count = 0, sum = 0;
// while (count < 5) {
//     let currentGrade = +prompt(`Ocinka № ${count + 1}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)) {
//         alert("Nekorektna ocinka")
//     }
// }


// let questionNumber = 1;
// let score = 1;
// while(questionNumber <= 5) {
//     let question = "", answer = "";
//     switch (questionNumber) {
//         case 1:
//             question = "Yak stvoruvati sminnu";
//             answer = "let";
//             break;
//         case 2:
//             question = "yakiy operator rivnosti sctrogoi?";
//             answer = "===";
//             break;
//         case 3:
//             question = "yak poznachaetsa operator and";
//             answer = "&&";
//             break;
//         case 4:
//             question = "yak zavershiti cikl";
//             answer = "break";
//             break;
//         case 5:
//             question = "yak zapisati increment";
//             answer = "++";
//             break;
//     }
//     let answers = prompt(`Zapitanya № ${questionNumber} is 5\n ${question}`);
//     if (answer === "") {
//         console.log("ne moje buty pustoyu");
//         continue
//         }
//     if (asnwers === answer) {
//         alert("Molodca")
//         score ++;
//     }
//     else {
//         alert("Ni");
//     }
// }
// if (score === 5) {
//     alert("Molodec");
// }
// else if (score < 5 && score > 2) {
//     alert("Norm")
// }
// else {
//     alert("Loh")
// }

// _______________________________________________________________

let age = +prompt("Vvedit vash vik");

while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Vvedit vash vik she raz");
}

const correctPin = 4321;
let attempt = 1;
let pin = +prompt("Vvedit PIN");

while (attempt <= 3 && pin !== correctPin) {
    attempt++;

    if (attempt <= 3) {
        pin = +prompt(`PIN nevirniy. Sproba № ${attempt}`);
    }
}

if (pin === correctPin) {
    alert("Dostup dozvoleno");

    let menuchoice;

    do {
        menuchoice = +prompt(
            "Oberit punkt:\n" +
            "1 - Osobistiy kabinet\n" +
            "2 - Povidomlennya\n" +
            "3 - Nalashtuvannya\n" +
            "0 - Vihid"
        );

        switch (menuchoice) {
            case 1:
                alert("Osobistiy kabinet");
                break;

            case 2:
                alert("Povidomlennya");
                break;

            case 3:
                alert("Nalashtuvannya");
                break;

            case 0:
                alert("Do pobachennya");
                break;

            default:
                alert("Takogo punktu nemae.");
        }
    }
    while (menuchoice !== 0);
}
else {
    alert("Dostup zabroneno");
}