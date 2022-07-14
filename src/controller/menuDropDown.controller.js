import Api from "../models/Api.models.js"
import Modal from "../models/modal.models.js"
import Homepage from "./homepage.controller.js"

export default class MenuDropDown {

    static iconImage = document.querySelector(".iconImage")

    static async viewMenu() {
        
        this.iconImage.addEventListener("click", async (e) => {
            
            Modal.logoutIsEditProfile()
            
            const selected = document.querySelector(".modalLogoutOn")
            if (selected.classList[0] == "modalLogoutOn") {
                
                console.log(selected.classList[0])
            
            const btnEdit = document.querySelector(".modalLogoutBtnEdit")
            console.log(btnEdit)
            const btnLogout = document.querySelector(".modalLogoutBtnLogout")
            
            btnEdit.addEventListener("click", async () => {
                Modal.editProfile()
                
                const form = document.querySelector(".modalFormEditProfile")
                const btnSave = document.querySelector(".modalBtnEditProfile")
                const btnSair = document.querySelector(".modalBtnEditProfileExit")
                
                btnSair.addEventListener("click", () => {
                    location.reload()
                })
                
                let formElements = [...form.elements]

                const user = Homepage.getUser
                
                console.log(user.usr_name)
                console.log(user.usr_image)
                formElements[0].value = user.usr_name
                formElements[1].value = user.usr_image

                btnSave.addEventListener("click", async (event) =>{
                    const inputNameEditProfile = document.querySelector(".inputNameEditProfile");
                    const inputUrlEditProfile = document.querySelector(".inputUrlEditProfile");
                    const inputNameEditProfileError = document.querySelector(".inputNameEditProfileError");
                    const inputUrlEditProfileError = document.querySelector(".inputUrlEditProfileError")
                   const formElements = [...form.elements]
                    
                    const data = {
                        usr_name: formElements[0].value,
                        usr_image: formElements[1].value
                    }

                    if (formElements[0].value === "") {
                        event.preventDefault();
                        inputNameEditProfile.style.border = "1.5px solid red";
                        inputNameEditProfileError.innerText = "Campo obrigatório";
                        return;
                    } else {
                        inputNameEditProfile.style.border = "1.5px solid blue";
                        inputNameEditProfileError.innerText = "";
                    }
                    if (formElements[1].value === "") {
                        event.preventDefault();
                        inputUrlEditProfile.style.border = "1.5px solid red";
                        inputUrlEditProfileError.innerText = "Campo obrigatório";
                        return;
                    } else {
                        inputUrlEditProfile.style.border = "1.5px solid blue";
                        inputUrlEditProfileError.innerText = "";
                    }
            
                    await Api.uptadeProfile(data)
                    .then((response) => localStorage.setItem("@kenzie-habits:user", JSON.stringify(response)))
                    .then(() => location.reload())
                    .catch((err) => console.log(err))
                })

                this.iconImage.addEventListener("click", () => {
                    console.log("iconImage clicked")
                })
            })

            btnLogout.addEventListener("click", () => {
                localStorage.clear()
                
                location.href = "../../index.html"
            })}
            else {
                
                selected.classList.replace("modalLogoutOn", "modalLogoutOff")
                console.log(selected.classList[0])
            }
            
        })

        function openCloseModal() {
            const selected = document.querySelector(".modalLogoutOn") 
            console.log(selected.classList[0])
            
            
            
            
        }

        
        
    }

    
}


// iconImage.addEventListener("click", async () => {
    

//     const form = document.querySelector(".modalFormEditProfile")
//     let formElements = [...form.elements]

//     const user = Homepage.getUser
//     console.log(user.usr_name)
//     formElements[0].value = user.usr_name
//     formElements[1].value = user.usr_image

//     const btnEdit = document.querySelector(".modalBtnEditProfile")

//     btnEdit.addEventListener("click", async () =>{
//         formElements = [...form.elements]
        
//         const data = {
//             usr_name: formElements[0].value,
//             usr_image: formElements[1].value
//         }

//         await Api.uptadeProfile(data)
//         .then((response) => console.log(response))
//         .catch((err) => console.log(err))
        
//     }) 

// })