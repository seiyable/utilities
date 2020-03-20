const exec = require('child_process').exec;

const db = process.argv[2];
const collections = process.argv.slice(3);

if (!db) {
  console.error('No DB name is provided');
  return;
}

if (collections.length === 0) {
  console.error('No collection name is provided');
  return;
}

for (collection of collections) {
  const command = `mongoexport --db ${db} --collection ${collection} --out ${collection}.json`;
  exec(command, (err, stdout, stderr) => {
    console.log('command: ' + command);
    if (err) console.error(err);
    if (stderr) console.error(stderr);
    if (stdout) console.log(stdout);
  });
}
