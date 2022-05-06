function init(){
    var button = {
        run : document.querySelector('#btn-run'),
        dropDown: document.querySelector('#lang-drop')
    }
    var editor = ace.edit("editor-display");
    editor.setTheme("ace/theme/dracula");
    editor.session.setMode("ace/mode/javascript");

        editor.setOptions({
            autoScrollEditorIntoView: true,
            copyWithEmptySelection: true,
            fontSize : '12pt'
        });
    
        
        //event on click
        button.run.addEventListener('click',()=>{
            const userInput = editor.session.getValue();

            //run the userCode 
            try {
                console.log(new Function(userInput)());
            } catch (err) {
                console.log(err);
            }
          
        })
        //lang array
        var langOptions = ['C#','JS','PHY.','JAVA'];
        button.dropDown.addEventListener('click',()=>{
            var langList = document.querySelector('#lang-list')
          
          setTimeout(() => {
              
          }, 300);
          
           })

}
init();