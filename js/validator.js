// function validate() {
//     setTimeout(() => {
//         window.location.href = 'mood.html';
//     }, 4000);
// }

async function validate() {
    // AJAX only if there are no errors
    var form = event.target;
    var connection = await fetch('../create-user.php', {
        method: "POST",
        body: new FormData(form)
    })
    if (connection.status != 200) {
        alert('contact system admin');
        return;
    }
    console.log(connection);
    location.href = "mood.php";
}
