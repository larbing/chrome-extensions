function createAndInsertLink(spanElement) {
    const newLink = document.createElement('a');
    newLink.href = 'https://so.sonainai.com/search?q=' + spanElement.textContent.split(" ")[0];
    newLink.target = '_blank';
    newLink.textContent = spanElement.textContent.trim();

    spanElement.textContent = "";
    spanElement.appendChild(newLink);
}

function updateListWithHtml(name, targetElement, prefix) {
    fetch("https://so.sonainai.com/player_links?name=" + name)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP request failed with status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            targetElement.innerHTML = prefix + html;
        })
        .catch(error => {
            console.error('Failed to fetch and update list:', error);
        });
}

function main() {
    const spanElement = document.querySelector('span[property="v:itemreviewed"]');
    if (spanElement) {
        createAndInsertLink(spanElement);
        const name = spanElement.textContent.split(" ")[0];
        const ulElement = document.querySelector('ul.bs');
        if (ulElement) {
            updateListWithHtml(name, ulElement,"");
            return;
        }

        const subjectDoulist = document.querySelector('#subject-doulist');
        if (subjectDoulist) {
            updateListWithHtml(name, subjectDoulist,"<h2>在哪儿看这部剧集  · · · · · ·</h2>");
            return;
        }

    }
}

main();

