<script>
  import { page } from "$app/stores";
  import { dummyApi } from "$lib/dummyData";

  const profile = dummyApi.doctors.filter(
    (data) => data.username === $page.params.slug
  )[0];
  let isEditing = false;
</script>

<svelte:head>
  <title>Admin | Profile - {$page.params.slug}</title>
</svelte:head>

<div class="container">
  <div class="main-content">
    <h2 class="title">Doctor Profile</h2>
    <div class="field">
      <h4>Photo</h4>
      {#if profile.profilePic === null}
        <img
          src="https://picsum.photos/200/300"
          id="profilePic"
          alt="Profile pic"
        />
      {:else}
        <img src={profile.profilePic} id="profilePic" alt="Profile pic" />
      {/if}
      {#if isEditing}
        <button class="btn-primary">Upload Image</button>
      {/if}
    </div>
    <div class="field">
      <label for="firstName">First Name:</label>
      {#if isEditing}
        <input type="text" bind:value={profile.firstName} />
      {:else}
        {profile.firstName}
      {/if}
    </div>
    <div class="field">
      <label for="lastName">Last Name:</label>
      {#if isEditing}
        <input type="text" bind:value={profile.lastName} />
      {:else}
        {profile.lastName}
      {/if}
    </div>
    <div class="field">
      <label for="speciality">Speciality:</label>
      {#if isEditing}
        <input type="text" bind:value={profile.speciality} />
      {:else}
        {profile.speciality}
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
