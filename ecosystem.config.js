module.exports = {
  apps: [{
    name: 'FEC',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-219-207-105.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/rsa_id.pem',
      ref: 'origin/master',
      repo: 'https://github.com/threetexansandacanadian/relatedProducts.git',
      path: '/home/ubuntu/FEC',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}