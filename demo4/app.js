const Sequelize = require('sequelize')
const config = require('./config')

// ORM for nodejs
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

// define Pet model
const Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
  timestamps: false
})

const now = Date.now()

// insert a record
Pet.create({
  id: `g-${now}`,
  name: 'Gaffey',
  gender: false,
  birth: '2018-04-12',
  createdAt: now,
  updatedAt: now,
  version: 0,
}).then(p => {
  console.log(`Created success: ${JSON.stringify(p)}`)
}).catch(e => {
  console.log(`Created failed: ${e}`)
})

// select * from pets
Pet.findAll({
  where: {
    name: 'Gaffey'
  }
}).then(pets => {
  console.log(`Find ${pets.length} pets:`)
  for (const pet of pets) {
    console.log(JSON.stringify(pet))
  }
})