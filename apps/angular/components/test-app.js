class TestAppController {
  constructor($http) {
    this.items = [];
    this.$http = $http;
  }

  $onInit() {
    console.time('fetch items');
    this.$http
      .get('data/list.json')
      .then((resp) => {
        console.timeEnd('fetch items');
        this.items = resp.data;
      });
  }
}

angular.module('test').component('testApp', {
  controller: TestAppController,
  controllerAs: 'vm',
  template: `
    <h3>Items count: {{vm.items.length}}</h3>
    <test-render-list items="vm.items"></test-render-list>
  `
});