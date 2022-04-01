const getTemplate = madlibString => {
  return `
  <!doctype html>

  <html>
      <head>
      <meta charset="utf-8">
  
      <title>Homework 8</title>
  
      <meta property="og:url" content="https://www.zder.xyz/cs212/homework/8">
  
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

      .container {
        display: grid;
        margin: 0;
        width: 100%;
        height: 100vh;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        grid-template-columns: 1fr;
        grid-template-rows: .3fr 3.7fr;
        grid-template-areas:
        "header"
        "main";
      }
      
      #header {
        background-color: #f44336;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #faf6f9;
        font-size: xx-large;
        grid-area: header;
        box-shadow: #555 0 0 10px 0;
        z-index: 10;
      }
      
      main {
        background-color: #faf6f9;
        padding: 10px;
        z-index: 5;
        box-shadow: #888 0 0 5px 0;
        grid-area: main;
      }
      
      body {
        background-color: #faf6f9;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
      }
      
      input[type=text], select {
        width: 100%;
        padding: 10px 15px;
        font-size: small;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        background-color: #fff6fc;
        border-radius: 4px;
        box-sizing: border-box;
      }
      
      input[type=submit] {
        width: 100%;
        background-color: #faf6f9;
        color: #f44336;
        padding: 14px 20px;
        margin: 8px 0;
        border: solid 1px #f44336;
        border-radius: 4px;
        cursor: pointer;
        font-size: medium;
      }
      
      input[type=submit]:hover {
        background-color: #f44336;
        color: #faf6f9;
      }
      
      .form-container {
        border-radius: 5px;
        background-color: #858284;
        padding: 3px;
        margin: 25px 100px;
        box-shadow: #aaa 3px 3px 8px 1px;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
        "form madlib";
        grid-gap: 3px;
      }
      
      .form {
        grid-area: form;
        background-color: #faf6f9;
        padding: 20px;
        border-radius: 3px 0 0 3px;
      }
      
      .madlib {
        grid-area: madlib;
        padding: 10px 20px;
        background-color: #faf6f9;
        border-radius: 0 3px 3px 0;
      }
      
      .madlib p {
        background-color: #fff6fc;
        padding: 20px;
        border-radius: 5px;
        box-shadow: #aaa 4px 4px 10px 1px;
      }
      
      </style>
      </head>
  
      <body class='container'>
        <div id='header'>Mad Libs! Homework 8</div>
  
        <main>
          <div class='form-container'>
            <form class='form' action="/cs212/homework/8" method='POST'>
              <!--place, adj, verb, food, things, profession, thing, color, celebrity, animal-->
              <label for="place">Place</label>
              <input type="text" id="place" name="place" placeholder="Place...">
          
              <label for="adj">Adjective</label>
              <input type="text" id="adj" name="adj" placeholder="Adjective...">
  
              <label for="verb">Verb</label>
              <input type="text" id="verb" name="verb" placeholder="Action Verb...">
              
              <label for="food">Food</label>
              <input type="text" id="food" name="food" placeholder="Food...">
              
              <label for="things">Things</label>
              <input type="text" id="things" name="things" placeholder="Things (plural)...">
              
              <label for="profession">Profession</label>
              <input type="text" id="profession" name="profession" placeholder="Profession...">
              
              <label for="thing">Thing</label>
              <input type="text" id="thing" name="thing" placeholder="Thing (singular)...">
              
              <label for="color">Color</label>
              <input type="text" id="color" name="color" placeholder="Color...">
              
              <label for="celebrity">Celebrity</label>
              <input type="text" id="celebrity" name="celebrity" placeholder="Celebrity, or someone famous...">
              
              <label for="animal">Animal</label>
              <input type="text" id="animal" name="animal" placeholder="Animal...">
            
              <input type="submit" value="Get Your Mad Lib!">
            </form>
  
            <div class='madlib'>
              <p>${madlibString}</p>
            </div>
          </div>
        </main>
      </body>
  </html>
  `;
}

module.exports = { getTemplate };
