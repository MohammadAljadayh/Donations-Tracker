"use strict"; 
//Tabel Header part 
let section=document.getElementById('forTabel');
let Tabel=document.createElement('table');

section.appendChild(Tabel);

Donation.all=[];


function headeTabel()
{
let HederTabelName=['Donator Name','Donation Amount','Age'];
let hederRow=document.createElement('tr'); 
Tabel.appendChild(hederRow);

for (let i=0;i<HederTabelName.length;i++)
{
let HederTH=document.createElement('th') ; 
hederRow.appendChild(HederTH);
HederTH.textContent=HederTabelName[i];


}


}
headeTabel();
console.log(Tabel);


function Donation(name,amount,age)
{
this.name=name;
this.amount=amount;
this.age=age;

Donation.all.push(this);

}


Donation.prototype.AgeFunction=function()
{

this.age=Math.floor(Math.random() * (60 -20 + 1)) + 20;

}


Donation.prototype.render=function()
{
let toBody=document.createElement('tbody');
Tabel.appendChild(toBody);

let Rowtr=document.createElement('tr');
toBody.appendChild(Rowtr);

let nameTd=document.createElement('td');
Rowtr.appendChild(nameTd);
nameTd.textContent=this.name;

let amountTd=document.createElement('td');
Rowtr.appendChild(amountTd);
amountTd.textContent=this.amount;

let ageTd=document.createElement('td');
Rowtr.appendChild(ageTd);
ageTd.textContent=this.age; 

saveToLocalStorage();

}


let forForm=document.getElementById('forForm');
forForm.addEventListener('submit',showtabel)

function showtabel(event)
{
event.preventDefault();
let name=event.target.name.value;
console.log(event.target);
console.log(name);

let amount=event.target.amount.value;

console.log(amount);

let age=' ';

let forTabell=new Donation (name,amount,age);

forTabell.AgeFunction();

forTabell.render();

}


function saveToLocalStorage()
{

    let Storage=JSON.stringify(Donation.all);


localStorage.setItem('DonationData',Storage);
}

function getFromLocalStorage()
{
let storageData=localStorage.getItem('DonationData')

let newStorageData=JSON.parse(storageData);

for(let i=0;i<newStorageData.length;i++)
{

    let reInstData=new Donation(newStorageData[i].name,newStorageData[i].amount,newStorageData[i].age);
    reInstData.render();
}

}


getFromLocalStorage();

