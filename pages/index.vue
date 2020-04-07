<script>
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Using Vue Bootstrap dependencies
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: 'DynamicGridLayout',
  data() {
    return { totalCol: 0, allColumns: [], dragElementId: "" };
  },
  methods: {
    // Add New Columnn Event
    addColumn() {
      let index = this.totalCol++;
      // Add new column into allCoumns array
      this.allColumns.push(
        <div
          class="resizable"
          id={this.totalCol}
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
    // Element drag start event
    onDragStart(event) {
      this.dragElementId = event.target.id;
    },
    // Element drag over event
    onDragOver(event) {
      event.preventDefault();
    },
    // Element drop event
    onDrop(event) {
      const draggableElement = document.getElementById(this.dragElementId);
      this.setTranslate(event.offsetX, event.offsetY, draggableElement);
    },
    // Assign styles to dragged element
    setTranslate(xPos, yPos, el) {
      el.style.position = "fixed";
      el.style.left = xPos + "px";
      el.style.top = yPos + "px";
    },
    // Remove column Event
    deleteDiv(ele) {
      let id = Number(ele.currentTarget.id);
      // Finding the index of selected element to remove from layout
      let index = this.allColumns.findIndex((x) => x.data.attrs.id === id);
      this.allColumns.splice(index, 1);
      this.totalCol--;
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
        {this.allColumns}
      </div>
    );
  },
};
</script>
