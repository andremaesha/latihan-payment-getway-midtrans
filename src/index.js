const midtransClient = require("midtrans-client");
const dotenv = require("dotenv");

dotenv.config();

const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.SERVER_KEY,
});

const parameter = {
    transaction_details: {
        order_id: "asjhfiojlakjkldaje12312",
        gross_amount: 10000,
    },
    credit_card: {
        secure: true,
    },
    customer_details: {
        first_name: "Andre",
        last_name: "Maesha",
        email: "try@trytry.com",
        phone: "08111222333",
    },
};

snap.createTransaction(parameter)
    .then((transaction) => {
        const transactionToken = transaction;
        console.log("Transaction: ", transactionToken);
    })
    .catch((err) => console.log(err.message));
