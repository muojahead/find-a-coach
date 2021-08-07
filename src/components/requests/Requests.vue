<template>
  <div>
    <page-title back title="Requestes"></page-title>
    <div class="container">
      <div class="requests-box">
        <p class="noReq" v-if="hasRequests">No Requests at The Moment</p>
        <div class="request" v-for="req in requests" :key="req">
          <p>
            User Name: <span>{{ req.name }}</span>
          </p>
          <p>
            Email: <span>{{ req.email }}</span>
          </p>
          <p>
            Message: <span>{{ req.msg }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requests: [],
    };
  },
  computed: {
    hasRequests() {
      return this.requests.length == 0;
    },
  },
  created() {
    const req = this.$store.getters["requests/theRequests"];
    this.requests = req;
  },
};
</script>

<style scoped>
.requests-box {
  background-color: var(--b-color);
  border-radius: 10px;
  overflow: hidden;
  width: 95%;
  max-width: 1000px;
  padding: 5px;
  margin: 20px auto;
}
.request {
  border-bottom: 1px solid gray;
  padding: 5px;
  margin: 10px auto;
}
.request p {
  color: #fff;
  font-size: var(--h3-font-size);
}
.request p span {
  color: var(--y-color);
  font-size: var(--h4-font-size);
}
.noReq {
  color: #fff;
  text-align: center;
  padding: 10px;
}
</style>