const spanElement = document.querySelector('span[property="v:itemreviewed"]');
if (spanElement) {
    console.log(spanElement.textContent); // 输出元素的文本内容
    const newLink = document.createElement('a');
    newLink.href = 'https://so.sonainai.com/search?q='+spanElement.textContent.split(" ")[0]; // 设置链接地址
    newLink.target = '_blank'; // 在新标签页中打开链接
    newLink.textContent = spanElement.textContent; // 设置链接文本
  
    // 将原始<span>元素作为<a>标签的子节点
    // newLink.appendChild(spanElement);
    spanElement.textContent = "";
    spanElement.appendChild(newLink);

    // 将新创建的<a>标签插入到原始元素的父节点中
    // spanElement.parentNode.replaceChild(newLink, spanElement);

} else {
    console.log("null");
}