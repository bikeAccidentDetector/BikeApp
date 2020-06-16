-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2020 at 06:11 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bike`
--

-- --------------------------------------------------------

--
-- Table structure for table `sop_config`
--

CREATE TABLE `sop_config` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstNumber` text NOT NULL,
  `lastNumber` text NOT NULL,
  `hospitalName` text NOT NULL,
  `hospitalNumber` text NOT NULL,
  `addresss` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sop_config`
--

INSERT INTO `sop_config` (`id`, `email`, `firstNumber`, `lastNumber`, `hospitalName`, `hospitalNumber`, `addresss`) VALUES
(3, 'dey1800@gmail.com', '08017718974', '4654654654', 'Ruby hospital', '5465465435', '50B  BENI BANERJEE AVENUE, KOLKATA - 700031');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `token` text NOT NULL,
  `verifyCode` varchar(255) NOT NULL DEFAULT '0',
  `createTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `verified`, `token`, `verifyCode`, `createTime`) VALUES
(20, 'JOY', 'DEY', 'dey1800@gmail.com', '12345', 1, '5ee793d028602', '0', '2020-06-15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sop_config`
--
ALTER TABLE `sop_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sop_config`
--
ALTER TABLE `sop_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
