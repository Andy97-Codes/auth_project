<script>
import { Toaster, toast } from "svelte-sonner";
import {push, pop, replace} from 'svelte-spa-router';

let userName = '';
let userPassword = '';
async function createUser () {
    const res = await fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, userPassword }),
    });

    const data = await res.json();

    if(res.ok) {
        toast.success(data.message);
        userName = '';
        userPassword = '';
        push('/');
    } else {
        toast.error(data.message);
    }
}


</script>


<main>
    <h1>Sign up here!</h1>
    <h2>Create a new user</h2>

    <form on:submit|preventDefault={createUser}>
        <label for="uName">User Name</label>
        <input bind:value={ userName } type="text" id="uName" name="uName" required> <br>
        <label for="uPassword">Password</label>
        <input bind:value={ userPassword } type ="password" id="uPassword" name="uPassword" required> <br>
        <button type="submit">Create account</button>
    </form>
</main>

<h2>Already have an account? Go to login here!</h2>
<button type="button" on:click={() => push('/')}>Log in</button>

<style>

</style>