class Customer {
    constructor(name, phone, email, id) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
        this.waitlist = false;
    }
    showCustomerInfo(name) {
        if(!name) {
            console.log("No name");
        } else if (this.name === name) {
            return this.name, this.phone, this.email, this.id;
        }
    }
    

}

const Mike = new Customer ("Mike Kelley", "555-555-1234", "mike@email.com", 1);
const Meeyoung = new Customer ("Meeyoung Park", "555-555-2334", "mp@email.com", 2);
const Bradley = new Customer ("Bradley Driver", "555-555-3456", "bradley@email.com", 3);
const Abdul = new Customer ("Abdul Sabree", "555-555-4567", "adbul@email.com", 4);

//const info = showCustomerInfo("Mike Kelley");

console.log(Mike);

module.exports = Customer;