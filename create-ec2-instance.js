// Imports
const {
  EC2Client,
  CreateSecurityGroupCommand
} = require('@aws-sdk/client-ec2')

const helpers = require('./helpers')

function sendCommand (command) {
  // Create new client with region
  const client = new EC2Client({region: process.env.AWS_REGION})
  return client.send(command)
  // TODO: Return send command
}

// Declare local variables
const sgName = 'hamster_sg'
const keyName = 'hamster_key'

// Do all the things together
async function execute () {
  try {
    await createSecurityGroup(sgName)
    const keyPair = await createKeyPair(keyName)
    await helpers.persistKeyPair(keyPair)
    const data = await createInstance(sgName, keyName)
    console.log('Created instance with:', data)
  } catch (err) {
    console.error('Failed to create instance with:', err)
  }
}

async function createSecurityGroup (sgName) {
  // Implement sg creation & setting SSH rule
  const sgParams = {
    Description: sgName,
    GroupName: sgName
  }
  const createCommand = new CreateSecurityGroupCommand(sgParams)
  const data = await sendCommand(createCommand)
}

async function createKeyPair (keyName) {
  // TODO: Create keypair
}

async function createInstance (sgName, keyName) {
  // TODO: create ec2 instance
}
