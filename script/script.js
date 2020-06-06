$(document).ready(function(){
    //add task
let addButton = $('.add-button');
let field = $('.add-field');
let newTask = $('.tasks');
    
    addButton.on('click',function(){
    let elem=`<li class="task">
           
           <div class="task-checked  col-1">
               <input type="checkbox" >
           </div>
           <div class="task-text  col-2">${field.val()}</div>
           <div class="task-remove col-3">
               <img src="img/download.png" >
           </div>
              </li>` ;
         newTask.append(elem);
    })
   
  //remove task
   /* let removeBtns = $('.task-remove');*/
    
    newTask.on('click','.task-remove',function(){
        $(this).parent().remove();
    })
    
    //checked

    newTask.on('change','.task-checked input',function(){
        $(this).parent().next().toggleClass('checked')
    })
    
     $( function() {
    $( "#sortable" ).sortable();
  } );
      
    
    
    
})