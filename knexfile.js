module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL  || 'postgres://localhost/knex_practice'
    
  },

};
