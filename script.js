const firstname = document.querySelector(".firstname");
const age = document.querySelector(".age");
const email = document.querySelector(".email");
const img = document.querySelector(".img");
let container = document.querySelector(".container")

// btn
const add = document.querySelector(".add");
const loga = document.querySelector(".loga");


readContact()
add.addEventListener("click",()=>{
  
    let save = {
        title: firstname.value, 
        age: age.value,
        email: email.value,
        img: img.value, 
        id: new Date(),
    };   
    
    let Json = JSON.parse(localStorage.getItem("Nora")) || [];
    Json.push(save); 
    readContact()
    localStorage.setItem("Nora", JSON.stringify(Json));
});    

function readContact() {
    container.innerHTML = ''
    let Json = JSON.parse(localStorage.getItem("Nora")) || [];
    Json.forEach((el,index) => {
        let cont = document.createElement("div");
        let img = document.createElement("img");
        let cont_2 = document.createElement("div");
        let h1 = document.createElement("h1");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        
        //id
        
        
        h1.innerText = el.title;
        h2.innerText = el.age;
        p.innerText = el.email;
        img.src = el.img;
        
        
        
        //btn
        let deleit = document.createElement("button");
        let edid = document.createElement("button");
        
        deleit.innerText = "deleit"
        edid.innerText = "edid"
        
        
        //add
        container.append(cont);
        cont.append(img);
        cont.append(cont_2);
        cont_2.append(h1);
        cont_2.append(h2);
        cont_2.append(p)
        //btn
        
        cont.append(deleit);
        cont.append(edid); 
        //Classlist
        cont.classList.add("cont")
        cont_2.classList.add("cont_2")
        
        
        deleit.addEventListener("click",()=>{
            deleteProduct(el.id)
            readContact()
        })    
        
        
        edid.addEventListener("click",()=>{
            main.style.display = "flex"
            updateProduct(index)                            
        });
        
    });    
};    



function  deleteProduct(id) {
    let Json = JSON.parse(localStorage.getItem("Nora")) || [];
    Json = Json.filter((item)=>{
        return  item.id !== id 
    })    
    localStorage.setItem("Nora", JSON.stringify(Json))
};    


const firstname_edit = document.querySelector(".firstname-edit");
const main = document.querySelector(".main");
const age_edit = document.querySelector(".age-edit");
const email_edit = document.querySelector(".email-edit");
const img_edit = document.querySelector(".img-edit");
const  add_edit = document.querySelector(".add-edit");


window.addEventListener("click",(e)=>{
    if (e.target === main) {
        main.style.display = "none" 
    }
});



function updateProduct(index) {  
 let Json = JSON.parse(localStorage.getItem("Nora")) || [];
 
 firstname_edit.value = Json[index].title;
 age_edit.value = Json[index].age;
 email_edit.value = Json[index].email;
 img_edit.value = Json[index].img;
 
 firstname_edit.setAttribute("id", index);
 age_edit.setAttribute("id", index);
 email_edit.setAttribute("id", index);
 img_edit.setAttribute("id", index);
};





add_edit.addEventListener("click",()=>{
 let Json = JSON.parse(localStorage.getItem("Nora")) || [];
 
 let result = {
    title: firstname_edit.value, 
    age: age_edit.value,
    email: email_edit.value,
    img: img_edit.value, 
 }
 
  Json.splice(firstname_edit.id, 1, result);
  Json.splice(age_edit.id, 1, result);
  Json.splice(email_edit.id, 1, result);
  Json.splice(img_edit.id, 1, result);


 main.style.display = "none"
 localStorage.setItem("Nora", JSON.stringify(Json))
 readContact()
})



