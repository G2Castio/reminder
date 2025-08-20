const text = document.querySelector('.text');
const list = document.querySelector('.list');
const btn = document.querySelector('.btn');

function new_task(){
    if (text.value === ''){
        return;
    }
    const task = document.createElement('li');
    task.innerHTML = `
        <input type = "checkbox" class = "check">
        <label>${text.value}</label>
        <button class = "delete">🗑️</button>
        `;

    const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener("click", function(){
        task.remove();
    })
    //const deleteButton = task.querySelector('.delete');
    deleteButton.addEventListener("click", function(){
        task.remove();
    })
    const checkbox = task.querySelector('.check'); // 修正這一行
    checkbox.addEventListener("change", function(){
        if (checkbox.checked){
            task.style.textDecoration = 'line-through';
            task.style.color = '#999';
            list.append(task);
        }else{
            task.style.textDecoration = 'none';
            task.style.color = '';
            list.prepend(task);
        }
    });

    list.append(task);
    text.value = '';
}

btn.addEventListener("click",new_task);


text.addEventListener("keyup",function(e){
    if(e.key === "Enter"){
        new_task();
    }
});
