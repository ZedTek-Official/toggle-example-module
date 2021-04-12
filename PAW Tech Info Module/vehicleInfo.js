const { vehicleInfo } = require('./embedBuilder.js')

module.exports = {
    name: 'vehicle',
    execute(message, args){
        if (args[1] === 'ae'){
            message.channel.send(vehicleInfo('ae'));
        }
        if (args[1] === 'ax'){
            vehicleInfo('ax');
        }
        if (args[1] === 'cx'){
            vehicleInfo('cx');
        }
        if (args[1] === 'lx'){
            vehicleInfo('lx');
        }
        if (args[1] === 'ox'){
            vehicleInfo('ox');
        }
        if (args[1] === 'scorpio_x'){
            vehicleInfo('scorpio_x');
        }
        if (args[1] === 'sx'){
            vehicleInfo('sx');
        }
        if (args[1] === 'tx'){
            vehicleInfo('tx');
        }
        if (args[1] === 'txl'){
            vehicleInfo('txl');
        }
        if (args[1] === 'tx_max'){
            vehicleInfo('tx_max');
        }
        if (args[1] === 'vx'){
            vehicleInfo('vx');
        }
        if (args[1] === 'vxl'){
            vehicleInfo('vxl');
        }
        if (args[1] === 'vxxl'){
            vehicleInfo('vxxl');
        }
    } 
}