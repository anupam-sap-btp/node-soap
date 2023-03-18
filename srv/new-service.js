const cds = require('@sap/cds');
// const { parseString } = require('xml2js');

module.exports = cds.service.impl(async (srv) => {
    srv.on('checkisbn', (req) => {
        console.log('ISBN');

        const soap = require('soap');

        const wsdl = 'http://webservices.daehosting.com/services/isbnservice.wso?wsdl';

        const args = {'sISBN': req.data.isbn};

        soap.createClient(wsdl, {}, (err, client) => {
            client.IsValidISBN13(args, (err, result) => {
                console.log(result);
            });
        });

        return 'ISBN';
    });

});