
export default class Modal {
    static delete() {
        const body = document.querySelector("body")
        const modalDelete = document.createElement("div")
        const modalDeleteBox = document.createElement("div")
        const modalDeleteContentTitle = document.createElement("div")
        const modalTitleDelete = document.createElement("h1")
        const modalDeleteBtnExit = document.createElement("button")
        const modalDeleteContentText = document.createElement("div")
        const modalAlertDelete = document.createElement("h1")
        const modalTextDelete = document.createElement("p")
        const modalDeleteContentBtn = document.createElement("div")
        const modalBtnCancel = document.createElement("button")
        const modalBtnDelete = document.createElement("button")

        body.append(modalDelete)
        modalDelete.append(modalDeleteBox)
        modalDeleteBox.append(modalDeleteContentTitle, modalDeleteContentText, modalDeleteContentBtn)
        modalDeleteContentTitle.append(modalTitleDelete, modalDeleteBtnExit)
        modalDeleteContentText.append(modalAlertDelete, modalTextDelete)
        modalDeleteContentBtn.append(modalBtnCancel, modalBtnDelete)

        modalDelete.className = "modalDeleteOn"
        modalDeleteBox.className = "modalDeleteBox"
        modalDeleteContentTitle.className = "modalDeleteContentTitle"
        modalTitleDelete.className = "modalTitleDelete"
        modalDeleteBtnExit.className = "modalDeleteBtnExit fa fa-close"
        modalDeleteContentText.className = "modalDeleteContentText"
        modalAlertDelete.className = "modalAlertDelete"
        modalTextDelete.className = "modalTextDelete"
        modalDeleteContentBtn.className = "modalDeleteContentBtn"
        modalBtnCancel.className = "modalBtnCancel"
        modalBtnDelete.className = "modalBtnDelete"

        modalTitleDelete.innerText = "Excluir hábito"
        modalAlertDelete.innerText = "Certeza que deseja excluir este hábito?"
        modalTextDelete.innerText = "Após executar essa ação não será possível desfazer"
        modalBtnCancel.innerText = "Cancelar"
        modalBtnDelete.innerText = "Sim,excluir esse hábito"

    }
    static editProfile() {
        const body = document.querySelector("body")
        const modalEditProfile = document.createElement("div")
        const modalEditProfileBox = document.createElement("div")
        const modalEditProfileContentTitle = document.createElement("div")
        const modalTitleEditProfile = document.createElement("h1")
        const modalBtnEditProfileExit = document.createElement("button")
        const modalEditProfileContentInput = document.createElement("div")
        const modalFormEditProfile = document.createElement("form")
        const labelNameEditProfile = document.createElement("label")
        const inputNameEditProfile = document.createElement("input")
        const labelUrlEditProfile = document.createElement("label")
        const inputUrlEditProfile = document.createElement("input")
        const modalEditProfileContentBtn = document.createElement("div")
        const modalBtnEditProfile = document.createElement("button")

        body.append(modalEditProfile)
        modalEditProfile.append(modalEditProfileBox)
        modalEditProfileBox.append(modalEditProfileContentTitle, modalEditProfileContentInput, modalEditProfileContentBtn)
        modalEditProfileContentTitle.append(modalTitleEditProfile, modalBtnEditProfileExit)
        modalEditProfileContentInput.append(modalFormEditProfile)
        modalFormEditProfile.append(labelNameEditProfile, inputNameEditProfile, labelUrlEditProfile, inputUrlEditProfile)
        modalEditProfileContentBtn.append(modalBtnEditProfile)

        modalEditProfile.className = "modalEditProfileOn"
        modalEditProfileBox.className = "modalEditProfileBox"
        modalEditProfileContentTitle.className = "modalEditProfileContentTitle"
        modalTitleEditProfile.className = "modalTitleEditProfile"
        modalBtnEditProfileExit.className = "modalBtnEditProfileExit fa fa-close"
        modalEditProfileContentInput.className = "modalEditProfileContentInput"
        modalFormEditProfile.className = "modalFormEditProfile"
        labelNameEditProfile.className = "labelNameEditProfile"
        inputNameEditProfile.className = "inputNameEditProfile"
        labelUrlEditProfile.className = "labelUrlEditProfile"
        inputUrlEditProfile.className = "inputUrlEditProfile"
        modalEditProfileContentBtn.className = "modalEditProfileContentBtn"
        modalBtnEditProfile.className = "modalBtnEditProfile"
 
        modalTitleEditProfile.innerText = "Editar perfil"
        labelNameEditProfile.innerText = "Nome"
        inputNameEditProfile.placeholder = "Digite seu nome"
        labelUrlEditProfile.innerText = "URL da imagem do perfil"
        inputUrlEditProfile.placeholder = "Digite a URL"
        modalBtnEditProfile.innerText = "Sim,excluir esse hábito"

    }
    static editHabit() {
        const body = document.querySelector("body")
        const modalEditHabit = document.createElement("div")
        const modalEditHabitBox = document.createElement("div")
        const modalEditHabitContentTitle = document.createElement("div")
        const modalTitleEditHabit = document.createElement("h1")
        const modalEditHabitBtnExit = document.createElement("button")
        const modalEditHabitContentInput = document.createElement("div")
        const modalFormEditHabit = document.createElement("form")
        const labelNameEditHabit = document.createElement("label")
        const inputNameEditHabit = document.createElement("input")
        const labelUrlEditHabit = document.createElement("label")
        const inputDescriptionEditHabit = document.createElement("input")
        const labelCategoryEditHabit = document.createElement("label")
        const selectCategoryEditHabit = document.createElement("select")
        const opitionCategoryEditHabit = document.createElement("option")
        const modalEditHabitContentCheck = document.createElement("div")
        const modalStatusEditHabit = document.createElement("h1")
        const inputCheckEditHabit = document.createElement("input")
        const modalEditHabitContentBtn = document.createElement("div")
        const modalBtnEditCancelHabit = document.createElement("button")
        const modalBtnEditHabit = document.createElement("button")

        body.append(modalEditHabit)
        modalEditHabit.append(modalEditHabitBox)
        modalEditHabitBox.append(modalEditHabitContentTitle, modalEditHabitContentInput, modalEditHabitContentCheck, modalEditHabitContentBtn)
        modalEditHabitContentTitle.append(modalTitleEditHabit, modalEditHabitBtnExit)
        modalEditHabitContentInput.append(modalFormEditHabit)
        modalFormEditHabit.append(labelNameEditHabit, inputNameEditHabit, labelUrlEditHabit, inputDescriptionEditHabit, labelCategoryEditHabit, selectCategoryEditHabit)
        selectCategoryEditHabit.append(opitionCategoryEditHabit)
        modalEditHabitContentCheck.append(modalStatusEditHabit, inputCheckEditHabit)
        modalEditHabitContentBtn.append(modalBtnEditCancelHabit, modalBtnEditHabit)


        modalEditHabit.className = "modalEditHabitOn"
        modalEditHabitBox.className = "modalEditHabitBox"
        modalEditHabitContentTitle.className = "modalEditHabitContentTitle"
        modalTitleEditHabit.className = "modalTitleEditHabit"
        modalEditHabitBtnExit.className = "modalEditHabitBtnExit fa fa-close"
        modalEditHabitContentInput.className = "modalEditHabitContentInput"
        modalFormEditHabit.className = "modalFormEditHabit"
        inputNameEditHabit.className = "inputNameEditHabit"
        inputDescriptionEditHabit.className = "inputDescriptionEditHabit"
        selectCategoryEditHabit.className = "selectCategoryEditHabit"
        modalEditHabitContentCheck.className = "modalEditHabitContentCheck"
        modalStatusEditHabit.className = "modalStatusEditHabit"
        inputCheckEditHabit.className = "inputCheckEditHabit"
        modalEditHabitContentBtn.className = "modalEditHabitContentBtn"
        modalBtnEditCancelHabit.className = "modalBtnEditCancelHabit"
        modalBtnEditHabit.className = "modalBtnEditHabit"

        modalTitleEditHabit.innerText = "Editar hábito"
        labelNameEditHabit.innerText = "Título"
        inputNameEditHabit.placeholder = "Digite um título"
        labelUrlEditHabit.innerText = "Descrição"
        inputDescriptionEditHabit.placeholder = "Digite sua descrição"
        labelCategoryEditHabit.innerText = "Categoria"
        opitionCategoryEditHabit.innerText = "Selecione um categoria"
        modalStatusEditHabit.innerText = "Status"
        inputCheckEditHabit.type = "checkbox"
        modalBtnEditCancelHabit.innerText = "Excluir"
        modalBtnEditHabit.innerText = "Salvar alterações"
    }
    static createHabit() {
        const body = document.querySelector("body") 
        const modalCreateHabit = document.createElement("div")
        const modalCreateHabitBox = document.createElement("div")
        const modalCreateHabitContentTitle = document.createElement("div")
        const modalTitleCreateHabit= document.createElement("h1")
        const modalCreateHabitBtnExit = document.createElement("button")
        const modalCreateHabitContentInput = document.createElement("div")
        const modalFormCreateHabit = document.createElement("form")
        const labelNameCreatetHabit = document.createElement("label")
        const inputNameCreateHabit = document.createElement("input")
        const labelUrlCreateHabit = document.createElement("label")
        const inputDescriptionCreateHabit = document.createElement("input")
        const labelCategoryCreateHabit = document.createElement("label")
        const selectCategoryCreateHabit = document.createElement("select")
        const optionCategoryCreateHabit = document.createElement("option")
        const modalCreateHabitContentBtn = document.createElement("div")
        const modalBtnCreateHabit = document.createElement("button")

        body.append(modalCreateHabit)
        modalCreateHabit.append(modalCreateHabitBox)
        modalCreateHabitBox.append(modalCreateHabitContentTitle, modalCreateHabitContentInput, modalCreateHabitContentBtn)
        modalCreateHabitContentTitle.append(modalTitleCreateHabit,modalCreateHabitBtnExit)
        modalCreateHabitContentInput.append(modalFormCreateHabit)
        modalFormCreateHabit.append(labelNameCreatetHabit, inputNameCreateHabit, labelUrlCreateHabit, inputDescriptionCreateHabit, labelCategoryCreateHabit, selectCategoryCreateHabit)
        selectCategoryCreateHabit.append(optionCategoryCreateHabit)
        modalCreateHabitContentBtn.append(modalBtnCreateHabit)

        modalCreateHabit.className = "modalCreateHabitOn"
        modalCreateHabitBox.className = "modalCreateHabitBox"
        modalCreateHabitContentTitle.className = "modalCreateHabitContentTitle"
        modalTitleCreateHabit.className = "modalTitleCreateHabit"
        modalCreateHabitBtnExit.className = "modalCreateHabitBtnExit fa fa-close"
        modalCreateHabitContentInput.className = "modalCreateHabitContentInput"
        modalFormCreateHabit.className = "modalFormCreateHabit"
        inputNameCreateHabit.className = "inputNameCreateHabit"
        inputDescriptionCreateHabit.className = "inputDescriptionCreateHabit"
        selectCategoryCreateHabit.className = "selectCategoryCreateHabit"
        modalCreateHabitContentBtn.className = "modalCreateHabitContentBtn"
        modalBtnCreateHabit.className = "modalBtnCreateHabit"
        modalTitleCreateHabit.innerText = "Criar hábito"
        labelNameCreatetHabit.innerText = "Nome"
        inputNameCreateHabit.placeholder = "Digite um título"
        labelUrlCreateHabit.innerText = "URL da imagem do perfil"
        inputDescriptionCreateHabit.placeholder = "Digite sua descrição"
        labelCategoryCreateHabit.innerText = "Categoria"
        optionCategoryCreateHabit.innerText = "Selecione um categoria"
        modalBtnCreateHabit.innerText = "Salvar alterações"
    }
    static habitCreateSucess() {
        const body = document.querySelector("body") 
        const modalSucessOn= document.createElement("div")
        const modalSucessBox = document.createElement("div")
        const modalSucessImg = document.createElement("img")

        body.append(modalSucessOn)
        modalSucessOn.append(modalSucessBox)
        modalSucessBox.append(modalSucessImg)

        modalSucessOn.className = "modalCreateSucessOn"
        modalSucessBox.className = "modalCreateSucessBox"
        modalSucessImg.className = "modalCreateSucessImg"

        modalSucessImg.src = ".././assets/img/imgHabitCreateSucess.png"
    }
    static habitChangedSucess() {
        const body = document.querySelector("body") 
        const modalSucessOn= document.createElement("div")
        const modalSucessBox = document.createElement("div")
        const modalSucessImg = document.createElement("img")

        body.append(modalSucessOn)
        modalSucessOn.append(modalSucessBox)
        modalSucessBox.append(modalSucessImg)
       

        modalSucessOn.className = "modalChangedSucessOn"
        modalSucessBox.className = "modalChangedSucessBox"
        modalSucessImg.className = "modalChangedSucessImg"

        modalSucessImg.src = ".././assets/img/imgHabitChangedSucess.png"
    }
    static logoutIsEditProfile() {
        const body = document.querySelector("body") 
        const modalLogoutOn= document.createElement("div")
        const modalLogoutBox = document.createElement("div")
        const modalLogoutClip = document.createElement("div")
        const modalLogoutBtnEdit = document.createElement("a")
        const modalLogoutBtnLogout = document.createElement("a")

        body.append(modalLogoutOn)
        modalLogoutOn.append(modalLogoutBox,)
        modalLogoutBox.append(modalLogoutClip, modalLogoutBtnEdit, modalLogoutBtnLogout)
       
        modalLogoutOn.className = "modalLogoutOn"
        modalLogoutBox.className = "modalLogoutBox"
        modalLogoutClip.className = "modalLogoutClip"
        modalLogoutBtnEdit.className = "modalLogoutBtnEdit"
        modalLogoutBtnLogout.className = "modalLogoutBtnLogout"

        modalLogoutBtnEdit.id = "btnLogout"
        modalLogoutBtnLogout.id = "btnLogoutEdit"

        modalLogoutBtnEdit.innerText = "   Editar perfil"
        modalLogoutBtnLogout.innerText = "  Sair do app"
    }
}



