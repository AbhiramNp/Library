# Library



let myLibrary = [];
console.log(myLibrary);
console.log(typeof myLibrary);



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

// Form Controls
let container = document.querySelector(".container");
let form = document.querySelector('#bookForm');
let formBtn = document.querySelector(".formSubmit");


// formBtn.addEventListener('click',formAdd())

// function formAdd()
// {
//     let fieldBookname = document.querySelector("#bookName").value;
//     console.log(fieldBookname);
//     console.log(typeof fieldBookname);
//     let fieldAuthorname = document.querySelector("#authorName").value;
//     console.log(fieldAuthorname);
//     let fieldPages = document.querySelector("#pageNumber").value;
//     console.log(fieldPages);
//     let fieldStatus = document.querySelector("#status").value;
//     console.log(fieldStatus);

// };

function addForm(){
    document.getElementById("bookForm").style.display = "block";
    document.querySelector(".formSubmit").style.display = "block";
}



formBtn.addEventListener('click',addBookToLibrary);
function addBookToLibrary(title,author,pages,read){

    let fieldBookname = document.querySelector("#bookName").value;
    console.log(fieldBookname);
    console.log(typeof fieldBookname);
    let fieldAuthorname = document.querySelector("#authorName").value;
    console.log(fieldAuthorname);
    let fieldPages = document.querySelector("#pageNumber").value;
    console.log(fieldPages);
    let fieldStatus = document.querySelector('input[name="radioStatus"]:checked').value;
    console.log(fieldStatus);
     let book = new Book(fieldBookname,fieldAuthorname,fieldPages,fieldStatus);
     console.log(book);
    // let bookName = window.prompt("Enter your books name");
    // console.log(bookName);
    // console.log("Got the book name");


//     let authorName = window.prompt("Enter the authots name");
//     console.log(authorName);
//     console.log("Got the authors name");


//     let totalPages = window.prompt("Enter the total number of pages");
//     console.log(totalPages);
//     console.log("Got the total number of pages");


//     let currentStatus = window.prompt("What is your current status");
//     console.log(currentStatus);
//     console.log("Got the current status");
//    let book = new Book(bookName,authorName,totalPages,currentStatus);
  
    myLibrary.push(book);
    displayBooksOnPage();
    myLibrary = [];
    form.reset();

};




function displayBooksOnPage(){
    const books = document.querySelector(".books"); //Selects the empty div

    myLibrary.forEach(myLibrary => {       //goes through each myLibrary array objects

        const card = document.createElement("div"); //Adds a new div inside the books div
        card.classList.add("card");   //Assigns that newly created div to a class called card
        
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "X";  
        
        const toggleButton = document.createElement("button");
        toggleButton.classList.add("toggle");
        toggleButton.textContent = "Toggle Read Status"


    
        books.appendChild(card);  //Appends to the html empty div

        card.appendChild(removeBtn);
        card.appendChild(toggleButton);

        for(let keyVal in myLibrary){       //Goes through the keys of mylibrary objects like bookname,author
            console.log(keyVal);    
            console.log(`${keyVal} : ${myLibrary[keyVal]}`);
            const para = document.createElement("p");
            para.textContent = (`${keyVal} : ${myLibrary[keyVal]}`);
            card.appendChild(para);

        }

        removeBtn.addEventListener('click',removeDiv);
        function removeDiv(){
            card.remove();
        }

        toggleButton.addEventListener('click',toggle);
        function toggle(){
            if(fieldStatus == "Read"){
                fieldStatus = "Haven't Read"
            }
            else{
                fieldStatus = "Read"
            }
        }

    })


}










// const theHobbit = new Book("The Hobbit","J.R.R Tolkien","295 pages","not read yet");
// console.log(theHobbit.info());
