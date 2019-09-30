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
              <span v-for="info of timeline.tags" v-bind:key="info">
              {{ info }}
              </span>
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
</style>
