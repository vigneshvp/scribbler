/* View the complete post , redirects to post.html page */
function viewPostDetails(index) {
  var postUserName = document.getElementsByClassName(
      'post-username')[index].innerHTML;
  var postTitle = document.getElementsByClassName(
      'post-title')[index].innerHTML;
  var postDesc = document.getElementsByClassName('post-desc')[index].innerHTML;
  sessionStorage.setItem("postUserName", postUserName);
  sessionStorage.setItem("postTitle", postTitle);
  sessionStorage.setItem("postDesc", postDesc);
  location.href = "post.html";
}

/* Show Delete Modal */
function showDeleteModal(index) {
  var modal = document.getElementsByClassName("trash-modal")[index];
  modal.style.display = "flex";
}

/* Hide Delete Modal */
function hideDeleteModal(index) {
  var modal = document.getElementsByClassName("trash-modal")[index];
  modal.style.display = "none";
}


