window.addEventListener('load', function () {
  const button = document.getElementById("prv");

  button.onclick = () => {
      const cardList = document.getElementsByClassName("card");
      const currentElement = cardList[0];
      const nextElement = cardList[1];
      const lastElement = document.getElementById("collection-inner").lastElementChild.previousElementSibling;
      currentElement.classList.add("fade-out");
      setTimeout(() => {
          currentElement.classList.remove("fade-out");
          lastElement.insertAdjacentElement("afterend", currentElement)
      }, 900);
      
  };
});