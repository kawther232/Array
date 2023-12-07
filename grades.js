document.querySelector('form')
document.addEventListener('submit',setGrade)

let grades =[];
function setGrade(e){
    e.preventDefault();
    let name = document.querySelector('#name').value 
    let grade = parseFloat(document.querySelector('#grade').value)
    grades.push({name,grade});
    console.log(grades);
    printGrades();
}

function printGrades(){
    let o = document.querySelector('#output');
    let sum = 0;
    for (let i=0; i<grades.length; i++){
       sum += grades[i].grade;
    }
    let avg = sum/grades.length;
    o.innerText = avg;
}
