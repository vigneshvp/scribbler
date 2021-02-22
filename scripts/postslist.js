function viewPostDetails(index) {
    var postUserName = document.getElementsByClassName('post-username')[index].innerHTML;
    var postTitle = document.getElementsByClassName('post-title')[index].innerHTML;
    var postDesc = document.getElementsByClassName('post-desc')[index].innerHTML;
    sessionStorage.setItem("postUserName",postUserName);
    sessionStorage.setItem("postTitle",postTitle);
    sessionStorage.setItem("postDesc",postDesc);
    location.href = "post.html";
}

/* Code for Trash Modal */
var trashFunctions = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        // Get the trash modal
        var modal = document.getElementsByClassName('trash-modal')[i];

        // Get the div that opens the modal
        var div = document.getElementsByClassName("post-trash")[i];

        // Get the <span> element that closes the modal
        var close = document.getElementsByClassName("trash-modal-button-no")[i];

        // When the user clicks on the trash icon, open the modal 
        div.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on `No` button, close the modal
        close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

trashFunctions(5)