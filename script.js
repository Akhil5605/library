$(document).ready(function() {
  $("#loadBooks").click(function() {
    $.ajax({
      url: "books.json",
      dataType: "json",
      success: function(data) {
        $("#bookList").empty(); // clear previous results
        $.each(data, function(index, book) {
          $("#bookList").append(
            `<div class="book">
              <h2>${book.title}</h2>
              <p>Author: ${book.author}</p>
            </div>`
          );
        });
      },
      error: function() {
        $("#bookList").html("<p>Error loading book data.</p>");
      }
    });
  });
});
