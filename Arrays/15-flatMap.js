const escola = [{
        nome: 'Turma M1',
        alunos: [{
                nome: 'Gustavinho',
                nota: 8.5
            },
            {
                nome: 'Bianca',
                nota: 7.5
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [{
                nome: 'Marcelinho',
                nota: 7
            },
            {
                nome: 'Andressa',
                nota: 7
            }
        ]

    }
]

const getNotaAluno = a => a.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

// Utilizando o concat

console.log([].concat( [ 8.5, 7.5 ], [ 7, 7 ] ))

// FlatMap
Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotaTurma)
console.log(notas2)