function createAndInsertLink(spanElement) {
    const newLink = document.createElement('a');
    newLink.href = 'https://so.sonainai.com/search?q=' + spanElement.textContent.split(" ")[0];
    newLink.target = '_blank';
    newLink.textContent = spanElement.textContent.trim();

    spanElement.textContent = ""; 
    spanElement.appendChild(newLink); 
}

function updateListWithHtml(name, targetElement) {
    fetch("https://so.sonainai.com/player_links?name="+name)
      .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP request failed with status: ${response.status}`);
            }
            return response.text();
        })
      .then(html => {
            targetElement.innerHTML = html;
        })
      .catch(error => {
            console.error('Failed to fetch and update list:', error);
        });
}

// 主逻辑
const spanElement = document.querySelector('span[property="v:itemreviewed"]');
if (spanElement) {
    createAndInsertLink(spanElement);
    const name = spanElement.textContent.split(" ")[0];
    const ulElement = document.querySelector('ul.bs');
    if (ulElement) {
        updateListWithHtml(name,ulElement);
    } else {
        console.log('No matching element found.');
    }
}
