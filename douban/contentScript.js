function string_replace(str) {
    str = str.replace(/第一季/g,"")
             .replace(/\s第/g, "第")
             .split(/\s/)[0];
    return str;
}

function createAndInsertLink(spanElement) {
    const newLink = document.createElement('a');
    const name = string_replace(spanElement.textContent);
    newLink.href = 'https://so.igateway.top/search?q=' + name;
    newLink.target = '_blank';
    newLink.textContent = spanElement.textContent.trim();

    spanElement.textContent = "";
    spanElement.appendChild(newLink);

    return name;
}

function updateListWithHtml(name, targetElement, prefix) {
    fetch("https://so.igateway.top/player_links?name=" + name)
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
        const name = createAndInsertLink(spanElement);
        const ulElement = document.querySelector('ul.bs');
        if (ulElement) {
            updateListWithHtml(name, ulElement, "");
            return;
        }

        const subjectDoulist = document.querySelector('#subject-doulist');
        if (subjectDoulist) {
            updateListWithHtml(name, subjectDoulist, "<h2>在哪儿看这部剧集  · · · · · ·</h2>");
            return;
        }

    }
}

main();

