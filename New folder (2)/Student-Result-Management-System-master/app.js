
var students = [
    {
        name: 'ESTHER',
        rollNumber: 129,
        COM111: 98,
        COM112: 85,
        COM113: 89,
        COM114: 90,
    },
    // {
    //     name: 'Moiz',
    //     rollNumber: 211,
    //     math: 89,
    //     eng: 95,
    //     urd: 79,
    //     sci: 83,
    // },
    // {
    //     name: 'Ashraf',
    //     rollNumber: 113,
    //     math: 90,
    //     eng: 88,
    //     urd: 80,
    //     sci: 79,
    // }
]
var main = document.getElementById('main')
var searched = document.getElementById("search")
function add() {
    for (var i = 0; i < students.length; i++) {
        main.innerHTML += `
<tr>
<td>${[i + 1]}</td>
<td>${students[i].name}</td>
<td>${students[i].rollNumber}</td>
<td>${students[i].COM111}</td>
<td>${students[i].COM112}</td>
<td>${students[i].COM113}</td>
<td>${students[i].COM114}</td>
<td>${students[i].COM111 + students[i].COM112 + students[i].COM113 + students[i].COM114}</td>
<td>${((students[i].COM111 + students[i].COM112 + students[i].COM113 + students[i].COM114 ) * 100 / 400).toFixed(2)}%</td>
<td><input type="button" value="Delete" class="delBtn" onclick="deleteRow(this)"></td>
<tr>
`};
}
add();
function search() {
    var found = false;
    for (i = 0; i < students.length; i++) {
        if (searched.value.toLowerCase() == students[i].name.toLowerCase()) {
            found = true;
            Swal.fire({
                // title: `Student Found!`,
                title: `Name: ${students[i].name}`,
                text: ` COM111: ${students[i].COM111} | COM112: ${students[i].COM112} | COM114: ${students[i].COM113} | COM114 ${students[i].COM114}} | Total: ${students[i].COM111 + students[i].COM112 + students[i].COM113 + students[i].COM114} | Percentage: ${((students[i].COM111 + students[i].COM112 + students[i].COM113 + students[i].COM114) * 100 / 400).toFixed(2)}%`,
                icon: 'success',
                confirmButtonText: 'Done'
            });
            searched.value = ""
        }
    }            
    if (found === false) {
        Swal.fire({
            icon: 'error',
            title: 'Error Finding Student',
            text: searched.value + ' Is Not In This List',
        })
        searched.value = ""
    }
}
function newStudent() {
    Swal.fire({
      title: 'Enter Student Details',
      html:
      '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Roll Number">' +
        '<input id="swal-input3" class="swal2-input" placeholder="COM111">' +
        '<input id="swal-input4" class="swal2-input" placeholder="COM112">' +
        '<input id="swal-input5" class="swal2-input" placeholder="COM113">' +
        '<input id="swal-input6" class="swal2-input" placeholder="COM114">', 
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const rollNumber = document.getElementById('swal-input2').value;
        const COM111 = parseInt(document.getElementById('swal-input3').value);
        const COM112 = parseInt(document.getElementById('swal-input4').value);
        const COM113 = parseInt(document.getElementById('swal-input5').value);
        const COM114 = parseInt(document.getElementById('swal-input6').value);
  
        if (isNaN(COM111) || isNaN(COM112) || isNaN(COM113) || isNaN(COM114)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter numeric values for COM111, COM112, COM113, COM114.',
          });
          return false; // Prevent closing the alert
        }
  
        return [name, rollNumber, COM111, COM112, COM113, COM114];
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formValues = result.value;
  
        const student = {
          name: formValues[0],
          rollNumber: parseInt(formValues[1]),
          COM111: parseInt(formValues[2]),
          COM112: parseInt(formValues[3]),
          COM113: parseInt(formValues[4]),
          COM114: parseInt(formValues[5]),
        };
  
        students.push(student);
        const index = students.length - 1;
        main.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.COM111}</td>
            <td>${student.COM112}</td>
            <td>${student.COM113}</td>
            <td>${student.COM114}</td>
            <td>${student.COM111 + student.COM112 + student.COM113 + student.COM114}</td>
            <td>${((student.COM111 + student.COM112 + student.COM113 + student.COM114) * 100 / 400).toFixed(2)}%</td>
            <td><input type="button" class="delBtn" value="Delete" onclick="deleteRow(this)"></td>
          </tr>
        `;
      }
    });
  }

  // Delete Function
function deleteRow(r) {
  if (confirm('Are you sure to delete this record ?')) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(i);
}}