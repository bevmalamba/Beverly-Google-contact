// //const tasksForm = document.querySelector("form")
// //const tasks = document.querySelector("#tasks")




// function createElement(type, properties = {}) {
// const element = document.createElement(type);
// Object.assign(element, properties);
// return element;
// }


// function createButton(text, clickHandler) {
// return createElement('button', {
// textContent: text,
// onclick: clickHandler
// });
// }


// function createTask(taskName) {
// const taskId = crypto.randomUUID();
// const checkBoxId = `tache${taskId}`;


// const taskCheckInput = createElement('input', {
// type: 'checkbox',
// id: checkBoxId
// });


// const taskLabel = createElement('label', {
// htmlFor: checkBoxId,
// textContent: taskName
// });


// const deleteBtn = createButton('Supprimer', function () {
// deleteTask(taskId)
// });
// const updateBtn = createButton('Modifier', function () {
// updateTask(taskId)
// });


// const task = createElement('div', {
// className: 'task',
// id: taskId
// });


// task.append(taskCheckInput, taskLabel, document.createElement('br'), deleteBtn, updateBtn, document.createElement('hr'));


// tasks.appendChild(task);
// } 


// function deleteTask(taskId) {
//    const task = document.getElementById(taskId)


//    const confirmDeletion = confirm("Voulez-vous supprimer cette tache ?")


//    if (confirmDeletion) {
//        task.remove();
//    }
// }


// function updateTask(taskId) {
//    const task = document.getElementById(taskId);
//    const taskLabel = task.querySelector("label");
//    const newTaskName = prompt("Enter the new task name", taskLabel.textContent);


//    if (newTaskName) {
//        const taskLabel = task.querySelector("label");
//        taskLabel.textContent = newTaskName;
//    }
// }


// function addTask(event) {
//    const data = new FormData(event.target)


//    const {task} = Object.fromEntries(data.entries())


//    if (task) {
//        createTask(task)
//        event.target.reset()
//    }




//    event.preventDefault();
// }




// tasksForm.addEventListener("submit", addTask)


/*---2page---*/
const btnContact =document.getElementById("boder-js");
const contact = document.getElementById("corps-texte-contact-id");
const enregistrerConctact = document.getElementById("Ienregistrer-by");
const fleche = document.getElementById("fleche-id");
const enregistrer = document.getElementById("bouton-id");

let tableau = ``;

btnContact.addEventListener("click",function(){
contact.style.display = "none";
enregistrerConctact.style.display = "block"
})

enregistrer.addEventListener("click",function(){
    const prenom =document.getElementById("prenom-id");
    const nom =document.getElementById("nom_id");
    const entreprise =document.getElementById("entreprise-id");
    const fonction =document.getElementById("fonction-id");
    const email =document.getElementById("email-id");
    const ajouter =document.getElementById("ajouter-id");
    const mescontacts = document.getElementById("mes-contacts");
    let gg = String(nom.value)
     tableau +=`<div class="header-contact"> 
     <div> ${gg}</div>
     <div> Beverly</div>
     <div> Numéro de téléphone</div>
     <div> Fonction et entreprise</div>
     <div class="icone">
     <div style="opacity: 0;">
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7H6V3h12zm0 5.5q.425 0 .713-.288T19 11.5t-.288-.712T18 10.5t-.712.288T17 11.5t.288.713t.712.287M16 19v-4H8v4zm2 2H6v-4H2v-6q0-1.275.875-2.137T5 8h14q1.275 0 2.138.863T22 11v6h-4z"/></svg></a>
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"/></svg></a>
     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 5.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m0 4a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M6.75 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0"/></svg></a>
     </div>
     </div>
 </div>`;
    mescontacts.innerHTML = tableau ;
    contact.style.display = "block";
    enregistrerConctact.style.display = "none"
})

fleche.addEventListener("click",function(){
contact.style.display = "block";
enregistrerConctact.style.display = "none"
})

