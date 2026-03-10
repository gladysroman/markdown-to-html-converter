const markdown = document.getElementById('markdown-input');

const output = document.getElementById('html-output');

const preview = document.getElementById('preview');

function convertMarkdown () {
  let html = markdown.value;
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    //headings
    if(/^# /.test(line)){
      return line.replace(/^#\s*(.+)$/, '<h1>$1</h1>');
    }
    else if(/^## /.test(line)){
      return line.replace(/^##\s*(.+)$/, '<h2>$1</h2>');
    }
    else if(/^### /.test(line)){
      return line.replace(/^###\s*(.+)$/, '<h3>$1</h3>');
    }
    // Quotes
    else if (/^> /.test(line)) {
      return line.replace(/^> (.+)$/, '<blockquote>$1</blockquote>');
    }
    return line;
  });
  html = processedLines.join('\n');

  //images
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');
    
  return html;
}

markdown.addEventListener("input", function() {
    const html = convertMarkdown();
    output.textContent = html;
    preview.innerHTML = html;
});
