window.onload = function() {

    function createLink() {
        // this is creating an anchor link
        let e = document.createElement('a');
        // this is the link is the text of the link.
        e.textContent = "Durham College";
        e.href = "https://durhamcollege.ca/"
        // this will open the website in a new tab.
        e.target = "_blank";
        // this will add the element to the body.
        document.body.append(e)
        
    }
    document.querySelector('#btn1').addEventListener('click', createLink);



    // declaring an array
    let students = ["Suwanya","Minodi","Anujana","Sehasna"];

    function createList() {
        // creating a list
        let list = document.createElement('ul');
        for (let i = 0; i < students.length; i++) {
            let item = document.createElement('li');
            item.textContent = students[i];
            list.append(item);
        }
        document.querySelector('#output').append(list);
    }
    document.querySelector('#btn2').addEventListener('click', createList)
};  
