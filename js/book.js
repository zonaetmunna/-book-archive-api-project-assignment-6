const searchBook = () => {
     const searchInput = document.getElementById("searchInput");
     const searchText = searchInput.value;

     // 
     const url = `http://openlibrary.org/search.json?q=${searchText}`;
     fetch(url)
          .then(res => res.json())
          .then(data => displaySearchBook(data.docs))
}

const displaySearchBook = books => {
     // console.log(books);
     const bookContainer = document.getElementById("bookContainer");

     books.forEach(book => {
          console.log(book);
          const div = document.createElement("div");
          div.classList.add("col");
          div.innerHTML = `
          <div class="card">
                         <img src="..." class="card-img-top" alt="...">
                         <div class="card-body">
                              <h5 class="card-title">Card title</h5>
                              <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                   to
                                   additional content. This content is a little bit longer.</p>
                         </div>
                    </div>
          `
          bookContainer.appendChild(div);

     });
}