DROP TABLE IF EXISTS transactions, staking, miners, tokens, users;


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(18,8) NOT NULL,
    transaction_type ENUM('purchase', 'stake', 'withdraw') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE miners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    miner_name VARCHAR(100) NOT NULL,
    hashrate DECIMAL(18,2) NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE staking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    staked_amount DECIMAL(18,8) NOT NULL,
    stake_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    unlock_date TIMESTAMP NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(18,8) NOT NULL,
    transaction_type ENUM('deposit', 'withdraw', 'reward') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
