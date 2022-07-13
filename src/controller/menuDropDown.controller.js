import Api from "../models/Api.models.js"
import Modal from "../models/modal.models.js"
import Homepage from "./homepage.controller.js"

export default class MenuDropDown {

    static iconImage = document.querySelector(".iconImage")

    static async viewMenu() {

        this.iconImage.addEventListener("click", async (e) => {
            Modal.logoutIsEditProfile()

            const btnEdit = document.querySelector(".modalLogoutBtnEdit")
            const btnLogout = document.querySelector(".modalLogoutBtnLogout")
            
            btnEdit.addEventListener("click", async () => {
                Modal.editProfile()
                
                const form = document.querySelector(".modalFormEditProfile")
                const btnSave = document.querySelector(".modalBtnEditProfile")
                const btnSair = document.querySelector(".modalBtnEditProfileExit")

                btnSair.addEventListener("click", () => {
                    
                })
                
                let formElements = [...form.elements]

                const user = Homepage.getUser
                
                console.log(user.usr_name)
                formElements[0].value = user.usr_name
                formElements[1].value = user.usr_image

                btnSave.addEventListener("click", async () =>{
                    formElements = [...form.elements]
                    
                    const data = {
                        usr_name: formElements[0].value,
                        usr_image: formElements[1].value
                    }
            
                    await Api.uptadeProfile(data)
                    .then((response) => localStorage.setItem("@kenzie-habits:user", JSON.stringify(response)))
                    .then(() => location.reload())
                    .catch((err) => console.log(err))
                })
            })

            btnLogout.addEventListener("click", () => {
                localStorage.removeItem("@kenzie-habits:user")
                localStorage.removeItem("@kenzie-habits:token")

                location.href = "../../index.html"
            })
        })

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