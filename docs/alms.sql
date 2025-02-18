-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 18 fév. 2025 à 18:25
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `alms`
--

-- --------------------------------------------------------

--
-- Structure de la table `books`
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

--
-- Déchargement des données de la table `books`
--

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
(10, 'Leonardo da Vinci', 4, 'book01.jpg', 'Art and science.', '978-8899001122', 'Codex Leicester', 10),
(11, 'J.K. Rowling', 15, 'book11.jpg', 'Fantasy novel about a young wizard.', '978-1234567891', 'Harry Potter and the Sorcerer\'s Stone', 2),
(12, 'George Orwell', 10, 'book12.jpeg', 'A dystopian novel on totalitarianism.', '978-2233445567', '1984', 1),
(13, 'Haruki Murakami', 7, 'book13.jpeg', 'A surreal novel about loneliness.', '978-3344556678', 'Kafka on the Shore', 3),
(14, 'Mark Zuckerberg', 5, 'book14.jpg', 'The story behind Facebook.', '978-4455667789', 'The Facebook Effect', 4),
(15, 'Stephen Hawking', 9, 'book15.jpg', 'A journey through space and time.', '978-5566778890', 'A Brief History of Time', 8),
(16, 'Malcolm Gladwell', 6, 'book16.jpg', 'Exploring the factors that make people successful.', '978-6677889901', 'Outliers', 5),
(17, 'Dan Brown', 8, 'book17.jpg', 'A thriller about codes and symbols.', '978-7788990012', 'The Da Vinci Code', 7),
(18, 'Agatha Christie', 12, 'book18.jpg', 'A classic mystery novel.', '978-8899001123', 'Murder on the Orient Express', 6),
(19, 'F. Scott Fitzgerald', 5, 'book19.jpeg', 'A novel about the American Dream.', '978-1122334456', 'The Great Gatsby', 10),
(20, 'Homer', 10, 'book20.jpeg', 'An ancient epic about the Trojan War.', '978-2233445568', 'The Iliad', 9);

-- --------------------------------------------------------

--
-- Structure de la table `borrow_records`
--

CREATE TABLE `borrow_records` (
  `id` bigint(20) NOT NULL,
  `borrow_date` datetime(6) DEFAULT NULL,
  `return_date` datetime(6) DEFAULT NULL,
  `status` enum('ALLOWED','REJECTED','UNDECIDED') DEFAULT NULL,
  `book_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `borrow_records`
--

INSERT INTO `borrow_records` (`id`, `borrow_date`, `return_date`, `status`, `book_id`, `user_id`) VALUES
(1, '2024-01-10 00:00:00.000000', '2024-01-20 00:00:00.000000', 'ALLOWED', 1, 3),
(2, '2024-02-05 00:00:00.000000', '2024-02-15 00:00:00.000000', 'ALLOWED', 2, 4),
(3, '2024-03-12 00:00:00.000000', '2024-03-22 00:00:00.000000', 'ALLOWED', 3, 5),
(4, '2024-04-08 00:00:00.000000', '2024-04-18 00:00:00.000000', 'ALLOWED', 4, 6),
(5, '2024-05-15 00:00:00.000000', '2024-05-25 00:00:00.000000', 'ALLOWED', 5, 7),
(6, '2024-06-01 00:00:00.000000', '2024-06-11 00:00:00.000000', 'ALLOWED', 6, 8),
(7, '2024-07-07 00:00:00.000000', '2024-07-17 00:00:00.000000', 'ALLOWED', 7, 9),
(8, '2024-08-14 00:00:00.000000', '2024-08-24 00:00:00.000000', 'ALLOWED', 8, 10),
(9, '2024-09-20 00:00:00.000000', '2024-09-30 00:00:00.000000', 'REJECTED', 9, 3),
(10, '2024-10-05 00:00:00.000000', '2024-10-15 00:00:00.000000', 'UNDECIDED', 10, 4);

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
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(10, 'user8@example.com', 'User Eight', 'hashed_password10', 'USER', 'user8'),
(11, 'bgadaokd122o@gmail.com', NULL, '$2a$10$biecZWlkI19Wkeos.oM0yu2okTQRydjdjK9b6C0E/2mtN9zamxJ1K', 'USER', 'dada122'),
(12, 'bgadaokd1232o@gmail.com', NULL, '$2a$10$KP7chWrS56.jpPcvV1T9EuKAMV.ZkNva/I5MAArcmXHCnzGIIMFhW', 'USER', 'dada1232'),
(16, 'redux@gmail.com', NULL, '$2a$10$Bs8kzUHD8vkFbl39Nc3.SO.o32RNvLVQaTh8GU/q7FTL7CKPT02sC', 'USER', 'redux-1'),
(17, 'redux1@gmail.com', NULL, '$2a$10$rUMx7Yz8E8OyV9m8U58Ef.KbBuj2t4IbwLvl5gJNfY3NRvFkiXsl.', 'USER', 'redux-11'),
(19, 'redux12@gmail.com', NULL, '$2a$10$JoNxskR8blQcAvkQbahQ1eiy.uB0Qs.1hsW8KGRQxiFljRs5oAVMG', 'USER', 'redux-121'),
(21, 'redux1212@gmail.com', NULL, '$2a$10$DGio9k96rF48IRaD/yz5I./Jeqm2wW.nSrtOp95uSm72qxXIlfOW.', 'USER', 'reda1'),
(22, 'bganoutre52@gmail.com', NULL, '$2a$10$sv6sZl7GsUSFx9vpX3b4ee5QMmFeNnwXmrerwJQo3Hm6Xst0MYNue', 'USER', 'redux'),
(24, 'redux121242@gmail.com', NULL, '$2a$10$lZcqY9w1vbZuJd37f6c.hu4K2Tzxm3bwP.6i3Yx1jIf1HsHVWNxmC', 'USER', 'reda131'),
(26, 'bgan312241@gmail.com', NULL, '$2a$10$oGd/7ia2amfMo2E7R.HdvOX.gWz6FHzIP8CzM6eyUHABEDcaqcs9q', 'USER', 'abdella');

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
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
