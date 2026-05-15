<script>

let userName = '';
let userPassword = '';
async function createUser(userName, userPassword) {
    const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, userPassword }),
    });
}


</script>


<main>
    <h1>Sign up here!</h1>

    <form on:submit={createUser}>
        <label for="uName">User Name</label>
        <input value={ userName } type="text" name="uName" required> <br>
        <label for="uPassword">Password</label>
        <input value={ userPassword } type ="password" name="uPassword" required> <br>
        <button type="submit">Create account</button>
    </form>
</main>