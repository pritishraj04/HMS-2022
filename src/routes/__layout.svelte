<script>
  import "../app.scss";
  import { getStores } from "$app/stores";
  import { signOut, onAuthStateChanged } from "firebase/auth";
  import { onMount } from "svelte";
  import { auth } from "$src/Firebase";
  import publicRoutes from "$src/publicRoutes.json";
  import { goto } from "$app/navigation";
  import { loading } from "$lib/stores";
  import TiUser from "svelte-icons/ti/TiUser.svelte";
  import { clickOutside } from "$lib/clickOutside";
  let { session } = getStores();
  let accMenuOpen = false;
  let y;

  const accMenuToggle = () => {
    accMenuOpen = !accMenuOpen;
  };

  const accMenuClose = () => {
    accMenuOpen = false;
  };

  onMount(async () => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          session.set({ user });
        } else {
          session.set({ user: null });
          let currentLocation = window.location.pathname;
          if (!publicRoutes.includes(currentLocation)) {
            goto("/auth/login");
            return false;
          }
        }
      },
      (error) => {
        console.log(error);
        if (!publicRoutes.includes(currentLocation)) {
          goto("/auth/login");
          return false;
        }
      }
    );
  });

  async function logOut() {
    loading.set(true);
    await signOut(auth);
    await goto("/");
    loading.set(false);
  }
</script>

<svelte:window bind:scrollY={y} />

{#if $loading}
  <h1>Loading...</h1>
{:else}
  <header class={y >= 30 ? "fixed-header" : ""}>
    <nav class="container">
      <a href="/"><h2>Logo</h2></a>
      <ul class="menu">
        {#if $session["user"] != null}
          <li class="user" on:click={accMenuToggle}>
            <div class="icon"><TiUser /></div>
            <ul
              class="sub-menu"
              use:clickOutside
              on:click_outside={accMenuOpen && accMenuClose}
              style={accMenuOpen ? "display: flex;" : ""}
            >
              <li><a href="/">Account</a></li>
              <li><a href="/admin">Dashboard</a></li>
              <li>
                <button class="btn-primary logout" on:click={logOut}
                  >Log Out</button
                >
              </li>
            </ul>
          </li>
        {:else}
          <li><a href="/auth/login">Login</a></li>
          <li><a href="/auth/register">Register</a></li>
        {/if}
      </ul>
    </nav>
  </header>
  {#if y >= 30}
    <div class="filler" />
  {/if}
  <slot />
  <!-- <footer>
    <h3>Logo</h3>
  </footer> -->
{/if}

<style lang="scss">
  .fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    @include drop-shadow;
  }
  .filler {
    height: 6rem;
  }
  header {
    @include blur-bg;
    padding: 1rem 0;
    @include border-radius;
    transition: all 1s;
  }
  nav {
    display: flex;
    justify-content: space-between;
    .menu {
      display: flex;
      gap: 1.5rem;
    }
  }
  .user {
    position: relative;
    border: 1px solid $black;
    border-radius: 50%;
    cursor: pointer;
  }
  .sub-menu {
    position: absolute;
    top: 3rem;
    left: -8rem;
    background-color: $bg-gray;
    @include flex-column;
    align-items: center;
    @include border-radius;
    padding: 1rem;
    min-width: 10rem;
    gap: 0.9rem;
    display: none;
    &::before {
      position: absolute;
      content: "";
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 15px solid $bg-gray;
      top: -6px;
      right: 10px;
    }
  }
  .logout {
    width: 100%;
  }
  .icon {
    width: 2rem;
  }
</style>
