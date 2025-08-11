(function() {
  // Code within this anonymous function will execute immediately
  console.log("This anonymous function is self-executing!");
})();


document.getElementById('btnCalculate').addEventListener('click', function(){


let fromSelect = document.getElementById('nodefrom');
let fromNode = fromSelect.options[fromSelect.selectedIndex].text;

let toSelect = document.getElementById('nodeto');
let toNode = toSelect.options[toSelect.selectedIndex].text;

if(toNode.toLowerCase() != 'select' && fromNode.toLowerCase() != 'select')
      {
      const resultSpan = document.getElementById("result-points");
      resultSpan.textContent = `From Node Name = ${fromNode} , To Node Name = : ${toNode} :- A, B, C, D`;

      //find the image  section and remove it
      document.getElementById('item-right').style.display = 'none';
      document.getElementById('section-result').style.display = 'block';
      console.log("Calc button Clicked From :"+" "+fromNode);
      }
});

document.getElementById('btnClear').addEventListener('click', function(){
document.getElementById('item-right').style.display = 'block';
document.getElementById('section-result').style.display = 'none';  
});