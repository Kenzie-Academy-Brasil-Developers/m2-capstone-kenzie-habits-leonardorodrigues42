# 📚 Branch

Vamos usar o padrão de develop/feat/fix para todas as branchs que forem criadas. Desse modo, pode-se ter ideia de sua funcionalidade. Portanto, usem nomes descritivos e curtos.

## Descrição das branches

**main** - É a branch principal do projeto, onde a nossa aplicação estará rodando.

**release** - Serve pata testar features relacionadas que estão acumuladas na branch *develop*. Se os testes ocorrerem bem, é daqui que o código irá a branch *main*

**develop** - É a branch principal do desenvolvedor, onde serão jogadas as features.

**feat/funcionalidade** - Aqui teremos as funcionalidades que cada dev for desenvolver. Tente sempre manter um nome curto e descritivo, exemplo: *feat/cadastro*. Essa branch é temporária e, quando for feito o merge, ela será apagada.

**hotfix/funcionalidade** - Serve para consertar algum bug em produção(na branch main). Raramente vamos usar, e também é temporária.

# 🖊️ Commits

Todos os commits também devem seguir um padrão para melhorar a legibilidade e o histórico de versão do  código. Esse padrão deve ser colocado na mensagem do commit.

Ao descrever a mensagem, você tem liberdade para descrever o que foi feito, mas lembre-se de manter algo não muito longo.

## Descrição das mensagens

**feat: descrição** - Aqui você diz que está colocando algo novo na sua funcionalidade.

**fix: descrição** - Aqui você diz o que consertou na sua funcionalidade, seja um bug ou erro de escrita.