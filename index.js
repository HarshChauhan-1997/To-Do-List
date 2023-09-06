const ul = document.querySelector("#list");
const text = document.querySelector('#add');
text.addEventListener('keyup',function(event){
    if (event.key === 'Enter') {
        additem(this.value);
        this.value = "";
    }
})



function additem (item) {
    const list = document.createElement("li");
    list.className = "notDone";
    list.innerHTML = `${item} 
    <i id="remove" class="fa-solid fa-xmark"></i>`;
    
    let click = 0;
    list.addEventListener("click",function(){
        if (click === 0) {
            list.className = "Done";
            click++;
        } else {
            list.className = "notDone";
            click--;
        }
    })

    list.querySelector("i").addEventListener("click",function(){
        list.remove();
    })

    ul.appendChild(list);
}

function savedata() {
    const maindata = document.querySelector("#list");
    const data = [];
    maindata.forEach(function(item){
        data.push(item.value);
    });

    localStorage.setItem("savedata", JSON.stringify(data));
}
