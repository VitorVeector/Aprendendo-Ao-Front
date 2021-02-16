- const pessoa -> aponta para um endereco de memoria chamado '123x1'
- dentro do meu endereco de memoria '123x1' e que eu tenho meu objeto {...}
- ao definir pessoa.nome = 'Pedro', ele NAO ALTERA O ENDERECO, MAS SIM O QUE HA NELE

## PORÉM

- Ao definir outra, como no exemplo de Ana, o output gera um erro, porque você estará tentando fazer com que a variável pessoa aponte para um novo endereço

- - const pessoa -> 123x1 tentará apontar para -> 123x2. E como é uma constante, ela sempre apontará para 123x1

