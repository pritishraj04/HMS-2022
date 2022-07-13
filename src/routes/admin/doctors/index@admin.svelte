<script>
  import { dummyApi } from "$lib/dummyData";

  const doctors = dummyApi.doctors;
</script>

<svelte:head>
  <title>Admin | Doctors</title>
</svelte:head>

<div class="container">
  <div class="doctors">
    {#each doctors as doctor}
      <div class="doctor-single">
        <div class="img-box">
          <img
            src={doctor.profilePic == null
              ? "https://picsum.photos/200/300"
              : doctor.profilePic}
            alt="Profile Pic"
          />
        </div>
        <div class="info-box">
          <h3>Dr. {doctor.firstName} {doctor.lastName}</h3>
          <h6>{doctor.speciality}</h6>
          <p>{doctor.address}</p>
          <a class="btn-primary" href={`/admin/doctors/${doctor.username}`}
            >View Profile</a
          >
        </div>
      </div>
    {:else}
      <!-- empty list -->
    {/each}
  </div>
</div>

<style lang="scss">
  .doctors {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @include breakpoint(desktop) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include breakpoint(tablet) {
      grid-template-columns: repeat(1, 1fr);
    }
    .doctor-single {
      background-color: $bg-gray;
      padding: 10px 15px;
      @include border-radius;
      max-width: 280px;
    }
    .img-box {
      width: 100%;
      img {
        display: block;
        width: 100%;
        max-width: 250px;
        @include border-radius;
        margin: 10px auto;
      }
    }
    .info-box {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
