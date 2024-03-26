Feature: Login

@loginInvalido
Scenario: Login com usuário inválido
    Given Estou tentando realizar login no sistema
    When Passo um usuário e senha inválidos
    Then O sistema me notifca que as credencias não são válidas
    
@loginValido
Scenario: Login com usuário válido
    Given Estou tentando realizar login no sistema
    When Passo um usuário valido
    Then O sistema me autentica com sucesso