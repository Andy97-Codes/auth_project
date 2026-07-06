<script>
import SignUp from "./components/SignUp/SignUp.svelte";
import LogIn from "./components/LogIn/LogIn.svelte";
import Home from "./components/Home/Home.svelte";
import { Toaster, toast } from "svelte-sonner";
import Router from 'svelte-spa-router';

const routes = {
    '/': LogIn,

    '/signup': SignUp,

    '/home': Home,
}

</script>


<main>
<Toaster position="bottom-right" richColors />
<Router {routes}/>
</main>

 



