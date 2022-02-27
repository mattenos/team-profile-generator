const Employee = require('./Employee');

class Manager extends Employee {
    Constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;