<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  data() {
    return { lines: [0], totalCol: 0, allDiv: [], dragElementId: "" };
  },
  render(h) {
    return (
      <div class="container" onDragover={this.onDragOver} onDrop={this.onDrop}>
        <b-icon class="chevron-up-icon" icon="chevron-up"></b-icon>
        <b-icon class="chevron-down-icon" icon="chevron-down"></b-icon>
        <b-icon class="add-top-icon" icon="plus-circle-fill"></b-icon>
        <b-icon class="trash-icon" icon="trash"></b-icon>
        <b-icon class="settings-icon" icon="gear-fill"></b-icon>
        <b-icon class="add-bottom-icon" icon="plus-circle-fill"></b-icon>
        <b-icon class="plus-icon" icon="plus" onClick={this.addColumn}></b-icon>
        {this.allDiv}
      </div>
    );
  },
};
</script>
