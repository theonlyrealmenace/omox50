document.addEventListener('DOMContentLoaded',()=>{
    console.log(document);
    const svgObject = document.getElementById('svg-object');
    console.log(svgObject);
    svgObject.addEventListener('load', function() {
      const svgDoc = svgObject.contentDocument;
      const pathElement = svgDoc.querySelector('path'); // Get the first <path> element
      pathElement.setAttribute('fill', '#454545'); // Change the fill color to red
    //   svgObject.classList.add('star-click')
    });
    
    
    
    
    
    const love = document.getElementById('my-svg');
    console.log(love);
    console.log(svgObject);
    love.addEventListener('load', function() {
        const svgDoc = love.contentDocument;
        const pathElement = svgDoc.querySelector('path'); // Get the first <path> element
        pathElement.setAttribute('fill', '#454545'); // Change the fill color to red
        // love.classList.add('star-click')
      });
})