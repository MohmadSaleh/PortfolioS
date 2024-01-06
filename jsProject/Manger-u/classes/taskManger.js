export default class TaskManager {
    constructor() {
        this.tasks = [];

    }
    addTask(task) {
        this.tasks.push(task);

    }
    deleteAction(actionId) {
        //find the relevant index
        let indexToDelete = this.actions.findIndex((action) => action.id == actionId);
        //delete with splice
        this.actions.splice(indexToDelete, 1);
        this.calcBalance()
    }
    updateAction(actionId, newAmount) {
        let indexToUpdate = this.actions.findIndex((action) => action.id == actionId);
        this.actions[indexToUpdate].amount = this.actions[indexToUpdate].type == 'income' ? newAmount : -newAmount;
        this.calcBalance()
    }
    calcBalance() {
        this.balance = 0;
        for (let action of this.actions) {
            this.balance += action.amount;
        }
        document.getElementById('balance').innerText = `Balance:${this.balance}`;
    }
}