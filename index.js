var EmployeeList=[]

  //addList Function
function addToList(val){
    if(val!=""){
           
        if(EmployeeList.includes(val))
        alert("Element Already Exist..!!");
    
        else{
            EmployeeList.push(val);
            
            console.log(EmployeeList);
            UpdateUi();
        }
        document.getElementById("InsertInput").value="";
    }
 
    else{
        alert("Please enter a no.");
    }
    }
   

  //remove Function
function removeFromList(val){
    if(EmployeeList.includes(val)){
        
        EmployeeList.splice(EmployeeList.indexOf(val),1);
        console.log("remove", EmployeeList);
        UpdateUi();
      
        
    }
else
    alert("Element Not Exist..!!");
    document.getElementById("removeInput").value="";

}

  //update List on Runtime
function UpdateUi(){
    let list= document.getElementById("ListOfEmployee");
    list.innerHTML = "";
    for(let i=0; i< EmployeeList.length; i++){
        let li=document.createElement("li")  //<li></li>
        li.textContent=EmployeeList[i];
        list.appendChild(li);
        console.log(list)
    }

}