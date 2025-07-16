require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./src/models');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => logger.info(`Server running on ${PORT}`));
});

require('./src/modules/integration/worker');
