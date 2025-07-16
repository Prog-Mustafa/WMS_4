const { Worker } = require('bullmq');
const Redis = require('ioredis');
const { IntegrationQueue, IntegrationLog } = require('../../models');
const sapService = require('../sap/sapService');
require('dotenv').config();

const connection = new Redis({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT });

const worker = new Worker('integration', async job => {
  const record = await IntegrationQueue.findByPk(job.data.id);
  if (!record) return;
  try {
    await sapService[`post${record.type}`](record.payload);
    await IntegrationLog.create({ queueId: record.id, status: 'SUCCESS', message: 'Posted' });
    await record.update({ status: 'SUCCESS' });
  } catch (err) {
    await IntegrationLog.create({ queueId: record.id, status: 'ERROR', message: err.message });
  }
}, { connection });

async function schedulePendingJobs() {
  const pending = await IntegrationQueue.findAll({ where: { status: 'PENDING' } });
  for (const rec of pending) {
    await worker.add('post', { id: rec.id });
  }
}

setInterval(schedulePendingJobs, 30000);
