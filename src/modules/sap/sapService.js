const axios = require('axios');
const { IntegrationQueue } = require('../../models');
require('dotenv').config();

const sap = axios.create({
  baseURL: process.env.SAP_URL,
  auth: { username: process.env.SAP_USER, password: process.env.SAP_PASS },
});

async function postWithQueue(endpoint, data) {
  try {
    await sap.post(endpoint, data);
    return true;
  } catch (err) {
    await IntegrationQueue.create({ type: endpoint, payload: data, status: 'PENDING' });
    return false;
  }
}

module.exports = {
  fetchItemsFromSAP: () => sap.get('/items').then(r => r.data),
  fetchWarehousesFromSAP: () => sap.get('/warehouses').then(r => r.data),
  fetchPartnersFromSAP: () => sap.get('/partners').then(r => r.data),
  postGRPO: data => postWithQueue('/grpo', data),
  postDelivery: data => postWithQueue('/delivery', data),
  postInventoryTransfer: data => postWithQueue('/transfer', data),
  postInventoryCounting: data => postWithQueue('/counting', data),
};
