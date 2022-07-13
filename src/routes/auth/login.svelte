<script>
  import SignIn from "$comp/SignIn-Form.svelte";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth, userDoc } from "$src/Firebase";
  import { goto } from "$app/navigation";
  import { setDoc } from "firebase/firestore/lite";
  import { loading } from "$lib/stores";
  let error;
  async function signIn(event) {
    loading.set(true);
    try {
      let user = await signInWithEmailAndPassword(
        auth,
        event.detail.email,
        event.detail.password
      );
      await setDoc(userDoc(auth.currentUser.uid), {
        username: user.user.displayName,
        email: user.user.email,
      });
      await goto("/admin");
      loading.set(false);
    } catch (error) {
      console.log("error signin in", error.message);
      error = error.message;
      loading.set(false);
    }
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>
<div>
  <div class="header">
    <h4>Login</h4>
  </div>
  <div class="signin-form">
    {#if error}
      <div class="notification-block">
        <p>{error}</p>
      </div>
    {/if}
    <SignIn on:login={signIn} />
    <div>
      Does not have an account? <a href="/auth/register">Sign Up</a>
    </div>
  </div>
</div>

<style lang="scss">
  .header {
    padding: 2em 0;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $accent;
    h4 {
      color: $white;
      font-weight: 600;
      font-size: 3rem;
    }
  }
  .signin-form {
    min-height: 80vh;
    display: grid;
    place-items: center;
  }
  .notification-block {
    min-width: 20vw;
    padding: 1.2em 0.75em;
    border-radius: 5px;
    background-color: #fe634e;
  }
  .notification-block p {
    color: $white;
  }
</style>
