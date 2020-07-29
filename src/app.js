import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({

        el: '#app',

        data: {
            currencies: {},
            euroAmount: 0,
            toCurrency: 0,
            fromCurrency: 0,
            currencyAmount: 0
        },

        mounted: function () {
            this.fetchCurrencies();
        },

        computed: {

            calculateFromEuro: function () {
                const result = this.euroAmount * this.toCurrency;
                return result.toFixed(2);
            },

            calculateToEuro: function () {
                const result = this.currencyAmount / this.fromCurrency;
                if (this.fromCurrency === 0) {
                    return 0.00.toFixed(2);
                } else {
                return result.toFixed(2);
                }
            }
        },

        methods: {

            fetchCurrencies: function () {
                fetch("https://api.exchangeratesapi.io/latest")
                    .then(response => response.json())
                    .then(data => this.currencies = data);
            }

        }

    })
});