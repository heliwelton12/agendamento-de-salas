const bcrypt = require('bcrypt');

const senha = process.argv[2];

if (!senha) {
    console.error('Uso: node criptografar.js <senha>');
    process.exit(1);
}

const saltRounds = 10;

bcrypt.hash(senha, saltRounds, (err, hashedPassword) => {
    if (err) {
        console.error('Erro ao criptografar senha:', err);
        return;
    }

    console.log('Senha criptografada:', hashedPassword);
});
