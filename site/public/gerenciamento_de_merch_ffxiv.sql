-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS ffxiv_merchandise_db;
USE ffxiv_merchandise_db;

-- Tabela de Categorias
CREATE TABLE IF NOT EXISTS categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Tabela de Itens Físicos de Merch
CREATE TABLE IF NOT EXISTS merchandise_items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category_id INT,
    release_year INT,
    price_usd DECIMAL(10, 2),
    collector_edition BOOLEAN DEFAULT FALSE,
    description TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Inserção de Categorias
INSERT INTO categories (category_id, name, description) VALUES
(1, 'Figures & Statues', 'Estaturas detalhadas e Action Figures de personagens, chefes e invocações.'),
(2, 'Soundtracks & Vinyl', 'Álbuns musicais em CD, vinil e Blu-Ray de trilhas sonoras oficiais.'),
(3, 'Artbooks & Books', 'Livros de arte oficial, enciclopédias oficiais de Eorzea e guias de lore.'),
(4, 'Plushies & Toys', 'Pelúcias de mascotes, montarias, minions e monstros do jogo.'),
(5, 'Apparel & Accessories', 'Roupas, colares, anéis, chaveiros e acessórios de moda.'),
(6, 'Home & Office', 'Itens de decoração, copos, mousepads, relógios e acessórios para casa.');

-- Inserção de 60 Itens Físicos Variados do FFXIV
INSERT INTO merchandise_items (name, category_id, release_year, price_usd, collector_edition, description) VALUES
-- Figures & Statues (15 itens)
('Bring Arts - Esten / Estinien Action Figure', 1, 2021, 89.99, FALSE, 'Action figure articulada do Dragoon Estinien.'),
('Bring Arts - Y\'shtola Action Figure', 1, 2020, 79.99, FALSE, 'Figura articulada da maga Y\'shtola Rhul.'),
('Statue - Odín em Aço Esculpido', 1, 2018, 149.99, TRUE, 'Estatueta estática do Dark Knight Odín montado em Sleipnir.'),
('Statue - Shiva The Ice Goddess', 1, 2019, 179.99, TRUE, 'Estatua detalhada da primal Shiva em sua forma de gelo.'),
('Static Arts Mini - Fat Chocobo', 1, 2017, 34.99, FALSE, 'Mini estatueta fofa do Gorducho Chocobo com gysahl greens.'),
('Static Arts Mini - Moogle', 1, 2017, 34.99, FALSE, 'Mini estatueta do Moogle com pompom iluminado.'),
('Bring Arts - Cid Pollendina & Alpha', 1, 2022, 99.99, FALSE, 'Conjunto de figuras do Cid e do companheiro Alpha.'),
('Statue - Bahamut Prime Collector Statue', 1, 2015, 349.99, TRUE, 'Estátua colossal de Bahamut Prime rompendo os céus.'),
('Bring Arts - Thancred Waters', 1, 2021, 89.99, FALSE, 'Figura articulada do Gunbreaker Thancred.'),
('Static Arts - Nanamo Ul Namo', 1, 2016, 59.99, FALSE, 'Estatueta da Sultana de Ul\'dah.'),
('Bring Arts - Haurchefant Greystone', 1, 2023, 94.99, FALSE, 'Figura memorial em homenagem a Haurchefant.'),
('Statue - Titan The Crag', 1, 2020, 199.99, TRUE, 'Estátua imponente do primal Titan emergindo da terra.'),
('Bring Arts - Zenos yae Galvus', 1, 2022, 109.99, FALSE, 'Figura altamente detalhada do príncipe Zenos.'),
('Static Arts Mini - Namazu', 1, 2021, 39.99, FALSE, 'Mini estatueta humorística de um Namazu pescando.'),
('Statue - Hydaelyn & Zodiark Maquette', 1, 2024, 229.99, TRUE, 'Escultura comemorativa das duas divindades de Endwalker.'),

