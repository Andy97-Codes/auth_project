<script>
import { toast } from "svelte-sonner";
import { preventDefault } from "svelte/legacy";
import {push, pop, replace} from 'svelte-spa-router';
import { nameOfUser } from '../../store/store.js';


let userName = '';
let userPassword = '';
async function logIn () {
    const res = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({ userName, userPassword })
    });
    const data = await res.json();
    console.log(data);

    if(res.ok) {
      toast.success(data.message);
      nameOfUser.set(data.userName);
      push('/home');
    } else {
        toast.error(data.message);
    }
}

</script>



<main>


</main>

<h1>Log in here</h1>

<form on:submit|preventDefault={logIn}>
    <label for="uName">User name</label>
    <input bind:value={ userName } type="text" id="uName"> <br>
    <label for="uPassword">Password</label>
    <input bind:value={ userPassword } type="password" id="uPassword"> <br>
    <button type="submit">Log in</button>
</form>

<h2>Dont have an account yet? sign up for one right here!</h2>
<button type="button" on:click={() => push('/signup')}>Sign up</button>



<style>

    
</style>