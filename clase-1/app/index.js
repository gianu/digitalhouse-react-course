const paragraphs = document.createElement('div');
const text1 = document.createTextNode('Hola Mundo');
const text2 = document.createTextNode('Yo soy Sergio');

paragraphs.appendChild(text1);
paragraphs.appendChild(document.createElement('br'));
paragraphs.appendChild(text2);

const content = document.getElementById('content');

content.appendChild(paragraphs);