-- Soundtracks & Vinyl (10 itens)
('Before Meteor: FFXIV Original Soundtrack (CD)', 2, 2013, 49.99, FALSE, 'Trilha sonora original da versão 1.0 e A Realm Reborn.'),
('Heavensward: FFXIV Original Soundtrack (Blu-Ray Audio)', 2, 2015, 54.99, FALSE, 'Músicas da expansão Heavensward em alta definição.'),
('Stormblood: FFXIV Original Soundtrack (Blu-Ray Audio)', 2, 2017, 54.99, FALSE, 'Trilha sonora de Stormblood com faixas em formato lossy/lossless.'),
('Shadowbringers: FFXIV Original Soundtrack (Blu-Ray Audio)', 2, 2019, 59.99, FALSE, 'Coleção musical completa de Shadowbringers.'),
('Endwalker: FFXIV Original Soundtrack (Blu-Ray Audio)', 2, 2021, 64.99, FALSE, 'Álbum com os hinos épicos de Endwalker.'),
('The Primals - Out of the Shadows Vinyl LP', 2, 2021, 39.99, TRUE, 'Disco de vinil com remixes oficiais da banda The Primals.'),
('The Primals - Rock Hard Vinyl LP', 2, 2019, 39.99, TRUE, 'Primeiro álbum de vinil da banda oficial de rock da Square Enix.'),
('Pulse: FFXIV Remix Album (CD)', 2, 2020, 29.99, FALSE, 'Versões remixadas em estilo eletrônico das músicas do jogo.'),
('Journeys: FFXIV Piano Collection (CD)', 2, 2019, 34.99, FALSE, 'Arranjos relaxantes de piano baseados em temas clássicos de Eorzea.'),
('Eorzean Symphony: Orchestral Album (Blu-Ray)', 2, 2018, 54.99, FALSE, 'Concerto orquestral gravado ao vivo em Tóquio.'),

-- Artbooks & Books (10 itens)
('The Art of Eorzea - Another Dawn (Artbook)', 3, 2014, 39.99, FALSE, 'Primeiro livro de artes conceituais do jogo.'),
('The Art of Ishgard - The Scars of War (Artbook)', 3, 2016, 44.99, FALSE, 'Livro de artes focado na expansão Heavensward.'),
('The Art of Stormblood - Eureka (Artbook)', 3, 2018, 44.99, FALSE, 'Artes oficiais e designs de cenários de Stormblood.'),
('The Art of Shadowbringers - Reflections (Artbook)', 3, 2020, 49.99, FALSE, 'Conceitos visuais e ilustrações do mundo de Norvrandt.'),
('The Art of Endwalker - Beneath the Surface (Artbook)', 3, 2023, 49.99, FALSE, 'Artes estéticas e concept art da expansão Endwalker.'),
('Encyclopedia Eorzea Vol. I (Lore Book)', 3, 2016, 49.99, TRUE, 'Guia abrangente sobre o lore, raças e nações de Eorzea.'),
('Encyclopedia Eorzea Vol. II (Lore Book)', 3, 2018, 49.99, TRUE, 'Segundo volume da enciclopédia oficial com foco em Stormblood.'),
('Encyclopedia Eorzea Vol. III (Lore Book)', 3, 2024, 54.99, TRUE, 'Terceiro volume cobrindo Shadowbringers e Endwalker.'),
('FFXIV Official Cookbook', 3, 2021, 35.00, FALSE, 'Livro de receitas culinárias baseadas em pratos do jogo.'),
('FFXIV Coloring Book for Adults', 3, 2017, 15.99, FALSE, 'Livro de colorir com ilustrações icônicas de personagens e monstros.'),

