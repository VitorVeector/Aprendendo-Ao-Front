# THIS

### SIGNIFICA: Chamada simples

Sintaxe:

---
> **this**
---

No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, seja em modo estrito ou não.

> console.log(this.document === document); // true
>
> Em navegadores web, o objeto window é também o objeto global:
>console.log(this === window); // true

>this.a = 37;
>console.log(window.a); // 37


