const lista=document.getElementById("panels-group");

Sortable.create(lista,{
    // handle: ".handle",
    // animation: 150,
    store: {
        get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group.name);
            return order ? order.split('|') : [];
        },
        set: function (sortable) {
            var order = sortable.toArray();
            localStorage.setItem(sortable.options.group.name, order.join('|'));
        }
    }
})