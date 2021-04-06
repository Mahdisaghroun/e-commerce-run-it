const CracoLessPlugin = require('craco-less');

module.exports = {
      plugins: [
            {
                  plugin: CracoLessPlugin,
                  options: {
                        lessLoaderOptions: {
                              lessOptions: {
                                    modifyVars: { '@primary-color': ' #FC9904' },
                                    javascriptEnabled: true,
                              },
                        },
                  },
            },
      ],
};