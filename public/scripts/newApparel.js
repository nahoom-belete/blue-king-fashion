window.addEventListener('load', function () {
  const button = document.getElementById("slide");

  button.onclick = () => {
      const cardList = document.getElementsByClassName("card");
      const currentElement = cardList[0];
      const nextElement = cardList[1];
      const lastElement = document.getElementById("collection-inner");
      currentElement.classList.add("fade-out");
      setTimeout(() => {
          currentElement.classList.remove("fade-out");
          lastElement.appendChild(currentElement);
      }, 1000);
      
  };
});