var siteName = document.getElementById('bookmarkname')
var url = document.getElementById('site')
var addBtn = document.getElementById('addBtn')
var sList = [];
addBtn.onclick = addSiteName





var testSite = document.querySelector('#site')
testSite.addEventListener('input',function(){var regex = /^([A-z]{1,}|\w{1,})\.com$/
    var myStr = site.value;
    
    if(regex.test(myStr)==true){
    console.log('match')
    }else{
        console.log('Not Match')
    }
}
)


var testName = document.querySelector('#bookmarkname')
testName.addEventListener('input',function(){var regex = /\w{3,}/
    var myStrn = bookmarkname.value;
    
    if(regex.test(myStrn)==true){
    console.log('match')
    }else{
        console.log('Not Match')
    }
}
)


function addSiteName(){
    
    var siteName={
        sName:bookmarkname.value,
        sUrl:site.value,
    }
    
    sList.push(siteName)
    display();
    resetForm();
}


function display(){ 

    var cartona ="";

    for(var i=0 ; i<sList.length; i++ ){
        cartona+=`<tbody id="tabledata">
            <tr>
                <td>${i}</td>
                <td>${sList[i].sName}</td>
                <td><button class="btn btn-success" onclick="visit()"><i class="fa-solid fa-eye"></i> Visit</button></td>
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

function visit(){

    window.open(site.value);
}


