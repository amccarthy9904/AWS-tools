
const {
  EC2Client,
  DescribeInstancesCommand
} = require('@aws-sdk/client-ec2')

function sendCommand (command) {
  const client = new EC2Client({ region: process.env.AWS_REGION })
  return client.send(command)
}

async function listInstances () {
  const command = new DescribeInstancesCommand({})
  const data = await sendCommand(command)
  return data.Reservations.reduce((i, r) => {
    return i.concat(r.Instances)
  }, [])
}

async function terminateInstance (instanceId) {
  // TODO: Terminate an instance with a given instanceId
}

listInstances().then(console.log)
// terminateInstance().then(console.log)
