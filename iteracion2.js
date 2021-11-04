/* 1.2 Elimina el elemento .fn-remove-me. */


// así me elimina la clase mas no el elemento... 
/* const div = document.querySelector('div'); 
    div.classList.remove('fn-remove-me');  */


    const div = document.getElementById('fn-remove-me'); 
    div.remove();