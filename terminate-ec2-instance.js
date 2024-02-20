
const {
  EC2Client,
  TerminateInstancesCommand
} = require('@aws-sdk/client-ec2')

function sendCommand (command) {
  const client = new EC2Client({ region: process.env.AWS_REGION })
  return client.send(command)
}


async function terminateInstance (instanceId) {
  const params = {
    InstanceIds : [instanceId]
  }
  const command = new TerminateInstancesCommand(params)
  return sendCommand(command)
}

terminateInstance('i-05b8332c26a5dbb4e').then(console.log)
