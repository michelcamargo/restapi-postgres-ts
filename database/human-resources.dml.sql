-- CREATE DATABASE hr;

-- DELETE DATA
DELETE FROM USERS;
DELETE FROM CUSTOMERS;
DELETE FROM CONTENT;
DELETE FROM PORTFOLIO;

-- Usuários
INSERT INTO USERS(U_ALIAS, U_FIRST_NAME, U_LAST_NAME, U_EMAIL, U_SECRET)
VALUES ('mscamargo', 'Michel', 'Camargo', 'w.michelcamargo@gmail.com', '123');

-- Clientes
INSERT INTO CUSTOMERS(CUST_FIRST_NAME, CUST_LAST_NAME, CUST_EMAIL, CUST_MESSAGE, CUST_INTENTION)
VALUES
    ('Tester', 'Alpha', 'tester@pica.com', 'Mensagem de Tester', 'proposta'),
    ('Michel', 'Camargo', 'michel@obrabo.com', 'E isso mesmo, funciona!', 'consulta'),
    ('Alberto', 'Sneijder', 'albertosneijder@gmail.com', 'Outro cliente teste', 'consulta');


-- Conteúdo: Template Header
INSERT INTO CONTENT(GROUP_NAME, TITLE, LINK, TEXT, IS_EXTERNAL)
VALUES
    ('header_buttons', 'header-action-button', '/work', 'Let`s work together', false),
    ('header_nav', 'header-action-button', '/login', 'Login', false);

-- Conteúdo: Template Footer
INSERT INTO CONTENT(GROUP_NAME, TITLE, LINK, TEXT, IS_EXTERNAL)
VALUES
    ('footer_0', 'footer-link-credits', 'https://br.freepik.com/starline', 'Créditos ao plano de fundo', true),
    ('footer_0', 'footer-link-about', '/about', 'Sobre o site', false),
    ('footer_1', 'footer-disclaimer', '#', 'Aplicacao de cunho apresentativo, sem fins lucrativos - todos os direitos reservados 2022', false);

-- Conteúdo: Home - hero
INSERT INTO CONTENT(GROUP_NAME, TITLE, TEXT, IS_EXTERNAL)
VALUES
    ('hero_headtitle', 'hero-headtitle', 'Michel Camargo', false),
    ('hero_subtitle', 'hero-subtitle', 'UI Developer', false),
    ('hero_description', 'hero-description', 'Pleasure to ensure great experiences solving modern people problems', false);

-- Links: Social
INSERT INTO CONTENT(GROUP_NAME, TITLE, LINK, TEXT, IS_EXTERNAL, IMG_SRC)
VALUES
    ('social_links', 'social-linkedin', 'https://www.linkedin.com/in/michelscamargo/', 'LinkedIn', true, 'https://iili.io/XTRdgt.png'),
    ('social_links', 'social-github', 'https://github.com/michelcamargo', 'GitHub', true, 'https://iili.io/XTR3dX.png');


-- Portifolio
INSERT INTO PORTFOLIO(HEADING, SUBHEADING, DESCRIPTION, LINK)
VALUES
    ('Villa Mercato', '', 'Solução e-commerce VTEX que consolida um conceito inovador em supermercados online', 'https://villamercato.com.br'),
    ('BeBrasil', '', 'Solução em vendas de cosméticos e produtos de aromaterapia integrado à VTEX-Checkout', 'https://store.bebrasil.io/');