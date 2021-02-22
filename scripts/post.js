/* Fetches the details of the post and loads it */
function onLoad() {
  document.getElementsByClassName(
      'post-author')[0].innerHTML = sessionStorage.getItem('postUserName');
  document.getElementById('blogTitleNew').innerHTML = sessionStorage.getItem(
      'postTitle');
  document.getElementById('blogBody').innerHTML = sessionStorage.getItem(
      'postDesc');
  document.getElementById(
      'counterLikedBy').innerHTML = 'Be the first one to like this!';
}

/* Increments the Like */
function incrementCounter() {
  const be = 'Be';
  var cntr = document.getElementById('counterLikedBy');
  var sentence = cntr.innerText.split(" ");
  var val = sentence[0].toString();
  if (val.localeCompare(be)==0) {
    cntr.innerHTML = '1 person likes this!';
  } else {
    var numberOfLikes = parseInt(val) + 1;
    cntr.innerHTML = numberOfLikes + ' persons likes this!';
  }
  document.getElementsByClassName(
      'post-like')[0].innerHTML = '<i style="font-size: 14px;font-weight: bolder;" class="fa fa-thumbs-up" aria-hidden="true"></i>'
      + ' Liked';
}

function toggleEditSave() {
  const toggleSave = '<button class="post-edit">Save ' +
      '<i style="font-size: 14px;font-weight: bolder;" ' +
      'class="fa fa-save" aria-hidden="true"></i>' +
      '</button>';
  var toggleEdit = '<button class="post-edit">Edit ' +
      '<i style="font-size: 14px;font-weight: bolder;" ' +
      'class="fa fa-pencil" aria-hidden="true"></i>' +
      '</button>';

  var edtSaveBtn = document.getElementById('editPost');
  var toDo = (edtSaveBtn.innerText).toString().trim();
  console.log(toDo);
  console.log(toDo.localeCompare('Edit'));
  var blogTitle = document.getElementById('blogTitle');
  if (toDo.localeCompare('Edit') === 0) {
    console.log("Currently Edit");
    var bSave = document.getElementById('editPost');
    bSave.innerHTML = toggleSave;
    blogTitle.style.borderStyle = "solid";
    blogTitle.style.borderColor = "pink";
    enableEditableText();

  } else {
    console.log("Currently Save");
    var bEdit = document.getElementById('editPost');
    bEdit.innerHTML = toggleEdit;
    blogTitle.style.borderStyle = "none";
    blogTitle.style.borderColor = "none";
    updateEditedBlog();
  }

}

function enableEditableText() {
  var getBlogContentEle = document.getElementById('blogBody');
  var getBlogContent = getBlogContentEle.innerText;

  //Div element
  var getDiv = document.getElementById('blogBodyId');
  //Create a input element
  var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" rows="10" cols="150">'
      +
      getBlogContent +
      '</textarea>'
  //Update the Div element
  getDiv.innerHTML = inputElement;
}

function updateEditedBlog() {
  var editedBlog = document.getElementById('txtEditedBlog');
  var textEdited = (editedBlog.innerHTML).toString();
  var pElement = '<p id="blogBody">' +
      textEdited +
      '</p>';
  var getDiv = document.getElementById('blogBodyId');
  getDiv.innerHTML = pElement;

}

function addComment() {
  console.log("Inside add comment");
  var x = document.getElementById("txtCommentCommentPost").addEventListener(
      "onchange", function () {
        document.getElementById("txtCommentCommentPost").innerHTML;
      });
  x = document.getElementById("txtCommentCommentPost").value;
  console.log(x);
  var pElement = '<td>' + x + '</td>';
  var getDiv = document.getElementById('comments-table');
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}
