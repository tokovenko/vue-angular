class TestRenderListController {
  toggleStatus(item) {
    item.isEnabled = !item.isEnabled;
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }
}

angular.module('test').component('testRenderList', {
  controller: TestRenderListController,
  controllerAs: 'vm',
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
      <tr ng-repeat="item in vm.items track by item.id">
        <td>{{item.id}}</td>
        <td>
          <div>{{item.title}}</div>
          <div>{{item.description}}</div>
          <div>Is Enabled: {{item.isEnabled}}</div>
          <div>Geo: {{item.geo[0]}}, {{item.geo[1]}}</div>
        </td>
        <td>
          <button ng-click="vm.toggleStatus(item)">Toggle Status</button>
          <button ng-click="vm.removeItem(item)">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
  bindings: {
    items: '='
  }
});