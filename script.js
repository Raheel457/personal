const listItems = document.querySelectorAll(".item");
const checkBox = document.querySelector("#Check");
const navbar = document.querySelector(".main-nav");
const toTopBtn = document.querySelector(".to-top");
const toBottomBtn = document.querySelector(".to-bottom");
const dynamicText= document.querySelector(".dynamic-text");



window.onscroll = ()=>{
  if(document.documentElement.scrollTop > 0.2){
    navbar.style.backgroundColor = "rgb(102, 165, 153)";
  } 
  else{
    navbar.style.removeProperty('background-color');

  }
  if (document.documentElement.scrollTop>50){
    toTopBtn.classList.add('on');
    dynamicText.style.zIndex = -1;
  }
  else{
      toTopBtn.classList.remove('on')
      dynamicText.style.removeProperty('z-index');
  }
  if (document.documentElement.scrollTop>1400){
    toBottomBtn.classList.remove('on')
  }
  else{
    toBottomBtn.classList.add('on')
  }
  
};

const HandleListActive = (item, index) => {
  const activeLi = document.querySelector(".active");
  if (activeLi === item) {
    return;
  }

  activeLi.classList.remove("active");
  item.classList.add("active");
};

const HandleCheckBox = () => {
  if (checkBox.checked) {
    navbar.classList.add("stretch");
    navbar.classList.remove("unstretch");
  } else {
      navbar.classList.add("unstretch");
    navbar.classList.remove("stretch");
  }
};

const goToTop = ()=>{

  window.scrollTo(0,0);
}
const goToBottom = ()=>{
  window.scrollTo(document.documentElement.scrollHeight,document.documentElement.scrollHeight);
}

// Event Listeners
listItems.forEach((li) => {
  li.addEventListener("click", () => HandleListActive(li));
});

checkBox.addEventListener("click", HandleCheckBox);
toTopBtn.addEventListener("click" , goToTop);
toBottomBtn.addEventListener("click" , goToBottom);

