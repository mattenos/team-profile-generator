const inquirer = require('inquirer');
const jest = require('jest');

class Employee {
    Constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
//extends Employee
getName(){
    console.log(`This employee is named ${this.name}`);
};
getId();
getEmail();
//returns Employee
getRole();

}

module.exports = Employee;