let contactList ;
window.addEventListener("DOMContentLoaded", (event) => {
    contactList = getContactDetailsFromSotage();
    document.querySelector(".contact-count").textContent = contactList.length;
    createInnerHtml();
});

const getContactDetailsFromSotage = () =>{
    return localStorage.getItem("ContactList") ?
        JSON.parse(localStorage.getItem("ContactList")) : [];
}


const createInnerHtml = () => {
    const headerHtml =
        "<tr><th>Fullname</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>PhoneNumber</th><th>Actions</th></tr>";
  let innerHtml = `${headerHtml}`;
  for(const contact of contactList){
     innerHtml = `${innerHtml}
     <tr>
           <td>${contact._name}</td>
             <td>${contact._address}</td>
             <td>${contact._city}</td>
             <td>${contact._state}</td>
             <td>${contact._zip}</td>
             <td>${contact._phoneNumber}</td>
             <td>
                 <img id="${contact._id}" onclick="remove(this)"  src="../assets/delete-black-18dp.svg" alt="delete">
                 <img id="${contact._id}" onclick="update(this)"  src="../assets/create-black-18dp.svg" alt="edit">
             </td>
         </tr>
     `;
}
document.querySelector('#table-display').innerHTML = innerHtml;
}

const createContactDetailsJSON = () => {
    let contactListLocal = [
        {
            _name:'sau',
            _address:'mbt',
            _city:'nagpur',
            _state:'MH',
            _zip:'44030',
            _phoneNumber:'01122334455',
        },
        {
           _name:'ironman',
           _address:'dadar',
           _city:'Mumbai',
           _state:'Maharastra',
           _zip:'400001',
           _phoneNumber:'05566778899',
        },
        {
           _name:'batman',
           _address:'gotham',
           _city:'pune',
           _state:'Maharastra',
           _zip:'411041',
           _phoneNumber:'03344556677',
        }
    ]
    return contactListLocal;
   } 