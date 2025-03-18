-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Mar 05, 2025 at 09:15 PM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ALMS`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `copies` int NOT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `description` text,
  `isbn` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `author`, `copies`, `cover`, `description`, `isbn`, `title`, `category_id`) VALUES
(11, 'Phil Christie', 50, '1b5d49dc-4ca4-4c6e-a595-7102855d62bb.jpg', 'Aseo the Tarnished’s exploration...', '9781975391140', 'Elden Ring', 1),
(13, 'Rachael Lippincott', 10, 'b5b25686-c860-48d7-91e4-9cf559feb4c3.jpg', 'Rachael Lippincott is the coauthor...', '9786-5881-310-84', 'All This Time', 1),
(17, 'Robert Lee', 7, 'f6cb2684-67fb-4a06-aa99-7d53eede5b5e.jpg', 'A detective uncovers...', '978-5678901234', 'Shadows in the Fog', 4),
(18, 'Laura Adams', 2, '6678c937-2491-4ff9-92ed-e5cb7fca09f0.jpg', 'The life story of...', '978-2468135790', 'Unsung Hero', 2),
(25, 'Emily A. Vander Veer', 400, 'ed1c4d55-ef17-4613-9d1f-4928bbdc52a5.51k+0tuX4BL._AC_UF1000,1000_QL80_.jpg', 'Coding with JavaScript...', '978-0764506338', 'JavaScript For Dummies 3rd Edition', 5),
(26, 'Janet Valade', 50, '3ce38dfe-bba0-4c01-a588-781fa85c8add.618ziOwIL1L._AC_UF1000,1000_QL80_.jpg', NULL, '978-0764541667', 'PHP 5 For Dummies', 5);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Adventures'),
(5, 'Fiction'),
(4, 'Mystery'),
(2, 'Non-Fiction'),
(3, 'Science Fiction');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKleqa3hhc0uhfvurq6mil47xk0` (`category_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKt8o6pivur7nn124jehx7cygw5` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `FKleqa3hhc0uhfvurq6mil47xk0` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
