var columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true, rowGroup: true},
    {headerName: "Model", field: 'model', sortable: true, filter: true},
    {headerName: "Price", field: 'price', sortable: true, filter: true}
];

var rowData = [
    {make: 'Toyota', model: 'Prius', price: 28000},
    {make: 'Ford', model: 'Bronco', price: 32000},
    {make: 'Ford', model: 'Fiesta', price: 14000},
    {make: 'Dodge', model: 'Charger', price: 45000},
    {make: 'Toyota', model: 'Yaris', price: 18000},
]

var rowStyle = { 'background-color': 'green'}

var gridOptions = {
    // PROPERTIES
    // Objects like myRowData and myColDefs would be created in your application
    rowData: rowData,
    columnDefs: columnDefs,
    // rowClassRules: {
        // 'cheap': function(params) {
        //     var howMuch = params.price;
        //     return howMuch < 20000;
        // },
    //     'spensive': 'data.price >=30000'
    // },

    pagination: true,
    rowSelection: 'single',

    // EVENTS
    // Add event handlers
    onRowClicked: function(event) { console.log('A row was clicked'); },
    onColumnResized: function(event) { console.log('A column was resized'); },
    onGridReady: function(event) { console.log('The grid is now ready'); },

    // autoGroupColumnDef: autoGroupColumnDef,
    rowStyle:rowStyle,
    // rowClassRules:rowClassRules
    // rowSelection: 'multiple',
    // groupSelectsChildren: true
};




var eGridDiv = document.querySelector('#myGrid');

new agGrid.Grid(eGridDiv, gridOptions);

// agGrid.simpleHttpRequest ( {
//     url: 'https://api.myjson.com/bins/15psn9'
// })

//     .then(function(data) {
//         gridOptions.api.setRowData(data);
//     })
// function getSelectedRows () {
//     var selectedNodes = gridOptions.api.getSelectedNodes();
//     var selectedData = selectedNodes.map(node => node.data);
//     var selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join (', ');
//     alert ('Selected nodes: ' + selectedDataStringPresentation);
// }