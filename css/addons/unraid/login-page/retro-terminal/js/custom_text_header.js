
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                       _ _       
     /\               | | |      
    /  \   _ __   ___ | | | ___  
   / /\ \ | '_ \ / _ \| | |/ _ \ 
  / ____ \| |_) | (_) | | | (_) |
 /_/    \_\ .__/ \___/|_|_|\___/ 
          | |                    
          |_|            </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
