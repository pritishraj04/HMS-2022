<script>
  import { page } from "$app/stores";
  import { dummyApi } from "$lib/dummyData";

  const profiles = dummyApi.patients;
  let isEditing = false;
</script>

<svelte:head>
  <title>Admin | Profile - {$page.params.slug}</title>
</svelte:head>

<div class="container">
  {#each profiles as profile}
    {#if profile.id == $page.params.id}
      <!-- content here -->
      <div class="main-content">
        <h2 class="title">Patient Profile</h2>
        <div class="field">
          <h4>Photo</h4>
          {#if profile.profilePic}
            <img src={profile.profilePic} id="profilePic" alt="Profile pic" />
          {:else}
            <img
              src="https://picsum.photos/200/300"
              id="profilePic"
              alt="Profile pic"
            />
          {/if}
          {#if isEditing}
            <button class="btn-primary">Upload Image</button>
          {/if}
        </div>
        <div class="field">
          <label for="fullName">Name:</label>
          {#if isEditing}
            <input type="text" bind:value={profile.fullName} />
          {:else}
            {profile.fullName}
          {/if}
        </div>
        <div class="field">
          <label for="age">Age:</label>
          {#if isEditing}
            <input type="text" bind:value={profile.age} />
          {:else}
            {profile.age}
          {/if}
        </div>
        <div class="field">
          <label for="gender">Gender:</label>
          {#if isEditing}
            <input type="text" bind:value={profile.gender} />
          {:else}
            {profile.gender}
          {/if}
        </div>
        <div class="field">
          <label for="address">Address:</label>
          {#if isEditing}
            <input type="text" bind:value={profile.address} />
          {:else}
            {profile.address}
          {/if}
        </div>
        <div class="field">
          <label for="lastVisited">Last Visited:</label>
          {#if isEditing}
            <input type="date" bind:value={profile.lastVisited} />
          {:else}
            {profile.lastVisited}
          {/if}
        </div>
        <div class="field">
          <label for="status">Status:</label>
          {#if isEditing}
            <input type="text" bind:value={profile.status} />
          {:else}
            {profile.status}
          {/if}
        </div>
        <div class="field">
          {#if isEditing}
            <button class="btn-primary">Update</button>
          {/if}
          <button
            class={isEditing ? "btn-primary btn-red" : "btn-primary"}
            on:click={() => (isEditing = !isEditing)}
            >{isEditing ? "Cancel" : "Edit"}</button
          >
        </div>
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .main-content {
    background-color: $bg-gray;
    width: 100%;
    padding: 20px;
    @include border-radius;
  }
  .field {
    display: flex;
    gap: 10px;
    margin: 1rem;
    justify-content: space-between;
    input {
      width: 100%;
      max-width: 15rem;
    }
    &:nth-child(2) {
      display: block;
      h4 {
        margin-block: 5px;
      }
    }
  }
  #profilePic {
    width: 100%;
    max-width: 150px;
    @include border-radius;
  }
</style>
