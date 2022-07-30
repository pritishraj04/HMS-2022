<script>
  import { dummyApi } from "$lib/dummyData.js";

  const patients = dummyApi.patients;
</script>

<svelte:head>
  <title>Admin | Patients</title>
</svelte:head>

<div class="container">
  <div class="header">
    <div class="title"><h1>Patients</h1></div>
  </div>
  <div class="patients">
    <table>
      <thead>
        <tr>
          <th> Photo </th>
          <th> Name </th>
          <th> ID </th>
          <th> Age </th>
          <th> Address </th>
          <th> Number </th>
          <th> Last Visit </th>
          <th> Status </th>
          <th> Actions </th>
        </tr>
      </thead>
      <tbody>
        {#each patients as patient, i}
          <tr>
            <td>
              <img
                class="profile_pic"
                src={patient.profilePic == null
                  ? "https://picsum.photos/200/300"
                  : patient.profilePic}
                alt="Profile Pic"
              /></td
            >
            <td>{patient.fullName}</td>
            <td>{patient.id}</td>
            <td>{patient.age}</td>
            <td>{patient.address}</td>
            <td>{patient.phone}</td>
            <td>{patient.lastVisited}</td>
            <td>{patient.status}</td>
            <td
              ><a href={"/admin/patients/" + patient.id}>View</a><button
                >Delete</button
              ></td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style lang="scss">
  .patients {
    width: 1040px;
    @include breakpoint(xl-desktop) {
      width: 840px;
    }
    @include breakpoint(lg-desktop) {
      width: 650px;
    }
    @include breakpoint(desktop) {
      width: 430px;
    }
    @include breakpoint(tablet) {
      width: 250px;
    }
    @include breakpoint(mobile) {
      width: 98%;
    }
    overflow-x: auto;
  }
  table,
  th,
  td {
    border: 2px solid $white;
    border-collapse: collapse;
    padding: 8px 10px;
  }
  th {
    background-color: $accent;
    color: $white;
  }
  td {
    background-color: $bg-gray;
  }
  table tr td {
    min-width: 95px;
  }
  table tr td:first-child,
  table tr td:nth-child(3),
  table tr td:nth-child(4) {
    min-width: 40px;
    text-align: center;
  }
  table tr td:last-child {
    min-width: 140px;
  }
  table tr td:nth-child(5) {
    min-width: 400px;
  }
  table tr td:nth-child(7) {
    min-width: 120px;
  }
  .profile_pic {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
</style>
