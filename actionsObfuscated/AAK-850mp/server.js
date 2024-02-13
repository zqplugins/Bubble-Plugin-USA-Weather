async function(properties, context){
	function _0x3127(_0x1531ee, _0x439c21) {
    const _0x60c7df = _0x60c7();
    return _0x3127 = function (_0x3127ac, _0x14adf5) {
        _0x3127ac = _0x3127ac - 0x1de;
        let _0x25ee98 = _0x60c7df[_0x3127ac];
        return _0x25ee98;
    }, _0x3127(_0x1531ee, _0x439c21);
}
(function (_0x1e582f, _0x245e35) {
    const _0x2d77d2 = _0x3127, _0xeb4d53 = _0x1e582f();
    while (!![]) {
        try {
            const _0x1c58ba = parseInt(_0x2d77d2(0x1e4)) / 0x1 * (-parseInt(_0x2d77d2(0x1e3)) / 0x2) + parseInt(_0x2d77d2(0x1ed)) / 0x3 * (-parseInt(_0x2d77d2(0x1fa)) / 0x4) + parseInt(_0x2d77d2(0x1ea)) / 0x5 + -parseInt(_0x2d77d2(0x1de)) / 0x6 + -parseInt(_0x2d77d2(0x1f9)) / 0x7 * (parseInt(_0x2d77d2(0x1f5)) / 0x8) + parseInt(_0x2d77d2(0x1e7)) / 0x9 + -parseInt(_0x2d77d2(0x1ec)) / 0xa * (-parseInt(_0x2d77d2(0x1e1)) / 0xb);
            if (_0x1c58ba === _0x245e35)
                break;
            else
                _0xeb4d53['push'](_0xeb4d53['shift']());
        } catch (_0x456ddf) {
            _0xeb4d53['push'](_0xeb4d53['shift']());
        }
    }
}(_0x60c7, 0x624f9));
async function server(_0x2c0662, _0x3608c7) {
    const _0x2452d2 = _0x3127;
    let _0x19eb62 = require('nws-api-wrapper'), _0x566e37 = _0x2c0662[_0x2452d2(0x1f2)], _0x3ef21e = _0x2c0662[_0x2452d2(0x1f8)], _0x2a354b = _0x2c0662[_0x2452d2(0x1f7)];
    if (!_0x566e37 || !_0x3ef21e || !_0x2a354b)
        return;
    return _0x3608c7['v3']['async'](async _0x2d869b => {
        const _0x56898c = _0x2452d2;
        try {
            let _0x47e0a7 = await _0x19eb62[_0x56898c(0x1e6)](_0x566e37, _0x3ef21e, 0xe), _0x1943c8 = _0x2a354b[_0x56898c(0x1e5)](), _0x509a0e = Infinity, _0x406836 = -0x1;
            _0x47e0a7[_0x56898c(0x1ef)](_0xaee952 => new Date(_0xaee952['startTime']))[_0x56898c(0x1f4)]((_0x5dc860, _0x2341fb) => {
                const _0x27b3b6 = _0x56898c;
                let _0x5a0412 = _0x5dc860[_0x27b3b6(0x1e5)](), _0x45d960 = Math[_0x27b3b6(0x1e0)](_0x5a0412 - _0x1943c8);
                _0x45d960 < _0x509a0e && (_0x509a0e = _0x45d960, _0x406836 = _0x2341fb);
            });
            let _0xe28d0 = _0x47e0a7[_0x406836], _0x56c436 = /\b\d+(?:%|percent\b)/, _0x215e71 = _0xe28d0[_0x56898c(0x1f3)], _0xf721ff = _0x215e71[_0x56898c(0x1e2)](_0x56c436), _0xeb4220 = 0x0;
            if (_0xf721ff) {
                let _0x514d6b = _0xf721ff[0x0], _0x3229bd = _0x514d6b[_0x56898c(0x1ee)](0x0, -0x1);
                _0xeb4220 = parseInt(_0x3229bd);
            }
            let _0x453fa4 = {
                'name': _0xe28d0[_0x56898c(0x1fb)],
                'startTime': _0xe28d0[_0x56898c(0x1eb)],
                'endTime': _0xe28d0[_0x56898c(0x1f1)],
                'isDaytime': _0xe28d0[_0x56898c(0x1f0)],
                'temperature': _0xe28d0[_0x56898c(0x1e9)],
                'temperatureUnit': _0xe28d0[_0x56898c(0x1e8)],
                'windSpeed': _0xe28d0[_0x56898c(0x1df)],
                'windDirection': _0xe28d0[_0x56898c(0x1f6)],
                'icon': _0xe28d0['icon'],
                'shortForecast': _0xe28d0['shortForecast'],
                'detailedForecast': _0xe28d0[_0x56898c(0x1f3)],
                'precipitation': _0xeb4220
            };
            _0x2d869b(null, _0x453fa4);
        } catch (_0x5e7220) {
            _0x2d869b(_0x5e7220);
        }
    });
}
function _0x60c7() {
    const _0x171d98 = [
        'temperature',
        '35020oZBTWN',
        'startTime',
        '10VLzEqF',
        '3TJFsQr',
        'slice',
        'map',
        'isDaytime',
        'endTime',
        'latitude',
        'detailedForecast',
        'forEach',
        '14072jpGncr',
        'windDirection',
        'date',
        'longitude',
        '1022dKZhXI',
        '2207196DxdZUb',
        'name',
        '86184pgLSlE',
        'windSpeed',
        'abs',
        '17729558JsLKXA',
        'match',
        '844642uBWGXg',
        '1FwltQx',
        'getTime',
        'getForecast',
        '262773KBlpTU',
        'temperatureUnit'
    ];
    _0x60c7 = function () {
        return _0x171d98;
    };
    return _0x60c7();
}
	await server(properties, context);
}