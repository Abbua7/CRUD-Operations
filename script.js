

    var row = null; 

    function Submit(){
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if(dataEntered == false){
        msg.innerHTML = "Enter data!"
    }
    else {
        if(row == null){
            insert(readData);
            msg.innerHTML = "Data Inserted ! ";
        }
        else{
            update();
            msg.innerHTML = "Data Updated ! ";
    
    }
    
    }
       document.getElementById("form").reset();
}
    //Retrieving data from form
    function retrieveData(){
    var name1 = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age =   document.getElementById("age").value;

    var arr = [name1, email, age];
    if(arr.includes("")){
        return false
    }
    else {
        return arr;
    }
    
}

    //Data inside local storage
    function readingDataFromLocalStorage(dataEntered) {

    //Storing data in local storage

    var n = localStorage.setItem("Name", dataEntered[0]);
    var e = localStorage.setItem("Email", dataEntered[1]);
    var a = localStorage.setItem("Age", dataEntered[2]);

    //Getting data from local to table

    var n1 = localStorage.getItem("Name", n);
    var e1 = localStorage.getItem("Email", e);
    var a1 = localStorage.getItem("Age", a);

    var arr = [n1, e1, a1];
    return arr;
}
    function insert(readData){
        var row = table.insertRow();
        row.insertCell(0).innerHTML = readData[0];
        row.insertCell(1).innerHTML = readData[1];
        row.insertCell(2).innerHTML = readData[2];
        row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button>
        <button onclick = remove(this)>Delete</button>`;    
}

function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML;
    document.getElementById("age").value = row.cells[2].innerHTML;
}

function update(){
    row.cells[0].innerHTML =  document.getElementById("name").value;
    row.cells[1].innerHTML =  document.getElementById("email").value;
    row.cells[2].innerHTML =  document.getElementById("age").value;
    row = null;
}

function remove(td){
    var ans = confirm("Are you sure you want to delete?")
    if(ans == true){
        row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    }
    
}