async function(properties, context){
	function _0x419b() {
    const _0x228c10 = [
        'isDaytime',
        '521940xYOzLU',
        'temperatureUnit',
        '4qbeYjE',
        'match',
        'longitude',
        'async',
        'startTime',
        '2562938noYIGj',
        '6XoYUgF',
        'shortForecast',
        'name',
        '1140705QyxeSX',
        'temperature',
        '8dGaGQH',
        'icon',
        '3915970rJUdZG',
        '37918BsJBwg',
        'getForecast',
        'detailedForecast',
        'latitude',
        'windSpeed',
        '2200554BBvOYC',
        '391148TDEeri'
    ];
    _0x419b = function () {
        return _0x228c10;
    };
    return _0x419b();
}
function _0x1554(_0x3b9a7e, _0x3e53d8) {
    const _0x419bb3 = _0x419b();
    return _0x1554 = function (_0x155410, _0x55f75b) {
        _0x155410 = _0x155410 - 0x112;
        let _0x47c467 = _0x419bb3[_0x155410];
        return _0x47c467;
    }, _0x1554(_0x3b9a7e, _0x3e53d8);
}
(function (_0x4479f4, _0x13b825) {
    const _0x2bde49 = _0x1554, _0x5c45a7 = _0x4479f4();
    while (!![]) {
        try {
            const _0x49eafb = parseInt(_0x2bde49(0x122)) / 0x1 + parseInt(_0x2bde49(0x128)) / 0x2 * (parseInt(_0x2bde49(0x11a)) / 0x3) + parseInt(_0x2bde49(0x114)) / 0x4 * (parseInt(_0x2bde49(0x11d)) / 0x5) + -parseInt(_0x2bde49(0x112)) / 0x6 + -parseInt(_0x2bde49(0x119)) / 0x7 + parseInt(_0x2bde49(0x11f)) / 0x8 * (-parseInt(_0x2bde49(0x127)) / 0x9) + parseInt(_0x2bde49(0x121)) / 0xa;
            if (_0x49eafb === _0x13b825)
                break;
            else
                _0x5c45a7['push'](_0x5c45a7['shift']());
        } catch (_0x34788b) {
            _0x5c45a7['push'](_0x5c45a7['shift']());
        }
    }
}(_0x419b, 0x55bc6));
async function server(_0x45c339, _0x22e4f4) {
    const _0x2057f9 = _0x1554;
    let _0x3433c0 = require('nws-api-wrapper'), _0x53a53f = _0x45c339[_0x2057f9(0x125)], _0x2c3411 = _0x45c339[_0x2057f9(0x116)];
    if (!_0x53a53f || !_0x2c3411)
        return;
    return _0x22e4f4['v3'][_0x2057f9(0x117)](async _0x3fa632 => {
        const _0xf756ed = _0x2057f9;
        try {
            let _0x557953 = await _0x3433c0[_0xf756ed(0x123)](_0x53a53f, _0x2c3411, 0x1), _0xb795e4 = _0x557953[0x0];
            if (!_0xb795e4)
                throw Error('Couldn\x27t\x20get\x20weather');
            let _0x221390 = /\b\d+(?:%|percent\b)/, _0x40b163 = _0xb795e4[_0xf756ed(0x124)], _0x3e4d62 = _0x40b163[_0xf756ed(0x115)](_0x221390), _0x2f2971 = 0x0;
            if (_0x3e4d62) {
                let _0x3d3331 = _0x3e4d62[0x0], _0x12eb98 = _0x3d3331['slice'](0x0, -0x1);
                _0x2f2971 = parseInt(_0x12eb98);
            }
            let _0x1f5382 = {
                'name': _0xb795e4[_0xf756ed(0x11c)],
                'startTime': _0xb795e4[_0xf756ed(0x118)],
                'endTime': _0xb795e4['endTime'],
                'isDaytime': _0xb795e4[_0xf756ed(0x129)],
                'temperature': _0xb795e4[_0xf756ed(0x11e)],
                'temperatureUnit': _0xb795e4[_0xf756ed(0x113)],
                'windSpeed': _0xb795e4[_0xf756ed(0x126)],
                'windDirection': _0xb795e4['windDirection'],
                'icon': _0xb795e4[_0xf756ed(0x120)],
                'shortForecast': _0xb795e4[_0xf756ed(0x11b)],
                'detailedForecast': _0xb795e4['detailedForecast'],
                'precipitation': _0x2f2971
            };
            _0x3fa632(null, _0x1f5382);
        } catch (_0x48bb2a) {
            _0x3fa632(_0x48bb2a);
        }
    });
}
	await server(properties, context);
}