<template>
  <button  class="custom-button">{{ btnTitle }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnTitle: {
      type: String,
      default: "Submit",
    },
    
  },
};
</script>

<style scoped>

.custom-button {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: #560bad;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "BenchNine", Arial, sans-serif;
  font-size: 1em;
  font-size: 22px;
  line-height: 1em;
  margin: 15px 40px;
  outline: none;
  padding: 12px 40px 10px;
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
}

.custom-button:before,
.custom-button:after {
  border-color: transparent;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-style: solid;
  border-width: 0;
  content: "";
  height: 24px;
  position: absolute;
  width: 24px;
}

.custom-button:before {
  border-color: #560bad;
  border-left-width: 2px;
  border-top-width: 2px;
  left: -5px;
  top: -5px;
}

.custom-button:after {
  border-bottom-width: 2px;
  border-color: #560bad;
  border-right-width: 2px;
  bottom: -5px;
  right: -5px;
}

.custom-button:hover,
.custom-button.hover {
  background-color: #b5179e;
}

.custom-button:hover:before,
.custom-button.hover:before,
.custom-button:hover:after,
.custom-button.hover:after {
  height: 100%;
  width: 100%;
}
</style>