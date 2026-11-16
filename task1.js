// let search = document.getElementById("search");
// let list = document.getElementById("subjectList");

// search.addEventListener("input", function() {
//     let subjects = list.getElementsByTagName("li");

//     for (let i = 0; i < subjects.length; i++) {
//         if (subjects[i].innerText.toLowerCase().includes(search.value.toLowerCase())) {
//             subjects[i].style.display = "";
//         } else {
//             subjects[i].style.display = "none";
//         }
//     }
// });

// function addSubject() {
//     let name = prompt("Enter subject name");

//     if (name != "") {
//         let item = document.createElement("li");
//         item.innerText = name;
//         list.appendChild(item);
//     }
// }


let search = document.getElementById("search");
let list = document.getElementById("subjectList");

search.addEventListener("change", function() {
    let subjects = list.getElementsByTagName("li");

    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].innerText.toLowerCase().includes(search.value.toLowerCase())) {
            subjects[i].style.display = "";
        } else {
            subjects[i].style.display = "none";
        }
    }
});