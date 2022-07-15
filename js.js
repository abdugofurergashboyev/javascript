document.querySelector('.button').onclick = function(){
    if(document.querySelector('.form input').value.length == 0){
        alert("Please write a letter")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('.form input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        const current_tasks = document.querySelectorAll(".delete");
        for(const i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

  const  FormElement = document.querySelector(".form")

    FormElement.addEventListener('submit', event =>{
       console.log(event);
       event.preventDefault()
       FormElement.reset()
    })