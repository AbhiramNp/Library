let myLibrary = [];
console.log(myLibrary);
console.log(typeof myLibrary);



function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}





// Form Controls
let container = document.querySelector(".container");
let form = document.querySelector('#bookForm');
let formBtn = document.querySelector(".formSubmit");




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


        
        
        const btnDiv = document.createElement("div");
        btnDiv.classList.add("btn-div");
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "X";  
        


      
        books.appendChild(card);  //Appends to the html empty div
        card.appendChild(btnDiv);
        btnDiv.appendChild(removeBtn);

  

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


    })


}
