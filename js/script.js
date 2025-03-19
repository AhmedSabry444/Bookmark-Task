var siteName = document.getElementById('bookmarkname')
var url = document.getElementById('site')
var addBtn = document.getElementById('addBtn')
var searchinput = document.getElementById('search')
var sList = [];
addBtn.onclick = addSiteName


siteName.addEventListener("input",function(){
    validation(this)
})

url.addEventListener("input",function(){
    validation(this)
})

function validation(input){

    var validate={
        bookmarkname:/^[a-z A-Z]{3,16}$/,
        site:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    }

    if(validate[input.id].test(input.value)){
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        return true
    }
    else{
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
        return false
    }
}







function addSiteName(){

    if(validation(bookmarkname)==true&&validation(site)==true){
        var siteName={
            sName:bookmarkname.value,
            sUrl:site.value,
        }
        
        sList.push(siteName)
        display();
        resetForm();
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }
}


function display(){ 

    var cartona ="";

    for(var i=0 ; i<sList.length; i++ ){
        cartona+=`<tbody id="tabledata">
            <tr>
                <td>${i+1}</td>
                <td>${sList[i].sName}</td>
                <td><button class="btn btn-success" onclick="visit(${i})"><i class="fa-solid fa-eye"></i> Visit</button></td>
                <td><button class="btn btn-danger" onclick="deletes(${i})"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i> Delete</button></td>
            </tr>
            </tbody>`
    }
document.getElementById('tabledata').innerHTML=cartona
}


function resetForm(){
    bookmarkname.value=null;
    site.value=null;
}

function deletes(index){
sList.splice(index,1);
display();
}

function visit(i){
    window.open(sList[i].sUrl);
}


