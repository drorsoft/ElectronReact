const { proxy } = require('valtio');

const state = proxy({ files: [] });

export default state;
