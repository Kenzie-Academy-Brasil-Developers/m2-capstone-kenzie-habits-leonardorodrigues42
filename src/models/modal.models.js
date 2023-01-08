import EditHabit from "../controller/uptadeHabit.controller.js";

export default class Modal {
  static delete() {
    const body = document.querySelector("body");
    const modalDelete = document.createElement("div");
    const modalDeleteBox = document.createElement("div");
    const modalDeleteContentTitle = document.createElement("div");
    const modalTitleDelete = document.createElement("h1");
    const modalDeleteBtnExit = document.createElement("button");
    const modalDeleteContentText = document.createElement("div");
    const modalAlertDelete = document.createElement("h1");
    const modalTextDelete = document.createElement("p");
    const modalDeleteContentBtn = document.createElement("div");
    const modalBtnCancel = document.createElement("button");
    const modalBtnDelete = document.createElement("button");

    body.append(modalDelete);
    modalDelete.append(modalDeleteBox);
    modalDeleteBox.append(
      modalDeleteContentTitle,
      modalDeleteContentText,
      modalDeleteContentBtn
    );
    modalDeleteContentTitle.append(modalTitleDelete, modalDeleteBtnExit);
    modalDeleteContentText.append(modalAlertDelete, modalTextDelete);
    modalDeleteContentBtn.append(modalBtnCancel, modalBtnDelete);

    modalDelete.className = "modalDeleteOn";
    modalDeleteBox.className = "modalDeleteBox";
    modalDeleteContentTitle.className = "modalDeleteContentTitle";
    modalTitleDelete.className = "modalTitleDelete";
    modalDeleteBtnExit.className = "modalDeleteBtnExit fa fa-close";
    modalDeleteContentText.className = "modalDeleteContentText";
    modalAlertDelete.className = "modalAlertDelete";
    modalTextDelete.className = "modalTextDelete";
    modalDeleteContentBtn.className = "modalDeleteContentBtn";
    modalBtnCancel.className = "modalBtnCancel";
    modalBtnDelete.className = "modalBtnDelete";

    modalTitleDelete.innerText = "Excluir hábito";
    modalAlertDelete.innerText = "Certeza que deseja excluir este hábito?";
    modalTextDelete.innerText =
      "Após executar essa ação não será possível desfazer";
    modalBtnCancel.innerText = "Cancelar";
    modalBtnDelete.innerText = "Sim,excluir esse hábito";

    modalDeleteBtnExit.addEventListener("click", () => {
      if(modalDelete.className = "modalDeleteOn") {
        modalDelete.className = "modalDeleteOff";
      }else if(modalDelete.className = "modalDeleteOff"){
        modalDelete.className = "modalDeleteOn"
      }
    });
    modalBtnCancel.addEventListener("click", () => {
      if(modalDelete.className = "modalDeleteOn") {
        modalDelete.className = "modalDeleteOff";
      }else if(modalDelete.className = "modalDeleteOff"){
        modalDelete.className = "modalDeleteOn"
      }
    });
  }
  static editProfile() {
    const body = document.querySelector("body");
    const modalEditProfile = document.createElement("div");
    const modalEditProfileBox = document.createElement("div");
    const modalEditProfileContentTitle = document.createElement("div");
    const modalTitleEditProfile = document.createElement("h1");
    const modalBtnEditProfileExit = document.createElement("button");
    const modalEditProfileContentInput = document.createElement("div");
    const modalFormEditProfile = document.createElement("form");
    const labelNameEditProfile = document.createElement("label");
    const inputNameEditProfile = document.createElement("input");
    const inputNameEditProfileError = document.createElement("span");
    const labelUrlEditProfile = document.createElement("label");
    const inputUrlEditProfile = document.createElement("input");
    const inputUrlEditProfileError = document.createElement("span");
    const modalEditProfileContentBtn = document.createElement("div");
    const modalBtnEditProfile = document.createElement("button");

    modalBtnEditProfileExit.addEventListener("click", (event) => {
      event.preventDefault()
      modalEditProfile.classList.add("modalEditProfileOff");
    });

    body.append(modalEditProfile);
    modalEditProfile.append(modalEditProfileBox);
    modalEditProfileBox.append(
      modalEditProfileContentTitle,
      modalEditProfileContentInput,
      modalEditProfileContentBtn
    );
    modalEditProfileContentTitle.append(
      modalTitleEditProfile,
      modalBtnEditProfileExit
    );
    modalEditProfileContentInput.append(modalFormEditProfile);
    modalFormEditProfile.append(
      labelNameEditProfile,
      inputNameEditProfile,
      inputNameEditProfileError,
      labelUrlEditProfile,
      inputUrlEditProfile,
      inputUrlEditProfileError
    );
    modalEditProfileContentBtn.append(modalBtnEditProfile);

    modalEditProfile.className = "modalEditProfileOn";
    modalEditProfileBox.className = "modalEditProfileBox";
    modalEditProfileContentTitle.className = "modalEditProfileContentTitle";
    modalTitleEditProfile.className = "modalTitleEditProfile";
    modalBtnEditProfileExit.className = "modalBtnEditProfileExit fa fa-close";
    modalEditProfileContentInput.className = "modalEditProfileContentInput";
    modalFormEditProfile.className = "modalFormEditProfile";
    labelNameEditProfile.className = "labelNameEditProfile";
    inputNameEditProfile.className = "inputNameEditProfile";
    inputNameEditProfileError.className = "inputNameEditProfileError";
    labelUrlEditProfile.className = "labelUrlEditProfile";
    inputUrlEditProfile.className = "inputUrlEditProfile";
    inputUrlEditProfileError.className = "inputUrlEditProfileError";
    modalEditProfileContentBtn.className = "modalEditProfileContentBtn";
    modalBtnEditProfile.className = "modalBtnEditProfile";

    modalTitleEditProfile.innerText = "Editar perfil";
    labelNameEditProfile.innerText = "Nome";
    inputNameEditProfile.placeholder = "Digitar nome";
    labelUrlEditProfile.innerText = "URL da imagem do perfil";
    inputUrlEditProfile.placeholder = "Digitar URL";
    modalBtnEditProfile.innerText = "Salvar alterações";
  }
  static editHabit() {
    const body = document.querySelector("body");
    const modalEditHabit = document.createElement("div");
    const modalEditHabitBox = document.createElement("div");
    const modalEditHabitContentTitle = document.createElement("div");
    const modalTitleEditHabit = document.createElement("h1");
    const modalEditHabitBtnExit = document.createElement("button");
    const modalEditHabitContentInput = document.createElement("div");
    const modalFormEditHabit = document.createElement("form");
    const labelNameEditHabit = document.createElement("label");
    const inputNameEditHabit = document.createElement("input");
    const inputNameEditHabitError = document.createElement("span");
    const labelUrlEditHabit = document.createElement("label");
    const inputDescriptionEditHabit = document.createElement("input");
    const inputDescriptionEditHabitError = document.createElement("span");
    const labelCategoryEditHabit = document.createElement("label");
    const selectCategoryEditHabit = document.createElement("select");
    const selectCategoryEditHabitError = document.createElement("span");
    const opitionCategoryEditHabitHealth = document.createElement("option");
    const opitionCategoryEditHabitStudies = document.createElement("option");
    const opitionCategoryEditHabitHouse = document.createElement("option");
    const opitionCategoryEditHabitWork = document.createElement("option");
    const opitionCategoryEditHabitLeisure = document.createElement("option");
    const opitionCategoryEditHabit = document.createElement("option");
    const modalEditHabitContentCheck = document.createElement("div");
    const modalStatusEditHabit = document.createElement("h1");
    const inputCheckEditHabit = document.createElement("input");
    const modalEditHabitContentBtn = document.createElement("div");
    const modalBtnEditCancelHabit = document.createElement("button");
    const modalBtnEditHabit = document.createElement("button");


    modalBtnEditHabit.addEventListener("click", async (event) => {
      event.preventDefault();
      await EditHabit.editHabitCard();
    });

    modalEditHabitBtnExit.addEventListener("click", () => {
      modalEditHabit.className = "modalEditHabitOff";
    });

    
    modalBtnEditCancelHabit.addEventListener("click", () => {
      if(modalEditHabit.className = "mmodalEditHabitOn") {
        modalEditHabit.className = "modalEditHabitOff";
      }else if(modalEditHabit.className = "modalEditHabitOff"){
        modalEditHabit.className = "modalEditHabitOn"
      }
    });



    body.append(modalEditHabit);
    modalEditHabit.append(modalEditHabitBox);
    modalEditHabitBox.append(
      modalEditHabitContentTitle,
      modalEditHabitContentInput,
      modalEditHabitContentCheck
    );
    modalEditHabitContentTitle.append(
      modalTitleEditHabit,
      modalEditHabitBtnExit
    );
    modalEditHabitContentInput.append(modalFormEditHabit);
    modalFormEditHabit.append(
      labelNameEditHabit,
      inputNameEditHabit,
      inputNameEditHabitError,
      labelUrlEditHabit,
      inputDescriptionEditHabit,
      inputDescriptionEditHabitError,
      labelCategoryEditHabit,
      selectCategoryEditHabit,
      selectCategoryEditHabitError,
      modalEditHabitContentCheck,
      modalBtnEditCancelHabit,
      modalBtnEditHabit
    );
    selectCategoryEditHabit.append(
      opitionCategoryEditHabit,
      opitionCategoryEditHabitHouse,
      opitionCategoryEditHabitStudies,
      opitionCategoryEditHabitLeisure,
      opitionCategoryEditHabitWork,
      opitionCategoryEditHabitHealth
    );
    modalEditHabitContentCheck.append(
      modalStatusEditHabit,
      inputCheckEditHabit
    );

    modalBtnEditHabit.setAttribute("type", "submit");

    modalEditHabit.className = "modalEditHabitOn";
    modalEditHabitBox.className = "modalEditHabitBox";
    modalEditHabitContentTitle.className = "modalEditHabitContentTitle";
    modalTitleEditHabit.className = "modalTitleEditHabit";
    modalEditHabitBtnExit.className = "modalEditHabitBtnExit fa fa-close";
    modalEditHabitContentInput.className = "modalEditHabitContentInput";
    modalFormEditHabit.className = "modalFormEditHabit";
    inputNameEditHabit.className = "inputNameEditHabit";
    inputNameEditHabitError.className = "inputNameEditHabitError";
    inputDescriptionEditHabit.className = "inputDescriptionEditHabit";
    inputDescriptionEditHabitError.className = "inputDescriptionEditHabitError";
    selectCategoryEditHabit.className = "selectCategoryEditHabit";
    selectCategoryEditHabitError.className = "selectCategoryEditHabitError";
    modalEditHabitContentCheck.className = "modalEditHabitContentCheck";
    modalStatusEditHabit.className = "modalStatusEditHabit";
    inputCheckEditHabit.className = "inputCheckEditHabit";
    modalEditHabitContentBtn.className = "modalEditHabitContentBtn";
    modalBtnEditCancelHabit.className = "modalBtnEditCancelHabit";
    modalBtnEditHabit.className = "modalBtnEditHabit";

    modalTitleEditHabit.innerText = "Editar hábito";
    labelNameEditHabit.innerText = "Título";
    inputNameEditHabit.placeholder = "Digitar título";
    labelUrlEditHabit.innerText = "Descrição";
    inputDescriptionEditHabit.placeholder = "Digitar descrição";
    labelCategoryEditHabit.innerText = "Categoria";
    opitionCategoryEditHabit.innerText = "Selecionar categoria";
    opitionCategoryEditHabitHealth.innerText = "💜 Saúde";
    opitionCategoryEditHabitStudies.innerText = "🖊️ Estudo";
    opitionCategoryEditHabitHouse.innerText = "🏠 Casa";
    opitionCategoryEditHabitWork.innerText = "🔨 Trabalho";
    opitionCategoryEditHabitLeisure.innerText = "🏖️ Lazer";
    modalStatusEditHabit.innerText = "Status";
    inputCheckEditHabit.type = "checkbox";
    modalBtnEditCancelHabit.innerText = "Excluir";
    modalBtnEditHabit.innerText = "Salvar alterações";

    opitionCategoryEditHabitHealth.value = "saude";
    opitionCategoryEditHabitStudies.value = "estudos";
    opitionCategoryEditHabitHouse.value = "casa";
    opitionCategoryEditHabitWork.value = "trabalho";
    opitionCategoryEditHabitLeisure.value = "lazer";
  }
  static async createHabit(callback) {
    const body = document.querySelector("body");
    const modalCreateHabit = document.createElement("div");
    const modalCreateHabitBox = document.createElement("div");
    const modalCreateHabitContentTitle = document.createElement("div");
    const modalTitleCreateHabit = document.createElement("h1");
    const modalCreateHabitBtnExit = document.createElement("button");
    const modalCreateHabitContentInput = document.createElement("div");
    const modalFormCreateHabit = document.createElement("form");
    const labelNameCreatetHabit = document.createElement("label");
    const inputNameCreateHabit = document.createElement("input");
    const inputNameCreateHabitError = document.createElement("span");
    const labelUrlCreateHabit = document.createElement("label");
    const inputDescriptionCreateHabit = document.createElement("input");
    const inputDescriptionCreateHabitError = document.createElement("span");
    const labelCategoryCreateHabit = document.createElement("label");
    const selectCategoryCreateHabit = document.createElement("select");
    const selectCategoryCreateHabitError = document.createElement("span");
    const optionCategoryCreateHabit = document.createElement("option");
    const opitionCategoryCreateHabitHealth = document.createElement("option");
    const opitionCategoryCreateHabitStudies = document.createElement("option");
    const opitionCategoryCreateHabitHouse = document.createElement("option");
    const opitionCategoryCreateHabitWork = document.createElement("option");
    const opitionCategoryCreateHabitLeisure = document.createElement("option");
    const modalBtnCreateHabit = document.createElement("button");

    modalFormCreateHabit.addEventListener("submit", async (event) => {
      const formElements = [...modalFormCreateHabit.elements];
      const title = formElements[0].value;
      const description = formElements[1].value;
      const category =
        formElements[2].options[formElements[2].selectedIndex].value;

      if (title === "") {
        event.preventDefault();
        inputNameCreateHabit.style.border = "1.5px solid red";
        inputNameCreateHabitError.innerText = "Campo obrigatório";
        return;
      } else {
        inputNameCreateHabit.style.border = "1.5px solid blue";
        inputNameCreateHabitError.innerText = "";
      }
      if (description === "") {
        event.preventDefault();
        inputDescriptionCreateHabit.style.border = "1.5px solid red";
        inputDescriptionCreateHabitError.innerText = "Campo obrigatório";
        return;
      } else {
        inputDescriptionCreateHabit.style.border = "1.5px solid blue";
        inputDescriptionCreateHabitError.innerText = "";
      }
      if (category === "Selecionar categoria") {
        event.preventDefault();
        selectCategoryCreateHabit.style.border = "1.5px solid red";
        selectCategoryCreateHabitError.innerText = "Campo obrigatório";
        return;
      } else {
        selectCategoryCreateHabit.style.border = "1.5px solid blue";
        selectCategoryCreateHabitError.innerText = "";
      }
      callback(event);
    });
    modalCreateHabitBtnExit.addEventListener("click", () => {
      modalCreateHabit.classList.add("modalCreateHabitOff");
    });

    body.append(modalCreateHabit);
    modalCreateHabit.append(modalCreateHabitBox);
    modalCreateHabitBox.append(
      modalCreateHabitContentTitle,
      modalCreateHabitContentInput
    );
    modalCreateHabitContentTitle.append(
      modalTitleCreateHabit,
      modalCreateHabitBtnExit
    );
    modalCreateHabitContentInput.append(modalFormCreateHabit);
    modalFormCreateHabit.append(
      labelNameCreatetHabit,
      inputNameCreateHabit,
      inputNameCreateHabitError,
      labelUrlCreateHabit,
      inputDescriptionCreateHabit,
      inputDescriptionCreateHabitError,
      labelCategoryCreateHabit,
      selectCategoryCreateHabit,
      selectCategoryCreateHabitError,
      modalBtnCreateHabit
    );
    selectCategoryCreateHabit.append(
      optionCategoryCreateHabit,
      opitionCategoryCreateHabitHouse,
      opitionCategoryCreateHabitStudies,
      opitionCategoryCreateHabitLeisure,
      opitionCategoryCreateHabitWork,
      opitionCategoryCreateHabitHealth
    );
    modalBtnCreateHabit.setAttribute("type", "submit");

    modalCreateHabit.className = "modalCreateHabitOn";
    modalCreateHabitBox.className = "modalCreateHabitBox";
    modalCreateHabitContentTitle.className = "modalCreateHabitContentTitle";
    modalTitleCreateHabit.className = "modalTitleCreateHabit";
    modalCreateHabitBtnExit.className = "modalCreateHabitBtnExit fa fa-close";
    modalCreateHabitContentInput.className = "modalCreateHabitContentInput";
    modalFormCreateHabit.className = "modalFormCreateHabit";
    inputNameCreateHabit.className = "inputNameCreateHabit";
    inputNameCreateHabitError.className = "inputNameCreateHabitError";
    inputDescriptionCreateHabit.className = "inputDescriptionCreateHabit";
    inputDescriptionCreateHabitError.className =
      "inputDescriptionCreateHabitError";
    selectCategoryCreateHabit.className = "selectCategoryCreateHabit";
    selectCategoryCreateHabitError.className = "selectCategoryCreateHabitError";
    modalBtnCreateHabit.className = "modalBtnCreateHabit";

    modalTitleCreateHabit.innerText = "Criar hábito";
    labelNameCreatetHabit.innerText = "Título";
    inputNameCreateHabit.placeholder = "Digitar título";
    labelUrlCreateHabit.innerText = "Descrição";
    inputDescriptionCreateHabit.placeholder = "Digitar descrição";
    labelCategoryCreateHabit.innerText = "Categoria";
    optionCategoryCreateHabit.innerText = "Selecionar categoria";
    modalBtnCreateHabit.innerText = "Inserir";

    opitionCategoryCreateHabitHealth.innerText = "💜 Saúde";
    opitionCategoryCreateHabitStudies.innerText = "🖊️ Estudo";
    opitionCategoryCreateHabitHouse.innerText = "🏠 Casa";
    opitionCategoryCreateHabitWork.innerText = "🔨 Trabalho";
    opitionCategoryCreateHabitLeisure.innerText = "🏖️ Lazer";

    opitionCategoryCreateHabitHealth.value = "saude";
    opitionCategoryCreateHabitStudies.value = "estudos";
    opitionCategoryCreateHabitHouse.value = "casa";
    opitionCategoryCreateHabitWork.value = "trabalho";
    opitionCategoryCreateHabitLeisure.value = "lazer";
  }
  static habitCreateSucess() {
    const body = document.querySelector("body");
    const modalSucessOn = document.createElement("div");
    const modalSucessBox = document.createElement("div");
    const modalSucessImg = document.createElement("img");

    body.append(modalSucessOn);
    modalSucessOn.append(modalSucessBox);
    modalSucessBox.append(modalSucessImg);

    modalSucessOn.className = "modalCreateSucessOn";
    modalSucessBox.className = "modalCreateSucessBox";
    modalSucessImg.className = "modalCreateSucessImg";

    modalSucessImg.src = ".././assets/img/imgHabitCreateSucess.png";
  }
  static habitChangedSucess() {
    const body = document.querySelector("body");
    const modalSucessOn = document.createElement("div");
    const modalSucessBox = document.createElement("div");
    const modalSucessImg = document.createElement("img");

    body.append(modalSucessOn);
    modalSucessOn.append(modalSucessBox);
    modalSucessBox.append(modalSucessImg);

    modalSucessOn.className = "modalChangedSucessOn";
    modalSucessBox.className = "modalChangedSucessBox";
    modalSucessImg.className = "modalChangedSucessImg";

    modalSucessImg.src = ".././assets/img/imgHabitChangedSucess.png";
  }
  static loginSucess() {
    const body = document.querySelector("body");
    const modalSucessOn = document.createElement("div");
    const modalSucessBox = document.createElement("div");
    const modalSucessImg = document.createElement("img");

    body.append(modalSucessOn);
    modalSucessOn.append(modalSucessBox);
    modalSucessBox.append(modalSucessImg);

    modalSucessOn.className = "modalChangedSucessOn";
    modalSucessBox.className = "modalChangedSucessBox";
    modalSucessImg.className = "modalChangedSucessImg";

    modalSucessImg.src = ".././assets/img/imgLoginSucess.png";
  }
  static loginError() {
    const body = document.querySelector("body");
    const modalSucessOn = document.createElement("div");
    const modalSucessBox = document.createElement("div");
    const modalSucessImg = document.createElement("img");

    body.append(modalSucessOn);
    modalSucessOn.append(modalSucessBox);
    modalSucessBox.append(modalSucessImg);

    modalSucessOn.className = "modalChangedSucessOn";
    modalSucessBox.className = "modalChangedSucessBox";
    modalSucessImg.className = "modalChangedSucessImg";

    modalSucessImg.src = ".././assets/img/imgLoginError.png";
  }
  static habitError() {
    const body = document.querySelector("body");
    const modalSucessOn = document.createElement("div");
    const modalSucessBox = document.createElement("div");
    const modalSucessImg = document.createElement("img");

    body.append(modalSucessOn);
    modalSucessOn.append(modalSucessBox);
    modalSucessBox.append(modalSucessImg);

    modalSucessOn.className = "modalChangedSucessOn";
    modalSucessBox.className = "modalChangedSucessBox";
    modalSucessImg.className = "modalChangedSucessImg";

    modalSucessImg.src = ".././assets/img/imgHabitError.png";
  }
  static profileError() {
    const body = document.querySelector("body");
    const modalSucessOn = document.createElement("div");
    const modalSucessBox = document.createElement("div");
    const modalSucessImg = document.createElement("img");

    body.append(modalSucessOn);
    modalSucessOn.append(modalSucessBox);
    modalSucessBox.append(modalSucessImg);

    modalSucessOn.className = "modalChangedSucessOn";
    modalSucessBox.className = "modalChangedSucessBox";
    modalSucessImg.className = "modalChangedSucessImg";

    modalSucessImg.src = ".././assets/img/imgProfileError.png";
  }
  static logoutIsEditProfile() {
    const body = document.querySelector("body");
    const modalLogoutOn = document.createElement("div");
    const modalLogoutBox = document.createElement("div");
    const modalLogoutClip = document.createElement("div");
    const modalLogoutBtnEdit = document.createElement("a");
    const modalLogoutBtnLogout = document.createElement("a");

    body.append(modalLogoutOn);
    modalLogoutOn.append(modalLogoutBox);
    modalLogoutBox.append(
      modalLogoutClip,
      modalLogoutBtnEdit,
      modalLogoutBtnLogout
    );

    modalLogoutOn.className = "modalLogoutOn";
    modalLogoutBox.className = "modalLogoutBox";
    modalLogoutClip.className = "modalLogoutClip";
    modalLogoutBtnEdit.className = "modalLogoutBtnEdit";
    modalLogoutBtnLogout.className = "modalLogoutBtnLogout";

    modalLogoutBtnEdit.id = "btnLogout";
    modalLogoutBtnLogout.id = "btnLogoutEdit";

    modalLogoutBtnEdit.innerText = "   Editar perfil";
    modalLogoutBtnLogout.innerText = "  Sair do app";

    modalLogoutClip.addEventListener("click", (event) => {
      modalLogoutOn.className = "modalLogoutOff" 

    })
  }
}
