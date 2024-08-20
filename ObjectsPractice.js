let book = {
    title: 'Lord of the Rings',
    author: 'J.R.R Tolkien', 
    realeseDate: 1954,
    numberOfpages: 1216,

    description: function () {
        console.log(`Title: ${this.title}, author: ${this.author}, number of pages: ${this.numberOfpages}`)
    },

    callRealesedate: function(year) {
        return this.realeseDate < year
    }
};

book.description();
console.log(book.callRealesedate(2000));



let telephone = {
    brand: 'Siemens',
    model: 'ERDFS345345',
    price: 9999,

    description: function () {
        console.log(`Brand: ${this.brand}, model: ${this.model}, price: ${this.price}`);
    },

    call: function (number) {
        console.log(`Dialing ${number} from ${this.brand} ${this.model}...`);
    },

    showBatteryLife: function () {
        console.log(`Your telephone: ${this.brand}, ${this.model} has ${this.batteryLife}% battery left.`)
    },
    
};

for(let key in telephone) {
    console.log(`${key}: ${telephone[key]}`);
}

telephone.description();  
telephone.color = 'Black';
console.log(telephone.color);  
telephone.call('123-345-123'); 
telephone.batteryLife = 40;
telephone.showBatteryLife();
console.log(Object.entries(telephone));








let human = {
    name: 'Jakub',
    lastName: 'Andresson',
    age: 33,

    greeting: function () {
        console.log(`Hello my name is: ${this.name}`)
    }
};

human.greeting();




let person = {
    name: 'Alice',
    lastName: 'Smith',
    age: 25,
    friends: ['Bob', 'Charlie', 'Diana'],


    showFirneds: function () {
        console.log(`${this.name}'s firends are: ${this.friends.join(', ')}.`);
    },

    listHobbies: function () {
        console.log(`${this.name}'s hobbies are: ${this.hobbies.join(', ')}.`)
    },
    addFriend: function (newFriend) {
        this.friends.push(newFriend);
        console.log(`${newFriend} has been added to ${this.name}'s friends list`) 
    }
};


person.showFirneds();
person.hobbies = ['Tennis', 'Traveling', 'Gardening', 'Cooking', 'Hiking'];
person.listHobbies();
person.addFriend('Sally');
person.showFirneds();
console.log(person.friends);




for (let key in person) {
    console.log(`${key}`);
}



for (let key in person) {
    console.log(`${person[key]}`);
}