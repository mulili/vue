<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="stylus" scoped>
@import '~@style/variables.styl';

.search {
  height: 0.72rem;
  background-color: $bgColor;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  .search-input {
    width: 100%;
    height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;

    &::placeholder {
      color: #ccc;
    }
  }
}
</style>
