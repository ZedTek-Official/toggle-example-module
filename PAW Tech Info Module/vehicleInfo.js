const { vehicleInfo } = require('./embedBuilder.js')

module.exports = {
    name: 'vehicle',
    execute(message, args){
        if (args[1].toLowerCase() === 'ae'){
            vehicleInfo('ae');
        }
        if (args[1].toLowerCase() === 'ax'){
            vehicleInfo('ax');
        }
        if (args[1].toLowerCase() === 'cx'){
            vehicleInfo('cx');
        }
        if (args[1].toLowerCase() === 'lx'){
            vehicleInfo('lx');
        }
        if (args[1].toLowerCase() === 'ox'){
            vehicleInfo('ox');
        }
        if (args[1].toLowerCase() === 'scorpio_x'){
            vehicleInfo('scorpio_x');
        }
        if (args[1].toLowerCase() === 'sx'){
            vehicleInfo('sx');
        }
        if (args[1].toLowerCase() === 'tx'){
            vehicleInfo('tx');
        }
        if (args[1].toLowerCase() === 'txl'){
            vehicleInfo('txl');
        }
        if (args[1].toLowerCase() === 'tx_max'){
            vehicleInfo('tx_max');
        }
        if (args[1].toLowerCase() === 'vx'){
            vehicleInfo('vx');
        }
        if (args[1].toLowerCase() === 'vxl'){
            vehicleInfo('vxl');
        }
        if (args[1].toLowerCase() === 'vxxl'){
            vehicleInfo('vxxl');
        }
    } 
}