import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({

        el: '#app',

        data: {
            currencies: {},
            euroAmount: null,
            toCurrency: null,
            fromCurrency: null,
            currencyAmount: null
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
                return result.toFixed(2);
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