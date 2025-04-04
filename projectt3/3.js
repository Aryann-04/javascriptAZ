function calculatetotal() {
    let hindi = Number(document.getElementById("hindi").value);
    let science = Number(document.getElementById("science").value);
    let computer = Number(document.getElementById("computer").value);
    let social = Number(document.getElementById("social").value);
    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);

    let total = hindi + science + computer + social + english + maths

    document.getElementById("totalmarks").value = total;

    let percentage = (total / 600) * 100;

    document.getElementById("percentage").value = percentage;

}

function clearall(){
    document.getElementById('hindi').value = '';
    document.getElementById('science').value = '';
    document.getElementById('computer').value = '';
    document.getElementById('social').value = '';
    document.getElementById('english').value = '';
    document.getElementById('maths').value = '';

    document.getElementById('totalmarks').value = '';
    document.getElementById('percentage').value = '';
}