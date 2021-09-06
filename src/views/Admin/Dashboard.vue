<template>
  <div class="dashboard container">
      <div class="row">
          <div class="col-12">
              <h1>This is the admin Dashboard</h1>
                <div class="row">
                    <div class="col-12">
                        <router-link :to="{name:'Pages'}" >
                            Pages
                        </router-link>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
  }
}
</script>

<style scoped>
</style>
