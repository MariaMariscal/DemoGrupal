//GAME IDEA: You sing and if ur notes match the notes of the karaoke song you get coins. It is part social and part game bc you can share/follow but also use ur coins to unlock premium songs and stuff. You can also write ur own songs for other people to try and you can join (maybe live) competitions

const posts = document.querySelectorAll(".gallery-item");

posts.forEach((post) => {
  post.addEventListener("click", () => {
    //Get original image URL
    const imgUrl = post.firstElementChild.src.split("?")[0];
    //Open image in new tab
    window.open(imgUrl, "_blank");
  });
});
window.onLoad = function () {
  var profileUserName = document.getELementById("profile-user-name");
  profileUserName.innerHTML = username;

  var profileRealName = document.getELementById("profile-real-name");
  profileRealName.innerHTML = realName;

  var profileBioText = document.getELementById("profile-bio-text");
  profileBioText.innerHTML = yourBio;
};

function popup() {
  popup = document-getELementById("myPopup"); 
  popup.classList.toggle("show");
}
