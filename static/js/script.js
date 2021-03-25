/* TODO:
  add the typing effect on hover
  Write the top text
  Reactify everything
  Add a parser for the terminal mock up I made
*/
function typewriter(event) {
  let whoamiCommand = "> whoami";
  let whoamiResult = "Fernando Zegada <br> Software Developer <br> CS graduate from UCSC";
  
  for (let i = 0; i < whoamiCommand.length; i++) {
    setTimeout( () => {
      document.querySelector("h1").innerHTML =
        whoamiCommand.substring(0, i + 1)
        + '▌<span aria-hidden="true"></span>';
    }, (100 * i + 100));
  }
  
  setTimeout( () => {
    document.querySelector("h1").innerHTML = 
      whoamiCommand 
      + " <br />" 
      + '<span aria-hidden="true"></span>';
  }, (100 * whoamiCommand.length + 100));
  
  setTimeout( () => {
    document.querySelector("h1").innerHTML = 
      whoamiCommand 
      + " <br />" 
      + whoamiResult
      + " <br />"
      + '> <span class="cursor-caret">▌</span><span aria-hidden="true"></span>';
  }, (100 * (whoamiCommand.length) + 400)); 
}

document.addEventListener('DOMContentLoaded', typewriter);
