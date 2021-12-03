<template>
  <div class="switch-size">
    <ul>
      <li>
        <button class="btn btn-size" @click="toggleSize">
          <svg viewBox="0 0 122.88 83.68" class="icon1">
            <defs>
              <style>.cls-1 {
                fill-rule: evenodd;
              }</style>
            </defs>
            <path class="cls-1"
                  d="M14.48,0H108.4a14.63,14.63,0,0,1,14.48,14.69V69A14.63,14.63,0,0,1,108.4,83.68H14.48A14.62,14.62,0,0,1,0,69V14.69A14.62,14.62,0,0,1,14.48,0Zm.28,7.59h93.36a7.27,7.27,0,0,1,7.25,7.24v54a7.27,7.27,0,0,1-7.25,7.25H14.76a7.27,7.27,0,0,1-7.25-7.25v-54a7.27,7.27,0,0,1,7.25-7.24Z" />
          </svg>
          <svg
            class="icon2"
            x="0px" y="0px"
            viewBox="0 0 55.832 55.832"
            xml:space="preserve">
              <g>
                <g>
                  <path d="M9.166,41.832H6.669C2.991,41.832,0,38.84,0,35.163V11.835c0-3.678,2.992-6.669,6.669-6.669h34.328
                    c3.678,0,6.669,2.992,6.669,6.669v3.164c0,0.552-0.448,1-1,1H14.835c-2.575,0-4.669,2.095-4.669,4.669v20.164
                    C10.166,41.385,9.718,41.832,9.166,41.832z M6.669,7.166C4.094,7.166,2,9.261,2,11.835v23.328c0,2.575,2.095,4.669,4.669,4.669
                    h1.497V20.669c0-3.678,2.992-6.669,6.669-6.669h30.831v-2.164c0-2.575-2.096-4.669-4.669-4.669H6.669V7.166z" />
                </g>
                <g>
                  <path d="M49.163,50.666H14.835c-3.678,0-6.669-2.992-6.669-6.669V20.669c0-3.678,2.992-6.669,6.669-6.669h34.328
                    c3.678,0,6.669,2.992,6.669,6.669v23.328C55.832,47.674,52.84,50.666,49.163,50.666z M14.835,15.999
                    c-2.575,0-4.669,2.095-4.669,4.669v23.328c0,2.575,2.095,4.669,4.669,4.669h34.328c2.575,0,4.669-2.095,4.669-4.669V20.669
                    c0-2.575-2.096-4.669-4.669-4.669L14.835,15.999L14.835,15.999z" />
                </g>
              </g>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["isSize"],
  methods: {
    toggleSize() {
      this.$emit("size", this.isSize);
      localStorage.setItem("isSize", true);
      localStorage.removeItem("isSize");

      const el = document.body;
      el.classList.toggle("size-body");
    }
  }
};
</script>

<style lang="scss" scoped>

.switch-size {
  height: 24px;
  padding: 3px;
  background: rgba(#194999, 0.4);

  display: flex;
  align-items: center;
  justify-content: flex-end;
}

ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

li {
  margin-left: 3px;
  line-height: 1;
  display: flex;
  align-items: center;
}

.btn-size {
  width: 20px;
  height: 20px;
  padding: 0;

  svg {
    width: 100%;
    height: 100%;
  }
}

.icon2 {
  display: none;
  transform: rotateY(180deg);
}

.size-body {
  .icon1 {
    display: none;
  }
  .icon2 {
    display: block;
  }
}

.icon2 {
  enable-background: new 0 0 55.832 55.832;
}
</style>
