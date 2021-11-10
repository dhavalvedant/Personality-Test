$(document).ready(function(){
    $('#btnsubmit').click(function(){
        const user=$('#name').val();
        alert("welcome"+user);
        $('.image').attr('src',`https://joeschmoe.io/api/v1/${user}`);


    })
})