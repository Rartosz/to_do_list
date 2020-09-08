let preloaderDiv = document.querySelector(".preloader");
let nameContainer = document.querySelector(".name-container");
let container = document.querySelector(".container");
let nameBtn = document.querySelector(".createList");
let button = document.querySelector(".add");
let description = document.querySelector(".description");
let cancelBtn = document.querySelector(".cancel");
let addElementBtn = document.querySelector(".addElement");


window.onload = function()
{
    preloaderDiv.classList.add("preloaderAnimationClass");
    setTimeout(function(){
        preloaderDiv.style.display = "none";
        nameContainer.style.display = "flex";
        nameContainer.classList.add("nameContainerAnimationClass");
    },3000);
};

nameBtn.addEventListener("click", () =>
{
    let name = document.querySelector(".name").value;
    let displayName=document.querySelector(".displayName");

    displayName.textContent += name;

    nameContainer.classList.add("name-ending-animation");
    setTimeout(function()
    {
        nameContainer.style.display = "none";
        container.classList.add("containerAnimation");
       
        
            container.style.display = "flex";

        

    },2000);
    

});

let actualDate = () => 
{
    let year = new Date().getFullYear();
    let y = document.querySelector(".y");
    y.textContent = year;

    let day = new Date().getDate();
    let d = document.querySelector(".d");

    if( day == 1)
    {
        d.textContent = "0"+day;
    }
    else if(day==2)
    {
        d.textContent = "0"+day;
    }
    else if(day==3)
    {
        d.textContent = "0"+day;
    }
    else if(day==4)
    {
        d.textContent = "0"+day;
    }
    else if(day==5)
    {
        d.textContent = "0"+day;
    }
    else if(day==6)
    {
        d.textContent = "0"+day;
    }
    else if(day==7)
    {
        d.textContent = "0"+day;
    }
    else if(day==8)
    {
        d.textContent = "0"+day;
    }
    else if(day==9)
    {
        d.textContent = "0"+day;
    }
    else 
    {
        d.textContent = day;
    }

    let month = new Date().getMonth();
    let m = document.querySelector(".m");
    if(month == 0)
    {
        m.textContent = "JAN";
    }
     else if(month == 1)
    {
        m.textContent = "FEB";
    }
    else if(month == 2)
    {
        m.textContent = "MAR";
    }
    else if(month == 3)
    {
        m.textContent = "APR";
    }
    else if(month == 4)
    {
        m.textContent = "MAY";
    }
    else if(month == 5)
    {
        m.textContent = "JUN";
    }
    else if(month == 6)
    {
        m.textContent = "JUL";
    }
    else if(month == 7)
    {
        m.textContent = "AUG";
    }
    else if(month == 8)
    {
        m.textContent = "SEP";
    }
    else if(month == 9)
    {
        m.textContent = "OCT";
    }
    else if(month == 10)
    {
        m.textContent = "NOV";
    }
    else if(month == 11)
    {
        m.textContent = "DEC";
    }

    let dayName = document.querySelector(".dayName");
    let weekDay = new Date().getDay();
    if(weekDay ==1)
    {
        dayName.textContent = "MONDAY";
    }
    else if(weekDay ==2)
    {
        dayName.textContent = "TUESDAY";
    }
    else if(weekDay ==3)
    {
        dayName.textContent = "WEDNESDAY";
    }
    else if(weekDay ==4)
    {
        dayName.textContent = "THURSDAY";
    }
    else if(weekDay ==5)
    {
        dayName.textContent = "FRIDAY";
    }
    else if(weekDay ==6)
    {
        dayName.textContent = "SATURDAY";
    }
    else if(weekDay ==7)
    {
        dayName.textContent = "SUNDAY";
    }

}

let addNewElement = function()
{
   description.style.display = "flex";
    description.classList.add("descriptionAnimationClass");
}


let add = () =>
{
    

    let taskText = document.querySelector(".taskText");
    if(taskText.value=="" || taskText.value==null)
    {
        
        alert("Task input is empty! Write your task there!");
        
    }
    else 
    {
        let newElement = document.createElement("div");
    let list = document.querySelector(".to-do-list");
    list.appendChild(newElement);
    newElement.classList.add("task");

    let p = document.createElement("p1");
    newElement.appendChild(p);
    
    p.textContent = taskText.value;

    let delateBtn = document.createElement("div");
    newElement.appendChild(delateBtn);
    delateBtn.classList.add("delate");

    let doneBtn = document.createElement("div");
    newElement.appendChild(doneBtn);
    doneBtn.classList.add("done");

    taskText.value = "";
    taskText.placeholder = "Your task...";
    description.style.display ="none";


    
let delElement = function()
{ 
    this.parentNode.remove();
}
delateBtn.addEventListener("click", delElement);


let finishElement = function()
{ 
    this.parentNode.classList.add("finished");
}
doneBtn.addEventListener("click", finishElement);

    }
    
}


let cancel = () =>
{

    let taskText = document.querySelector(".taskText");
    taskText.value = "";
    taskText.placeholder = "Your task...";
    description.style.display ="none";

}


actualDate();


addElementBtn.addEventListener("click",add);
button.addEventListener("click", addNewElement);
cancelBtn.addEventListener("click", cancel);
    
    