Feature: Cadastro de usuário

Scenario: Cadastrar usuário
    Given o usuário acessa o menu de Cadastro
    When ele preenche os campos nome, email, senha, confirmação de senha e confirma
    Then o sistema exibe uma mensagem de sucesso