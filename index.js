function generatefields() {
    let val = document.getElementById("subjectcount").value;
    let fields = document.getElementById("subjectscontainer");
    fields.innerHTML = "";

    if (val < 1 || val > 10) {
        alert("Please enter a number between 1 and 10");
        return;
    }

    for (let i = 0; i < val; i++) {
        let div = document.createElement("div");
        div.classList.add("subject-entry");
        div.innerHTML = `
            <h3>Subject ${i + 1}</h3>
            <input type="text" placeholder="Enter Subject Name" class="subjectname"/>
            <input type="number" placeholder="Credits" class="credits" min="1"/>
            <select class="grade">
                <option value="O">O</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
        `;

        fields.appendChild(div);
    }
}
function clearFields() {
    let grade = document.getElementsByClassName("grade");
    let subject = document.getElementsByClassName("subjectname");
    let credits = document.getElementsByClassName("credits");
    for (let i = 0; i < grade.length; i++) {
        grade[i].selectedIndex = 0;
    }
    for (let i = 0; i < subject.length; i++) {
        subject[i].value = "";
    }
    for (let i = 0; i < credits.length; i++) {
        credits[i].value = "";
    }
}

function calculate(){
let grade = document.getElementsByClassName("grade");
let credits = document.getElementsByClassName("credits");
let totalcredit=0;
let gradeval=0;
for (let i = 0; i < grade.length; i++) {
    let cval=Number(credits[i].value);
    if (isNaN(cval) || cval < 1) {
        alert("Please enter valid credit values.");
        return;
    }
    totalcredit += cval;
    let gradetotal=0;
    switch(grade[i].value){
        case "O":
            gradetotal=10;
            break;
        case "A+":
            gradetotal=9;
            break;
        case "A":
            gradetotal=8;
            break;
        case "B+":
            gradetotal=7;
            break;
        case "B":
            gradetotal=6;
            break;
        case "C":
            gradetotal=5;
            break;
        case "D":
            gradetotal=4;
            break;
        case "F":
            alert("YOU HAVE FAILED");
            return;
    }
    gradeval+=(gradetotal*cval);
}
if (gradeval == 0){
    alert("Please enter valid credit values.");
    return;
}
let result=gradeval/totalcredit;
alert(`Your SGPA is: ${result.toFixed(2)}`);
}