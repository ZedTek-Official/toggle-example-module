const { vehicleInfo } = require('./embedBuilder.js')

module.exports = {
    name: 'vehicle',
    execute(message, args){
        if (args[0].toLowerCase() === 'ae'){
            vehicleInfo('ae');
        }
        if (args[0].toLowerCase() === 'ax'){
            vehicleInfo('ax');
        }
        if (args[0].toLowerCase() === 'cx'){
            vehicleInfo('cx');
        }
        if (args[0].toLowerCase() === 'lx'){
            vehicleInfo('lx');
        }
        if (args[0].toLowerCase() === 'ox'){
            vehicleInfo('ox');
        }
        if (args[0].toLowerCase() === 'scorpio_x'){
            vehicleInfo('scorpio_x');
        }
        if (args[0].toLowerCase() === 'sx'){
            vehicleInfo('sx');
        }
        if (args[0].toLowerCase() === 'tx'){
            vehicleInfo('tx');
        }
        if (args[0].toLowerCase() === 'txl'){
            vehicleInfo('txl');
        }
        if (args[0].toLowerCase() === 'tx_max'){
            vehicleInfo('tx_max');
        }
        if (args[0].toLowerCase() === 'vx'){
            vehicleInfo('vx');
        }
        if (args[0].toLowerCase() === 'vxl'){
            vehicleInfo('vxl');
        }
        if (args[0].toLowerCase() === 'vxxl'){
            vehicleInfo('vxxl');
        }
    } 
}