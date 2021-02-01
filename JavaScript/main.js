var list = document.createElement("ul"); //creating ul
function add_task()
{
  var task = document.getElementById("input_task").value;
  document.getElementById("input_task").value="";
  if(task == "")
  {
    alert("Oh NOOO !! Empty task ");
  }
  else
  {
    var element = document.getElementById("main_con");
    element.appendChild(list); //adding ul to div container
    var listItem = document.createElement("li"); //creating li
    var text = document.createTextNode(task); 
    listItem.appendChild(text); //adding text in li
    var delete_image = document.createElement("img"); // creating image
    delete_image.setAttribute("src","/Users/mac/Desktop/To-do List/Images/cross.png");
    delete_image.setAttribute("width","20px");
    delete_image.setAttribute("height","20px");
    delete_image.setAttribute("alt","delete button");
    delete_image.setAttribute("id","del_button");
    listItem.appendChild(delete_image); //adding image in li 
    list.appendChild(listItem); // adding li in ul of div container 
    delete_image.onclick = function() //onclicking cross 
    {
      this.parentNode.parentNode.removeChild(this.parentNode);
    }
    var rem = document.getElementById("removeAll");
    rem.onclick=function()//on clicking remove all button
    {
      list.innerHTML="";
    }
    list.onclick=function(ev) //on clicking on any list item will strike it out
    {
      if (ev.target.tagName === 'LI')
      {
        ev.target.classList.toggle('strikeeffect');
      }
    }
  }  
}





