const btns = document.querySelectorAll(".tab-btn");
const secondColumn = document.querySelector(".second");
const content = document.querySelectorAll(".content");

secondColumn.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        // Removing "active" class from each not selected button
        btns.forEach(function(btn){
            btn.classList.remove("active");
          // Setting background color for an active tab button 
           e.target.classList.add("active");
        })
        // Hiding all content
        content.forEach(function(cnt){
            cnt.classList.remove("active");
        })
        // Picking the selected button through dataset-id and adding the "active" class to it
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})