-- Plushies & Toys (10 itens)
('Stuffed Carbuncle Plush (Ruby Red)', 4, 2016, 29.99, FALSE, 'Pelúcia macia do mascote Arcanist Carbuncle vermelho.'),
('Stuffed Carbuncle Plush (Emerald Green)', 4, 2016, 29.99, FALSE, 'Pelúcia clássica do Carbuncle esmeralda.'),
('Stuffed Fat Cat Plush', 4, 2017, 32.99, FALSE, 'Pelúcia redondinha e fofinha do minion Fat Cat.'),
('Stuffed Namazu Plush with Bell', 4, 2019, 34.99, FALSE, 'Pelúcia de um Namazu que emite som de sininho.'),
('Stuffed Moogle Cushion / Plush', 4, 2015, 34.99, FALSE, 'Almofada em formato de Moogle com asas e pompom.'),
('Stuffed Behemoth Plush', 4, 2018, 39.99, FALSE, 'Versão fofa e miniatura do temível monstro Behemoth.'),
('Stuffed Great Serpent of Ronka Plush', 4, 2020, 27.99, FALSE, 'Pelúcia do aclamado deus-serpente de Greatwood.'),
('Stuffed Dodo Plush', 4, 2021, 29.99, FALSE, 'Pelúcia redonda do pássaro montaria Dodo.'),
('Stuffed Pufferfish / Qiqirn Minion Plush', 4, 2022, 25.99, FALSE, 'Pelúcia temática de criaturas exóticas de Eorzea.'),
('Stuffed Wind-up Estinien Plush', 4, 2023, 31.99, FALSE, 'Pelúcia estilizada do pequeno Estinien chibi.'),

-- Apparel & Accessories (8 itens)
('Job Icons Silver Necklace (Paladin)', 5, 2019, 69.99, FALSE, 'Colar de prata esterlina com o símbolo da classe Paladino.'),
('Job Icons Silver Necklace (White Mage)', 5, 2019, 69.99, FALSE, 'Colar de prata esterlina com o símbolo de White Mage.'),
('Meteor Logo Hoodie (Black)', 5, 2020, 64.99, FALSE, 'Moletom com capuz e o icônico logotipo do meteoro do FFXIV.'),
('Job Icons Stainless Steel Ring', 5, 2021, 49.99, FALSE, 'Anel de aço inoxidável com gravações de múltiplos símbolos de classes.'),
('Aetheryte Crystal Keychain', 5, 2017, 19.99, FALSE, 'Chaveiro de metal com detalhe translúcido imitando um cristal Aetheryte.'),
('Garlond Ironworks Embroidered Cap', 5, 2018, 24.99, FALSE, 'Boné ajustável com o logotipo da oficina Garlond Ironworks.'),
('Scions of the Seventh Dawn Pin Badge Set', 5, 2019, 29.99, FALSE, 'Conjunto de broches metálicos dos Scions.'),
('Job Symbols Scarf', 5, 2022, 35.00, FALSE, 'Cachecol elegante decorado com ícones minimalistas das classes.'),

-- Home & Office (7 itens)
('Job Icons Ceramic Mug', 6, 2018, 19.99, FALSE, 'Caneca de cerâmica preta com estampa de vários símbolos de jobs.'),
('Fat Chocobo Mousepad Grande', 6, 2020, 24.99, FALSE, 'Mousepad de mesa estendido com arte do Gorducho Chocobo.'),
('Aetheryte Desk Lamp (LED)', 6, 2021, 79.99, TRUE, 'Luminária de mesa em formato de cristal Aetheryte com luz LED azulada.'),
('Moogle Wall Clock', 6, 2019, 45.00, FALSE, 'Relógio de parede decorativo com o rosto de um Moogle e ponteiros de asas.'),
('Eorzea Map Tapestry', 6, 2017, 39.99, FALSE, 'Tapeçaria de tecido em alta resolução com o mapa completo de Eorzea.'),
('Job Icons Coaster Set (Pack of 6)', 6, 2020, 22.99, FALSE, 'Conjunto de porta-copos de cortiça e borracha com estampas de classes.'),
('Crystal Tower Acrylic Light Panel', 6, 2022, 49.99, FALSE, 'Painel de acrílico iluminado por USB com a imagem da Crystal Tower.');