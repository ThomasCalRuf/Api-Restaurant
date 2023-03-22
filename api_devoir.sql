-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 22 mars 2023 à 14:16
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `api devoir`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pincode` int NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `pincode`, `created_at`, `modified_at`) VALUES
(1, 1234, '2023-03-22 09:04:46', '2023-03-22 09:04:46');

-- --------------------------------------------------------

--
-- Structure de la table `restauranttables`
--

DROP TABLE IF EXISTS `restauranttables`;
CREATE TABLE IF NOT EXISTS `restauranttables` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `modified_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `restauranttables`
--

INSERT INTO `restauranttables` (`id`, `name`, `created_at`, `modified_at`) VALUES
(1, 'Fraise', '2023-03-21 09:11:38', '2023-03-21 09:11:38'),
(2, 'Framboise', '2023-03-21 10:05:27', '2023-03-21 10:05:27'),
(3, 'Banane', '2023-03-21 10:09:29', '2023-03-21 10:09:29'),
(4, 'Cerise', '2023-03-21 10:10:33', '2023-03-21 10:10:33'),
(5, 'Abricot', '2023-03-21 10:17:29', '2023-03-21 10:17:29'),
(6, 'Kiwi', '2023-03-21 10:45:24', '2023-03-21 10:45:24'),
(7, 'Poire', '2023-03-21 10:56:44', '2023-03-21 10:56:44');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `shiftType` int NOT NULL,
  `shiftClosed` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `created_at`, `modified_at`, `shiftType`, `shiftClosed`) VALUES
(1, '2023-03-08 15:53:45', '2023-03-08 15:53:45', 123, 0),
(4, '2023-03-19 22:37:53', '2023-03-19 22:37:53', 15, 0),
(3, '2023-03-19 15:45:38', '2023-03-19 15:45:38', 15, 0),
(5, '2023-03-19 22:39:05', '2023-03-19 22:39:05', 15, 0),
(6, '2023-03-19 22:40:57', '2023-03-19 22:40:57', 15, 0),
(7, '2023-03-19 22:45:03', '2023-03-19 22:45:03', 15, 0),
(8, '2023-03-19 22:46:55', '2023-03-19 22:46:55', 15, 0),
(9, '2023-03-19 22:47:30', '2023-03-19 22:47:30', 15, 0),
(10, '2023-03-19 22:48:09', '2023-03-19 22:48:09', 15, 0),
(11, '2023-03-19 22:48:32', '2023-03-20 22:13:45', 50, 1),
(12, '2023-03-20 09:57:43', '2023-03-20 22:10:41', 50, 1),
(13, '2023-03-21 14:34:23', '2023-03-21 14:34:23', 8, 0),
(14, '2023-03-21 15:19:39', '2023-03-21 15:19:39', 8, 0),
(15, '2023-03-21 15:34:31', '2023-03-21 15:34:31', 8, 0);

-- --------------------------------------------------------

--
-- Structure de la table `serviceusers`
--

DROP TABLE IF EXISTS `serviceusers`;
CREATE TABLE IF NOT EXISTS `serviceusers` (
  `id_service` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  KEY `id_service` (`id_service`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `serviceusers`
--

INSERT INTO `serviceusers` (`id_service`, `id_user`) VALUES
(13, 1),
(11, 3),
(11, 2),
(11, 1),
(13, 5),
(12, 5),
(14, 5),
(14, 6),
(14, 7),
(15, 5),
(15, 6),
(15, 7);

-- --------------------------------------------------------

--
-- Structure de la table `tabletips`
--

DROP TABLE IF EXISTS `tabletips`;
CREATE TABLE IF NOT EXISTS `tabletips` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `tips` int DEFAULT NULL,
  `id_restaurantTable` int DEFAULT NULL,
  `id_service` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_restaurantTable` (`id_restaurantTable`),
  KEY `id_service` (`id_service`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `tabletips`
--

INSERT INTO `tabletips` (`id`, `created_at`, `modified_at`, `tips`, `id_restaurantTable`, `id_service`) VALUES
(1, '2023-03-21 09:11:38', '2023-03-21 10:53:16', 2, 1, 9),
(2, '2023-03-21 09:14:17', '2023-03-21 10:58:23', 2, 1, 9),
(5, '2023-03-21 14:06:07', '2023-03-21 14:06:07', 5, 6, 11),
(4, '2023-03-21 10:45:24', '2023-03-21 10:45:24', 5, 6, 9),
(6, '2023-03-21 14:06:11', '2023-03-21 14:06:11', 8, 6, 11),
(7, '2023-03-21 14:06:15', '2023-03-21 14:06:15', 3, 6, 11),
(8, '2023-03-21 15:34:46', '2023-03-21 15:34:46', 3, 6, 14),
(9, '2023-03-21 15:34:49', '2023-03-21 15:34:49', 5, 6, 14),
(10, '2023-03-21 15:34:51', '2023-03-21 15:34:51', 5, 6, 14),
(11, '2023-03-21 15:34:52', '2023-03-21 15:34:52', 5, 6, 14),
(12, '2023-03-21 15:34:55', '2023-03-21 15:34:55', 7, 6, 14);

-- --------------------------------------------------------

--
-- Structure de la table `tipspayments`
--

DROP TABLE IF EXISTS `tipspayments`;
CREATE TABLE IF NOT EXISTS `tipspayments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `tipspayments`
--

INSERT INTO `tipspayments` (`id`, `created_at`, `modified_at`, `amount`, `id_user`) VALUES
(1, '2023-03-19 21:33:05', '2023-03-21 15:43:27', 8, 5),
(2, '2023-03-20 09:57:01', '2023-03-21 15:43:27', 8, 6),
(3, '2023-03-21 10:34:19', '2023-03-21 15:43:27', 8, 7),
(4, '2023-03-22 09:36:20', '2023-03-22 09:36:20', 0, 8),
(5, '2023-03-22 09:36:22', '2023-03-22 09:36:22', 0, 9);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `firstname` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `created_at`, `modified_at`, `firstname`, `lastname`, `status`, `active`) VALUES
(1, '2023-03-19 21:19:14', '2023-03-19 21:19:14', 'Thomas', 'Calvete Ruffier', 0, 0),
(2, '2023-03-19 21:28:43', '2023-03-20 21:24:46', 'Anonyme', '', 0, 0),
(3, '2023-03-19 21:31:38', '2023-03-19 21:31:38', 'Thomas', 'Calvete Ruffier', 0, 0),
(4, '2023-03-19 21:32:37', '2023-03-19 21:32:37', 'Samy', 'Kebly', 0, 0),
(5, '2023-03-19 21:33:05', '2023-03-19 21:33:05', 'Killian', 'Boucher', 0, 0),
(6, '2023-03-20 09:57:01', '2023-03-20 09:57:01', 'Leo', 'TRAN', 1, 0),
(7, '2023-03-21 10:34:19', '2023-03-21 10:34:19', 'Loic', 'Aviez', 1, 0),
(8, '2023-03-22 09:36:20', '2023-03-22 09:36:20', 'Jules', 'Gaborit', 1, 1),
(9, '2023-03-22 09:36:22', '2023-03-22 09:36:22', 'Raphael', 'Alcantara', 1, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
