class Book{
    constructor(bookName, author, type) {
        this.bookName = bookName;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add (book) {
        console.log("ADD");
        let tableBody = document.getElementById('tableBody');
        let uiString = `
                    <tr>
                        <td>${book.bookName}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += uiString;            
                            
    }

    clear () {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate (book) {
        if(book.bookName.length < 2 || book.author.length < 2 ){
            return false;
        }
        else{
            return true;
        }
    }

    show (type,displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>Message: </strong> ${displayMessage}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>`;
        setTimeout(function(){
            message.innerHTML = '';
        },2000);                    
    
    }   
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormOnSubmit);

function libraryFormOnSubmit(e) {
    e.preventDefault();
    console.log("You have submitted form");
    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(bookName, author, type);
    console.log(book);
    let display = new Display();
    if(display.validate(book)){
        display.show('success', 'Your book has been successfully added');
        display.add(book);
        display.clear();
    }
    else{
        display.show('danger', 'Sorry you cannot add this book');
    }

}