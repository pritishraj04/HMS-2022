<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  let username, email, password;

  function signup() {
    dispatch("signup", {
      username,
      email,
      password,
    });
  }
</script>

<div class="form">
  <form method="post">
    <input
      type="text"
      bind:value={username}
      labelText="Username"
      placeholder="Enter your username"
      name="username"
    />
    <div class="space" />
    <input
      type="email"
      bind:value={email}
      labelText="Email address"
      placeholder="Enter your email"
      name="email"
    />
    <div class="space" />
    <input
      type="password"
      bind:value={password}
      tooltipAlignment="start"
      tooltipPosition="left"
      labelText="Password"
      placeholder="Enter password"
      name="password"
    />
    <div class="space" />
    <button class="btn-primary" on:click|preventDefault={signup}>Sign Up</button
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
    .space {
      margin: 0.6em 0;
    }
  }
</style>
