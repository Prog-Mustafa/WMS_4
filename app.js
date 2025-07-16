const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const logger = require('./src/utils/logger');
const authRoutes = require('./src/modules/auth/routes');
const itemRoutes = require('./src/modules/items/routes');
const poRoutes = require('./src/modules/purchaseOrders/routes');
const soRoutes = require('./src/modules/salesOrders/routes');
const receivingRoutes = require('./src/modules/receiving/routes');
const deliveryRoutes = require('./src/modules/deliveries/routes');
const transferRoutes = require('./src/modules/transfers/routes');
const countRoutes = require('./src/modules/cycleCounts/routes');
const integrationRoutes = require('./src/modules/integration/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));

app.use('/api', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/purchase-orders', poRoutes);
app.use('/api/sales-orders', soRoutes);
app.use('/api/receiving', receivingRoutes);
app.use('/api/deliveries', deliveryRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/cycle-counts', countRoutes);
app.use('/api/integration-logs', integrationRoutes);

app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ message: 'Server error' });
});

module.exports = app;
