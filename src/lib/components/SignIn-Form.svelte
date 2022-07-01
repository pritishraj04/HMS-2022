<script>
  import { createEventDispatcher } from "svelte";
  let email, password;
  const dispatcher = createEventDispatcher();
  function login() {
    dispatcher("login", {
      email,
      password,
    });
  }
</script>

<div class="form-container">
  <form method="post">
    <input
      bind:value={email}
      type="email"
      labelText="Email"
      placeholder="Enter your email"
      name="email"
    />
    <div class="space" />
    <input
      type="password"
      labelText="Password"
      bind:value={password}
      placeholder="Enter password"
      tooltipAlignment="start"
      tooltipPosition="left"
      name="password"
    />
    <div class="space" />
    <button class="btn-primary" size="small" on:click|preventDefault={login}
      >Sign In</button
    >
  </form>
</div>

<style lang="scss">
  form {
    input {
      min-width: 30vw;
    }
    button {
      min-width: 30vw;
    }
  }
  .form-container .space {
    margin: 20px 0;
  }
</style>
