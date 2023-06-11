let app_input = document.querySelector(".app_input");
let valueInput = document.querySelector(".app_input input");
let btn_Add = document.querySelector(".btn_Add");
btn_Add.addEventListener("click", addPost);

let app_content = document.querySelector(".app_content");
let divText = document.querySelector(".divText");
let btn_edit = document.querySelectorAll(".edit");
let btn_delete = document.querySelectorAll(".delete");

let span_Message = document.querySelector(".message")

function addPost() {
    if (valueInput.value == ""  ){
        
        app_input.style.borderColor = "red";
        span_Message.innerText = "Enter at least one word, please";
    }else {
        app_input.style.borderColor = "#6086c6";
        span_Message.innerText = "";

        let newPost = 
                    `
                        <div class="content">
                            <div class="divText"> ${valueInput.value}</div>
                            <div class="appButton">
                                <button onclick= "edit_post(this)" class="edit"> Edit</button>
                                <button onclick= "delete_post(this)" class="delete"> Delete</button>
                            </div>
                        </div>
                    `;
                    
        app_content.insertAdjacentHTML("beforeend", newPost);
        valueInput.value = "";
    }
}

function edit_post(myThis) {
    if (myThis.innerText == "Edit") {
        myThis.innerText = "Save";
        myThis.parentElement.previousSibling.previousSibling.setAttribute("contenteditable", true);
        myThis.parentElement.previousSibling.previousSibling.focus();
    } else {
        myThis.innerText = "Edit";
        myThis.parentElement.previousSibling.previousSibling.setAttribute("contenteditable", false);
    }
}

function delete_post(myThis) {
    myThis.parentElement.parentElement.remove();
}