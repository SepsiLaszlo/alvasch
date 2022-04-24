window.addEventListener("load",main)


function main(){
    console.log("script loaded")

    const openNavButton = document.getElementById("open-nav-btn")
    const mobileNav = document.getElementById("mobile-nav")
    const closeNavButton = document.getElementById("close-nav-btn")

    openNavButton.addEventListener("click",_ => toggleDisplay(mobileNav) )
    closeNavButton.addEventListener("click",_ => toggleDisplay(mobileNav) )

}

function toggleDisplay(element){
    element.classList.toggle("hidden")
    document.body.classList.toggle("frozen")
}


function deleteBed(id){
    fetch(`/bed/${id}`, {
        method: 'delete'
      }).then(function(response) {
          if(response.ok){
            document.getElementById(`bed-${id}`).remove()
          }
        return response.json();
      });
}

function deleteUser(id){
  fetch(`/user/${id}`, {
      method: 'delete'
    }).then(function(response) {
        if(response.ok){
          document.getElementById(`user-${id}`).remove()
        }
      return response.json();
    });
}