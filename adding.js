let addUser = document.querySelector(".addUser");
let addGroup = document.querySelector(".addGroup");
let modal = document.querySelector(".modal");
let modalGroup = document.querySelector(".modalGroup");
let close = document.querySelector(".close");
let close1 = document.querySelector(".close1");
let inputName = document.querySelector(".inputName");
let inputSurname = document.querySelector(".inputSurname");
let inputAge = document.querySelector(".inputAge");
let inputGroup = document.querySelector(".inputGroup");
let usersBlock = document.querySelector(".addingUser");
let regUser = document.querySelector(".regUser");
let regGroup = document.querySelector(".regGroup");
let groupBlocks = document.querySelector(".group-block");
let removeUser = document.querySelector(".removeUser");
let userBlock1 = document.querySelector(".userBlock");
let bigArray = [];
let users = [];
let userTab = [];
let groupTab = [];
let groupRemove = document.querySelector(".groupRemove");

export function mod(e) {
  addUser.addEventListener("click", () => {
    modal.style.display = "flex";
  });
}
export function clos(e) {
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
export function addingUser(e) {
  regUser.addEventListener("click", () => {
    if (inputName.value != "" && inputSurname != "" && inputAge.value != "") {
      let obj = {
        name: " ",
        surname: " ",
        age: " ",
        group: false,
      };
      let user = document.createElement("div");
      user.classList.add("userBlock");
      user.innerHTML = `
        <h3>Name:${inputName.value}</h3>
        <h3>Surname:${inputSurname.value}</h3>
        <h3>Age:${inputAge.value}</h3>
        <button class="removeUser">Remove</button>
        `;
      let removeingUser = user.querySelector(".removeUser");
      removeingUser.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        let index = users.indexOf(obj);
        if (index != "-1") {
          users.splice(index, 1);
        }
      });
      obj.name = inputName.value;
      obj.surname = inputSurname.value;
      obj.age = inputAge.value;
      inputName.value = "";
      inputSurname.value = "";
      inputAge.value = "";
      users.push(obj);
      bigArray.push(users);
      console.log(users);
      console.log(bigArray);
      usersBlock.append(user);

      modal.style.display = "none";
    } else {
      alert("Please write all inputs!");
    }
  });
}
export function addGrou(e) {
  addGroup.addEventListener("click", () => {
    modalGroup.style.display = "flex";
  });
}
export function clos1(e) {
  close1.addEventListener("click", () => {
    modalGroup.style.display = "none";
  });
}
export function addingGroup(e) {
  regGroup.addEventListener("click", () => {
    let busyUsers = [];
    if (inputGroup.value != "") {
      let objGroup = {
        name: " ",
      };
      let group = document.createElement("div");
      group.classList.add("groupBlock");
      group.innerHTML = ` 
            <h3>Group Name:${inputGroup.value}</h3>
            <button class="groupRemove">Remove</button><br><br>
            <button class="seeGroup">See Users</button>
            `;
      let seeGroup = group.querySelector(".seeGroup");
      seeGroup.addEventListener("click", () => {
        let groupAddModal = document.createElement("div");
        groupAddModal.classList.add("modalAddGroup");

        groupAddModal.innerHTML = `
                <div class="modalBox">
                <div class="usersBusy"></div>
                <div class="usersFree"></div>
                </div>
                `;
        groupAddModal.addEventListener("click", (e) => {
          if (
            e.target == groupAddModal &&
            e.target != groupAddModal.firstElementChild
          ) {
            groupAddModal.remove();
          }
        });
        document.body.append(groupAddModal);

        

        let usersBusy = groupAddModal.querySelector(".usersBusy");
        let usersFree = groupAddModal.querySelector(".usersFree");
        users.forEach((e) => {
          let block = document.createElement("div");
          block.classList.add("blockModalFree");
          block.innerHTML = `
                        <h4>Name: ${e.name}</h4>
                        <h5>Age: ${e.age}</h5>
                        <button class="addingToGroup">Add To Group</button>
                    `;
          usersFree.append(block);
          let addingToGroup = block.querySelector(".addingToGroup");
          addingToGroup.addEventListener("click", () => {
            if (busyUsers.length != 6) {
              let newBlock = document.createElement("div");
              newBlock.classList.add("blockModalFree");
              newBlock.innerHTML = `
                        <h4>Name: ${e.name}</h4>
                        <h5>Age: ${e.age}</h5>
                    `;
              usersBusy.append(newBlock);
              console.log(newBlock);
              block.remove();
              let index = users.indexOf(e);
              if (index != "-1") {
                busyUsers.push(e);
                users.splice(index, 1);
              }
            }else{
                alert("Only 6 users")
            }
          });
        });
        
          busyUsers.forEach((e) => {
            let newBlockAdding = document.createElement("div");
            newBlockAdding.classList.add("blockModalFree");
            newBlockAdding.innerHTML = `
                        <h4>Name: ${e.name}</h4>
                        <h5>Age: ${e.age}</h5>
                    `;
            usersBusy.append(newBlockAdding);
          });
        
      });
      let removeingGroup = group.querySelector(".groupRemove");
      removeingGroup.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        let index = groupTab.indexOf(objGroup);
        if (index != "-1") {
          groupTab.splice(index, 1);
        }
      });
      objGroup = inputGroup.value;
      inputGroup.value = "";
      groupTab.push(objGroup);
      bigArray.push(objGroup);
      console.log(groupTab);
      console.log(bigArray);
      groupBlocks.append(group);
      modalGroup.style.display = "none";
    } else {
      alert("Please enter Group Name");
    }
  });
}
let searchUsers = document.querySelector(".searchUsers");
let searchGroup = document.querySelector(".searchGroup");
export function searchingUsers(e) {
  searchUsers.addEventListener("click", () => {
    usersBlock.style.display = "flex";
    groupBlocks.style.display = "none";
  });
}
export function searchingGroup(e) {
  searchGroup.addEventListener("click", () => {
    groupBlocks.style.display = "flex";
    usersBlock.style.display = "none";
  });
}
