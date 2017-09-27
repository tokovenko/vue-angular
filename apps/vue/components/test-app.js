class TestAppController {
  constructor() {
    this.items = [];
    console.time('fetch items');
    fetch('/data/list.json')
      .then(resp => resp.json())
      .then((items) => {
        console.timeEnd('fetch items');
        this.items = items;
      });
  }
}

Vue.component('test-app', {
  template: `
    <div>
      <h3>Items count: {{items.length}}</h3>
      <test-render-list :items="items"></test-render-list>
    </div>
  `,
  data: () => new TestAppController
});


Vue.component('test-render-list', {
  props: ['items'],
  template: `
    <table border="1" style="display: inline-block; max-height: 600px; overflow-y: auto;">
      <thead>
        <tr>
          <td>ID</td>
          <td>Item</td>
          <td>Btns</td>
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{item.id}}</td>
        <td>
          <div>{{item.title}}</div>
          <div>{{item.description}}</div>
          <div>Is Enabled: {{item.isEnabled}}</div>
          <div>Geo: {{item.geo[0]}}, {{item.geo[1]}}</div>
        </td>
        <td>
          <button v-on:click="toggleStatus(item)">Toggle Status</button>
          <button v-on:click="removeItem(item)">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  methods: {
    toggleStatus(item) {
      item.isEnabled = !item.isEnabled;
    },
    removeItem(item) {
      const index = this.items.indexOf(item);
      if(index > -1) {
        this.items.splice(index, 1);
      }
    }
  }
})


new Vue({
  el: '#test-app'
});