import ActionManager from "./classes/ActionManager.js";
import Action from "./classes/action.js";



let manger = new ActionManager();
/* manger.actions = JSON.parse(localStorage.getItem('actions')); */
/* manger.balance = JSON.parse(localStorage.getItem('balance')); */


window.addActionToManger = function () {

    let action = new Action(
        document.getElementById('type').value,
        document.getElementById('description').value,
        +document.getElementById('amount').value
    );


    manger.addAction(action);
    showActionInTable();



    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';


};


window.deleteAction = function (actionId) {
    if (confirm("Are You Sure ?")) {
        manger.deleteAction(actionId);

        showActionInTable()
    }
}
window.updateAction = function (actionId) {
    let newAmount = prompt('Enter Amount',)
    if (newAmount == null || newAmount == '') {
        alert('No change');
        return;
    }
    else {
        manger.updateAction(actionId, +newAmount);

        showActionInTable()
    }

}

function showActionInTable() {

    localStorage.setItem('actions', JSON.stringify(manger.actions));
    /*   localStorage.setItem('balance', JSON.stringify(manger.balance)); */
    /*     manger.calcBalance(); */

    document.getElementById('actions').innerHTML = ``
    for (let action of manger.actions) {
        document.getElementById('actions').innerHTML +=
            ` <tr class=${action.type == 'income' ? 'text-success' : 'text-danger'}>
      <td>${action.description}</td>
      <td >${action.amount}</td>
      <td> <a onclick='updateAction(${action.id})'>
      <i class="fa-solid fa-pen-to-square"></i> </a></td>
      <td> <a onclick='deleteAction(${action.id})'>
      <i class="fa-solid fa-trash"></i> </a></td>
    </tr>`

    }
}



showActionInTable();
