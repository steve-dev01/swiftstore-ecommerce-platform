CREATE TABLE role(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(36) NOT NULL,
    created_datetime TIMESTAMP DEFAULT NOW(),
    last_updated_datetime TIMESTAMP DEFAULT NOW()
);

INSERT INTO role(name)
VALUES('user'), ('admin'), ('staff');

CREATE TABLE user_account(
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(36) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    display_name VARCHAR(36) NOT NULL,
    password CHAR(60) NOT NULL,
    role_id INT NOT NULL,
    created_datetime TIMESTAMP DEFAULT NOW(),
    last_updated_datetime TIMESTAMP DEFAULT NOW(),
    last_login_datetime TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(role_id) REFERENCES role(id),
    UNIQUE(username, email)
);
