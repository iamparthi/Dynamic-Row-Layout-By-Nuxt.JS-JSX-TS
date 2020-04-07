<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  data() {
    return { lines: [0], totalCol: 0, allDiv: [], dragElementId: "" };
  },
  methods: {
    addColumn() {
      let index = this.totalCol++;
      this.allDiv.push(
        <div
          class="resizable"
          id={index}
          draggable="true"
          onDrag={this.onDragStart}
        >
          <b-icon
            class="trash-icon"
            icon="trash"
            onClick={this.deleteDiv}
            id={index}
          ></b-icon>
          <b-icon
            class="arrows-move-icon"
            icon="arrows-move"
            id={index}
          ></b-icon>
        </div>
      );
    },
    onDragStart(event) {
      this.dragElementId = event.target.id;
    },
    onDragOver(event) {
      event.preventDefault();
    },
    onDrop(event) {
      const draggableElement = document.getElementById(this.dragElementId);
      this.setTranslate(event.offsetX, event.offsetY, draggableElement);
    },
    setTranslate(xPos, yPos, el) {
      el.style.position = "fixed";
      el.style.left = xPos + "px";
      el.style.top = yPos + "px";
    },
    deleteDiv(ele) {
      let id = Number(ele.currentTarget.id);
      let index = this.allDiv.findIndex((x) => x.data.attrs.id === id);
      this.allDiv.splice(index, 1);
    },
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
