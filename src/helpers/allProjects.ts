const allProjects = [
    {
        name: "Este portfólio",
        descriptions: [
            'A necessidade de atualizar meu antigo portfólio resultou no desenvolvimento deste, o qual serviu para verificar minha evoluçao como programador quando comparado ao anterior.',
            'Além disso, este é o meu primeiro projeto desenvolvido utilizando NextJS, com o qual pude aprender bastante sobre os conceitos básicos deste framework.'],
        image: './images/allProjects/portfolio.png',
        repo: 'https://github.com/bruno-arruda-dev/portfolio-bruno',
        homepage: 'https://portfolio-bruno-kappa.vercel.app/',
        stacks: ['next', 'react', 'typescript', 'sass', 'html']
    },
    {
        name: "ToDo List - Frontend",
        descriptions: ['Frontend de um projeto fullstack bastante desafiador.',
            'Além de consumir a API que eu criei, fui desafiado em várias vezes por este projeto. O melhor desafio foram as listagens, que deveriam obedecer alguns filtros.',
            'Foi uma grande lição para mim!',
            'Para que este projeto funcione faça download do frontend e do backend e siga as orientações que eu deixei no README.'],
        repo: 'https://github.com/bruno-arruda-dev/todo-list-frontend',
        image: './images/allProjects/todolist.png',
        stacks: ['react', 'javascript', 'html', 'css']
    },
    {
        name: "ToDo List - Backend",
        descriptions: ['Backend de um projeto fullstack bastante desafiador.',
        'Esse foi meu primeiro contato com MySql, meu banco de dados favorito! Também foi a primeira vez que coloquei a mão na massa com o Node e Express.',
            'Objetivo é fornecer dados via API para o frontend.',
            'Para que este projeto funcione faça download do frontend e do backend e siga as orientações que eu deixei no README.'],
        repo: 'https://github.com/bruno-arruda-dev/todo-list-frontend',
        image: './images/allProjects/todolist-backend.png',
        stacks: ['node', 'mysql', 'javascript']
    },
    {
        name: "Find GitHub",
        descriptions: ['Projeto interessante para praticar consumo de API e reforçar os conceitos de Typescript.',
            'Criado com Vite, o desenvolvimento foi suave e eu consegui escalar o aprendizado de maneira tranquila.',
            'Um diferencial é que você pode adicionar perfis e projetos favoritos, ambos aparecerão na página principal em sua respectiva sessão.'],
        repo: 'https://github.com/bruno-arruda-dev/find_github',
        homepage: 'https://find-github-zeta.vercel.app/',
        image: './images/allProjects/findGithub.png',
        stacks: ['vite', 'react', 'typescript', 'sass', 'html']
    },
    {
        name: "Pokedex",
        descriptions: ['Fui desafiado a programar uma Pokedex. Desafio aceito!',
            'Nesse projeto tive o primeiro contato com o conceito de consumo de API. Pude perceber que consumir APIs pode ser como as batidas do coração de um projeto.',
            'O diferencial aqui é que eu programei rolagem infinita e a possibilidade de adicionar seus monstrinhos aos favoritos.'],
        repo: 'https://github.com/bruno-arruda-dev/PokedexV2',
        homepage: 'https://bruno-arruda-dev.github.io/PokedexV2/',
        image: './images/allProjects/pokedex.png',
        stacks: ['vite', 'react', 'javascript', 'html', 'css']
    },
    {
        name: 'GPTI',
        descriptions: ['"GPTI" era um projeto de um grupo de estudos. Seu objetivo era desenvolver um sistema ERP simples, que rodasse na web.',
            'Participei ativamente do desenvolvimento Frontend do projeto e sou o responsável pelo desenvolvimento do layout atual, sendo que a UX foi desenvolvida por outra turma no mesmo grupo de estudos.',
            'O bom desse projeto é que foi nele o começo do meu vício em SASS, tecnologia que gosto bastante.',
            'Embora o grupo não exista mais, eu pretendo retomar o desenvolvimento do projeto.'],
        repo: 'https://github.com/bruno-arruda-dev/gpti-frontend',
        homepage: 'gpti-chi.vercel.app',
        image: './images/allProjects/gpti.png',
        stacks: ['vite', 'react', 'javascript', 'html', 'sass']

    },
    {
        name: 'Sorveteria',
        descriptions: ['Sou aluno na escola online de desenvolvimento DevMedia e este é um dos projetos desenvolvidos ao longo da trilha Frontend.',
            'Este projeto foi proposto como via para praticar a configuração do react-router-dom, um dos principais gerenciadores de rotas do React.'],
        repo: 'https://github.com/bruno-arruda-dev/sorveteria',
        homepage: 'https://sorveteria-olive.vercel.app/',
        image: './images/allProjects/sorveteria.png',
        stacks: ['react', 'javascript', 'html', 'css']
    },
    {
        name: 'Meu primeiro portfólio',
        descriptions: ['Então... acho que posso dizer que melhorei dessa época pra cá rsrsrs.',
            'Me lembro do quanto fiquei feliz quando terminei este portfólio. A sensação foi incrível! Hoje olho pra ele e vejo quanta coisa poderia ter melhorado. O projeto está pesado, carregado, nada agradável.',
            'Não que o portfólio atual seja uma perfeição, nada disso, há muito para aprender e melhorar, mas eu preciso saber os passes que dei para chegar até aqui - quão melhores eles foram - para compreender e decidir os próximos passos que pretendo dar.'],
        repo: 'https://github.com/bruno-arruda-dev/Bruno-Arruda',
        homepage: 'https://bruno-arruda-dev.github.io/Bruno-Arruda/',
        image: './images/allProjects/primeiro-portfolio.png',
        stacks: ['react', 'javascript', 'html', 'css']
    },
    {
        name: 'Loja de Óculos',
        descriptions: ['Layout simples criado para uma loja de óculos.',
            'Estudando na DevMedia, este foi um projeto proposto para praticar melhor os Hooks do React.'],
        repo: 'https://github.com/bruno-arruda-dev/loja-de-oculos',
        homepage: 'https://oculos-chi.vercel.app/',
        image: './images/allProjects/loja-de-oculos.png',
        stacks: ['react', 'javascript', 'html', 'css']

    },
    {
        name: 'Agência de Branding',
        descriptions: ['Layout simples criado para uma agência de branding.',
            'Estudando na DevMedia, este foi um projeto proposto para praticar melhor os Hooks do React.'],
        repo: 'https://github.com/bruno-arruda-dev/agencia-branding',
        homepage: 'https://agencia-branding-one.vercel.app/',
        image: './images/allProjects/agencia-de-branding.png',
        stacks: ['react', 'javascript', 'html', 'css']

    },
    {
        name: 'Barbearia',
        descriptions: ['Layout simples criado para uma barbearia.',
            'Estudando na DevMedia, este foi um projeto proposto para praticar melhor os Hooks do React.'],
        repo: 'https://github.com/bruno-arruda-dev/barbearia',
        homepage: 'https://barbearia-roan-eight.vercel.app/',
        image: './images/allProjects/barbearia.png',
        stacks: ['react', 'javascript', 'html', 'css']

    }

]

export default allProjects;