document.addEventListener('DOMContentLoaded', function() {
    // Dados dos mistérios
    const misterios = {
        gozosos: [
            {
                title: "1º Mistério Gozoso",
                name: "Anunciação do Anjo a Maria",
                desc: "O anjo Gabriel anuncia a Maria que ela será a Mãe do Salvador (Lc 1,26-38).",
                audio: "audio/gozoso1.mp3"
            },
            {
                title: "2º Mistério Gozoso",
                name: "Visitação de Maria a Isabel",
                desc: "Maria visita sua prima Isabel, que reconhece a Mãe do Senhor (Lc 1,39-56).",
                audio: "audio/gozoso2.mp3"
            },
            {
                title: "3º Mistério Gozoso",
                name: "Nascimento de Jesus em Belém",
                desc: "Jesus nasce na pobreza e é colocado numa manjedoura (Lc 2,1-20).",
                audio: "audio/gozoso3.mp3"
            },
            {
                title: "4º Mistério Gozoso",
                name: "Apresentação do Menino Jesus no Templo",
                desc: "Maria e José apresentam Jesus no Templo, onde Simeão profetiza (Lc 2,22-38).",
                audio: "audio/gozoso4.mp3"
            },
            {
                title: "5º Mistério Gozoso",
                name: "Encontro do Menino Jesus no Templo",
                desc: "Jesus é encontrado entre os doutores, após três dias de busca (Lc 2,41-52).",
                audio: "audio/gozoso5.mp3"
            }
        ],
        dolorosos: [
            {
                title: "1º Mistério Doloroso",
                name: "Agonia de Jesus no Horto das Oliveiras",
                desc: "Jesus reza no Getsêmani e suporta a angústia da Paixão (Mt 26,36-46).",
                audio: "audio/doloroso1.mp3"
            },
            {
                title: "2º Mistério Doloroso",
                name: "Flagelação de Jesus",
                desc: "Jesus é amarrado e cruelmente flagelado (Jo 19,1).",
                audio: "audio/doloroso2.mp3"
            },
            {
                title: "3º Mistério Doloroso",
                name: "Coroação de Espinhos",
                desc: "Jesus é coroado de espinhos e escarnecido (Mt 27,27-31).",
                audio: "audio/doloroso3.mp3"
            },
            {
                title: "4º Mistério Doloroso",
                name: "Jesus carrega a Cruz",
                desc: "Jesus carrega a cruz até o Calvário (Jo 19,17).",
                audio: "audio/doloroso4.mp3"
            },
            {
                title: "5º Mistério Doloroso",
                name: "Crucifixão e Morte de Jesus",
                desc: "Jesus é crucificado e morre por nossa salvação (Jo 19,18-30).",
                audio: "audio/doloroso5.mp3"
            }
        ],
        gloriosos: [
            {
                title: "1º Mistério Glorioso",
                name: "Ressurreição de Jesus",
                desc: "Jesus ressuscita glorioso no terceiro dia (Mc 16,1-7).",
                audio: "audio/glorioso1.mp3"
            },
            {
                title: "2º Mistério Glorioso",
                name: "Ascensão de Jesus ao Céu",
                desc: "Jesus sobe ao Céu e senta-se à direita do Pai (At 1,6-11).",
                audio: "audio/glorioso2.mp3"
            },
            {
                title: "3º Mistério Glorioso",
                name: "Descida do Espírito Santo",
                desc: "O Espírito Santo desce sobre Maria e os Apóstolos (At 2,1-4).",
                audio: "audio/glorioso3.mp3"
            },
            {
                title: "4º Mistério Glorioso",
                name: "Assunção de Maria ao Céu",
                desc: "Maria é elevada ao Céu de corpo e alma (Ap 12,1).",
                audio: "audio/glorioso4.mp3"
            },
            {
                title: "5º Mistério Glorioso",
                name: "Coroação de Maria como Rainha do Céu e da Terra",
                desc: "Maria é coroada por Deus como Rainha do Universo (Ap 12,1).",
                audio: "audio/glorioso5.mp3"
            }
        ],
        luminosos: [
            {
                title: "1º Mistério Luminoso",
                name: "Batismo de Jesus no Jordão",
                desc: "Jesus é batizado por João e o Pai o revela como seu Filho (Mt 3,13-17).",
                audio: "audio/luminoso1.mp3"
            },
            {
                title: "2º Mistério Luminoso",
                name: "Auto-revelação nas Bodas de Caná",
                desc: "Jesus transforma água em vinho, a pedido de Maria (Jo 2,1-12).",
                audio: "audio/luminoso2.mp3"
            },
            {
                title: "3º Mistério Luminoso",
                name: "Anúncio do Reino de Deus",
                desc: "Jesus anuncia o Reino e convida à conversão (Mc 1,15).",
                audio: "audio/luminoso3.mp3"
            },
            {
                title: "4º Mistério Luminoso",
                name: "Transfiguração de Jesus",
                desc: "Jesus mostra sua glória no Monte Tabor (Lc 9,28-36).",
                audio: "audio/luminoso4.mp3"
            },
            {
                title: "5º Mistério Luminoso",
                name: "Instituição da Eucaristia",
                desc: "Jesus institui a Eucaristia na Última Ceia (Mt 26,26-29).",
                audio: "audio/luminoso5.mp3"
            }
        ]
    };

    // Mapeamento dos dias da semana para os mistérios
    const diasMisterios = {
        0: "gloriosos",  // Domingo
        1: "gozosos",    // Segunda
        2: "dolorosos",  // Terça
        3: "gloriosos",  // Quarta
        4: "luminosos", // Quinta
        5: "dolorosos", // Sexta
        6: "gozosos"     // Sábado
    };

    // Nomes dos dias da semana
    const diasSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", 
        "Sábado"
    ];

    // Nomes dos mistérios para exibição
    const nomesMisterios = {
        gozosos: "Mistérios Gozosos",
        dolorosos: "Mistérios Dolorosos",
        gloriosos: "Mistérios Gloriosos",
        luminosos: "Mistérios Luminosos"
    };

    // Elementos do DOM
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const themeSwitcher = document.getElementById('theme-switcher');
    const progressBar = document.querySelector('.progress');
    const currentCount = document.getElementById('current-count');
    const resetProgress = document.getElementById('reset-progress');
    const currentDate = document.getElementById('current-date');
    const currentMisterioInfo = document.getElementById('current-misterio-info');
    const leiturasContainer = document.querySelector('.leituras-container');

    // Variáveis de estado
    let currentProgress = localStorage.getItem('tercoProgress') || 0;
    let currentTheme = localStorage.getItem('theme') || 'light';
    let audioElements = {};

    // Inicialização
    const hoje = new Date();
    const diaSemana = hoje.getDay();
    const misterioDoDia = diasMisterios[diaSemana];
    
    initTabs(misterioDoDia);
    updateProgressBar();
    setTheme(currentTheme);
    displayCurrentDate();
    displayMisterioInfo(diaSemana, misterioDoDia);
    fetchLeituras();

    // Event Listeners
    menuToggle.addEventListener('click', toggleMobileMenu);
    themeSwitcher.addEventListener('click', toggleTheme);
    resetProgress.addEventListener('click', resetTercoProgress);

    // Funções
    function initTabs(misterioPadrao) {
        // Ativa o mistério do dia
        tabButtons.forEach(button => {
            const misterio = button.getAttribute('data-misterio');
            
            if (misterio === misterioPadrao) {
                button.classList.add('active');
                document.getElementById(misterio).classList.add('active');
                fillMisterioContent(misterio);
            }
            
            button.addEventListener('click', () => {
                // Atualiza botões ativos
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Atualiza conteúdo ativo
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === misterio) {
                        content.classList.add('active');
                        // Preenche o conteúdo se estiver vazio
                        if (content.innerHTML.trim() === '') {
                            fillMisterioContent(misterio);
                        }
                    }
                });
            });
        });
    }

    function displayMisterioInfo(diaSemana, misterio) {
        const diaNome = diasSemana[diaSemana];
        const misterioNome = nomesMisterios[misterio];
        currentMisterioInfo.textContent = `${diaNome} - ${misterioNome}`;
    }

    function fillMisterioContent(misterio) {
        const contentDiv = document.getElementById(misterio);
        contentDiv.innerHTML = '';
        
        misterios[misterio].forEach((item, index) => {
            const misterioItem = document.createElement('div');
            misterioItem.className = 'misterio-item';
            
            misterioItem.innerHTML = `
                <h3 class="misterio-title">${item.title}</h3>
                <h4 class="misterio-name">${item.name}</h4>
                <p class="misterio-desc">${item.desc}</p>
                <button class="audio-btn" data-audio="${item.audio}" data-misterio="${misterio}" data-index="${index}">
                    <i class="fas fa-play"></i> Ouvir meditação
                </button>
            `;
            
            contentDiv.appendChild(misterioItem);
        });

        // Adiciona listeners para os botões de áudio
        document.querySelectorAll('.audio-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const audioSrc = this.getAttribute('data-audio');
                const misterio = this.getAttribute('data-misterio');
                const index = this.getAttribute('data-index');
                
                playAudio(audioSrc, misterio, index);
                
                // Incrementa o progresso
                incrementProgress();
            });
        });
    }

    function playAudio(src, misterio, index) {
        // Para todos os áudios antes de tocar um novo
        stopAllAudio();
        
        // Se já temos um elemento de áudio para este mistério, usamos ele
        const audioKey = `${misterio}_${index}`;
        
        if (!audioElements[audioKey]) {
            audioElements[audioKey] = new Audio(src);
        }
        
        const audio = audioElements[audioKey];
        
        // Atualiza o ícone do botão
        const buttons = document.querySelectorAll('.audio-btn');
        buttons.forEach(btn => {
            btn.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
        });
        
        const currentButton = document.querySelector(`.audio-btn[data-misterio="${misterio}"][data-index="${index}"]`);
        currentButton.innerHTML = `<i class="fas fa-pause"></i> Pausar`;
        
        audio.play();
        
        audio.onended = function() {
            currentButton.innerHTML = `<i class="fas fa-play"></i> Ouvir meditação`;
        };
    }

    function stopAllAudio() {
        for (const key in audioElements) {
            if (audioElements[key]) {
                audioElements[key].pause();
                audioElements[key].currentTime = 0;
            }
        }
    }

    function toggleMobileMenu() {
        mobileNav.classList.toggle('active');
    }

    function toggleTheme() {
        if (currentTheme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    function setTheme(theme) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Atualiza o ícone
        const icon = themeSwitcher.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    function incrementProgress() {
        if (currentProgress < 50) {
            currentProgress++;
            localStorage.setItem('tercoProgress', currentProgress);
            updateProgressBar();
        }
    }

    function resetTercoProgress() {
        currentProgress = 0;
        localStorage.setItem('tercoProgress', currentProgress);
        updateProgressBar();
    }

    function updateProgressBar() {
        const percentage = (currentProgress / 50) * 100;
        progressBar.style.width = `${percentage}%`;
        currentCount.textContent = currentProgress;
    }

    function displayCurrentDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        currentDate.textContent = today.toLocaleDateString('pt-BR', options);
    }

    async function fetchLeituras() {
        try {
            // Tenta buscar da API
            const response = await fetch('https://liturgiadiaria.cnbb.org.br/api/v1/leituras/');
            
            if (!response.ok) throw new Error('Erro na API');
            
            const data = await response.json();
            displayLeituras(data);
        } catch (error) {
            console.error('Erro ao buscar leituras:', error);
            // Fallback para JSON local
            fetchLocalLeituras();
        }
    }

    function fetchLocalLeituras() {
        // Leituras de fallback
        const fallbackLeituras = {
            data: new Date().toISOString().split('T')[0],
            leituras: [
                {
                    titulo: "Primeira Leitura",
                    referencia: "At 10,34-38",
                    texto: "Deus não faz acepção de pessoas. Ele enviou sua palavra aos filhos de Israel, anunciando a paz por Jesus Cristo, que é o Senhor de todos."
                },
                {
                    titulo: "Salmo Responsorial",
                    referencia: "Sl 104(103)",
                    texto: "Ó minha alma, bendize o Senhor! Senhor, meu Deus, como sois grande! Vestido de esplendor e majestade, de luz vos revestis como num manto."
                },
                {
                    titulo: "Evangelho",
                    referencia: "Mc 1,7-11",
                    texto: "Naquele tempo, João Batista pregava, dizendo: 'Vem depois de mim aquele que é mais forte do que eu; eu nem sou digno de me abaixar para desamarrar suas sandálias. Eu vos batizei com água, mas ele vos batizará com o Espírito Santo'. Naqueles dias, Jesus veio de Nazaré da Galileia e foi batizado por João no rio Jordão. E, logo que saiu da água, viu o céu se abrindo e o Espírito, como pomba, descer sobre ele. E do céu veio uma voz: 'Tu és o meu Filho amado, em ti ponho o meu bem-querer'."
                }
            ]
        };
        
        displayLeituras(fallbackLeituras);
    }

    function displayLeituras(data) {
        leiturasContainer.innerHTML = '';
        
        if (data.leituras && data.leituras.length > 0) {
            data.leituras.forEach(leitura => {
                const leituraCard = document.createElement('div');
                leituraCard.className = 'leitura-card';
                
                leituraCard.innerHTML = `
                    <h3 class="leitura-title">${leitura.titulo}</h3>
                    <p class="leitura-ref">${leitura.referencia}</p>
                    <p class="leitura-texto">${leitura.texto}</p>
                `;
                
                leiturasContainer.appendChild(leituraCard);
            });
        } else {
            leiturasContainer.innerHTML = '<p class="loading">Não foi possível carregar as leituras do dia.</p>';
        }
    }
});