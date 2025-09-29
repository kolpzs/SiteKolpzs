document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Efeito de scroll no cabeçalho
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animação de carregamento do Hero
    const animatedOnLoad = document.querySelectorAll('.animate-on-load');
    animatedOnLoad.forEach(el => {
        el.style.setProperty('--delay', el.dataset.delay || '0s');
    });

    // Animação de elementos ao rolar a página
    const animatedOnScroll = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, {
        threshold: 0.15 // O elemento começa a animar quando 15% está visível
    });

    animatedOnScroll.forEach(element => {
        observer.observe(element);
    });

    // Lógica para o menu hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // LÓGICA PARA SEÇÃO DE LOCALIZAÇÃO (MAPAS)
    const locationButtons = document.querySelectorAll('.location-button');
    const maps = document.querySelectorAll('.location-map');

    locationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões e mapas
            locationButtons.forEach(btn => btn.classList.remove('active'));
            maps.forEach(map => map.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');
            
            // Adiciona a classe 'active' ao mapa correspondente
            const location = button.dataset.location;
            document.getElementById(`map-${location}`).classList.add('active');
        });
    });
    
    // LÓGICA PARA TRADUÇÃO
    const translations = {
        'pt': {
            'about': 'Sobre',
            'services': 'Serviços',
            'features': 'Diferenciais',
            'contact': 'Contato',
            'hero_title': 'Excelência em Logística Internacional',
            'hero_subtitle': 'Conectamos Brasil e Paraguai com a agilidade e a segurança que sua carga necessita.',
            'hero_cta': 'Solicite sua Cotação',
            'about_tag': 'Nossa Trajetória',
            'about_title': 'Confiança e Experiência na Rota Brasil-Paraguai',
            'about_text': 'Há anos no mercado, a Duchico Transporte se especializou na rota Foz do Iguaçu - Assunção, oferecendo um serviço de logística integrada de alta performance. Nossa missão é garantir que sua carga chegue ao destino com máxima eficiência e segurança, cuidando de cada detalhe do processo com a dedicação que sua empresa merece.',
            'value_1': 'Foco no Cliente',
            'value_2': 'Segurança Total',
            'value_3': 'Compromisso com a Excelência',
            'services_tag': 'Nossas Soluções',
            'services_title': 'Transporte Inteligente para Cada Necessidade',
            'services_subtitle': 'Oferecemos uma frota moderna e versátil para garantir a integridade e a pontualidade da sua entrega.',
            'service_1_title': 'Carretas Graneleira',
            'service_1_text': 'Ideal para o transporte seguro de grãos e mercadorias a granel.',
            'service_2_title': 'Carretas Prancha',
            'service_2_text': 'Soluções para cargas pesadas, indivisíveis e de grandes dimensões.',
            'service_3_title': 'Carretas Baú',
            'service_3_text': 'Proteção total para sua carga seca em nossos baús modernos e seguros.',
            'service_4_title': 'Carretas Frigorífica',
            'service_4_text': 'Cadeia de frio garantida para produtos perecíveis e termossensíveis.',
            'service_5_title': 'Caminhões Truck',
            'service_5_text': 'Agilidade e versatilidade para coletas, entregas e cargas fracionadas.',
            'features_tag': 'Por que nos escolher?',
            'features_title': 'Vantagens que Fazem a Diferença',
            'feature_1_title': 'Rota Especializada',
            'feature_1_text': 'Conhecimento profundo da rota Foz do Iguaçu - Assunção, otimizando prazos e custos para sua empresa.',
            'feature_2_title': 'Segurança de Ponta a Ponta',
            'feature_2_text': 'Monitoramento 24/7 e seguro total para sua mercadoria, garantindo sua tranquilidade do embarque à entrega.',
            'feature_3_title': 'Atendimento Personalizado',
            'feature_3_text': 'Nossa equipe de especialistas está pronta para oferecer suporte dedicado e as melhores soluções para sua logística.',
            'location_tag': 'Nossas Sedes',
            'location_title': 'Onde nos Encontrar',
            'brazil_btn': 'Brasil',
            'paraguay_btn': 'Paraguai',
            'contact_tag': 'Entre em Contato',
            'contact_title': 'Pronto para Otimizar sua Logística?',
            'contact_subtitle': 'Nossa equipe está pronta para atender. Fale conosco por telefone, email ou preencha o formulário para receber uma cotação detalhada.',
            'form_title': 'Fale com um Especialista',
            'form_name_placeholder': 'Seu nome',
            'form_email_placeholder': 'Seu e-mail',
            'form_message_placeholder': 'Como podemos ajudar?',
            'form_submit_btn': 'Enviar Mensagem',
            'footer_about': 'Conectando fronteiras, impulsionando negócios.',
            'footer_nav': 'Navegação',
            'footer_rights': 'Todos os direitos reservados.'
        },
        'es': {
            'about': 'Sobre',
            'services': 'Servicios',
            'features': 'Diferenciales',
            'contact': 'Contacto',
            'hero_title': 'Excelencia en Logística Internacional',
            'hero_subtitle': 'Conectamos Brasil y Paraguay con la agilidad y seguridad que su carga necesita.',
            'hero_cta': 'Solicite su Cotización',
            'about_tag': 'Nuestra Trayectoria',
            'about_title': 'Confianza y Experiencia en la Ruta Brasil-Paraguay',
            'about_text': 'Con años en el mercado, Duchico Transporte se especializó en la ruta Foz do Iguaçu - Asunción, ofreciendo un servicio de logística integrada de alto rendimiento. Nuestra misión es garantizar que su carga llegue a destino con la máxima eficiencia y seguridad, cuidando cada detalle del proceso con la dedicación que su empresa merece.',
            'value_1': 'Foco en el Cliente',
            'value_2': 'Seguridad Total',
            'value_3': 'Compromiso con la Excelencia',
            'services_tag': 'Nuestras Soluciones',
            'services_title': 'Transporte Inteligente para Cada Necesidad',
            'services_subtitle': 'Ofrecemos una flota moderna y versátil para garantizar la integridad y puntualidad de su entrega.',
            'service_1_title': 'Carretas Graneleras',
            'service_1_text': 'Ideal para el transporte seguro de granos y mercancías a granel.',
            'service_2_title': 'Carretas Plancha',
            'service_2_text': 'Soluciones para cargas pesadas, indivisibles y de grandes dimensiones.',
            'service_3_title': 'Carretas Furgón',
            'service_3_text': 'Protección total para su carga seca en nuestros furgones modernos y seguros.',
            'service_4_title': 'Carretas Frigoríficas',
            'service_4_text': 'Cadena de frío garantizada para productos perecederos y termosensibles.',
            'service_5_title': 'Camiones Truck',
            'service_5_text': 'Agilidad y versatilidad para recolecciones, entregas y cargas fraccionadas.',
            'features_tag': '¿Por qué elegirnos?',
            'features_title': 'Ventajas que Marcan la Diferencia',
            'feature_1_title': 'Ruta Especializada',
            'feature_1_text': 'Profundo conocimiento de la ruta Foz do Iguaçu - Asunción, optimizando plazos y costos para su empresa.',
            'feature_2_title': 'Seguridad de Extremo a Extremo',
            'feature_2_text': 'Monitoreo 24/7 y seguro total para su mercancía, garantizando su tranquilidad desde el embarque hasta la entrega.',
            'feature_3_title': 'Atención Personalizada',
            'feature_3_text': 'Nuestro equipo de especialistas está listo para ofrecer soporte dedicado y las mejores soluciones para su logística.',
            'location_tag': 'Nuestras Sedes',
            'location_title': 'Dónde Encontrarnos',
            'brazil_btn': 'Brasil',
            'paraguay_btn': 'Paraguay',
            'contact_tag': 'Entre en Contacto',
            'contact_title': '¿Listo para Optimizar su Logística?',
            'contact_subtitle': 'Nuestro equipo está listo para atenderle. Contáctenos por teléfono, correo electrónico o complete el formulario para recibir una cotización detallada.',
            'form_title': 'Hable con un Especialista',
            'form_name_placeholder': 'Su nombre',
            'form_email_placeholder': 'Su e-mail',
            'form_message_placeholder': '¿Cómo podemos ayudar?',
            'form_submit_btn': 'Enviar Mensaje',
            'footer_about': 'Conectando fronteras, impulsando negocios.',
            'footer_nav': 'Navegación',
            'footer_rights': 'Todos los derechos reservados.'
        }
    };
    
    const langButtons = document.querySelectorAll('.language-button');
    const translatableElements = document.querySelectorAll('[data-translate]');

    const setLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.dataset.translate;
            const translation = translations[lang][key];
            if (translation !== undefined) {
                 if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // Atualiza a classe 'active' nos botões de idioma
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.id === `lang-${lang}`) {
                btn.classList.add('active');
            }
        });

        // Salva a preferência de idioma
        localStorage.setItem('language', lang);
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.id.split('-')[1];
            setLanguage(lang);
        });
    });

    // Verifica se há um idioma salvo e aplica, ou usa 'pt' como padrão
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);
});