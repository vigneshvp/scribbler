function showSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
  }
  
  function hideSignInModal(){
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
  }

  function showSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
  }
  
  function hideSignUpModal(){
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
  }

  function showCreatePostModal(){
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
  }
  
  function hideCreatePostModal(){
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
  }
  
  function viewAllPosts(){
    location.href = "postslist.html"
  }

  