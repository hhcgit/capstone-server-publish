BEGIN;

TRUNCATE
    users,
    RESTART IDENTITY CASCADE;

INSERT INTO users (username, password, name, avatar) VALUES (
    'demo',
    --password: pass1
    '$2a$12$zjujb7acz65IE0DOM1JJ6.iedBs1Opou6.9ADYHW.DwbfxQsw.niG',
    'Demo User',
    'https://res.cloudinary.com/squad-up/image/upload/v1563210869/avatars/avatar1_n22av6.png'
);

COMMIT;