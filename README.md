# 📚 Branches

Vamos usar o padrão de develop/feat/fix para todas as branchs que forem criadas. Desse modo, pode-se ter ideia de sua funcionalidade. Portanto, usem nomes descritivos e curtos.

## Descrição das branches

**main** - É a branch principal do projeto, onde a nossa aplicação estará rodando.

**release** - Serve pata testar features relacionadas que estão acumuladas na branch *develop*. Se os testes ocorrerem bem, é daqui que o código irá a branch *main*

**develop** - É a branch principal do desenvolvedor, onde serão jogadas as features.

**feat/funcionalidade** - Aqui teremos as funcionalidades que cada dev for desenvolver. Tente sempre manter um nome curto e descritivo, exemplo: *feat/cadastro*. Essa branch é temporária e, quando for feito o merge, ela será apagada.

**hotfix/funcionalidade** - Serve para consertar algum bug em produção(na branch main). Raramente vamos usar, e também é temporária.

## Considerações

- SEMPRE FAÇA UM **git pull origin develop** ANTES DE COMMITAR E DAR PUSH.
- Ao terminar uma feature, NUNCA FAÇA MERGE nas branches principais. No lugar disso, abra um Pull Request da sua branch para a **develop** pelo GitHub.
- Sempre que for trabalhar na mesma branch feature que outra pessoa, use o comando **git pull** antes de commitar e dar push para sincronizar as alterações mais recentes e evitar conflitos.
- (IMPORTANTE) Sempre que for começar uma feature nova, certifique-se de que está criando a branch a partir da **develop**
- Nomes das branchs usam camelCase, então ao invés de **feat/minhafeatsuperlegal**, use **feat/minhaFeatSuperLegal**.
