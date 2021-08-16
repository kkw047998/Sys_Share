-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 16, 2021 at 11:07 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `systems`
--

-- --------------------------------------------------------

--
-- Table structure for table `actionlog`
--

CREATE TABLE `actionlog` (
  `id` int(11) NOT NULL,
  `system_l` varchar(20) NOT NULL,
  `action_l` varchar(200) NOT NULL,
  `userid` varchar(30) NOT NULL,
  `date` varchar(15) NOT NULL,
  `time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `app_form`
--

CREATE TABLE `app_form` (
  `id` int(11) NOT NULL,
  `app_id` varchar(50) NOT NULL,
  `st_date` date NOT NULL,
  `ed_date` date NOT NULL,
  `st_time` time NOT NULL,
  `ed_time` time NOT NULL,
  `reason` varchar(150) NOT NULL,
  `leave_type` varchar(50) NOT NULL,
  `sign_code` longtext NOT NULL,
  `app_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `portal_admin`
--

CREATE TABLE `portal_admin` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `portal_components`
--

CREATE TABLE `portal_components` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `href` text DEFAULT NULL,
  `permission` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'enable',
  `icon` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `portal_ticket`
--

CREATE TABLE `portal_ticket` (
  `id` int(11) NOT NULL,
  `record_id` varchar(400) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `record_status` varchar(50) DEFAULT '',
  `rep_date` date DEFAULT NULL,
  `rep_time` time DEFAULT NULL,
  `rep_by_id` varchar(100) DEFAULT '',
  `rep_by_name` varchar(100) DEFAULT '',
  `rep_type` varchar(100) DEFAULT '' COMMENT 'handler/applicant',
  `rep_grp` varchar(300) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `request_portal`
--

CREATE TABLE `request_portal` (
  `item_id` int(11) NOT NULL,
  `ref_id` int(11) NOT NULL,
  `period` varchar(10) NOT NULL,
  `Requester` varchar(30) DEFAULT NULL,
  `Req_Name` varchar(30) DEFAULT '',
  `Req_Mail` varchar(40) DEFAULT '',
  `Request_for` varchar(15) DEFAULT '',
  `Description` varchar(250) DEFAULT '',
  `Due_date` date DEFAULT NULL,
  `Due_time` varchar(10) DEFAULT NULL,
  `Location` varchar(150) DEFAULT '',
  `Category` varchar(15) DEFAULT '',
  `Remarks` varchar(1000) DEFAULT '',
  `img` longblob DEFAULT NULL,
  `imgstat` varchar(10) DEFAULT 'false',
  `pdf_path` varchar(50) DEFAULT '',
  `Status` varchar(30) DEFAULT 'Not Started',
  `Complete_date` date DEFAULT NULL,
  `Complete_time` time(1) DEFAULT NULL,
  `Handler` varchar(120) DEFAULT '',
  `Creation_dt` varchar(20) DEFAULT NULL,
  `Completed_dt` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `router_item`
--

CREATE TABLE `router_item` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `level` int(11) NOT NULL,
  `router_item` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userlist`
--

CREATE TABLE `userlist` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `Identity` varchar(500) DEFAULT NULL,
  `Department` varchar(250) DEFAULT NULL,
  `Dept_title` varchar(250) DEFAULT NULL,
  `Title_others` varchar(50) DEFAULT NULL,
  `Mail` varchar(50) DEFAULT NULL,
  `signature` longtext DEFAULT NULL,
  `signed` varchar(10) DEFAULT 'false',
  `sign_code` mediumtext DEFAULT NULL,
  `portal_level` int(11) DEFAULT 1,
  `proc_level` int(11) DEFAULT 0,
  `inv_lv` int(11) DEFAULT 0,
  `sub_lv` int(11) DEFAULT 0,
  `system_stat` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `usertokenfcmweb`
--

CREATE TABLE `usertokenfcmweb` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `token` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actionlog`
--
ALTER TABLE `actionlog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_form`
--
ALTER TABLE `app_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portal_admin`
--
ALTER TABLE `portal_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portal_components`
--
ALTER TABLE `portal_components`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portal_ticket`
--
ALTER TABLE `portal_ticket`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `request_portal`
--
ALTER TABLE `request_portal`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `router_item`
--
ALTER TABLE `router_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userlist`
--
ALTER TABLE `userlist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `usertokenfcmweb`
--
ALTER TABLE `usertokenfcmweb`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actionlog`
--
ALTER TABLE `actionlog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_form`
--
ALTER TABLE `app_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portal_admin`
--
ALTER TABLE `portal_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portal_components`
--
ALTER TABLE `portal_components`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `portal_ticket`
--
ALTER TABLE `portal_ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `request_portal`
--
ALTER TABLE `request_portal`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `router_item`
--
ALTER TABLE `router_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userlist`
--
ALTER TABLE `userlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usertokenfcmweb`
--
ALTER TABLE `usertokenfcmweb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
