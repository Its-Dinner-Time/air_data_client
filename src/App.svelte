<script lang="ts">
import { getAirApi } from './apis/air.api';
import { CITIES } from './apis/air.t';

const cities = Object.values(CITIES)

</script>

<main>
  {#each cities as city}
  <div>
    <h1 class="">{city} 미세먼지 정보</h1>

    {#await getAirApi(city)}
      <p>Loading...</p>
    {:then airdata} 
      <ul>
        {#each airdata as air}
        <li>
          <div>{air?.khaiGrade}</div>
          <div>{air?.khaiValue}</div>
        </li>
        {/each}
      </ul>
    {:catch error}
      <p>Error...!!</p>
    {/await}
  </div>
  {/each}
</main>

<style lang="postcss">
</style>