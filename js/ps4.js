const add_btn = document.getElementById("add_btn");
const reset_btn = document.getElementById("reset_btn");
const finish_btn = document.getElementById("finish_btn");
const highlight_btn= document.getElementById("highlight_btn");
const item = document.getElementById("item");
const ordered_list = document.getElementById("ordered_list");
let to_do_list = []

introJs().start()

add_btn.addEventListener("click", () => {
    console.log(item.value);
    if (item.value === ""){
        alert("Item can't be empty")
        return;
    }
    to_do_list.push(item.value);
    const i = to_do_list.length - 1;
    let node = document.createElement('li');
    node.appendChild(document.createTextNode(to_do_list[i]));
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = `checkbox${i}`;
    // checkbox.value = "value";
    checkbox.id = `check${i}`;
    node.appendChild(checkbox);
    node.classList.add("list-group-item");
    ordered_list.appendChild(node);
    item.value = null;
})

reset_btn.addEventListener("click", () => {
    to_do_list = [];
    let items = document.querySelectorAll('li');
    items.forEach(it => {
        ordered_list.removeChild(it);
    });
    item.value = null;
})

finish_btn.addEventListener("click", () => {
    let items = document.querySelectorAll('li');
    let remain_list = [];
    for (let i=0; i < items.length; i ++){
        it = items[i];
        let checkbox = it.getElementsByTagName("input")[0];
        console.log(checkbox.checked)
        if (checkbox.checked){
            ordered_list.removeChild(it);
        }else{
            remain_list.push(to_do_list[i]);
        }
    }
    to_do_list = remain_list;
    item.value = null;
    console.log(to_do_list)
})

highlight_btn.addEventListener("click", () => {
    let items = document.querySelectorAll('li');
    items.forEach(it => {
        let checkbox = it.getElementsByTagName("input")[0];
        if (checkbox.checked){
            it.classList.add("active");
            checkbox.checked = false;
        }
    });
})

create_list = () => {
    for (let i=0; i <to_do_list.length; i++){
        let node = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = `checkbox${i}`;
        // checkbox.value = "value";
        checkbox.id = `check${i}`;
        node.appendChild(checkbox);
        node.appendChild(document.createTextNode(to_do_list[i]));
        ordered_list.appendChild(node);
    }
}