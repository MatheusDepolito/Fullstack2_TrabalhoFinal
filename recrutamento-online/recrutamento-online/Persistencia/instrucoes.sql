CREATE TABLE IF NOT EXISTS Candidato (
    cand_cpf VARCHAR(14) PRIMARY KEY,
    cand_nome VARCHAR(255),
    cand_endereco VARCHAR(255),
    cand_telefone VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS Vaga (
    vaga_id INT AUTO_INCREMENT PRIMARY KEY,
    vaga_cargo VARCHAR(255),
    vaga_salario DECIMAL(10, 2),
    vaga_cidade VARCHAR(100),
    vaga_quantidade INT
);

CREATE TABLE IF NOT EXISTS Candidato_Vaga (
    cv_id INT AUTO_INCREMENT PRIMARY KEY,
    cand_cpf VARCHAR(14),
    vaga_id INT,
    data_inscricao DATE,
    horario_inscricao TIME,
    FOREIGN KEY (cand_cpf) REFERENCES Candidato(cand_cpf),
    FOREIGN KEY (vaga_id) REFERENCES Vaga(vaga_id)
);
