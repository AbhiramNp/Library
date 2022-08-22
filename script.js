

let myLibrary = [];
console.log(myLibrary);
console.log(typeof myLibrary);

let container = document.querySelector(".container");
let form = document.querySelectorAll('#bookForm');
let forBtn = document.querySelector(".formSubmit");


forBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let field1 = document.querySelector("#bookName");
    console.log(field1);
})

function addForm(){
    document.getElementById("bookForm").style.display = "block";
}


function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function (){
    //      console.log(this.title,'by',this.author,this.pages,this.read);
    //      return `${this.title} by ${this.author},${this.pages},${this.read}`;
    //} 
}



// let bookName = window.prompt("Enter your books name");
// console.log(bookName);
// console.log("Got the book name");


// let authorName = window.prompt("Enter the authots name");
// console.log(authorName);
// console.log("Got the authors name");


// let totalPages = window.prompt("Enter the total number of pages");
// console.log(totalPages);
// console.log("Got the total number of pages");


// let currentStatus = window.prompt("What is your current status");
// console.log(currentStatus);
// console.log("Got the current status");


let button = document.querySelector('.btn')

button.addEventListener('click',
function addBookToLibrary(title,author,pages,read){
    // let book = new Book(bookName,authorName,totalPages,currentStatus);
    let bookName = window.prompt("Enter your books name");
    console.log(bookName);
    console.log("Got the book name");


    let authorName = window.prompt("Enter the authots name");
    console.log(authorName);
    console.log("Got the authors name");


    let totalPages = window.prompt("Enter the total number of pages");
    console.log(totalPages);
    console.log("Got the total number of pages");


    let currentStatus = window.prompt("What is your current status");
    console.log(currentStatus);
    console.log("Got the current status");
   let book = new Book(bookName,authorName,totalPages,currentStatus);
  
    myLibrary.push(book);
    displayBooksOnPage();
    myLibrary = [];
});




function displayBooksOnPage(){
    const books = document.querySelector(".books");

    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for(let keyVal in myLibrary){
            console.log(keyVal);
            console.log(`${keyVal} : ${myLibrary[keyVal]}`);
            const para = document.createElement("p");
            para.textContent = (`${keyVal} : ${myLibrary[keyVal]}`);
            card.appendChild(para)
        }
    })
}










// const theHobbit = new Book("The Hobbit","J.R.R Tolkien","295 pages","not read yet");
// console.log(theHobbit.info());