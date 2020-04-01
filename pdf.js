
const PDFDocument = require('pdfkit');
const fs = require('fs');
 
// Create a document
const doc = new PDFDocument();
 var date=new Date();
 var timestamp=date.getTime();
 const html='<h1>Heading tag</h1><table><tr><td>name</td><td>Amit Raj</td></tr></table>';
// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream('output'+timestamp+'.pdf'));
 
// Embed a font, set the font size, and render some text
doc
//   .font('fonts/PalatinoBold.ttf')
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);
 
// Add an image, constrain it to a given size, and center it vertically and horizontally
// doc.image('path/to/image.png', {
//   fit: [250, 300],
//   align: 'center',
//   valign: 'center'
// });
 var i=1;
// Add another page
doc.addPage();
doc.fontSize(8);
for(i=1;i<5;i++)
{
  doc.text(`For loop running. ${i}`, {width: 410,align: 'left'});
}

 
// Draw a triangle
doc
  .save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF3300');
 
// Apply some transforms and render an SVG path with the 'even-odd' fill rule
doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('red', 'even-odd')
  .restore();
 
// Add some text with annotations
doc
  .addPage()
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27, 'http://google.com/');
 
// Finalize PDF file
doc.end();
