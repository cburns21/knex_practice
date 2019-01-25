
exports.seed = function(knex, Promise) {
  return knex('practice').del()
    .then(function () {
      return knex('practice').insert([
        {id: 1, name: 'Snap'},
        {id: 2, name: 'Crackle'},
        {id: 3, name: 'Pop'
      ]);
    });
};
