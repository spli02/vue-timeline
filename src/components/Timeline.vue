<template>
  <div class="timeline">
    <table>
      <thead>
        <tr>
            <th>About</th>
            <th>Name</th>
            <th>Registered Date</th>
            <th>Tag</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="timeline in timelines" :key="timeline._id">
            <td>{{ timeline.about }}</td>
            <td>{{ timeline.name.first }} {{ timeline.name.last }}</td>
            <td>{{ timeline.registered }}</td>
            <td>
              <p class="timeline-tag" v-for="info of timeline.tags" v-bind:key="info">
              {{ info }}
              </p>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import timelines from '../assets/timeline.json';

export default {
  name: "timeline",
  data() {
    return {
      timelines,
      tags: timelines.tags
    };
  },
};
</script>

<style>
.timeline-tag{
  margin: 1rem;
  padding: 0 .5rem;
  border: 1px solid #D1D1D1;
  border-radius: .2em;
  text-align: center;
}
</style>
