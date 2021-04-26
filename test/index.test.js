//module
const index = require('../index');

//expect assertion style
const expect = require('chai').expect;

const fetchData = (data) => {
    fetch(`http://localhost:3001/users`)
        .then((response) => response.json())
        .then((json) => data);
};

//describe function
describe('Fetch', function () {
    it('should be an array', function () {
        fetchData((data) => {
            let newData = data;
        });
        expect(newData).to.be.a('array');
    });
});
