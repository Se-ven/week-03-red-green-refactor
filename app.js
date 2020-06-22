module.exports = {
    smallCar: {
        engineSize: 4,
        fuelType: 'diesel',
    },


    calculateVehicleRating: function (vehicle) {

        let smallCar = {
            engineSize: 4,
            fuelType: 'diesel',
        }

        let vehicles = [];
        vehicles.push(smallCar);


        let rating = 0;

        switch (vehicle.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating = 10;
                break;
            case 5:
            case 6:
                rating = 8;
                break;
            case 7:
            case 8:
                rating = 6;
                break;
            default:
                break;

        }

        if (vehicle.fuelType == 'diesel') {
            rating = rating

        }


        return rating;


    }




};


