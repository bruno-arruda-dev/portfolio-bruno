type Project = { 
    name: string; 
    descriptions: string[]; 
    image: string; 
    repo?: string; 
    homepage?: string; 
    stacks: string[]; 
};

const ALL_PROJECTS: Record<string, Project[]> = {
    pt: [
        {
            name: "Photography Portfolio",
            descriptions: [
                'Portfólio simples sobre fotografia.',
                'Este é o meu primeiro projeto freelance que me trouxe um retorno financeiro. Estou muito feliz e espero que muitos outros venham!',
                'Obviamente, o cliente enviou suas próprias imagens e textos, sugeriu uma paleta com cores diferentes e o projeto em produção ficou sutilmente diferente.'
            ],
            image: './images/allProjects/photography-portfolio.png',
            homepage: 'https://photography-portfolio-gray.vercel.app/',
            repo: 'https://github.com/bruno-arruda-dev/photography-portfolio',
            stacks: ['next', 'react', 'typescript', 'gsap']
        },
        {
            name: "SendMail",
            descriptions: [
                'API para disparo de emails.',
                'Implementei em meu portfólio, ná pagina de contacto, a possibilidade de digitar no formulário e entrar em contato comigo, sem precisar me adicionar ao whatsapp ou algo assim. Tentei deixar o mais fácil quanto for possível ao usuário entrar em contato comigo.',
                'Então esta solução nasceu. Eu já tenho alguma noção em typescript, estudei sobre Nodemailer, assisti alguns vídeos e tutoriais e deu bom! O projeto nasceu e foi implantado ao portfólio.',
                'Outro ponto legal é que agora posso dizer que meu portfólio é um projeto fullstack.',
                'Aprendi muito com esse projeto. Pratiquei arquitetura de software, pratiquei typescript e que quebra upei de graça na Vercel. Só vantagens!'
            ],
            image: './images/allProjects/sendMail.png',
            repo: 'https://github.com/bruno-arruda-dev/sendMail',
            stacks: ['node', 'express', 'nodemail']
        },
        {
            name: "Este portfólio",
            descriptions: [
                'A necessidade de atualizar meu antigo portfólio resultou no desenvolvimento deste, o qual serviu para verificar minha evoluçao como programador quando comparado ao anterior.',
                'Além disso, este é o meu primeiro projeto desenvolvido utilizando NextJS, com o qual pude aprender bastante sobre os conceitos básicos deste framework.'],
            image: './images/allProjects/portfolio.png',
            repo: 'https://github.com/bruno-arruda-dev/portfolio-bruno',
            homepage: 'https://portfolio-bruno-kappa.vercel.app/',
            stacks: ['next', 'gsap', 'react', 'typescript', 'sass', 'html']
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
                'Não que o portfólio atual seja uma perfeição, nada disso, há muito para aprender e melhorar, mas eu preciso saber os passos que dei para chegar até aqui - quão melhores eles foram - para compreender e decidir os próximos passos que pretendo dar.'],
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
    ],
    en: [
        {
            name: "Photography Portfolio",
            descriptions: [
                'Simple photography portfolio.',
                'This is my first freelance project that brought me financial returns. I am very happy and hope that many more will come!',
                'Of course, the client provided their own images and texts, suggested a palette with different colors, and the final project in production turned out subtly different.'
            ],
            image: './images/allProjects/photography-portfolio.png',
            homepage: 'https://photography-portfolio-gray.vercel.app/',
            repo: 'https://github.com/bruno-arruda-dev/photography-portfolio',
            stacks: ['next', 'react', 'typescript', 'gsap']
        },
        {
            name: "SendMail",
            descriptions: [
                'API for sending emails',
                'I implemented on my portfolio, on the contact page, the possibility of typing in the form and getting in touch with me, without having to add me to WhatsApp or anything like that. I tried to make it as easy as possible for the user to get in touch with me.',
                'So this solution was born. I already have some knowledge in TypeScript, studied about Nodemailer, watched some videos and tutorials and it worked! The project was born and implemented in the portfolio.',
                'Another cool point is that now I can say that my portfolio is a full-stack project.',
                'I learned a lot with this project. I practiced software architecture, practiced TypeScript and also uploaded it for free on Vercel. Only advantages!'
            ],
            image: './images/allProjects/sendMail.png',
            repo: 'https://github.com/bruno-arruda-dev/sendMail',
            stacks: ['node', 'express', 'nodemail']
        },
        {
            name: "This portfolio",
            descriptions: [
                'The need to update my old portfolio resulted in the development of this one, which served to verify my evolution as a programmer when compared to the previous one.',
                'In addition, this is my first project developed using NextJS, with which I was able to learn a lot about the basic concepts of this framework.'],
            image: './images/allProjects/portfolio.png',
            repo: 'https://github.com/bruno-arruda-dev/portfolio-bruno',
            homepage: 'https://portfolio-bruno-kappa.vercel.app/',
            stacks: ['next', 'gsap', 'react', 'typescript', 'sass', 'html']
        },
        {
            name: "ToDo List - Frontend",
            descriptions: ['Frontend of a very challenging full-stack project.',
                'In addition to consuming the API that I created, I was challenged several times by this project. The best challenge was the listings, which had to obey some filters.',
                'It was a great lesson for me!',
                'For this project to work, download the frontend and backend and follow the instructions I left in the README.'],
            repo: 'https://github.com/bruno-arruda-dev/todo-list-frontend',
            image: './images/allProjects/todolist.png',
            stacks: ['react', 'javascript', 'html', 'css']
        },
        {
            name: "ToDo List - Backend",
            descriptions: ['Backend of a very challenging full-stack project.',
                'This was my first contact with MySQL, my favorite database! It was also the first time I got my hands dirty with Node and Express.',
                'The goal is to provide data via API for the frontend.',
                'For this project to work, download the frontend and backend and follow the instructions I left in the README.'],
            repo: 'https://github.com/bruno-arruda-dev/todo-list-frontend',
            image: './images/allProjects/todolist-backend.png',
            stacks: ['node', 'mysql', 'javascript']
        },
        {
            name: "Find GitHub",
            descriptions: ['Interesting project to practice API consumption and reinforce TypeScript concepts.',
                'Created with Vite, the development was smooth and I was able to scale my learning in a calm way.',
                'A differential is that you can add favorite profiles and projects, both will appear on the main page in their respective session.'],
            repo: 'https://github.com/bruno-arruda-dev/find_github',
            homepage: 'https://find-github-zeta.vercel.app/',
            image: './images/allProjects/findGithub.png',
            stacks: ['vite', 'react', 'typescript', 'sass', 'html']
        },
        {
            name: "Pokedex",
            descriptions: ['I was challenged to program a Pokedex. Challenge accepted!',
                'In this project, I had my first contact with the concept of API consumption. I realized that consuming APIs can be like the heartbeat of a project.',
                'The differential here is that I programmed infinite scrolling and the possibility of adding your little monsters to your favorites.'],
            repo: 'https://github.com/bruno-arruda-dev/PokedexV2',
            homepage: 'https://bruno-arruda-dev.github.io/PokedexV2/',
            image: './images/allProjects/pokedex.png',
            stacks: ['vite', 'react', 'javascript', 'html', 'css']
        },
        {
            name: 'GPTI',
            descriptions: ['“GPTI” was a project of a study group. Its goal was to develop a simple ERP system that would run on the web.',
                'I actively participated in the Frontend development of the project and am responsible for the development of the current layout, with the UX being developed by another class in the same study group.',
                'The good thing about this project is that it was the beginning of my addiction to SASS, a technology that I really like.',
                'Although the group no longer exists, I intend to resume development of the project.'],
            repo: 'https://github.com/bruno-arruda-dev/gpti-frontend',
            homepage: 'gpti-chi.vercel.app',
            image: './images/allProjects/gpti.png',
            stacks: ['vite', 'react', 'javascript', 'html', 'sass']

        },
        {
            name: 'Ice cream shop',
            descriptions: ['I translated your message to English: “I am a student at the online development school DevMedia and this is one of the projects developed along the Frontend track.',
                'This project was proposed as a way to practice setting up react-router-dom, one of the main route managers for React.'],
            repo: 'https://github.com/bruno-arruda-dev/sorveteria',
            homepage: 'https://sorveteria-olive.vercel.app/',
            image: './images/allProjects/sorveteria.png',
            stacks: ['react', 'javascript', 'html', 'css']
        },
        {
            name: 'My first portfolio',
            descriptions: ['So… I think I can say that I’ve improved since then haha.',
                'I remember how happy I was when I finished this portfolio. The feeling was amazing! Today I look at it and see how much I could have improved. The project is heavy, loaded, not pleasant at all.',
                'Not that the current portfolio is perfect, far from it, there is much to learn and improve, but I need to know the steps I took to get here - how much better they were - to understand and decide the next steps I intend to take.'],
            repo: 'https://github.com/bruno-arruda-dev/Bruno-Arruda',
            homepage: 'https://bruno-arruda-dev.github.io/Bruno-Arruda/',
            image: './images/allProjects/primeiro-portfolio.png',
            stacks: ['react', 'javascript', 'html', 'css']
        },
        {
            name: 'Glasses Store',
            descriptions: ['A simple layout created for a glasses store.',
                'Studying at DevMedia, this was a proposed project to better practice React Hooks.'],
            repo: 'https://github.com/bruno-arruda-dev/loja-de-oculos',
            homepage: 'https://oculos-chi.vercel.app/',
            image: './images/allProjects/loja-de-oculos.png',
            stacks: ['react', 'javascript', 'html', 'css']

        },
        {
            name: 'Branding Agency',
            descriptions: ['A simple layout created for a branding agency.',
                'Studying at DevMedia, this was a proposed project to better practice React Hooks.'],
            repo: 'https://github.com/bruno-arruda-dev/agencia-branding',
            homepage: 'https://agencia-branding-one.vercel.app/',
            image: './images/allProjects/agencia-de-branding.png',
            stacks: ['react', 'javascript', 'html', 'css']

        },
        {
            name: 'Barbershop',
            descriptions: ['A simple layout created for a barbershop.',
                'Studying at DevMedia, this was a proposed project to better practice React Hooks.'],
            repo: 'https://github.com/bruno-arruda-dev/barbearia',
            homepage: 'https://barbearia-roan-eight.vercel.app/',
            image: './images/allProjects/barbearia.png',
            stacks: ['react', 'javascript', 'html', 'css']

        }
    ]
}

export default ALL_PROJECTS;