angular.module('ShoppingListApp', [])
            .controller('ShoppingListController', function() {
                this.toBuyItems = [];
                this.boughtItems = [];
                this.newItem = {
                    name: '',
                    quantity: ''
                };
                
                this.addItem = function() {
                    if (!this.newItem.name || !this.newItem.quantity) {
                        this.error = 'Please fill in both fields';
                        return;
                    }
                    this.toBuyItems.push({
                        name: this.newItem.name,
                        quantity: parseInt(this.newItem.quantity)
                    });
                    this.newItem = {
                        name: '',
                        quantity: ''
                    };
                    this.error = '';
                };
                
                this.buyItem = function(index) {
                    this.boughtItems.push(this.toBuyItems[index]);
                    this.toBuyItems.splice(index, 1);
                };
            });