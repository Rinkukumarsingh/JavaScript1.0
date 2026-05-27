class user{
    constructor(name,email){
        this.userName = name;
        this.userEmail = email;
    }

    viewData(){
        console.log("User Data: Acessing user data...");
        console.log("Name: " + this.userName);
        console.log("Email: " + this.userEmail);
    }
}

const user1 = new user("John Doe", "john.doe@example.com");
user1.viewData();

const user2 = new user("Jane Smith", "smith@example.com");
user2.viewData();