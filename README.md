# Markdown to HTML Converter
A lightweight, real-time Markdown parser built with vanilla JavaScript. This tool takes standard Markdown syntax and instantly converts it into raw HTML code and a rendered visual preview.

## Features
- Live Preview: See your formatted text as you type.
- Raw HTML Export: Copy the generated code directly for use in other projects.
- Responsive Design: Clean, side-by-side layout that adjusts for mobile and desktop.
- Supported Syntax:
  Headings (H1, H2, H3),
  Blockquotes,
  Bold & Italic text,
  Hyperlinks & Images

## Built With
- HTML5 / CSS3: Provided UI structure and styling.
- JavaScript (ES6+): Developed by me. I authored the core logic in script.js, utilizing Regular Expressions (Regex) and DOM manipulation to handle the string-to-HTML conversion.

## Technical Breakdown
The core of this application is the JavaScript engine found in script.js. It functions as a single-pass compiler that transforms plain text into structured HTML.
### 1. The Transformation Pipeline
The converter uses a functional approach to process data:
- Input Capture: An input event listener monitors the textarea, ensuring the UI updates in real-time without needing a "Submit" button.
- Line-by-Line Processing: The script splits the input into an array using .split('\n'). This allows the engine to accurately identify block-level elements like Headings and Blockquotes that depend on start-of-line characters.
- Regex Mapping: I implemented Regular Expressions (Regex) to identify patterns:
^#\s*(.+)$ → Captures H1 tags.
!\[(.*?)\]\((.*?)\) → Maps image alt text and source URLs.
### 2. Live Rendering Logic
Once the text is processed, the script handles two distinct outputs:
- textContent: Used for the "Raw HTML" box to prevent the browser from rendering the tags, displaying the code itself.
- innerHTML: Used for the "Preview" box to let the browser parse and display the actual visual styles.
### 3. Responsive Architecture
The CSS utilizes a Flexbox layout with Media Queries. On screens wider than 600px, the layout shifts from a vertical stack to a three-column comparison view, providing a professional "IDE" feel.

## Live Demo
https://gladysroman.github.io/markdown-to-html-converter/

## Preview
<img width="1241" height="451" alt="Screenshot 2026-03-09 at 6 45 28 PM" src="https://github.com/user-attachments/assets/a10b1fda-cd6e-4616-8287-0eccd946b733" />

*This project was completed as part of the freeCodeCamp JavaScript Curriculum. 
The HTML and CSS were provided while the JavaScript was developed by me.*
