// googlepay.js
const googlePayClient = new google.payments.api.PaymentsClient({environment: 'TEST'});

const paymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA']
        },
        tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
                gateway: 'example', // Reemplaza con tu gateway
                merchantId: 'your-merchant-id' // Tu ID de comerciante
            }
        }
    }],
    merchantInfo: {
        merchantId: 'your-merchant-id',
        merchantName: 'Your Merchant Name'
    },
    transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '10.00',
        currencyCode: 'USD',
        countryCode: 'US'
    }
};

document.getElementById('googlePayButton').addEventListener('click', function() {
    googlePayClient.loadPaymentData(paymentDataRequest)
        .then(function(paymentData) {
            // Maneja la respuesta de pago aquí
            console.log(paymentData);
        })
        .catch(function(err) {
            console.error(err);
        });
});

