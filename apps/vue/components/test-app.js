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



