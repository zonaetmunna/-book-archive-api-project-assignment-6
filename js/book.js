
const errorDiv = document.getElementById("error");


// onclick searchBook()
const searchBook = () => {
     const searchInput = document.getElementById("searchInput");
     const searchText = searchInput.value;
     // clear search input
     searchInput.value = '';
     // 
     if (searchText === '') {


          bookContainer.innerHTML = `
           <h2 class="text-center">Something went wrong</h2>`;
          return;

     }
     // data fetch
     const url = `http://openlibrary.org/search.json?q=${searchText}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displaySearchBook(data))
}

const displaySearchBook = data => {
     console.log(data.numFound);
     // data find check
     if (data.numFound === 0) {

          errorDiv.innerHTML = `
          <h3>No Result Found<h3>
          `;
     }
     else {
          errorDiv.innerHTML = `
          <p>Total results  : ${data.numFound}</p>`;
     }

     const books = data.docs;
     const bookContainer = document.getElementById("bookContainer");
     bookContainer.innerHTML = '';

     books.forEach(book => {
          console.log(book);
          const div = document.createElement("div");
          div.classList.add("col");
          div.innerHTML = `
               <div class="card h-100 border border-2 border-light p-2 bg-light rounded shadow-lg">
                    <img height="300" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top rounded " alt="...">
                    <div class="card-body">
                         <h5 class="card-title fw-bolder">${book.text[1]} ${book.text[2]}</h5>
                         <p class="card-text">Author : ${book.author_name[0]}</p>
                          <p class="card-text">Publish Year : ${book.first_publish_year}</p>
                          <p class="card-text">Publish : ${book.publisher[0]}</p>

                    </div>
               </div > 
                        `
          bookContainer.appendChild(div);

     });
}