function validateform()
{
    var b=true;
   
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var department=document.getElementById("department").value
    alert(name)
    if(name=="")
    {
        alert("Name is required")
        b=false;
        return b;
    }

    if(department=="")
    {
        alert("department is required")
        b=false;
        return b;
    }

    if(email=="")
    {
        alert("email is required")
        b=false;
        return b;
    }
    else if(!email.includes("@"))
    {
        alert("Invalid email address")
        b=false;
        return b;
    }
    else
    {
        return b;
    }
}

function resetdata()
{
    document.getElementById("name").value="" 
    document.getElementById("email").value="" 
    document.getElementById("department").value=""
}
function showdata()
{
    var datalist;

    if(localStorage.getItem("datalist")==null)
    {
        datalist=[]
    }
    else
    {
        datalist=JSON.parse(localStorage.getItem("datalist"))
    }

    var html="";

    datalist.forEach(function(element,index)
    {
        html +="<tr>"
        html +="<td>"+element.name+"<td>";
        html +="<td>"+element.email+"<td>";
        html +="<td>"+element.department+"<td>";
        html +=
        '<td><button onclick="deletedata('+index+')" class="btn btn-danger">Delete</button><button onclick="updateData('+index+')" class="btn btn-warning m-2">Edit</button></td>';
        html +="<tr/>";
        
    });
    document.querySelector("#curdtable tbody").innerHTML=html;

    // resetdata()
}
/*************load all data when document page loaded */
document.onload=showdata();

/********function on add */

function Adddata()
{
   
    if(validateform()===true)
    {
    
        var name=document.getElementById("name").value
        var email=document.getElementById("email").value
        var department=document.getElementById("department").value
    
    var datalist;
    if(localStorage.getItem("datalist")==null)
    {
        datalist=[]
    }
    else
    {
        datalist=JSON.parse(localStorage.getItem("datalist"))
    }
   datalist.push(
    {
        name:name,
        email:email,
        department:department
    }
   );
   
   localStorage.setItem("datalist",JSON.stringify(datalist))
   showdata()
   document.getElementById("name").value="";
   document.getElementById("email").value="";
   document.getElementById("department").value="";
    }
    else
    {
        alert("outside if")
    }
}
/***********DELETE DATA*********** */
function deletedata(index)
{
    var datalist;
    if(localStorage.getItem("datalist")==null)
    {
        datalist=[]
    }
    else
    {
        datalist=JSON.parse(localStorage.getItem("datalist"))
    }

    datalist.splice(index,1);

    localStorage.setItem("datalist",JSON.stringify(datalist))

    showdata();
}

function updateData(index)
{
alert(index)
    document.getElementById("Submit").style.display="none";
    document.getElementById("update").style.display="block";
    var datalist;
    if(localStorage.getItem("datalist")==null)
    {
        datalist=[]
    }
    else
    {
        datalist=JSON.parse(localStorage.getItem("datalist"))
    }
    alert(datalist[index])
    document.getElementById("name").value=datalist[index].name;
    document.getElementById("email").value=datalist[index].email;
    document.getElementById("department").value=datalist[index].department;

    // update(index)

  document.getElementById('update').addEventListener("click",function()
//  function update()
{
  
    // alert(datalist[index])
    
   
    if(validateform()==true)
    {
       
        datalist[index].name=document.getElementById("name").value
        datalist[index].email=document.getElementById("email").value
        datalist[index].department=document.getElementById("department").value
  
        localStorage.setItem("datalist",JSON.stringify(datalist))
        showdata();
       
   /*******Update button will disapper*** */
        document.getElementById("Submit").style.display="block";
        document.getElementById("update").style.display="none";
    }

})

}