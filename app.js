'use strict';


const hour = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:']
//Seattle 
let seattle = {
    name: 'seatle',
    minCus: 23,
    maxCus: 65,
    averageCus: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1) + this.minCus);
    }

}

console.log(seattle.averageCus(23, 65));

let sum = 0;
let x = 0;
for (let i = 0; i < hour.length; i++) {
    x = seattle.averageCus();
    sum = sum + x;
    console.log(hour[i] + `${seattle.averageCus()} cookies`)
}
console.log(`Total: ${sum} cookies `)

let parent = document.getElementById('Seattle1');
let ul = document.createElement('ul');
parent.appendchild('ul')
// console.log(parent)

for (let i = 0; i < hour.length; i++) {
    let parent = document.getElementById('Seattle1');
    ul = document.createElement('ul');
    parent.appendChild('ul')
    console.log(parent)
}
