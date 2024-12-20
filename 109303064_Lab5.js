document.getElementById('submitButton').addEventListener('click', function() {
    const mathGrade = document.getElementById('mathGrade').value;
    const englishGrade = document.getElementById('englishGrade').value;

    if (isNaN(mathGrade) || mathGrade.trim() === "" || isNaN(englishGrade) || englishGrade.trim() === "") {
        alert("Please enter valid numbers for both Math and English grades.");
        return; 
    }

    const mathGradeNum = parseFloat(mathGrade);
    const englishGradeNum = parseFloat(englishGrade);

    const tableBody = document.querySelector('#gradesTable tbody');
    const row = document.createElement('tr');
    const rowCount = tableBody.children.length + 1; 
    const avg = (mathGradeNum + englishGradeNum) / 2;

    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGradeNum}</td>
        <td>${englishGradeNum}</td>
        <td>${avg.toFixed(2)}</td>
    `;

    tableBody.appendChild(row);

    updateAverages();
});

function updateAverages() {
    const rows = document.querySelectorAll('#gradesTable tbody tr');
    let totalMath = 0, totalEnglish = 0, count = 0;

    rows.forEach(row => {
        const math = parseFloat(row.children[1].textContent);
        const english = parseFloat(row.children[2].textContent);

        totalMath += math;
        totalEnglish += english;
        count++;
    });

    const mathAvg = totalMath / count;
    const englishAvg = totalEnglish / count;
    const overallAvg = (mathAvg + englishAvg) / 2;

    document.getElementById('mathAvg').textContent = `${mathAvg.toFixed(2)}`;
    document.getElementById('englishAvg').textContent = `${englishAvg.toFixed(2)}`;
    document.getElementById('overallAvg').textContent = `${overallAvg.toFixed(2)}`;
}

