const btn=document.getElementById("button");
const modal=document.getElementById("myModal");
const loginbtn=document.getElementById("loginbutton");
const input1=document.getElementById("myInput1");
const input2=document.getElementById("myInput2");
const circleicon=document.getElementById("circle");
const text=document.getElementById("login-text");
const contThree=document.getElementById("container-three");
const heading=document.getElementById("heading");
const img2=document.getElementById("image2");
const picheading=document.getElementById("picheading");
const img=document.getElementById("image");
const background=document.getElementById("background");
const myCheck=document.getElementById("myCheck");

function displayModal() {
  modal.style.display="block";
}
  
function hideModal() {
  modal.style.display="none";
}

input2.addEventListener("input", () => {
  if (input2.value.length > 5) {
    loginbtn.classList.add('active');
  } 
  else {
    loginbtn.classList.remove('active');
  }
});

loginbtn.addEventListener("click", () => {
  if (input1.value.trim() !== "" && input2.value.trim() !== "") {
    input1.style.backgroundColor="lavender";
    input2.style.backgroundColor="lavender";
    text.classList.add("move");
    circleicon.style.display="block";
    contThree.style.animationPlayState="running";
    heading.style.animationPlayState="running";
    btn.style.animationPlayState="running";
    picheading.style.animationPlayState="running";
    img2.style.animationPlayState="running";
    setTimeout(() => {
      img.style.animationPlayState = "running";
    }, 300);
    setTimeout(() => {
      img.style.animationPlayState = "running";
    }, 1500);
    setTimeout(() => {
    background.classList.remove("hidden");
    requestAnimationFrame(() => {
        background.classList.add("show");
    });
    }, 4600);
    setTimeout(() => {
      img.style.animationPlayState = "running";
    }, 5100);
    setTimeout(() => {
      img.style.animationPlayState = "running";
    }, 6300);
    setTimeout(() => {
      requestAnimationFrame(() => {
          background.classList.add("size");
      });
      }, 6300);
    picheading.style.animationPlayState="running";
    btn.style.animationPlayState="running";
    heading.style.animationPlayState="running";
    setTimeout(() => {
      input1.value = "";
      input2.value = "";
      input1.style.backgroundColor="white";
      input2.style.backgroundColor="white";
      circleicon.style.display="none";
      loginbtn.classList.remove('active');
      text.classList.remove("move"); 
      text.classList.add("original");
      myCheck.checked=false;
    }, 8700);
    contThree.style.animationPlayState="running";
  }
});

