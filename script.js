const btn = document.getElementById("btn")
let a = document.createElement("input")
btn.addEventListener("click", () => {
    let txt = document.querySelectorAll("p.txt-red")
    txt.forEach(err => {
        err.style.display = "none";
    })
    let errorTxt = document.querySelectorAll("input:invalid + p.txt-red")
    let radioErr = document.querySelectorAll("fieldset:has(input:invalid) p.txt-red")
    let areaErr = document.querySelectorAll("textarea:invalid + p.txt-red")
    let checkErr = document.querySelectorAll(".checkbox:has(input:invalid) + p.txt-red")
    errorTxt.forEach(err => {
        err.style.display = "block";
    })
    areaErr.forEach(err => {
        err.style.display = "block";
    })
    radioErr.forEach(err => {
        err.style.display = "block";
    })
    checkErr.forEach(err => {
        err.style.display = "block";
    })
})

let form = document.getElementById("form");
let success = document.getElementById("success");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    success.classList.add("active");
    setTimeout(() => {
        success.classList.remove("active")
    }, 2000);
})