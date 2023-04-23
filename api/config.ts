/**
 * Google Analytics query configurations
 *
 *
 * ! If you are deploying this with your own account
 * ! , then you will need to change this config file.
 * ! Don't put your privateKey inside this file directly!
 */
export default {
  viewId: '288544944',
  auth: {
    projectId: 'paropay',
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: 'paropay@paropay.iam.gserviceaccount.com',
  },
  allFilter: [
    '/services'; '/news'
  ],
  startDate: '2010-01-01',
}
