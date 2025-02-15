
--

CREATE TABLE `books` (
  `id` bigint(20) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `copies` int(11) NOT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isbn` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `books` (`id`, `author`, `copies`, `cover`, `description`, `isbn`, `title`, `category_id`) VALUES
(1, 'Isaac Asimov', 5, 'book1.jpg', 'A classic sci-fi novel.', '978-1234567890', 'Foundation', 1),
(2, 'Yuval Noah Harari', 8, 'book2.jpg', 'A history of humankind.', '978-9876543210', 'Sapiens', 2),
(3, 'Elon Musk', 6, 'book3.jpg', 'Innovation and technology.', '978-1122334455', 'Tesla and SpaceX', 3),
(4, 'William Shakespeare', 10, 'book02.jpg', 'Classic literature.', '978-2233445566', 'Hamlet', 4),
(5, 'Plato', 7, 'b1.jpg', 'A philosophical work.', '978-3344556677', 'The Republic', 5),
(6, 'Euclid', 4, 'b2.jpg', 'Mathematical principles.', '978-4455667788', 'Elements', 6),
(7, 'Albert Einstein', 3, 'b3.jpeg', 'Relativity theory.', '978-5566778899', 'Relativity', 7),
(8, 'Charles Darwin', 5, 'b4.jpg', 'Evolution theory.', '978-6677889900', 'Origin of Species', 8),
(9, 'Sigmund Freud', 6, 'b6.jpeg', 'Psychological theories.', '978-7788990011', 'The Ego and the Id', 9),
(10, 'Leonardo da Vinci', 4, 'book01.jpg', 'Art and science.', '978-8899001122', 'Codex Leicester', 10);



CREATE TABLE `borrow_records` (
  `id` bigint(20) NOT NULL,
  `borrow_date` date DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `status` enum('ALLOWED','REJECTED','UNDECIDED') DEFAULT NULL,
  `book_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `borrow_records` (`id`, `borrow_date`, `return_date`, `status`, `book_id`, `user_id`) VALUES
(1, '2024-01-10', '2024-01-20', 'ALLOWED', 1, 3),
(2, '2024-02-05', '2024-02-15', 'ALLOWED', 2, 4),
(3, '2024-03-12', '2024-03-22', 'ALLOWED', 3, 5),
(4, '2024-04-08', '2024-04-18', 'ALLOWED', 4, 6),
(5, '2024-05-15', '2024-05-25', 'ALLOWED', 5, 7),
(6, '2024-06-01', '2024-06-11', 'ALLOWED', 6, 8),
(7, '2024-07-07', '2024-07-17', 'ALLOWED', 7, 9),
(8, '2024-08-14', '2024-08-24', 'ALLOWED', 8, 10),
(9, '2024-09-20', '2024-09-30', 'REJECTED', 9, 3),
(10, '2024-10-05', '2024-10-15', 'UNDECIDED', 10, 4);

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(10, 'Art'),
(8, 'Biology'),
(2, 'History'),
(4, 'Literature'),
(6, 'Mathematics'),
(5, 'Philosophy'),
(7, 'Physics'),
(9, 'Psychology'),
(1, 'Science Fiction'),
(3, 'Technology');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('LIBRARIAN','USER') DEFAULT 'USER',
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `full_name`, `password`, `role`, `username`) VALUES
(1, 'admin1@example.com', 'Admin One', 'hashed_password1', 'LIBRARIAN', 'admin1'),
(2, 'admin2@example.com', 'Admin Two', 'hashed_password2', 'LIBRARIAN', 'admin2'),
(3, 'user1@example.com', 'User One', 'hashed_password3', 'USER', 'user1'),
(4, 'user2@example.com', 'User Two', 'hashed_password4', 'USER', 'user2'),
(5, 'user3@example.com', 'User Three', 'hashed_password5', 'USER', 'user3'),
(6, 'user4@example.com', 'User Four', 'hashed_password6', 'USER', 'user4'),
(7, 'user5@example.com', 'User Five', 'hashed_password7', 'USER', 'user5'),
(8, 'user6@example.com', 'User Six', 'hashed_password8', 'USER', 'user6'),
(9, 'user7@example.com', 'User Seven', 'hashed_password9', 'USER', 'user7'),
(10, 'user8@example.com', 'User Eight', 'hashed_password10', 'USER', 'user8');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKleqa3hhc0uhfvurq6mil47xk0` (`category_id`);

--
-- Index pour la table `borrow_records`
--
ALTER TABLE `borrow_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9ep13xg9kn8vo3w0ntvd08tco` (`book_id`),
  ADD KEY `FKe5k0iaamaypstfhuluoa40yom` (`user_id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKt8o6pivur7nn124jehx7cygw5` (`name`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `borrow_records`
--
ALTER TABLE `borrow_records`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `FKleqa3hhc0uhfvurq6mil47xk0` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `borrow_records`
--
ALTER TABLE `borrow_records`
  ADD CONSTRAINT `FK9ep13xg9kn8vo3w0ntvd08tco` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `FKe5k0iaamaypstfhuluoa40yom` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
