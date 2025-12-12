

let textArea = document.getElementById('textArea');
let counter = document.getElementById('counter');
let resetBtn = document.getElementById('resetBtn');

const max = 100;

textArea.addEventListener('keydown' , (e) => {
    const remaining = max - textArea.value.length;

    if(remaining <= 0 && e.key.length === 1){
        e.preventDefault();
    }

});



textArea.addEventListener('input' , update);
    
function update(){
    let remaining = max - textArea.value.length;

    if(remaining < 0){
        remaining = 0;
    }

    counter.textContent = `${remaining} characters remaining`;

    counter.classList.remove('yellow' , 'red');

    if(remaining === 0){
        counter.classList.add('red');
    }
    else if(remaining > 0 && remaining <= 10){
        counter.classList.add('yellow');
    }
}

resetBtn.addEventListener('click' , ()=>{
    textArea.value = "";
    update();
});

update();
