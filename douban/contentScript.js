const spanElement = document.querySelector('span[property="v:itemreviewed"]');
if (spanElement) {
    const newLink = document.createElement('a');
    newLink.href = 'https://so.sonainai.com/search?q='+spanElement.textContent.split(" ")[0];
    newLink.target = '_blank'; 
    newLink.textContent = spanElement.textContent; 
  
    spanElement.textContent = "";
    spanElement.appendChild(newLink);


} else {
    console.log("null");
}